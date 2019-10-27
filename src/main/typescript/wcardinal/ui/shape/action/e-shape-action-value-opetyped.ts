import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueSubtyped } from "./e-shape-action-value-subtyped";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export abstract class EShapeActionValueOpetyped<
	SUBTYPE extends number,
	OPETYPE extends number
> extends EShapeActionValueSubtyped<SUBTYPE> {
	readonly opetype: OPETYPE;

	constructor( type: EShapeActionValueType, condition: string, subtype: SUBTYPE, opetype: OPETYPE ) {
		super( type, condition, subtype );
		this.opetype = opetype;
	}

	isEquals( value: EShapeActionValue ): boolean {
		return (
			super.isEquals( value ) &&
			(value instanceof EShapeActionValueOpetyped) &&
			this.opetype === value.opetype
		);
	}

}
