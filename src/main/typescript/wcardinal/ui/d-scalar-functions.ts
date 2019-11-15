/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSizeNoAuto } from "./d-coordinate";
import { DScalarExpression } from "./d-scalar-expression";
import { DScalarFunction } from "./d-scalar-function";
import { utilIsFunction } from "./util/util-is-function";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";

const POSITION_CENTER = ( p: number, s: number ) => ( p - s ) * 0.5;
const POSITION_PADDING = ( p: number, s: number, d: number ) => d;
const SIZE_MAXIMIZED = ( p: number ) => p;
const SIZE_PADDING = ( p: number, s: number, d: number ) => p - d;

export class DScalarFunctions {
	static position( coordinate: DCoordinatePosition | undefined ): DScalarFunction | null {
		if( coordinate == null || utilIsNumber( coordinate ) ) {
			return null;
		} else if( utilIsString( coordinate ) ) {
			switch( coordinate ) {
			case "center":
			case "CENTER":
				return POSITION_CENTER;
			case "padding":
			case "PADDING":
				return POSITION_PADDING;
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

	static size( coordinate: DCoordinateSizeNoAuto | undefined ): DScalarFunction | null {
		if( coordinate == null || utilIsNumber( coordinate ) ) {
			return null;
		} else if( utilIsString( coordinate ) ) {
			switch( coordinate ) {
			case "100%":
			case "maximized":
			case "MAXIMIZED":
				return SIZE_MAXIMIZED;
			case "padding":
			case "PADDING":
				return SIZE_PADDING;
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
