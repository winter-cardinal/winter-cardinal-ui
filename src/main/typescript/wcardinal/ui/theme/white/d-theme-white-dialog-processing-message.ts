/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteDialogConfirmMessage } from "./d-theme-white-dialog-confirm-message";

// Material Design icons by Google.
// Apache license version 2.0.
/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("success_mark", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhiteDialogProcessingMessage extends DThemeWhiteDialogConfirmMessage {
	getHeight(): number {
		return 90;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.isSucceeded) {
			return DThemeWhiteAtlas.mappings.success_mark;
		}
		return null;
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return 0.75;
	}
}
