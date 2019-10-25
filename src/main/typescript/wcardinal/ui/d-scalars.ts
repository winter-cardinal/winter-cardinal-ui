/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "./d-coordinate";
import { DScalarExpression } from "./d-scalar-expression";
import { DScalarFunction } from "./d-scalar-function";
import { DScalarFunctions } from "./d-scalar-functions";
import { utilIsFunction } from "./util/util-is-function";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";

export const toDScalarFunction = (
	given: DCoordinate | undefined, isPosition: boolean
): DScalarFunction | null => {
	if( given == null || utilIsNumber( given ) ) {
		return null;
	} else if( utilIsString( given ) ) {
		if( isPosition ) {
			switch( given ) {
			case "center":
				return DScalarFunctions.POSITION.CENTER;
			case "padding":
				return DScalarFunctions.POSITION.PADDING;
			}
		} else {
			switch( given ) {
			case "100%":
			case "maximized":
				return DScalarFunctions.SIZE.MAXIMIZED;
			case "padding":
				return DScalarFunctions.SIZE.PADDING;
			}
		}

		const scalarExpression = new DScalarExpression( given );
		return ( parent: number, self: number, padding: number, current: number ): number => {
			return scalarExpression.calculate( parent, self, padding, current );
		};
	} else if( utilIsFunction( given ) ) {
		return given;
	} else {
		const scalar = given;
		return ( parent: number, self: number, padding: number, current: number ): number => {
			return scalar.calculate( parent, self, padding, current );
		};
	}
};

export interface DScalarSet {
	x?: DScalarFunction | null;
	y?: DScalarFunction | null;
	width?: DScalarFunction | null;
	height?: DScalarFunction | null;
}
