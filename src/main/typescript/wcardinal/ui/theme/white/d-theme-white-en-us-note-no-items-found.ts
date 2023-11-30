/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNoteNoItemsFound } from "./d-theme-white-note-no-items-found";

export class DThemeWhiteEnUsNoteNoItemsFound extends DThemeWhiteNoteNoItemsFound {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "No items found";
	}
}
