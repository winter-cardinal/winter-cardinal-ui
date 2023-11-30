/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNoteSearching } from "./d-theme-white-note-searching";

export class DThemeWhiteEnUsNoteSearching extends DThemeWhiteNoteSearching {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Searching";
	}
}
