/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeNoteError } from "../../d-note-error";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemes } from "../d-themes";
import { DThemeDarkNoteSmall } from "./d-theme-dark-note-small";

export class DThemeDarkNoteSmallError extends DThemeDarkNoteSmall {
	protected _note: DThemeNoteError;

	constructor() {
		super();
		this._note = DThemes.get<DThemeNoteError>("DNoteError");
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return this._note.newTextValue();
	}
}
