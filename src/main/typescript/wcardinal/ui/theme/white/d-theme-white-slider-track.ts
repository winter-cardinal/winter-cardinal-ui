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
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		}
		return 0xCCCCCC;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getColor( state: DBaseState ): number {
		return 0x5F5F5F;
	}
}
