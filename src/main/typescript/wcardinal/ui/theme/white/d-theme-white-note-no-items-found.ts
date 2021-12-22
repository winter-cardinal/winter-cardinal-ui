/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNote } from "./d-theme-white-note";

export class DThemeWhiteNoteNoItemsFound extends DThemeWhiteNote {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "No items found";
	}
}
