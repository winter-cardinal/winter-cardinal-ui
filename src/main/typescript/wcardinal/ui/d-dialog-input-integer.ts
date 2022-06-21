/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputInteger, DInputIntegerOptions } from "./d-input-integer";

export interface DDialogInputIntegerInputOptions extends DInputIntegerOptions {
	margin?: number;
}

export interface DDialogInputIntegerOptions<THEME extends DThemeDialogInputInteger>
	extends DDialogInputOptions<number, DDialogInputIntegerInputOptions, THEME> {}

export interface DThemeDialogInputInteger extends DThemeDialogInput {}

export class DDialogInputInteger<
	THEME extends DThemeDialogInputInteger = DThemeDialogInputInteger,
	OPTIONS extends DDialogInputIntegerOptions<THEME> = DDialogInputIntegerOptions<THEME>
> extends DDialogInput<number, DInputInteger, DDialogInputIntegerInputOptions, THEME, OPTIONS> {
	protected newInput(options?: DDialogInputIntegerInputOptions): DInputInteger {
		const result = new DInputInteger(this.toInputOptions(options));
		result.on("enter", () => {
			this.ok();
		});
		return result;
	}

	protected toInputOptions(
		options?: DDialogInputIntegerInputOptions
	): DDialogInputIntegerInputOptions {
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
		return "DDialogInputInteger";
	}
}
