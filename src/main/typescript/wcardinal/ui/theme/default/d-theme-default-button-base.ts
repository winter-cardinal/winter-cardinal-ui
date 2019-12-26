/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonBase } from "../../d-button-base";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDefaultImageBase } from "./d-theme-default-image-base";

export class DThemeDefaultButtonBase extends DThemeDefaultImageBase implements DThemeButtonBase {

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getButtonBaseDisabledBackgroundColor();
		} else if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getButtonBaseActiveBackgroundColor();
		} else if( DBaseStates.isPressed( state ) ) {
			return this.dThemeConfiguration.getButtonBasePressedBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getButtonBaseFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getButtonBaseBackgroundColor();
		}
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) || ! DBaseStates.isActive( state ) ) {
			return super.getColor( state );
		} else {
			return this.dThemeConfiguration.getButtonBaseColor();
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || ! DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getButtonBaseDisabledBorderColor();
		} else {
			return this.dThemeConfiguration.getButtonBaseBorderColor();
		}
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
