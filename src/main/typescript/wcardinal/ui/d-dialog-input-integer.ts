/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputInteger, DInputIntegerOptions } from "./d-input-integer";

export interface DDialogInputIntegerOptions<
	THEME extends DThemeDialogInputInteger
> extends DDialogInputOptions<DInputIntegerOptions, THEME> {

}

export interface DThemeDialogInputInteger extends DThemeDialogInput {

}

export class DDialogInputInteger<
	THEME extends DThemeDialogInputInteger = DThemeDialogInputInteger,
	OPTIONS extends DDialogInputIntegerOptions<THEME> = DDialogInputIntegerOptions<THEME>
> extends DDialogInput<number, DInputInteger, DInputIntegerOptions, THEME, OPTIONS> {
	protected newInput( options?: DInputIntegerOptions ): DInputInteger {
		const result = new DInputInteger( this.toInputOptions( options ) );
		result.on( "enter", () => {
			this.onOk();
		});
		return result;
	}

	protected toInputOptions( options?: DInputIntegerOptions ): DInputIntegerOptions {
		const result = options || {};
		if( result.weight === undefined ) {
			result.weight = 1;
		}
		return result;
	}

	protected getType(): string {
		return "DDialogInputInteger";
	}
}
