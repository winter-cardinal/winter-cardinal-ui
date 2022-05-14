/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DColorGradient } from "../../d-color-gradient";
import { DThemePickerColorGradient } from "../../d-picker-color-gradient";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhitePickerColorGradient
	extends DThemeWhiteBase
	implements DThemePickerColorGradient
{
	getGradientPointsWidth(): number {
		return 30;
	}

	getGradientPointsMargin(): number {
		return 24;
	}

	getGradientAnchorTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_anchor;
	}

	getGradientAnchorOutlinedTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_anchor_outlined;
	}

	getGradientAnchorOutlineTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_anchor_outline;
	}

	getGradientDirectionMargin(): number {
		return 5;
	}

	getGradientDirectionTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_direction;
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

	getGradientRecents(): DColorGradient[] {
		return [];
	}

	getGradientCheckerColors(): [number, number] {
		return [0.75, 0.65];
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
