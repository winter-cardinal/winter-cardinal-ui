/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkNote } from "../d-theme-dark-note";
import { DThemeDarkNoteError } from "../d-theme-dark-note-error";
import { DThemeDarkNoteNoItemsFound } from "../d-theme-dark-note-no-items-found";
import { DThemeDarkNoteSearching } from "../d-theme-dark-note-searching";

export const loadThemeDarkNote = (): void => {
	DThemeDark.set("DNote", DThemeDarkNote);
	DThemeDark.set("DNoteError", DThemeDarkNoteError);
	DThemeDark.set("DNoteNoItemsFound", DThemeDarkNoteNoItemsFound);
	DThemeDark.set("DNoteSearching", DThemeDarkNoteSearching);
};
