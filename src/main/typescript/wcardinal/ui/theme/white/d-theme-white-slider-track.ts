/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteSliders } from "./d-theme-white-sliders";

export class DThemeWhiteSliderTrack extends DThemeWhiteButton implements DThemeSliderTrack {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeWhiteSliders.getBackgroundColor( state );
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}
}
