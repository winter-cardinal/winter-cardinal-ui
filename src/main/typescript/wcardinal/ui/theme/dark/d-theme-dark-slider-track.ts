/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeSliderTrack } from "../../d-slider-track";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkSliders } from "./d-theme-dark-sliders";

export class DThemeDarkSliderTrack extends DThemeDarkButton implements DThemeSliderTrack {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		return DThemeDarkSliders.getBackgroundColor( state );
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}
}
