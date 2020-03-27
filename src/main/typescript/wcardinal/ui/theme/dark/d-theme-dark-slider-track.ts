/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkSliderTrack extends DThemeDarkButton implements DThemeSliderTrack {
	getBackgroundColor( state: DBaseState ): number | null {
		if ( DBaseStates.isActive( state ) ) {
			if ( DBaseStates.isDisabled( state ) ) {
				return 0x646464;
			}
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else {
			if ( DBaseStates.isDisabled( state ) ) {
				return 0x414141; // blend( 0x1f1f1f, 0x646464, 0.5 )
			}
			return 0x646464;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}
}
