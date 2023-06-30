/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemePickerColor } from "../../d-picker-color";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteBase } from "./d-theme-white-base";

const makeCheckerboard = (width: number, height: number): string => {
	const LIGHT = "#bfbfbf";
	const DARK = "#a5a5a5";
	let result = `<g>`;
	for (let ih = 0; ih < height; ++ih) {
		for (let iw = 0; iw < width; ++iw) {
			const color = (iw + ih) % 2 === 0 ? LIGHT : DARK;
			result += `<rect x="${9 * iw}" y="${9 * ih}" width="9" height="9" fill="${color}" />`;
		}
	}
	result += "</g>";
	return result;
};

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("picker_color_main", 234, 162,
	`<g>` +
		`<linearGradient id="fs7w3iusfdnb" x1="0%" y1="0%" x2="100%" y2="0%">` +
			`<stop stop-color="#FFFFFF" stop-opacity="0" offset="0"/>` +
			`<stop stop-color="#FFFFFF" stop-opacity="1" offset="1"/>` +
		`</linearGradient>` +
		`<linearGradient id="2rfcfe9874bw" x1="0%" y1="0%" x2="0%" y2="100%">` +
			`<stop stop-color="#000000" stop-opacity="0" offset="0"/>` +
			`<stop stop-color="#000000" stop-opacity="1" offset="1"/>` +
		`</linearGradient>` +
		`<rect x="0" y="0" width="234" height="162" fill="url(#fs7w3iusfdnb)" />` +
		`<rect x="0" y="0" width="234" height="162" fill="url(#2rfcfe9874bw)" />` +
	`</g>`
);

DThemeWhiteAtlas.add("picker_color_main_base", 234, 162,
	`<g>` +
		`<rect x="0" y="0" width="234" height="164" fill="#fff" />` +
	`</g>`
);

DThemeWhiteAtlas.add("picker_color_alpha_checkerboard", 234, 18, makeCheckerboard(26, 2));

DThemeWhiteAtlas.add("picker_color_alpha", 234, 18,
	`<g>` +
		`<linearGradient id="s48afbuh44" x1="0%" y1="0%" x2="100%" y2="0%">` +
			`<stop stop-color="#FFFFFF" stop-opacity="0" offset="0"/>` +
			`<stop stop-color="#FFFFFF" stop-opacity="1" offset="1"/>` +
		`</linearGradient>` +
		`<rect x="0" y="0" width="234" height="18" fill="url(#s48afbuh44)" />` +
	`</g>`
);

DThemeWhiteAtlas.add("picker_color_base", 234, 18,
	`<g>` +
		`<linearGradient id="ni2rbisdf3" x1="0%" y1="0%" x2="100%" y2="0%">` +
			`<stop stop-color="#FF0000" offset="0"/>` +
			`<stop stop-color="#FFFF00" offset="0.167"/>` +
			`<stop stop-color="#00FF00" offset="0.333"/>` +
			`<stop stop-color="#00FFFF" offset="0.5"/>` +
			`<stop stop-color="#0000FF" offset="0.667"/>` +
			`<stop stop-color="#FF00FF" offset="0.833"/>` +
			`<stop stop-color="#FF0000" offset="1"/>` +
		`</linearGradient>` +
		`<rect x="0" y="0" width="234" height="18" fill="url(#ni2rbisdf3)" />` +
	`</g>`
);

DThemeWhiteAtlas.add("picker_color_base_pointer", 16.2, 31.8,
	`<rect x="4.5" y="4.5" width="7.2" height="22.8" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`
);

DThemeWhiteAtlas.add("picker_color_pointer", 25.8, 25.8,
	`<circle cx="12.9" cy="12.9" r="4.8" stroke="#5f5f5f" stroke-width="2.4" fill="none" />` +
	`<circle cx="12.9" cy="12.9" r="7.2" stroke="#ffffff" stroke-width="2.4" fill="none" />`
);

DThemeWhiteAtlas.add("picker_color_recent_checkerboard", 36, 36, makeCheckerboard(4, 4), 9, 9, 18, 18);

DThemeWhiteAtlas.add("picker_color_recent", 36, 36,
	`<g>` +
		`<rect x="0" y="0" width="36" height="36" fill="#fff" />` +
		`<path x="0" y="0" d="M9 9 h18 v18 h-18 v-18 m1 1 v16 h16 v-16 h-16 z" fill="#eee" />` +
	`</g>`
, 9, 9, 18, 18);

DThemeWhiteAtlas.add("picker_color_sample_checkerboard", 45, 63, makeCheckerboard(5, 7));

DThemeWhiteAtlas.add("picker_color_sample", 47, 65,
	`<g>` +
		`<rect x="0" y="0" width="47" height="65" fill="#fff" />` +
	`</g>`
, 1, 1, 45, 63);

DThemeWhiteAtlas.add("picker_color_anchor_outlined", 25.8, 25.8,
	`<circle cx="12.9" cy="12.9" r="8.4" stroke="none" fill="#ffffff" />` +
	`<circle cx="12.9" cy="12.9" r="9.6" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`
);

DThemeWhiteAtlas.add("picker_color_anchor", 28.2, 28.2,
	`<circle cx="14.1" cy="14.1" r="6" stroke="none" fill="#ffffff" />` +
	`<circle cx="14.1" cy="14.1" r="7.2" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`
);

DThemeWhiteAtlas.add("picker_color_direction", 12, 30,
	`<path d="M0.6 25.8 L 12.0375 5.9895" stroke="#5f5f5f" stroke-width="1.2" fill="none" />` +
	`<path d="M8.5125 25.8 A 8.475 8.475 0 0 0 4.275 18.4605" stroke="#5f5f5f" stroke-width="1.2" fill="none" />` +
	`<rect x="0.6" y="24.6" width="11.4375" height="1.2" rx="0.6" ry="0.6" stroke="none" fill="#5f5f5f" />`
);

DThemeWhiteAtlas.add("picker_color_standard", 18, 18,
	`<g>` +
		`<rect x="0" y="0" width="18" height="18" fill="#fff" stroke-width="1" stroke="#eee" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhitePickerColor extends DThemeWhiteBase implements DThemePickerColor {
	getMainWidth(): number {
		return 234;
	}

	getMainHeight(): number {
		return 162;
	}

	getMainTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_main;
	}

	getMainBaseTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_main_base;
	}

	getMainPointerTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_pointer;
	}

	getMainPointerColor(): number {
		return 0xffffff;
	}

	getMainPointerAlpha(): number {
		return 1;
	}

	getBaseHeight(): number {
		return 18;
	}

	getBaseMargin(): number {
		return 6;
	}

	getBaseTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_base;
	}

	getBasePointerTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_base_pointer;
	}

	getBasePointerColor(): number {
		return 0xffffff;
	}

	getBasePointerAlpha(): number {
		return this.getMainPointerAlpha();
	}

	getAlphaHeight(): number {
		return this.getBaseHeight();
	}

	getAlphaMargin(): number {
		return this.getBaseMargin();
	}

	getAlphaTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_alpha;
	}

	getAlphaCheckerboardTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_alpha_checkerboard;
	}

	getAlphaPointerTexture(): Texture {
		return this.getBasePointerTexture();
	}

	getAlphaPointerColor(): number {
		return this.getBasePointerColor();
	}

	getAlphaPointerAlpha(): number {
		return this.getMainPointerAlpha();
	}

	getRecentMargin(): number {
		return this.getBaseMargin();
	}

	getRecentColorWidth(): number {
		return this.getBaseHeight();
	}

	getRecentColorHeight(): number {
		return this.getRecentColorWidth();
	}

	getRecentColorMargin(): number {
		return this.getRecentMargin();
	}

	getRecentColorCount(): number {
		return 10;
	}

	getRecentCheckerboardTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_recent_checkerboard;
	}

	getRecentTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_recent;
	}

	getInputMargin(): number {
		return this.getBaseMargin();
	}

	getInputLabelWidth(): number {
		return 15;
	}

	getSampleCheckerboardOldTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
	}

	getSampleCheckerboardNewTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
	}

	getSampleOldTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_sample;
	}

	getSampleNewTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_sample;
	}

	getStandardColorCount(): number {
		return 80;
	}

	getStandardColorWidth(): number {
		return this.getBaseHeight();
	}

	getStandardColorHeight(): number {
		return this.getStandardColorWidth();
	}

	getStandardColorMargin(): number {
		return this.getBaseMargin();
	}

	getStandardTexture(): Texture {
		return DThemeWhiteAtlas.mappings.picker_color_standard;
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
