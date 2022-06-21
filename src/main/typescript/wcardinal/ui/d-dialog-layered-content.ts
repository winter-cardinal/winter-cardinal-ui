/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";

export interface DDialogLayeredContentOptions<
	THEME extends DThemeDialogLayeredContent = DThemeDialogLayeredContent
> extends DLayoutVerticalOptions<THEME> {}

export interface DThemeDialogLayeredContent extends DThemeLayoutVertical {}

export class DDialogLayeredContent<
	THEME extends DThemeDialogLayeredContent = DThemeDialogLayeredContent,
	OPTIONS extends DDialogLayeredContentOptions<THEME> = DDialogLayeredContentOptions<THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogLayeredContent";
	}
}
