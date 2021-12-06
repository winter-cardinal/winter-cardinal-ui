/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DNoteOptions<THEME extends DThemeNote = DThemeNote>
	extends DImageBaseOptions<string, THEME> {}

export interface DThemeNote extends DThemeImageBase<string> {}

export class DNote<
	THEME extends DThemeNote = DThemeNote,
	OPTIONS extends DNoteOptions<THEME> = DNoteOptions<THEME>
> extends DImageBase<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DNote";
	}
}
