/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DDialogConfirmMessageOptions<
	THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage
> extends DImageOptions<string, THEME> {}

export interface DThemeDialogConfirmMessage extends DThemeImage<string> {}

export class DDialogConfirmMessage<
	THEME extends DThemeDialogConfirmMessage = DThemeDialogConfirmMessage,
	OPTIONS extends DDialogConfirmMessageOptions<THEME> = DDialogConfirmMessageOptions<THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DDialogConfirmMessage";
	}
}
