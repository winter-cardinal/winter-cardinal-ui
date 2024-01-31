/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DisplayObject, Texture } from "pixi.js";
import type { DBaseStateSet } from "../../d-base-state-set";
import type { DThemeIndicatorProcessing } from "../../d-indicator-processing";
import type { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DBaseState } from "../../d-base-state";

// Material Design icons by Google.
// Apache license version 2.0.
/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("button_process_processing", 24, 24,
	`<g transform="scale(0.025,0.025) translate(0,960)">` +
		`<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T` +
		`480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133` +
		` 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 8` +
		`6T480-80Z" fill="#fff"/>` +
	`</g>`
);

DThemeDarkAtlas.add("button_process_success", 24, 24,
	`<g transform="scale(0.025,0.025) translate(0,960)">` +
		`<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" fill="#fff" />` +
	`</g>`
);

DThemeDarkAtlas.add("button_process_fail", 24, 24,
	`<g transform="scale(0.025,0.025) translate(0,960)">` +
		`<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="#fff" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

const imageSource = (state: DBaseStateSet): Texture | DisplayObject | null => {
	if (state.isProcessing) {
		return DThemeDarkAtlas.mappings.button_process_processing;
	} else if (state.isSucceeded) {
		return DThemeDarkAtlas.mappings.button_process_success;
	} else {
		return DThemeDarkAtlas.mappings.button_process_fail;
	}
};

const imageRotation = (state: DBaseStateSet): number => {
	const value = state.valueOf(DBaseState.PROCESSING);
	if (value != null) {
		return value * Math.PI * 0.02;
	}
	return 0;
};

export abstract class DThemeDarkIndicatorProcess<VALUE = unknown>
	implements DThemeIndicatorProcessing<VALUE>
{
	getProcessDoneDelay(): number {
		return 400;
	}

	getProcessCloseDelay(): number | null {
		return 3000;
	}

	isProcessTextEnabled(): boolean {
		return false;
	}

	abstract newProcessTextValue(): DStateAwareOrValueMightBe<VALUE>;

	isProcessImageEnabled(): boolean {
		return true;
	}

	getProcessImageIndex(): number {
		return 0;
	}

	newProcessImageSource(): DStateAwareOrValueMightBe<Texture | DisplayObject | null> {
		return imageSource;
	}

	newProcessImageRotation(): DStateAwareOrValueMightBe<number> {
		return imageRotation;
	}
}
