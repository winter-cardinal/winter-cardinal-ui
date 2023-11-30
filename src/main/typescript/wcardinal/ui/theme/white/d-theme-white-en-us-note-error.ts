/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNoteError } from "./d-theme-white-note-error";

export class DThemeWhiteEnUsNoteError extends DThemeWhiteNoteError {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Something went wrong";
	}
}
