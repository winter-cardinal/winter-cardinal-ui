/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import { DButtonPrimary } from "./d-button-primary";
import { DDialog, DDialogOptions, DThemeDialog } from "./d-dialog";
import { DInputTextAndLabel } from "./d-input-text-and-label";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";

export interface DDialogInputTextOptions<THEME extends DThemeDialog> extends DDialogOptions<THEME> {
	ok?: string;
	cancel?: string;
	label?: string;
}

export interface DThemeDialogInputText extends DThemeDialog {
	getOk(): string;
	getCancel(): string;
	getLabel(): string;
	getLabelWidth(): number;
}

export class DDialogInputText<
	THEME extends DThemeDialogInputText = DThemeDialogInputText,
	OPTIONS extends DDialogInputTextOptions<THEME> = DDialogInputTextOptions<THEME>
> extends DDialog<THEME, OPTIONS> {
	protected _input: DInputTextAndLabel;

	constructor( options?: OPTIONS ) {
		super( options );

		const theme = this.theme;

		const layout = new DLayoutVertical({
			parent: this,
			x: "padding", y: "padding",
			width: "padding", height: "auto"
		});

		// Input
		this._input = new DInputTextAndLabel({
			parent: layout,
			width: "padding", height: "auto",
			input: {
				weight: 1,
				on: {
					enter: () => {
						this.close();
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

		// Buttons
		new DLayoutHorizontal({
			parent: layout,
			width: "padding", height: "auto",
			padding: {
				top: this.padding.getBottom()
			},
			children: [
				new DLayoutSpace({
					weight: 1
				}),
				new DButtonPrimary({
					text: {
						value: ( options != null && options.ok != null ?
							options.ok : theme.getOk()
						)
					},
					on: {
						active: () => {
							this.close();
							this.onOk();
						}
					}
				}),
				new DButton({
					text: {
						value: ( options != null && options.cancel != null ?
							options.cancel : theme.getCancel()
						)
					},
					on: {
						active: () => {
							this.close();
							this.onCancel();
						}
					}
				}),
				new DLayoutSpace({
					weight: 1
				})
			]
		});
	}

	get input() {
		return this._input.input;
	}

	protected onOk() {
		this.emit( "ok", this._input.input.value, this );
	}

	protected onCancel() {
		this.emit( "cancel", this );
	}

	protected getType(): string {
		return "DDialogInputText";
	}
}
