/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteNote } from "./d-theme-white-note";

export abstract class DThemeWhiteNoteSearching extends DThemeWhiteNote {
	abstract newTextValue(): DStateAwareOrValueMightBe<string>;
}
