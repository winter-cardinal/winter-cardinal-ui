/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteSliders } from "./d-theme-white-sliders";

export class DThemeWhiteSliderTrack<VALUE = unknown>
	extends DThemeWhiteButton<VALUE>
	implements DThemeSliderTrack<VALUE> {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteSliders.getBackgroundColor(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}
}
