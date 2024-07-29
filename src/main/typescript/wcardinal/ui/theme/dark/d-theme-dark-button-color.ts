/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DButtonColor, DThemeButtonColor } from "../../d-button-color";
import { DColorAndAlpha } from "../../d-color-and-alpha";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { newSvgRoundedRect } from "../common/new-svg-rounded-rect";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("button_color_sample", 21, 21,
	newSvgRoundedRect(3, 3, 15, 15, "#fff", "#eee", 1)
);
/* eslint-enable prettier/prettier */

const formatter = (colorAndAlpha: DColorAndAlpha): string => {
	return `#${UtilRgb.toCode(colorAndAlpha.color)} A${colorAndAlpha.alpha.toFixed(2)}`;
};

export class DThemeDarkButtonColor
	extends DThemeDarkButton<DColorAndAlpha>
	implements DThemeButtonColor
{
	getImageTintColor(state: DBaseStateSet): number | null {
		return 0xffffff;
	}

	getImageSource(state: DBaseStateSet): Texture {
		return DThemeDarkAtlas.mappings.button_color_sample;
	}

	getTextFormatter(): (value: DColorAndAlpha, caller: DButtonColor) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<DColorAndAlpha> {
		return {
			color: 0xdedede,
			alpha: 1
		};
	}
}
