/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNoteNoItemsFound } from "./d-theme-dark-note-no-items-found";

export class DThemeDarkJaJpNoteNoItemsFound extends DThemeDarkNoteNoItemsFound {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "アイテムはありません";
	}
}
