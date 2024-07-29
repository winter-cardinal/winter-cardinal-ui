/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DButtonColorGradient, DThemeButtonColorGradient } from "../../d-button-color-gradient";
import { DColorGradientObservable } from "../../d-color-gradient-observable";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { newSvgRoundedRect } from "../common/new-svg-rounded-rect";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("button_color_gradient_sample", 21, 21,
	newSvgRoundedRect(3, 3, 15, 15, "#fff", "#eee", 1)
);
/* eslint-enable prettier/prettier */

const formatter = (): string => {
	return "";
};

export class DThemeWhiteButtonColorGradient
	extends DThemeWhiteButton<DColorGradientObservable>
	implements DThemeButtonColorGradient
{
	getViewBaseTexture(): Texture | null {
		return DThemeWhiteAtlas.mappings.button_color_gradient_sample;
	}

	getTextFormatter(): (value: DColorGradientObservable, caller: DButtonColorGradient) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<DColorGradientObservable> {
		return new DColorGradientObservable();
	}

	getCheckerColors(): [number, number] {
		return [0.75, 0.65];
	}
}
