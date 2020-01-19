import { utilIsNumber } from "../../util/util-is-number";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";

export const utilIsStatic = ( value: EShapeLineOfAnyValue ): boolean => {
	return utilIsNumber( value ) || value == null;
};
