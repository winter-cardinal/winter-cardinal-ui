/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeNoteSearching } from "../../d-note-searching";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemes } from "../d-themes";
import { DThemeWhiteNoteSmall } from "./d-theme-white-note-small";

export class DThemeWhiteNoteSmallSearching extends DThemeWhiteNoteSmall {
	protected _note: DThemeNoteSearching;

	constructor() {
		super();
		this._note = DThemes.get<DThemeNoteSearching>("DNoteSearching");
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return this._note.newTextValue();
	}
}
