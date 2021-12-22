/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkNoteSmall } from "./d-theme-dark-note-small";

export class DThemeDarkNoteSmallError extends DThemeDarkNoteSmall {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "Something went wrong";
	}
}
