/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteNote } from "../d-theme-white-note";
import { DThemeWhiteNoteNoItemsFound } from "../d-theme-white-note-no-items-found";
import { DThemeWhiteNoteSearching } from "../d-theme-white-note-searching";

export const loadThemeWhiteNote = (): void => {
	DThemeWhite.set("DNote", DThemeWhiteNote);
	DThemeWhite.set("DNoteNoItemsFound", DThemeWhiteNoteNoItemsFound);
	DThemeWhite.set("DNoteSearching", DThemeWhiteNoteSearching);
};
