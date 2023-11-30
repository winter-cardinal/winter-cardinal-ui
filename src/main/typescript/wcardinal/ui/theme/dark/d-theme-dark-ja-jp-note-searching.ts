/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNoteSearching } from "./d-theme-dark-note-searching";

export class DThemeDarkJaJpNoteSearching extends DThemeDarkNoteSearching {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "検索中です";
	}
}
