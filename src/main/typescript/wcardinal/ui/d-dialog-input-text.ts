/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputText, DInputTextOptions } from "./d-input-text";

export interface DDialogInputTextOptions<
	THEME extends DThemeDialogInputText
> extends DDialogInputOptions<string, DInputTextOptions, THEME> {

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
			this.ok();
		});
		return result;
	}

	protected toInputOptions( options?: DInputTextOptions ): DInputTextOptions {
		if( options ) {
			if( options.weight === undefined ) {
				options.weight = 1;
			}
			return options;
		}
		return {
			weight: 1
		};
	}

	protected getType(): string {
		return "DDialogInputText";
	}
}
