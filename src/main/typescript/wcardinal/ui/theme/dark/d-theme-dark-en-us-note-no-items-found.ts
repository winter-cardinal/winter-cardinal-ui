/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNoteNoItemsFound } from "./d-theme-dark-note-no-items-found";

export class DThemeDarkEnUsNoteNoItemsFound extends DThemeDarkNoteNoItemsFound {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "No items found";
	}
}
