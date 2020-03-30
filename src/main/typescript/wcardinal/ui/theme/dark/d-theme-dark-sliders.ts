import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkSliders {
	protected static BACKGROUND_COLOR_ACTIVE = DThemeDarkConstants.HIGHLIGHT_COLOR;
	protected static BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.1 );
	protected static BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.2 );
	protected static BACKGROUND_COLOR = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	protected static BACKGROUND_COLOR_HOVERED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR, 0.1 );
	protected static BACKGROUND_COLOR_PRESSED = UtilRgb.darken( DThemeDarkSliders.BACKGROUND_COLOR, 0.2 );
	protected static BACKGROUND_COLOR_DISABLED = UtilRgb.blend( DThemeDarkSliders.BACKGROUND_COLOR,
		DThemeDarkConstants.BACKGROUND_COLOR, 0.5 );

	static getBackgroundColor( state: DBaseState ): number | null {
		if ( DBaseStates.isActive( state ) ) {
			if ( DBaseStates.isDisabled( state ) ) {
				return this.BACKGROUND_COLOR;
			} else if( DBaseStates.isPressed( state ) && DBaseStates.isHovered( state ) ) {
				return this.BACKGROUND_COLOR_ACTIVE_PRESSED;
			} else if( DBaseStates.isPressed( state ) || DBaseStates.isHovered( state ) ) {
				return this.BACKGROUND_COLOR_ACTIVE_HOVERED;
			} else {
				return this.BACKGROUND_COLOR_ACTIVE;
			}
		} else {
			if ( DBaseStates.isDisabled( state ) ) {
				return this.BACKGROUND_COLOR_DISABLED;
			} else if( DBaseStates.isPressed( state ) && DBaseStates.isHovered( state ) ) {
				return this.BACKGROUND_COLOR_PRESSED;
			} else if( DBaseStates.isPressed( state ) || DBaseStates.isHovered( state ) ) {
				return this.BACKGROUND_COLOR_HOVERED;
			} else {
				return this.BACKGROUND_COLOR;
			}
		}
	}
}
