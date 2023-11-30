/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteNote } from "../d-theme-white-note";
import { DThemeWhiteJaJpNoteError } from "../d-theme-white-ja-jp-note-error";
import { DThemeWhiteJaJpNoteNoItemsFound } from "../d-theme-white-ja-jp-note-no-items-found";
import { DThemeWhiteJaJpNoteSearching } from "../d-theme-white-ja-jp-note-searching";
import { DThemeWhiteNoteSmallError } from "../d-theme-white-note-small-error";
import { DThemeWhiteNoteSmallNoItemsFound } from "../d-theme-white-note-small-no-items-found";
import { DThemeWhiteNoteSmallSearching } from "../d-theme-white-note-small-searching";

export const loadThemeWhiteJaJpNote = (): void => {
	DThemeWhite.set("DNote", DThemeWhiteNote);
	DThemeWhite.set("DNoteError", DThemeWhiteJaJpNoteError);
	DThemeWhite.set("DNoteNoItemsFound", DThemeWhiteJaJpNoteNoItemsFound);
	DThemeWhite.set("DNoteSearching", DThemeWhiteJaJpNoteSearching);
	DThemeWhite.set("DNoteSmallError", DThemeWhiteNoteSmallError);
	DThemeWhite.set("DNoteSmallNoItemsFound", DThemeWhiteNoteSmallNoItemsFound);
	DThemeWhite.set("DNoteSmallSearching", DThemeWhiteNoteSmallSearching);
};
