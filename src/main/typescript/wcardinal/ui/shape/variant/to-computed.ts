import { isFunction } from "../../util/is-function";
import { isNumber } from "../../util/is-number";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";

export const toComputed = ( index: number, value: EShapeLineOfAnyValue, def: number ): number => {
	if( isNumber( value ) ) {
		return value;
	} else if( isFunction( value ) ) {
		return value( index );
	} else if( value ) {
		return value[ index % value.length ];
	}
	return def;
};
