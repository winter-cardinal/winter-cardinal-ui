import { utilIsNumber } from "../util/util-is-number";
import { utilIsString } from "../util/util-is-string";
import { EShapePointsStyle } from "./e-shape-points";

export type EShapePointsStyleOption = EShapePointsStyle | keyof typeof EShapePointsStyle |
	Array<keyof typeof EShapePointsStyle>;

export class EShapePointsStyles {
	static from( style: EShapePointsStyleOption ): EShapePointsStyle {
		if( utilIsString( style ) ) {
			return EShapePointsStyle[ style ];
		} else if( utilIsNumber( style ) ) {
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
