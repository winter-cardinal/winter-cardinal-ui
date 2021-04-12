/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInput, DDialogInputOptions, DThemeDialogInput } from "./d-dialog-input";
import { DInputBoolean, DInputBooleanOptions } from "./d-input-boolean";

export interface DDialogInputBooleanOptions<THEME extends DThemeDialogInputBoolean>
	extends DDialogInputOptions<boolean, DInputBooleanOptions, THEME> {}

export interface DThemeDialogInputBoolean extends DThemeDialogInput {}

export class DDialogInputBoolean<
	THEME extends DThemeDialogInputBoolean = DThemeDialogInputBoolean,
	OPTIONS extends DDialogInputBooleanOptions<THEME> = DDialogInputBooleanOptions<THEME>
> extends DDialogInput<boolean, DInputBoolean, DInputBooleanOptions, THEME, OPTIONS> {
	protected newInput(options?: DInputBooleanOptions): DInputBoolean {
		return new DInputBoolean(this.toInputOptions(options));
	}

	protected toInputOptions(options?: DInputBooleanOptions): DInputBooleanOptions {
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
		return "DDialogInputBoolean";
	}
}
