/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DDialogLayeredHeaderSeparatorOptions<
	THEME extends DThemeDialogLayeredHeaderSeparator = DThemeDialogLayeredHeaderSeparator
> extends DImageBaseOptions<string, THEME> {}

export interface DThemeDialogLayeredHeaderSeparator extends DThemeImageBase<string> {}

export class DDialogLayeredHeaderSeparator<
	THEME extends DThemeDialogLayeredHeaderSeparator = DThemeDialogLayeredHeaderSeparator,
	OPTIONS extends
		DDialogLayeredHeaderSeparatorOptions<THEME> = DDialogLayeredHeaderSeparatorOptions<THEME>
> extends DImageBase<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogLayeredHeaderSeparator";
	}
}
