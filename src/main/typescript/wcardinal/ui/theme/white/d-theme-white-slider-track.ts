/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteSliderTrack extends DThemeWhiteButton implements DThemeSliderTrack {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isActive( state ) ) {
			if (DBaseStates.isDisabled(state)) {
				return 0xaaaaaa;
			}
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else {
			if ( DBaseStates.isDisabled( state ) ) {
				return 0xe5e5e5; // blend( 0xffffff, 0xcccccc, 0.5 )
			}
			return 0xcccccc;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}
}
