import { isNumber } from "../../util/is-number";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";

export const isStatic = ( value: EShapeLineOfAnyValue ): boolean => {
	return isNumber( value ) || value == null;
};
