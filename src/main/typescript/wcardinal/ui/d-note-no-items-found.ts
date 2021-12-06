/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNote, DNoteOptions, DThemeNote } from "./d-note";

export interface DNoteNoItemsFoundOptions<
	THEME extends DThemeNoteNoItemsFound = DThemeNoteNoItemsFound
> extends DNoteOptions<THEME> {}

export interface DThemeNoteNoItemsFound extends DThemeNote {}

export class DNoteNoItemsFound<
	THEME extends DThemeNote = DThemeNote,
	OPTIONS extends DNoteOptions<THEME> = DNoteOptions<THEME>
> extends DNote<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteNoItemsFound";
	}
}
