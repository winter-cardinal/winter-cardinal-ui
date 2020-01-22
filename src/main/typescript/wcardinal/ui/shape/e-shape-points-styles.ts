import { isNumber } from "../util/is-number";
import { isString } from "../util/is-string";
import { EShapePointsStyle } from "./e-shape-points-style";

export type EShapePointsStyleOption = EShapePointsStyle | keyof typeof EShapePointsStyle |
	Array<keyof typeof EShapePointsStyle>;

export class EShapePointsStyles {
	static from( style: EShapePointsStyleOption ): EShapePointsStyle {
		if( isString( style ) ) {
			return EShapePointsStyle[ style ];
		} else if( isNumber( style ) ) {
			return style;
		} else {
			let result = EShapePointsStyle.NONE;
			for( let i = 0, imax = style.length; i < imax; ++i ) {
				result |= EShapePointsStyle[ style[ i ] ];
			}
			return result;
		}
	}
}
