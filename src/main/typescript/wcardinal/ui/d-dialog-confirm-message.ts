/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DDialogConfirmMessageOptions<
	VALUE = unknown,
	THEME extends DThemeDialogConfirmMessage<VALUE> = DThemeDialogConfirmMessage<VALUE>
> extends DImageOptions<VALUE, THEME> {

}

export interface DThemeDialogConfirmMessage<VALUE> extends DThemeImage<VALUE> {

}

export class DDialogConfirmMessage<
	VALUE = unknown,
	THEME extends DThemeDialogConfirmMessage<VALUE> = DThemeDialogConfirmMessage<VALUE>,
	OPTIONS extends DDialogConfirmMessageOptions<VALUE, THEME> = DDialogConfirmMessageOptions<VALUE, THEME>
> extends DImage<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );
		this.state.isFocusable = false;
	}

	protected getType(): string {
		return "DDialogConfirmMessage";
	}
}
