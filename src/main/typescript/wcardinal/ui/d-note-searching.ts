/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNote, DNoteOptions, DThemeNote } from "./d-note";

export interface DNoteSearchingOptions<THEME extends DThemeNoteSearching = DThemeNoteSearching>
	extends DNoteOptions<THEME> {}

export interface DThemeNoteSearching extends DThemeNote {}

export class DNoteSearching<
	THEME extends DThemeNote = DThemeNote,
	OPTIONS extends DNoteOptions<THEME> = DNoteOptions<THEME>
> extends DNote<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteSearching";
	}
}
