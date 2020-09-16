/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputText, DInputTextOptions } from "./d-input-text";

export interface DDialogInputTextOptions<
	THEME extends DThemeDialogInputText
> extends DDialogInputOptions<DInputTextOptions, THEME> {

}

export interface DThemeDialogInputText extends DThemeDialogInput {

}

export class DDialogInputText<
	THEME extends DThemeDialogInputText = DThemeDialogInputText,
	OPTIONS extends DDialogInputTextOptions<THEME> = DDialogInputTextOptions<THEME>
> extends DDialogInput<string, DInputText, DInputTextOptions, THEME, OPTIONS> {
	protected newInput( options?: DInputTextOptions ): DInputText {
		const result = new DInputText( this.toInputOptions( options ) );
		result.on( "enter", () => {
			this.onOk();
		});
		return result;
	}

	protected toInputOptions( options?: DInputTextOptions ): DInputTextOptions {
		const result = options || {};
		if( result.weight === undefined ) {
			result.weight = 1;
		}
		return result;
	}

	protected getType(): string {
		return "DDialogInputText";
	}
}
