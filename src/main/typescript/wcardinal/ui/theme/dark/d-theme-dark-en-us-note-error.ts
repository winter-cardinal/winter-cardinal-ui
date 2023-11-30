/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNoteError } from "./d-theme-dark-note-error";

export class DThemeDarkEnUsNoteError extends DThemeDarkNoteError {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Something went wrong";
	}
}
