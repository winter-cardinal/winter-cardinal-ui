/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DThemeBase } from "../../d-base";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DShadow } from "../../d-shadow";
import { DShadowImpl } from "../../d-shadow-impl";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";

const newShadow = (id: string, radius: number, opacity: number): void => {
	const d = radius * 2;
	/* eslint-disable prettier/prettier */
	DThemeWhiteAtlas.add(id, d, d,
		`<g>` +
			`<defs>` +
				`<radialGradient id="${id}_filter">` +
					`<stop offset="0%" stop-color="black" stop-opacity="${opacity}" />` +
					`<stop offset="100%" stop-color="black" stop-opacity="0" />` +
				`</radialGradient>` +
			`</defs>` +
			`<rect x="0" y="0" width="${d}" height="${d}" fill="url(#${id}_filter)"/>` +
		`</g>`
	);
	/* eslint-enable prettier/prettier */
};
newShadow("shadow_weak", 8, 0.15);
newShadow("shadow", 12, 0.15);

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("background", 16, 16,
	`<g>` +
		`<defs>` +
			`<radialGradient id="234sfdhjfpijsrnsedsd435jseflkm">` +
				`<stop offset="25%" stop-color="white" stop-opacity="1" />` +
				`<stop offset="75%" stop-color="white" stop-opacity="0.25" />` +
			`</radialGradient>` +
		`</defs>` +
		`<rect x="0" y="0" width="16" height="16" fill="url(#234sfdhjfpijsrnsedsd435jseflkm)"/>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhiteBase extends DThemeWhiteFont implements DThemeBase {
	getX(): DCoordinatePosition {
		return 0;
	}

	getY(): DCoordinatePosition {
		return 0;
	}

	getHeight(): DCoordinateSize {
		return 100;
	}

	getWidth(): DCoordinateSize {
		return 100;
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBackgroundTexture(): Texture {
		return DThemeWhiteAtlas.mappings.background;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBorderWidth(state: DBaseStateSet): number {
		return 1;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 0;
	}

	getBorderMask(state: DBaseStateSet): number {
		return DBorderMask.NONE;
	}

	getBorderTexture(): Texture {
		return DThemeWhiteAtlas.mappings.background;
	}

	getPaddingLeft(): number {
		return 0;
	}

	getPaddingRight(): number {
		return 0;
	}

	getPaddingTop(): number {
		return 0;
	}

	getPaddingBottom(): number {
		return 0;
	}

	getCornerRadius(): number {
		return 3;
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}

	getOutlineColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.HIGHLIGHT_COLOR;
	}

	getOutlineAlpha(state: DBaseStateSet): number {
		if (state.isFocused) {
			return 1;
		}
		return 0;
	}

	getOutlineWidth(state: DBaseStateSet): number {
		return 1;
	}

	getOutlineOffset(state: DBaseStateSet): number {
		return 0;
	}

	getOutlineAlign(state: DBaseStateSet): number {
		return 0;
	}

	getOutlineMask(state: DBaseStateSet): DBorderMask {
		return DBorderMask.NONE;
	}

	getClearType(): DLayoutClearType {
		return DLayoutClearType.NONE;
	}

	getShadow(): DShadow | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.SELF;
	}

	newState(state: DBaseStateSet): void {
		// DO NOTHING
	}

	getTitle(): string {
		return "";
	}

	getWeight(): number {
		return -1;
	}

	newShadow(): DShadow | null {
		return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow, 12, 12, 0, 3);
	}

	newShadowWeak(): DShadow | null {
		return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow_weak, 8, 8, 0, 2);
	}

	getCursor(state: DBaseStateSet): string {
		return "";
	}
}
