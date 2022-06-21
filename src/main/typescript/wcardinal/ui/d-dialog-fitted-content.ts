/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDialogLayeredContent,
	DDialogLayeredContentOptions,
	DThemeDialogLayeredContent
} from "./d-dialog-layered-content";

export interface DDialogFittedContentOptions<
	THEME extends DThemeDialogFittedContent = DThemeDialogFittedContent
> extends DDialogLayeredContentOptions<THEME> {}

export interface DThemeDialogFittedContent extends DThemeDialogLayeredContent {}

export class DDialogFittedContent<
	THEME extends DThemeDialogLayeredContent = DThemeDialogLayeredContent,
	OPTIONS extends DDialogLayeredContentOptions<THEME> = DDialogLayeredContentOptions<THEME>
> extends DDialogLayeredContent<THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogFittedContent";
	}
}
