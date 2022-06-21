/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputReal, DInputRealOptions } from "./d-input-real";

export interface DDialogInputRealInputOptions extends DInputRealOptions {
	margin?: number;
}

export interface DDialogInputRealOptions<THEME extends DThemeDialogInputReal>
	extends DDialogInputOptions<number, DDialogInputRealInputOptions, THEME> {}

export interface DThemeDialogInputReal extends DThemeDialogInput {}

export class DDialogInputReal<
	THEME extends DThemeDialogInputReal = DThemeDialogInputReal,
	OPTIONS extends DDialogInputRealOptions<THEME> = DDialogInputRealOptions<THEME>
> extends DDialogInput<number, DInputReal, DDialogInputRealInputOptions, THEME, OPTIONS> {
	protected newInput(options?: DDialogInputRealInputOptions): DInputReal {
		const result = new DInputReal(this.toInputOptions(options));
		result.on("enter", () => {
			this.ok();
		});
		return result;
	}

	protected toInputOptions(
		options?: DDialogInputRealInputOptions
	): DDialogInputRealInputOptions | undefined {
		if (options) {
			if (options.weight === undefined) {
				options.weight = 1;
			}
			return options;
		}
		return {
			weight: 1
		};
	}

	protected getType(): string {
		return "DDialogInputReal";
	}
}
