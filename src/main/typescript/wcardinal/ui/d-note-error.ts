/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNote, DNoteOptions, DThemeNote } from "./d-note";

export interface DNoteErrorOptions<THEME extends DThemeNoteError = DThemeNoteError>
	extends DNoteOptions<THEME> {}

export interface DThemeNoteError extends DThemeNote {}

export class DNoteError<
	THEME extends DThemeNote = DThemeNote,
	OPTIONS extends DNoteOptions<THEME> = DNoteOptions<THEME>
> extends DNote<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteError";
	}
}
