/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DNoteSmall, DNoteSmallOptions, DThemeNoteSmall } from "./d-note-small";

export interface DNoteSmallErrorOptions<THEME extends DThemeNoteSmallError = DThemeNoteSmallError>
	extends DNoteSmallOptions<THEME> {}

export interface DThemeNoteSmallError extends DThemeNoteSmall {}

export class DNoteSmallError<
	THEME extends DThemeNoteSmallError = DThemeNoteSmallError,
	OPTIONS extends DNoteSmallErrorOptions<THEME> = DNoteSmallErrorOptions<THEME>
> extends DNoteSmall<THEME, OPTIONS> {
	protected getType(): string {
		return "DNoteSmallError";
	}
}
