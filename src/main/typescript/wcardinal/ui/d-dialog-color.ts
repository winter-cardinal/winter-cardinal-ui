/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DColorAndAlpha } from "./d-color-and-alpha";
import { DDialogFitted, DDialogFittedOptions, DThemeDialogFitted } from "./d-dialog-fitted";
import { DPickerColor, DPickerColorOptions } from "./d-picker-color";
import { DPickerColorRecent } from "./d-picker-color-recent";

export interface DDialogColorOptions<THEME extends DThemeDialogColor = DThemeDialogColor>
	extends DDialogFittedOptions<DColorAndAlpha, THEME> {
	picker?: DPickerColorOptions;
}

export interface DThemeDialogColor extends DThemeDialogFitted {}

export class DDialogColor<
	THEME extends DThemeDialogColor = DThemeDialogColor,
	OPTIONS extends DDialogColorOptions<THEME> = DDialogColorOptions<THEME>
> extends DDialogFitted<DColorAndAlpha, THEME, OPTIONS> {
	protected _picker?: DPickerColor;

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		const result = super.newContentChildren(theme, options);
		result.push(this.picker);
		return result;
	}

	protected onOk(value: DColorAndAlpha | PromiseLike<DColorAndAlpha>): void {
		super.onOk(value);

		const picker = this.picker;
		const recent = picker.recent;
		if (!recent.contains(picker.new)) {
			recent.add(picker.new);
		}
	}

	get current(): DColorAndAlpha {
		return this.picker.current;
	}

	get new(): DColorAndAlpha {
		return this.picker.new;
	}

	get recent(): DPickerColorRecent {
		return this.picker.recent;
	}

	get picker(): DPickerColor {
		let result = this._picker;
		if (result == null) {
			result = new DPickerColor(this._options?.picker);
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): DColorAndAlpha | PromiseLike<DColorAndAlpha> {
		return this.picker.new;
	}

	protected getType(): string {
		return "DDialogColor";
	}
}
