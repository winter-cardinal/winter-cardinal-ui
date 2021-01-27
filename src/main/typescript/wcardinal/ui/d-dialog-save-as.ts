/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCommandSaveAs } from "./d-command-save-as";
import { DControllers } from "./d-controllers";
import { DDialogInputText, DDialogInputTextOptions, DThemeDialogInputText } from "./d-dialog-input-text";
import { isString } from "./util/is-string";

export interface DDialogSaveAsOptions<THEME extends DThemeDialogSaveAs> extends DDialogInputTextOptions<THEME> {

}

export interface DThemeDialogSaveAs extends DThemeDialogInputText {

}

export class DDialogSaveAs<
	THEME extends DThemeDialogSaveAs = DThemeDialogSaveAs,
	OPTIONS extends DDialogSaveAsOptions<THEME> = DDialogSaveAsOptions<THEME>
> extends DDialogInputText<THEME, OPTIONS> {
	protected onOpen(): void {
		const name = DControllers.getDocumentController().getName();
		if( name != null ) {
			this.input.value = name;
		}
		super.onOpen();
	}

	protected onOk( value: string | PromiseLike<string> ): void {
		super.onOk( value );
		const commandController = DControllers.getCommandController();
		if( isString( value ) ) {
			commandController.push( new DCommandSaveAs( value ) );
		} else {
			value.then(( resolved: string ): void => {
				commandController.push( new DCommandSaveAs( resolved ) );
			});
		}
	}

	protected getType(): string {
		return "DDialogSaveAs";
	}
}
