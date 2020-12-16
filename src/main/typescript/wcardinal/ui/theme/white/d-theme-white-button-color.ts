/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DButtonColor, DThemeButtonColor } from "../../d-button-color";
import { DColorAndAlpha } from "../../d-color-and-alpha";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButton } from "./d-theme-white-button";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add( "button_color_sample", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#fff"/>` +
	`</g>`
);

const formatter = ( colorAndAlpha: DColorAndAlpha ): string => {
	return `#${UtilRgb.toCode( colorAndAlpha.color )} A${ colorAndAlpha.alpha.toFixed(2) }`;
};

export class DThemeWhiteButtonColor extends DThemeWhiteButton implements DThemeButtonColor {
	getImageTintColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getImageSource( state: DBaseStateSet ): Texture {
		return DThemeWhiteAtlas.mappings.button_color_sample;
	}

	getTextFormatter(): ( value: DColorAndAlpha, caller: DButtonColor ) => string {
		return formatter;
	}

	newTextValue(): DColorAndAlpha {
		return {
			color: 0xffffff,
			alpha: 1
		};
	}
}
