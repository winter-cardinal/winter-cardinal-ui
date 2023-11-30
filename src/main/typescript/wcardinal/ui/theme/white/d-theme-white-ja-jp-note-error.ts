/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNoteError } from "./d-theme-white-note-error";

export class DThemeWhiteJaJpNoteError extends DThemeWhiteNoteError {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "異常が発生しました";
	}
}
