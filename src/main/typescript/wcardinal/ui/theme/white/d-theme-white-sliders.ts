import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteSliders {
	protected static BACKGROUND_COLOR_ACTIVE = DThemeWhiteConstants.HIGHLIGHT_COLOR;
	protected static BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken( DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE, 0.1 );
	protected static BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken( DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE, 0.2 );
	protected static BACKGROUND_COLOR = DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	protected static BACKGROUND_COLOR_HOVERED = UtilRgb.darken( DThemeWhiteSliders.BACKGROUND_COLOR, 0.1 );
	protected static BACKGROUND_COLOR_PRESSED = UtilRgb.darken( DThemeWhiteSliders.BACKGROUND_COLOR, 0.2 );
	protected static BACKGROUND_COLOR_DISABLED = UtilRgb.blend( DThemeWhiteSliders.BACKGROUND_COLOR,
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.5 );

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
