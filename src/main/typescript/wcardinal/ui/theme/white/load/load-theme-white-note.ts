/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteNote } from "../d-theme-white-note";
import { DThemeWhiteNoteError } from "../d-theme-white-note-error";
import { DThemeWhiteNoteNoItemsFound } from "../d-theme-white-note-no-items-found";
import { DThemeWhiteNoteSearching } from "../d-theme-white-note-searching";
import { DThemeWhiteNoteSmallError } from "../d-theme-white-note-small-error";
import { DThemeWhiteNoteSmallNoItemsFound } from "../d-theme-white-note-small-no-items-found";
import { DThemeWhiteNoteSmallSearching } from "../d-theme-white-note-small-searching";

export const loadThemeWhiteNote = (): void => {
	DThemeWhite.set("DNote", DThemeWhiteNote);
	DThemeWhite.set("DNoteError", DThemeWhiteNoteError);
	DThemeWhite.set("DNoteNoItemsFound", DThemeWhiteNoteNoItemsFound);
	DThemeWhite.set("DNoteSearching", DThemeWhiteNoteSearching);
	DThemeWhite.set("DNoteSmallError", DThemeWhiteNoteSmallError);
	DThemeWhite.set("DNoteSmallNoItemsFound", DThemeWhiteNoteSmallNoItemsFound);
	DThemeWhite.set("DNoteSmallSearching", DThemeWhiteNoteSmallSearching);
};
