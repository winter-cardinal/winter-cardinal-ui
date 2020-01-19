import { utilIsFunction } from "../../util/util-is-function";
import { utilIsNumber } from "../../util/util-is-number";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";

export const utilToComputed = ( index: number, value: EShapeLineOfAnyValue, def: number ): number => {
	if( utilIsNumber( value ) ) {
		return value;
	} else if( utilIsFunction( value ) ) {
		return value( index );
	} else if( value ) {
		return value[ index % value.length ];
	}
	return def;
};
