/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkNote } from "./d-theme-dark-note";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("note_erorr", 48, 48,
	`<g transform="translate(-3,3) scale(2,2)">` +
		'<path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" fill="#fff"/>' +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkNoteError extends DThemeDarkNote {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Error";
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.note_erorr;
	}
}
