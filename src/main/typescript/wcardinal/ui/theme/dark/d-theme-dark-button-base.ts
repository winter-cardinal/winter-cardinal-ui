/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonBase } from "../../d-button-base";
import { DCoordinateSize } from "../../d-coordinate";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

export class DThemeDarkButtonBase extends DThemeDarkImageBase implements DThemeButtonBase {
	COLOR = 0x383838;

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return UtilRgb.blend( 0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_ALPHA );
		}
		if( DBaseStates.isActive( state ) ) {
			return UtilRgb.blend( this.COLOR, this.getColor( DBaseState.ACTIVE ), DThemeDarkConstants.ACTIVE_ALPHA );
		}
		if( DBaseStates.isPressed( state ) ) {
			return UtilRgb.blend( this.COLOR, this.getColor( DBaseState.PRESSED ), DThemeDarkConstants.PRESSED_ALPHA );
		}
		if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return UtilRgb.blend( this.COLOR, this.getColor( DBaseState.HOVERED ), DThemeDarkConstants.FOCUSED_ALPHA );
		}
		return this.COLOR;
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) ) {
			return UtilRgb.blend( 0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_TEXT_ALPHA );
		}
		return super.getColor( state );
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return UtilRgb.blend( 0x000000, 0xFFFFFF, DThemeDarkConstants.DISABLED_ALPHA );
		}
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return 100;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	isToggle(): boolean {
		return false;
	}
}
