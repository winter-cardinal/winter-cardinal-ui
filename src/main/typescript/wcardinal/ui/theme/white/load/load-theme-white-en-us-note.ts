/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteNote } from "../d-theme-white-note";
import { DThemeWhiteEnUsNoteError } from "../d-theme-white-en-us-note-error";
import { DThemeWhiteEnUsNoteNoItemsFound } from "../d-theme-white-en-us-note-no-items-found";
import { DThemeWhiteEnUsNoteSearching } from "../d-theme-white-en-us-note-searching";
import { DThemeWhiteNoteSmallError } from "../d-theme-white-note-small-error";
import { DThemeWhiteNoteSmallNoItemsFound } from "../d-theme-white-note-small-no-items-found";
import { DThemeWhiteNoteSmallSearching } from "../d-theme-white-note-small-searching";

export const loadThemeWhiteEnUsNote = (): void => {
	DThemeWhite.set("DNote", DThemeWhiteNote);
	DThemeWhite.set("DNoteError", DThemeWhiteEnUsNoteError);
	DThemeWhite.set("DNoteNoItemsFound", DThemeWhiteEnUsNoteNoItemsFound);
	DThemeWhite.set("DNoteSearching", DThemeWhiteEnUsNoteSearching);
	DThemeWhite.set("DNoteSmallError", DThemeWhiteNoteSmallError);
	DThemeWhite.set("DNoteSmallNoItemsFound", DThemeWhiteNoteSmallNoItemsFound);
	DThemeWhite.set("DNoteSmallSearching", DThemeWhiteNoteSmallSearching);
};
