/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapePointsStyle } from "./e-shape-points";

export class EShapePointsStyleUploadeds {
	static toScaleInvariant( style: EShapePointsStyle ): number {
		const nonExpandingWidth = ( style & EShapePointsStyle.NON_EXPANDING_WIDTH ? 1 : 0 );
		const nonShrinkingWidth = ( style & EShapePointsStyle.NON_SHRINKING_WIDTH ? 2 : 0 );
		const nonScalingDotAndDash = ( style & EShapePointsStyle.NON_SCALING_DOT_AND_DASH ? 4 : 0 );
		if( style & EShapePointsStyle.NON_SOLID_MASK ) {
			return nonExpandingWidth | nonShrinkingWidth | nonScalingDotAndDash;
		} else {
			return nonExpandingWidth | nonShrinkingWidth;
		}
	}

	static toDash(
		length: number, strokeWidth: number, style: EShapePointsStyle, result: IPoint
	): IPoint {
		result.set( 2 * length, 0 );
		if( style & EShapePointsStyle.NON_SOLID_MASK ) {
			if( style & EShapePointsStyle.DOTTED ) {
				result.set( strokeWidth, strokeWidth );
			} else if( style & EShapePointsStyle.DOTTED_DENSELY ) {
				result.set( strokeWidth, strokeWidth * 0.5 );
			} else if( style & EShapePointsStyle.DOTTED_LOOSELY ) {
				result.set( strokeWidth, strokeWidth * 2 );
			} else if( style & EShapePointsStyle.DASHED ) {
				result.set( strokeWidth * 2, strokeWidth );
			} else if( style & EShapePointsStyle.DASHED_DENSELY ) {
				result.set( strokeWidth * 2, strokeWidth * 0.5 );
			} else if( style & EShapePointsStyle.DASHED_LOOSELY ) {
				result.set( strokeWidth * 2, strokeWidth * 2 );
			}
		}
		return result;
	}
}
