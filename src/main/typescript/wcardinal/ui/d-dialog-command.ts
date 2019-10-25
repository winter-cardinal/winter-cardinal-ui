/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import { DButtonPrimary } from "./d-button-primary";
import { DCoordinate } from "./d-coordinate";
import { DDialog, DDialogOptions, DThemeDialog } from "./d-dialog";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";

export interface DDialogCommandOptions<
	THEME extends DThemeDialogCommand = DThemeDialogCommand
> extends DDialogOptions<THEME> {
	ok?: string;
	cancel?: string;
}

export interface DThemeDialogCommand extends DThemeDialog {
	getOk(): string | null;
	getCancel(): string | null;
	getLayoutX(): DCoordinate;
	getLayoutY(): DCoordinate;
	getLayoutWidth(): DCoordinate;
	getLayoutHeight(): DCoordinate;
}

export class DDialogCommand<
	THEME extends DThemeDialogCommand = DThemeDialogCommand,
	OPTIONS extends DDialogCommandOptions<THEME> = DDialogCommandOptions<THEME>
> extends DDialog<THEME, OPTIONS> {
	protected _promise: Promise<void> | null = null;
	protected _resolve: (() => void) | null = null;
	protected _reject: (() => void) | null = null;
	protected _buttonLayout?: DLayoutHorizontal;
	protected _buttonOk?: DButton;
	protected _buttonCancel?: DButton;

	protected init( options?: OPTIONS ) {
		super.init( options );

		const theme = this.theme;
		const layout = new DLayoutVertical({
			parent: this,
			x: theme.getLayoutX(),
			y: theme.getLayoutY(),
			width: theme.getLayoutWidth(),
			height: theme.getLayoutHeight()
		});

		this.onInit( layout, options );

		// Buttons
		const ok = ( options && options.ok || theme.getOk() );
		const cancel = ( options && options.cancel || theme.getCancel() );
		if( ok != null || cancel != null ) {
			const buttonLayout = new DLayoutHorizontal({
				parent: layout,
				width: "padding", height: "auto",
				padding: {
					top: this.padding.getTop()
				}
			});
			this._buttonLayout = buttonLayout;
			new DLayoutSpace({
				parent: buttonLayout,
				weight: 1
			});
			if( ok != null && cancel != null ) {
				this._buttonCancel = new DButtonPrimary({
					parent: buttonLayout,
					text: {
						value: cancel
					},
					on: {
						active: (): void => {
							this.onCancel();
						}
					}
				});
				this._buttonOk = new DButton({
					parent: buttonLayout,
					text: {
						value: ok
					},
					on: {
						active: (): void => {
							this.onOk();
						}
					}
				});
			} else if( ok != null ) {
				this._buttonOk = new DButtonPrimary({
					parent: buttonLayout,
					text: {
						value: ok
					},
					on: {
						active: (): void => {
							this.onOk();
						}
					}
				});
			} else if( cancel != null ) {
				this._buttonCancel = new DButtonPrimary({
					parent: buttonLayout,
					text: {
						value: cancel
					},
					on: {
						active: (): void => {
							this.onCancel();
						}
					}
				});
			}
			new DLayoutSpace({
				parent: buttonLayout,
				weight: 1
			});
		}
	}

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		// OVERRIDE THIS
	}

	open(): Promise<void> {
		super.open();
		return this._promise!;
	}

	protected onOpen() {
		super.onOpen();

		if( this._promise == null ) {
			this._promise = new Promise(( resolve, reject ): void => {
				this._resolve = resolve;
				this._reject = reject;
			});
		}
	}

	protected onClose() {
		super.onClose();

		const reject = this._reject;
		this._promise = null;
		this._resolve = null;
		this._reject = null;

		if( reject != null ) {
			reject();
		}
	}

	protected onOk() {
		const resolve = this._resolve;
		this._promise = null;
		this._resolve = null;
		this._reject = null;

		this.close();

		if( resolve != null ) {
			resolve();
		}

		this.emit( "ok", this );
	}

	protected onCancel() {
		const reject = this._reject;
		this._promise = null;
		this._resolve = null;
		this._reject = null;

		this.close();

		if( reject != null ) {
			reject();
		}

		this.emit( "cancel", this );
	}

	protected getType(): string {
		return "DDialogCommand";
	}
}
