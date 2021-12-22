/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNoteSmall, DNoteSmallOptions, DThemeNoteSmall } from "./d-note-small";

export interface DNoteSmallNoItemsFoundOptions<
	THEME extends DThemeNoteSmallNoItemsFound = DThemeNoteSmallNoItemsFound
> extends DNoteSmallOptions<THEME> {}

export interface DThemeNoteSmallNoItemsFound extends DThemeNoteSmall {}

export class DNoteSmallNoItemsFound<
	THEME extends DThemeNoteSmallNoItemsFound = DThemeNoteSmallNoItemsFound,
	OPTIONS extends DNoteSmallNoItemsFoundOptions<THEME> = DNoteSmallNoItemsFoundOptions<THEME>
> extends DNoteSmall<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteSmallNoItemsFound";
	}
}
