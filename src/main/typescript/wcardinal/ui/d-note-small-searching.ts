/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNoteSmall, DNoteSmallOptions, DThemeNoteSmall } from "./d-note-small";

export interface DNoteSmallSearchingOptions<
	THEME extends DThemeNoteSmallSearching = DThemeNoteSmallSearching
> extends DNoteSmallOptions<THEME> {}

export interface DThemeNoteSmallSearching extends DThemeNoteSmall {}

export class DNoteSmallSearching<
	THEME extends DThemeNoteSmallSearching = DThemeNoteSmallSearching,
	OPTIONS extends DNoteSmallSearchingOptions<THEME> = DNoteSmallSearchingOptions<THEME>
> extends DNoteSmall<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteSmallSearching";
	}
}
