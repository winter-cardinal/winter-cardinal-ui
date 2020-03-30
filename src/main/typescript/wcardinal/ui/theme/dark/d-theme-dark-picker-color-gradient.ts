/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemePickerColorGradient } from "../../d-picker-color-gradient";
import { DPickerColorGradientDataLike } from "../../d-picker-color-gradient-data";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkPickerColorGradient extends DThemeDarkBase implements DThemePickerColorGradient {
	getGradientPointsWidth(): number {
		return 30;
	}

	getGradientPointsMargin(): number {
		return 24;
	}

	getGradientAnchorTexture(): Texture {
		return DThemeDarkAtlas.mappings.picker_color_anchor;
	}

	getGradientAnchorOutlinedTexture(): Texture {
		return DThemeDarkAtlas.mappings.picker_color_anchor_outlined;
	}

	getGradientAnchorOutlineTexture(): Texture {
		return DThemeDarkAtlas.mappings.picker_color_anchor_outline;
	}

	getGradientDirectionMargin(): number {
		return 5;
	}

	getGradientDirectionTexture(): Texture {
		return DThemeDarkAtlas.mappings.picker_color_direction;
	}

	getGradientRecentColumn(): number {
		return 4;
	}

	getGradientRecentWidth(): number {
		return 30;
	}

	getGradientRecentMargin(): number {
		return 5;
	}

	getGradientRecentCount(): number {
		return 16;
	}

	getGradientRecents(): DPickerColorGradientDataLike[] {
		return [];
	}

	getGradientCheckerColors(): [ number, number ] {
		return [ 0.37255, 0.27 ];
	}

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
