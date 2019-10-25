/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandSaveAs } from "./d-command-save-as";
import { DControllers } from "./d-controllers";
import { DDialogInputText, DDialogInputTextOptions, DThemeDialogInputText } from "./d-dialog-input-text";

export interface DDialogSaveAsOptions<THEME extends DThemeDialogSaveAs> extends DDialogInputTextOptions<THEME> {

}

export interface DThemeDialogSaveAs extends DThemeDialogInputText {

}

export class DDialogSaveAs<
	THEME extends DThemeDialogSaveAs = DThemeDialogSaveAs,
	OPTIONS extends DDialogSaveAsOptions<THEME> = DDialogSaveAsOptions<THEME>
> extends DDialogInputText<THEME, OPTIONS> {
	protected onOpen() {
		const name = DControllers.getDocumentController().getName();
		if( name != null ) {
			this._input.input.value = name;
		}
		super.onOpen();
	}

	protected onOk() {
		super.onOk();

		const name = this._input.input.value;
		DControllers.getCommandController().push( new DCommandSaveAs( name ) );
	}

	protected getType(): string {
		return "DDialogSaveAs";
	}
}
