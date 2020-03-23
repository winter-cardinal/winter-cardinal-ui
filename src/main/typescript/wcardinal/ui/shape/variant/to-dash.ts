import { IPoint } from "pixi.js";
import { EShapePointsStyle } from "../e-shape-points-style";

export const toDash = (
	length: number, strokeWidth: number,
	style: EShapePointsStyle, result: IPoint
): IPoint => {
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
};
