import { EShapeActionValue, EThemeShapeActionValue } from "../../shape/action/e-shape-action-value";
import { EShapeActionValueBase } from "../../shape/action/e-shape-action-value-base";
import { EShapeActionValueBlinkType } from "../../shape/action/e-shape-action-value-blink-type";
import { EShapeActionValueChangeColorTarget } from "../../shape/action/e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "../../shape/action/e-shape-action-value-change-color-type";
import { EShapeActionValueChangeTextType } from "../../shape/action/e-shape-action-value-change-text-type";
import { EShapeActionValueMiscType } from "../../shape/action/e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "../../shape/action/e-shape-action-value-on-input-action";
import { EShapeActionValueOpenType } from "../../shape/action/e-shape-action-value-open-type";
import { EShapeActionValueOpetyped } from "../../shape/action/e-shape-action-value-opetyped";
import { EShapeActionValueShowHideType } from "../../shape/action/e-shape-action-value-show-hide-type";
import { EShapeActionValueSubtyped } from "../../shape/action/e-shape-action-value-subtyped";
import { EShapeActionValueTransformMoveType } from "../../shape/action/e-shape-action-value-transform-move-type";
import { EShapeActionValueTransformResizeType } from "../../shape/action/e-shape-action-value-transform-resize-type";
import { EShapeActionValueTransformRotateType } from "../../shape/action/e-shape-action-value-transform-rotate-type";
import { EShapeActionValueTransformType } from "../../shape/action/e-shape-action-value-transform-type";
import { EShapeActionValueType } from "../../shape/action/e-shape-action-value-type";

export class EThemeDarkShapeActionValue implements EThemeShapeActionValue {
	toLabel( value: EShapeActionValue ): string {
		const type = value.type;
		if( value instanceof EShapeActionValueSubtyped ) {
			const subtype = value.subtype;
			if( value instanceof EShapeActionValueOpetyped ) {
				const result = this.toOpetypedLabel( type, subtype, value.opetype, value );
				if( result != null ) {
					return result;
				}
			} else {
				const result = this.toSubtypedLabel( type, subtype, value );
				if( result != null ) {
					return result;
				}
			}
		}
		return this.toTypedLabel( type, value );
	}

	protected toTypedLabel( type: EShapeActionValueType, value: EShapeActionValueBase ): string {
		return `${this.toTypeLabel( type )}: ${this.toConditionLabel( value.condition )}`;
	}

	protected toSubtypedLabel(
		type: EShapeActionValueType, subtype: number, value: EShapeActionValueSubtyped<any>
	): string | null {
		const typeLabel = this.toTypeLabel( type );
		switch( type ) {
		case EShapeActionValueType.SHOW_HIDE:
			return `${this.toShowHideTypeLabel( subtype )}`;
		case EShapeActionValueType.BLINK:
			return `${typeLabel}: ${this.toBlinkTypeLabel( subtype )}`;
		case EShapeActionValueType.CHANGE_COLOR:
			return `${typeLabel}: ${this.toChangeColorTypeLabel( subtype )}`;
		case EShapeActionValueType.MISC:
			return `${typeLabel}: ${this.toMiscTypeLabel( subtype )}`;
		}
		return null;
	}

	protected toOpetypedLabel(
		type: EShapeActionValueType, subtype: number, opetype: number, value: EShapeActionValueOpetyped<any, any>
	): string | null {
		switch( type ) {
		case EShapeActionValueType.TRANSFORM:
			const subtypeLabel = this.toTransformTypeLabel( subtype );
			switch( subtype ) {
			case EShapeActionValueTransformType.ROTATE:
				return `${subtypeLabel}: ${this.toTransformRotateTypeLabel( opetype )}`;
			case EShapeActionValueTransformType.MOVE:
				return `${subtypeLabel}: ${this.toTransformMoveTypeLabel( opetype )}`;
			case EShapeActionValueTransformType.RESIZE:
				return `${subtypeLabel}: ${this.toTransformResizeTypeLabel( opetype )}`;
			}
		}
		return null;
	}

	toTypeLabel( type: EShapeActionValueType ): string {
		switch( type ) {
		case EShapeActionValueType.SHOW_HIDE:
			return "Show / hide";
		case EShapeActionValueType.BLINK:
			return "Blink";
		case EShapeActionValueType.TRANSFORM:
			return "Transform";
		case EShapeActionValueType.OPEN:
			return "Open";
		case EShapeActionValueType.CHANGE_COLOR:
			return "Change color";
		case EShapeActionValueType.CHANGE_TEXT:
			return "Change text";
		case EShapeActionValueType.CHANGE_CURSOR:
			return "Change cursor";
		case EShapeActionValueType.EMIT_EVENT:
			return "Emit an event";
		case EShapeActionValueType.MISC:
			return "Misc.";
		}
		return "Unknown";
	}

	toConditionLabel( condition: string ): string {
		const l = 20;
		if( l < condition.length ) {
			return condition.substring( 0, l ) + "...";
		} else {
			return condition;
		}
	}

	toBlinkTypeLabel( type: EShapeActionValueBlinkType ): string {
		switch (type) {
		case EShapeActionValueBlinkType.VISIBILITY:
			return "Visibility";
		case EShapeActionValueBlinkType.BRIGHTEN:
			return "Brighten";
		case EShapeActionValueBlinkType.DARKEN:
			return "Darken";
		case EShapeActionValueBlinkType.OPACITY:
			return "Opacity";
		case EShapeActionValueBlinkType.COLOR_FILL:
			return "Fill";
		case EShapeActionValueBlinkType.COLOR_STROKE:
			return "Stroke";
		}
		return "Unknown";
	}

	toShowHideTypeLabel( type: EShapeActionValueShowHideType ): string {
		switch (type) {
		case EShapeActionValueShowHideType.SHOW:
			return "Show";
		case EShapeActionValueShowHideType.HIDE:
			return "Hide";
		}
		return "Unknown";
	}

	toTransformTypeLabel( type: EShapeActionValueTransformType ): string {
		switch (type) {
		case EShapeActionValueTransformType.RESIZE:
			return "Resize";
		case EShapeActionValueTransformType.MOVE:
			return "Move";
		case EShapeActionValueTransformType.ROTATE:
			return "Rotate";
		}
		return "Unknown";
	}

	toTransformRotateTypeLabel( type: EShapeActionValueTransformRotateType ): string {
		switch (type) {
		case EShapeActionValueTransformRotateType.RELATIVE:
			return "Relative";
		case EShapeActionValueTransformRotateType.ABSOLUTE:
			return "Absolute";
		}
		return "Unknown";
	}

	toTransformMoveTypeLabel( type: EShapeActionValueTransformMoveType ): string {
		switch (type) {
		case EShapeActionValueTransformMoveType.RELATIVE_X:
			return "Relative X";
		case EShapeActionValueTransformMoveType.RELATIVE_Y:
			return "Relative Y";
		case EShapeActionValueTransformMoveType.ABSOLUTE_X:
			return "Absolute X";
		case EShapeActionValueTransformMoveType.ABSOLUTE_Y:
			return "Absolute Y";
		case EShapeActionValueTransformMoveType.FORWARD_OR_BACKWARD:
			return "Forward / backward";
		case EShapeActionValueTransformMoveType.LEFT_OR_RIGHT:
			return "Left / right";
		}
		return "Unknown";
	}

	toTransformResizeTypeLabel( type: EShapeActionValueTransformResizeType ): string {
		switch (type) {
		case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
			return "Height & width";
		case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
			return "Height & width (%)";
		case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
			return "Height";
		case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
			return "Height (%)";
		case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
			return "Width";
		case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
			return "Width (%)";
		}
		return "Unknown";
	}

	toChangeColorTypeLabel( type: EShapeActionValueChangeColorType ): string {
		switch (type) {
		case EShapeActionValueChangeColorType.FILL:
			return "Fill";
		case EShapeActionValueChangeColorType.STROKE:
			return "Stroke";
		case EShapeActionValueChangeColorType.FILL_AND_STROKE:
			return "Fill and stroke";
		case EShapeActionValueChangeColorType.TEXT:
			return "Text";
		case EShapeActionValueChangeColorType.TEXT_OUTLINE:
			return "Text outline";
		case EShapeActionValueChangeColorType.ALL:
			return "ALL";
		}
		return "Unknown";
	}

	toChangeColorTargetLabel( type: EShapeActionValueChangeColorTarget ): string {
		switch (type) {
		case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
			return "Color";
		case EShapeActionValueChangeColorTarget.COLOR:
			return "RGB";
		case EShapeActionValueChangeColorTarget.ALPHA:
			return "Alpha";
		case EShapeActionValueChangeColorTarget.CODE:
			return "Dynamic color";
		case EShapeActionValueChangeColorTarget.BRIGHTNESS:
			return "Brightness";
		}
		return "Unknown";
	}

	toChangeTextTypeLabel( type: EShapeActionValueChangeTextType ): string {
		switch( type ) {
		case EShapeActionValueChangeTextType.TEXT:
			return "Text";
		case EShapeActionValueChangeTextType.NUMBER:
			return "Number";
		}
		return "Unknown";
	}

	toOpenTypeLabel( type: EShapeActionValueOpenType ): string {
		switch (type) {
		case EShapeActionValueOpenType.FLOW:
			return "Flow";
		case EShapeActionValueOpenType.PAGE:
			return "Page (New window)";
		case EShapeActionValueOpenType.PAGE_INPLACE:
			return "Page (In-place)";
		case EShapeActionValueOpenType.DIALOG_TEXT:
			return "Dialog (Text)";
		case EShapeActionValueOpenType.DIALOG_INTEGER:
			return "Dialog (Integer)";
		case EShapeActionValueOpenType.DIALOG_REAL:
			return "Dialog (Real)";
		case EShapeActionValueOpenType.DIALOG_BOOLEAN:
			return "Dialog (Boolean)";
		}
		return "Unknown";
	}

	toMiscTypeLabel( type: EShapeActionValueMiscType ): string {
		switch( type ) {
		case EShapeActionValueMiscType.INPUT_TEXT:
			return "Input (Text)";
		case EShapeActionValueMiscType.INPUT_INTEGER:
			return "Input (Integer)";
		case EShapeActionValueMiscType.INPUT_REAL:
			return "Input (Real)";
		case EShapeActionValueMiscType.EMIT_EVENT:
			return this.toOnInputActionLabel( EShapeActionValueOnInputAction.EMIT_EVENT );
		case EShapeActionValueMiscType.WRITE_BOTH:
			return this.toOnInputActionLabel( EShapeActionValueOnInputAction.WRITE_BOTH );
		case EShapeActionValueMiscType.WRITE_LOCAL:
			return this.toOnInputActionLabel( EShapeActionValueOnInputAction.WRITE_LOCAL );
		case EShapeActionValueMiscType.WRITE_REMOTE:
			return this.toOnInputActionLabel( EShapeActionValueOnInputAction.WRITE_REMOTE );
		}
		return "Unknown";
	}

	toOnInputActionLabel( type: EShapeActionValueOnInputAction ): string {
		switch( type ) {
		case EShapeActionValueOnInputAction.EMIT_EVENT:
			return "Emit event";
		case EShapeActionValueOnInputAction.WRITE_BOTH:
			return "Write (Both)";
		case EShapeActionValueOnInputAction.WRITE_LOCAL:
			return "Write (Local)";
		case EShapeActionValueOnInputAction.WRITE_REMOTE:
			return "Write (Remote)";
		}
		return "Unknown";
	}
}
