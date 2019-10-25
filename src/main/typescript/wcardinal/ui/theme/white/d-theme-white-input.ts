/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinate } from "../../d-coordinate";
import { DThemeInput } from "../../d-input";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

const editingValidator = (): unknown => {
	return null;
};

const editingUnformatter = ( text: string ): string => {
	return text;
};

export class DThemeWhiteInput extends DThemeWhiteImageBase implements DThemeInput {
	COLOR = 0xffffff;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, 0.017 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) ) {
			return null;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return this.COLOR;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0xe5e5e5;
	}

	getOutlineColor( state: DBaseState ): number | null {
		if( DBaseStates.isInvalid( state ) ) {
			return DThemeWhiteConstants.INVALID_COLOR;
		}
		return super.getOutlineColor( state );
	}

	getHeight(): DCoordinate {
		return this.getLineHeight();
	}

	getWidth(): DCoordinate {
		return 100;
	}

	getPlaceholder(): string {
		return "";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getEditingFormatter(): ( value: any, caller: any ) => string {
		return this.getTextFormatter();
	}

	getEditingUnformatter(): ( text: string, caller: any ) => any {
		return editingUnformatter;
	}

	getEditingValidator(): ( value: any, caller: any ) => unknown {
		return editingValidator;
	}
}
