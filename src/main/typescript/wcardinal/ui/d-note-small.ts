/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNote, DNoteOptions, DThemeNote } from "./d-note";

export interface DNoteSmallOptions<THEME extends DThemeNoteSmall = DThemeNoteSmall>
	extends DNoteOptions<THEME> {}

export interface DThemeNoteSmall extends DThemeNote {}

export class DNoteSmall<
	THEME extends DThemeNoteSmall = DThemeNoteSmall,
	OPTIONS extends DNoteSmallOptions<THEME> = DNoteSmallOptions<THEME>
> extends DNote<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteSmall";
	}
}
