/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteNote } from "./d-theme-white-note";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("note_searching", 72, 72,
	`<g transform="translate(-5,0) scale(3,3)">` +
		`<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 ` +
		`9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 ` +
		`14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#fff"/>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhiteNoteSearching extends DThemeWhiteNote {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Searching";
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.note_searching;
	}
}
