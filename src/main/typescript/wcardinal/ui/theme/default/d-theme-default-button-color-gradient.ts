/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DButtonColorGradient, DThemeButtonColorGradient } from "../../d-button-color-gradient";
import { DPickerColorGradientData } from "../../d-picker-color-gradient-data";
import { DThemeWhiteAtlas } from "./d-theme-default-atlas";
import { DThemeWhiteButton } from "./d-theme-default-button";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add( "button_color_gradient_sample", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#fff"/>` +
		`<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ` +
			`fill="#eee" />` +
	`</g>`
);

const formatter = (): string => {
	return "";
};

export class DThemeWhiteButtonColorGradient extends DThemeWhiteButton implements DThemeButtonColorGradient {
	getViewBaseTexture(): Texture | null {
		return DThemeWhiteAtlas.mappings.button_color_gradient_sample;
	}

	getTextFormatter(): ( value: DPickerColorGradientData, caller: DButtonColorGradient ) => string {
		return formatter;
	}

	newTextValue(): DPickerColorGradientData {
		return new DPickerColorGradientData();
	}
}
