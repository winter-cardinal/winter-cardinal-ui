/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeNoteNoItemsFound } from "../../d-note-no-items-found";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemes } from "../d-themes";
import { DThemeWhiteNoteSmall } from "./d-theme-white-note-small";

export class DThemeWhiteNoteSmallNoItemsFound extends DThemeWhiteNoteSmall {
	protected _note: DThemeNoteNoItemsFound;

	constructor() {
		super();
		this._note = DThemes.get<DThemeNoteNoItemsFound>("DNoteNoItemsFound");
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return this._note.newTextValue();
	}
}
