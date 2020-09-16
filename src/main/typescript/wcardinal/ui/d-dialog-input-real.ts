/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputReal, DInputRealOptions } from "./d-input-real";

export interface DDialogInputRealOptions<
	THEME extends DThemeDialogInputReal
> extends DDialogInputOptions<DInputRealOptions, THEME> {

}

export interface DThemeDialogInputReal extends DThemeDialogInput {

}

export class DDialogInputReal<
	THEME extends DThemeDialogInputReal = DThemeDialogInputReal,
	OPTIONS extends DDialogInputRealOptions<THEME> = DDialogInputRealOptions<THEME>
> extends DDialogInput<number, DInputReal, DInputRealOptions, THEME, OPTIONS> {
	protected newInput( options?: DInputRealOptions ): DInputReal {
		const result = new DInputReal( this.toInputOptions( options ) );
		result.on( "enter", () => {
			this.onOk();
		});
		return result;
	}

	protected toInputOptions( options?: DInputRealOptions ): DInputRealOptions {
		const result = options || {};
		if( result.weight === undefined ) {
			result.weight = 1;
		}
		return result;
	}

	protected getType(): string {
		return "DDialogInputReal";
	}
}
