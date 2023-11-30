/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNoteError } from "./d-theme-dark-note-error";

export class DThemeDarkJaJpNoteError extends DThemeDarkNoteError {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "異常が発生しました";
	}
}
