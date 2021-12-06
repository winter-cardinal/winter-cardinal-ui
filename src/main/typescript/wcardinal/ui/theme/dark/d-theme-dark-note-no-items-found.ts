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
DThemeDarkAtlas.add("note_no_items_found", 72, 72,
	`<g transform="translate(-5,0) scale(3,3)">` +
		'<path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c' +
		'-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#fff"/>' +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkNoteNoItemsFound extends DThemeDarkNote {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "No items found";
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.note_no_items_found;
	}
}
