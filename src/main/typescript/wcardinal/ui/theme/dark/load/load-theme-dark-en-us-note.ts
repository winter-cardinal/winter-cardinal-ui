/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkNote } from "../d-theme-dark-note";
import { DThemeDarkEnUsNoteError } from "../d-theme-dark-en-us-note-error";
import { DThemeDarkEnUsNoteNoItemsFound } from "../d-theme-dark-en-us-note-no-items-found";
import { DThemeDarkEnUsNoteSearching } from "../d-theme-dark-en-us-note-searching";
import { DThemeDarkNoteSmallError } from "../d-theme-dark-note-small-error";
import { DThemeDarkNoteSmallNoItemsFound } from "../d-theme-dark-note-small-no-items-found";
import { DThemeDarkNoteSmallSearching } from "../d-theme-dark-note-small-searching";

export const loadThemeDarkEnUsNote = (): void => {
	DThemeDark.set("DNote", DThemeDarkNote);
	DThemeDark.set("DNoteError", DThemeDarkEnUsNoteError);
	DThemeDark.set("DNoteNoItemsFound", DThemeDarkEnUsNoteNoItemsFound);
	DThemeDark.set("DNoteSearching", DThemeDarkEnUsNoteSearching);
	DThemeDark.set("DNoteSmallError", DThemeDarkNoteSmallError);
	DThemeDark.set("DNoteSmallNoItemsFound", DThemeDarkNoteSmallNoItemsFound);
	DThemeDark.set("DNoteSmallSearching", DThemeDarkNoteSmallSearching);
};
