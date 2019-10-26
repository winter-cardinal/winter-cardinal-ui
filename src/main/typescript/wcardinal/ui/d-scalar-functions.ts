/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "./d-coordinate";
import { DScalarExpression } from "./d-scalar-expression";
import { DScalarFunction } from "./d-scalar-function";
import { utilIsFunction } from "./util/util-is-function";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";

export class DScalarFunctions {
	static POSITION = {
		PADDING: ( p: number, s: number, d: number ) => d,
		CENTER: ( p: number, s: number ) => ( p - s ) * 0.5
	};

	static SIZE = {
		MAXIMIZED: ( p: number ) => p,
		PADDING: ( p: number, s: number, d: number ) => p - d
	};

	static position( coordinate: DCoordinate | undefined ): DScalarFunction | null {
		return this.from( coordinate, true );
	}

	static size( coordinate: DCoordinate | undefined ): DScalarFunction | null {
		return this.from( coordinate, false );
	}

	protected static from( coordinate: DCoordinate | undefined, isPosition: boolean ): DScalarFunction | null {
		if( coordinate == null || utilIsNumber( coordinate ) ) {
			return null;
		} else if( utilIsString( coordinate ) ) {
			if( isPosition ) {
				switch( coordinate ) {
				case "center":
					return DScalarFunctions.POSITION.CENTER;
				case "padding":
					return DScalarFunctions.POSITION.PADDING;
				}
			} else {
				switch( coordinate ) {
				case "100%":
				case "maximized":
					return DScalarFunctions.SIZE.MAXIMIZED;
				case "padding":
					return DScalarFunctions.SIZE.PADDING;
				}
			}

			const scalarExpression = new DScalarExpression( coordinate );
			return ( parent: number, self: number, padding: number, current: number ): number => {
				return scalarExpression.calculate( parent, self, padding, current );
			};
		} else if( utilIsFunction( coordinate ) ) {
			return coordinate;
		} else {
			const scalar = coordinate;
			return ( parent: number, self: number, padding: number, current: number ): number => {
				return scalar.calculate( parent, self, padding, current );
			};
		}
	}
}
