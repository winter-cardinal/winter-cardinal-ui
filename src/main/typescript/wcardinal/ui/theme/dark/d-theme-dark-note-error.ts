/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNote } from "./d-theme-dark-note";

export class DThemeDarkNoteError extends DThemeDarkNote {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Error";
	}
}
