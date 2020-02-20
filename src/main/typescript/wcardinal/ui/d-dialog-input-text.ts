/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DInputTextAndLabel } from "./d-input-text-and-label";
import { DLayoutVertical } from "./d-layout-vertical";

export interface DDialogInputTextOptions<
	THEME extends DThemeDialogInputText
> extends DDialogCommandOptions<THEME> {
	label?: string;
}

export interface DThemeDialogInputText extends DThemeDialogCommand {
	getLabel(): string;
	getLabelWidth(): number;
}

export class DDialogInputText<
	THEME extends DThemeDialogInputText = DThemeDialogInputText,
	OPTIONS extends DDialogInputTextOptions<THEME> = DDialogInputTextOptions<THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _inputAndLabel!: DInputTextAndLabel;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );

		const theme = this.theme;
		this._inputAndLabel = new DInputTextAndLabel({
			parent: layout,
			width: "padding", height: "auto",
			input: {
				weight: 1,
				on: {
					enter: () => {
						this.onOk();
					}
				}
			},
			label: {
				width: theme.getLabelWidth(),
				text: {
					value: ( options != null && options.label != null ?
						options.label : theme.getLabel()
					)
				}
			},
			space: {
				width: theme.getLabelWidth()
			}
		});
	}

	get input() {
		return this._inputAndLabel.input;
	}

	get value(): string {
		return this._inputAndLabel.input.value;
	}

	set value( value: string ) {
		this._inputAndLabel.input.value = value;
	}

	protected getType(): string {
		return "DDialogInputText";
	}
}
