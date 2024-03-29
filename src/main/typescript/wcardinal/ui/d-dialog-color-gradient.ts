/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DColorGradient } from "./d-color-gradient";
import { DColorGradientObservable } from "./d-color-gradient-observable";
import { DDialogFitted, DDialogFittedOptions, DThemeDialogFitted } from "./d-dialog-fitted";
import { DPickerColorGradient, DPickerColorGradientOptions } from "./d-picker-color-gradient";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";

export interface DDialogColorGradientOptions<
	THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient
> extends DDialogFittedOptions<DColorGradient, THEME> {
	picker?: DPickerColorGradientOptions;
}

export interface DThemeDialogColorGradient extends DThemeDialogFitted {}

export class DDialogColorGradient<
	THEME extends DThemeDialogColorGradient = DThemeDialogColorGradient,
	OPTIONS extends DDialogColorGradientOptions<THEME> = DDialogColorGradientOptions<THEME>
> extends DDialogFitted<DColorGradient, THEME, OPTIONS> {
	protected _picker?: DPickerColorGradient;

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		const result = super.newContentChildren(theme, options);
		result.push(this.picker);
		return result;
	}

	protected onOk(value: DColorGradient | PromiseLike<DColorGradient>): void {
		super.onOk(value);

		const picker = this.picker;
		const data = picker.value;
		const recent = picker.recent;
		if (!recent.contains(data)) {
			recent.add(data.toObject());
		}
	}

	get value(): DColorGradientObservable {
		return this.picker.value;
	}

	get recent(): DPickerColorGradientRecent {
		return this.picker.recent;
	}

	get picker(): DPickerColorGradient {
		let result = this._picker;
		if (result == null) {
			result = new DPickerColorGradient(this._options?.picker);
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): DColorGradient | PromiseLike<DColorGradient> {
		return this.picker.value;
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		this.picker.onKeyDown(e);
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DDialogColorGradient";
	}
}
