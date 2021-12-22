/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNoteSmall } from "./d-theme-white-note-small";

export class DThemeWhiteNoteSmallSearching extends DThemeWhiteNoteSmall {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Searching";
	}
}
