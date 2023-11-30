/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkNote } from "../d-theme-dark-note";
import { DThemeDarkJaJpNoteError } from "../d-theme-dark-ja-jp-note-error";
import { DThemeDarkJaJpNoteNoItemsFound } from "../d-theme-dark-ja-jp-note-no-items-found";
import { DThemeDarkJaJpNoteSearching } from "../d-theme-dark-ja-jp-note-searching";
import { DThemeDarkNoteSmallError } from "../d-theme-dark-note-small-error";
import { DThemeDarkNoteSmallNoItemsFound } from "../d-theme-dark-note-small-no-items-found";
import { DThemeDarkNoteSmallSearching } from "../d-theme-dark-note-small-searching";

export const loadThemeDarkJaJpNote = (): void => {
	DThemeDark.set("DNote", DThemeDarkNote);
	DThemeDark.set("DNoteError", DThemeDarkJaJpNoteError);
	DThemeDark.set("DNoteNoItemsFound", DThemeDarkJaJpNoteNoItemsFound);
	DThemeDark.set("DNoteSearching", DThemeDarkJaJpNoteSearching);
	DThemeDark.set("DNoteSmallError", DThemeDarkNoteSmallError);
	DThemeDark.set("DNoteSmallNoItemsFound", DThemeDarkNoteSmallNoItemsFound);
	DThemeDark.set("DNoteSmallSearching", DThemeDarkNoteSmallSearching);
};
