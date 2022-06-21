/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import { DDialogLayered, DDialogLayeredOptions, DThemeDialogLayered } from "./d-dialog-layered";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";

export interface DDialogInputInputOptions {
	margin?: number;
}

export interface DDialogInputOptions<
	VALUE = void,
	INPUT_OPTIONS extends DDialogInputInputOptions = DDialogInputInputOptions,
	THEME extends DThemeDialogInput = DThemeDialogInput
> extends DDialogLayeredOptions<VALUE, THEME> {
	input?: INPUT_OPTIONS;
}

export interface DThemeDialogInput extends DThemeDialogLayered {
	getInputMargin(): number;
}

export abstract class DDialogInput<
	VALUE = void,
	INPUT extends DBase & { value: VALUE } = any,
	INPUT_OPTIONS extends DDialogInputInputOptions = DDialogInputInputOptions,
	THEME extends DThemeDialogInput = DThemeDialogInput,
	OPTIONS extends DDialogInputOptions<VALUE, INPUT_OPTIONS, THEME> = DDialogInputOptions<
		VALUE,
		INPUT_OPTIONS,
		THEME
	>
> extends DDialogLayered<VALUE, THEME, OPTIONS> {
	protected _input?: INPUT;
	protected _inputLayout?: DLayoutHorizontal | null;

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		const result = super.newContentChildren(theme, options);
		result.push(this.inputLayout);
		return result;
	}

	protected toInputMargin(theme: THEME, options?: OPTIONS): number {
		return options?.input?.margin ?? theme.getInputMargin();
	}

	protected get inputLayout(): DLayoutHorizontal {
		let result = this._inputLayout;
		if (result == null) {
			result = this.newInputLayout();
			this._inputLayout = result;
		}
		return result;
	}

	protected newInputLayout(): DLayoutHorizontal {
		const margin = this.toInputMargin(this.theme, this._options);
		return new DLayoutHorizontal({
			width: "padding",
			height: "auto",
			margin: 0,
			children: [
				new DLayoutSpace({ width: margin }),
				this.input,
				new DLayoutSpace({ width: margin })
			]
		});
	}

	get input(): INPUT {
		let result = this._input;
		if (result == null) {
			const options = this._options;
			result = this.newInput(options?.input);
			this._input = result;
		}
		return result;
	}

	protected abstract newInput(options?: INPUT_OPTIONS): INPUT;

	get value(): VALUE {
		return this.input.value;
	}

	set value(value: VALUE) {
		this.input.value = value;
	}

	protected getResolvedValue(): VALUE | PromiseLike<VALUE> {
		return this.input.value;
	}

	protected getType(): string {
		return "DDialogInput";
	}
}
