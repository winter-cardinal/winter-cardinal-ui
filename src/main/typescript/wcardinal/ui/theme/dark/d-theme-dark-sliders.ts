import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkSliders {
	protected static COLOR_ACTIVE = DThemeDarkConstants.HIGHLIGHT_COLOR;
	protected static COLOR_ACTIVE_HOVERED = UtilRgb.darken( DThemeDarkSliders.COLOR_ACTIVE, 0.1 );
	protected static COLOR_ACTIVE_PRESSED = UtilRgb.darken( DThemeDarkSliders.COLOR_ACTIVE, 0.2 );
	protected static COLOR_NON_ACTIVE = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	protected static COLOR_NON_ACTIVE_HOVERED = UtilRgb.darken( DThemeDarkSliders.COLOR_NON_ACTIVE, 0.1 );
	protected static COLOR_NON_ACTIVE_PRESSED = UtilRgb.darken( DThemeDarkSliders.COLOR_NON_ACTIVE, 0.2 );
	protected static COLOR_NON_ACTIVE_DISABLED = UtilRgb.blend( DThemeDarkSliders.COLOR_NON_ACTIVE, 0x1f1f1f, 0.5 );

	static getBackgroundColor( state: DBaseState ): number | null {
		if ( DBaseStates.isActive( state ) ) {
			if ( DBaseStates.isDisabled( state ) ) {
				return this.COLOR_NON_ACTIVE;
			} else if( DBaseStates.isPressed( state ) && DBaseStates.isHovered( state ) ) {
				return this.COLOR_ACTIVE_PRESSED;
			} else if( DBaseStates.isPressed( state ) || DBaseStates.isHovered( state ) ) {
				return this.COLOR_ACTIVE_HOVERED;
			} else {
				return this.COLOR_ACTIVE;
			}
		} else {
			if ( DBaseStates.isDisabled( state ) ) {
				return this.COLOR_NON_ACTIVE_DISABLED;
			} else if( DBaseStates.isPressed( state ) && DBaseStates.isHovered( state ) ) {
				return this.COLOR_NON_ACTIVE_PRESSED;
			} else if( DBaseStates.isPressed( state ) || DBaseStates.isHovered( state ) ) {
				return this.COLOR_NON_ACTIVE_HOVERED;
			} else {
				return this.COLOR_NON_ACTIVE;
			}
		}
	}
}
