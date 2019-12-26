/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemePickerColorGradient } from "../../d-picker-color-gradient";
import { DPickerColorGradientDataLike } from "../../d-picker-color-gradient-data";
import { DThemeDefaultAtlas } from "./d-theme-default-atlas";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultPickerColorGradient extends DThemeDefaultBase implements DThemePickerColorGradient {
	getGradientPointsWidth(): number {
		return 30;
	}

	getGradientPointsMargin(): number {
		return 24;
	}

	getGradientAnchorTexture(): Texture {
		return DThemeDefaultAtlas.mappings.picker_color_anchor;
	}

	getGradientAnchorOutlinedTexture(): Texture {
		return DThemeDefaultAtlas.mappings.picker_color_anchor_outlined;
	}

	getGradientAnchorOutlineTexture(): Texture {
		return DThemeDefaultAtlas.mappings.picker_color_anchor_outline;
	}

	getGradientDirectionMargin(): number {
		return 5;
	}

	getGradientDirectionTexture(): Texture {
		return DThemeDefaultAtlas.mappings.picker_color_direction;
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

	getBackgroundColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getPickerColorGradientBackgroundColor();
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getPickerColorGradientBorderColor();
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
