import { utilIsFunction } from "../../util/util-is-function";
import { utilIsNumber } from "../../util/util-is-number";

export type EShapeLineOfAnyValue = null | number | number[] | (( index: number ) => number);

export class EShapeLinesOfAny {
	static isStatic( value: EShapeLineOfAnyValue ): boolean {
		return utilIsNumber( value ) || value == null;
	}

	static toComputed( index: number, value: EShapeLineOfAnyValue, def: number ): number {
		if( utilIsNumber( value ) ) {
			return value;
		} else if( utilIsFunction( value ) ) {
			return value( index );
		} else if( value ) {
			return value[ index % value.length ];
		}
		return def;
	}
}
