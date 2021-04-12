/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import { DButtonPrimary } from "./d-button-primary";
import { DCoordinatePosition, DCoordinateSize } from "./d-coordinate";
import { DDialog, DDialogEvents, DDialogOptions, DThemeDialog } from "./d-dialog";
import { DDialogMode } from "./d-dialog-mode";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DDialogCommand} events.
 */
export interface DDialogCommandEvents<VALUE, EMITTER> extends DDialogEvents<EMITTER> {
	/**
	 * Triggered when a dialog is successfully finished.
	 *
	 * @param value a value
	 * @param emitter an emitter
	 */
	ok(value: VALUE, emitter: EMITTER): void;

	/**
	 * Triggered when a dialog is canceled.
	 *
	 * @param reason a reason why canceled
	 * @param emitter an emitter
	 */
	cancel(reason: any, emitter: EMITTER): void;
}

/**
 * {@link DDialogCommand} "on" options.
 */
export interface DDialogCommandOnOptions<VALUE, EMITTER>
	extends Partial<DDialogCommandEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDialogCommand} options.
 */
export interface DDialogCommandOptions<
	VALUE = unknown,
	THEME extends DThemeDialogCommand = DThemeDialogCommand,
	EMITTER = any
> extends DDialogOptions<THEME> {
	/**
	 * A ok button label.
	 */
	ok?: string;

	/**
	 * A cancel button label.
	 */
	cancel?: string;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DDialogCommandOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogCommand} theme.
 */
export interface DThemeDialogCommand extends DThemeDialog {
	getOk(): string | null;
	getCancel(): string | null;
	getLayoutX(): DCoordinatePosition;
	getLayoutY(): DCoordinatePosition;
	getLayoutWidth(): DCoordinateSize;
	getLayoutHeight(): DCoordinateSize;
	getLayoutMargin(): number | undefined;
}

/**
 * A dialog with "ok" and "cancel" buttons.
 */
export abstract class DDialogCommand<
	VALUE = void,
	THEME extends DThemeDialogCommand = DThemeDialogCommand,
	OPTIONS extends DDialogCommandOptions<VALUE, THEME> = DDialogCommandOptions<VALUE, THEME>
> extends DDialog<VALUE, THEME, OPTIONS> {
	protected _buttonLayout?: DLayoutHorizontal;
	protected _buttonOk?: DButton;
	protected _buttonCancel?: DButton;

	protected init(options?: OPTIONS): void {
		super.init(options);

		const theme = this.theme;
		const layout = new DLayoutVertical({
			parent: this,
			x: theme.getLayoutX(),
			y: theme.getLayoutY(),
			width: theme.getLayoutWidth(),
			height: theme.getLayoutHeight(),
			margin: theme.getLayoutMargin()
		});

		this.onInit(layout, options);

		// Buttons
		const ok = options?.ok ?? theme.getOk();
		const cancel = options?.cancel ?? theme.getCancel();
		if (ok != null || cancel != null) {
			const buttonLayout = new DLayoutHorizontal({
				parent: layout,
				width: "padding",
				height: "auto",
				padding: {
					top: Math.max(0, this.padding.getTop() - layout.margin.vertical)
				}
			});
			this._buttonLayout = buttonLayout;
			new DLayoutSpace({
				parent: buttonLayout,
				weight: 1
			});
			if (ok != null && cancel != null) {
				this._buttonCancel = new DButtonPrimary({
					parent: buttonLayout,
					text: {
						value: cancel
					},
					on: {
						active: (): void => {
							this.cancel();
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
							this.ok();
						}
					}
				});
			} else if (ok != null) {
				this._buttonOk = new DButtonPrimary({
					parent: buttonLayout,
					text: {
						value: ok
					},
					on: {
						active: (): void => {
							this.ok();
						}
					}
				});
			} else if (cancel != null) {
				this._buttonCancel = new DButtonPrimary({
					parent: buttonLayout,
					text: {
						value: cancel
					},
					on: {
						active: (): void => {
							this.cancel();
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

	protected onInit(layout: DLayoutVertical, options?: OPTIONS): void {
		// OVERRIDE THIS
	}

	ok(): void {
		this.onOk(this.getResolvedValue());
	}

	protected onOk(value: VALUE | PromiseLike<VALUE>): void {
		if (this._mode !== DDialogMode.MODELESS) {
			this.doResolve(value);
		}
		this.emit("ok", value, this);
	}

	cancel(): void {
		this.onCancel(this.getRejectReason());
	}

	protected onCancel(reason: any): void {
		if (this._mode !== DDialogMode.MODELESS) {
			this.doReject(reason);
		}
		this.emit("cancel", reason, this);
	}

	protected abstract getResolvedValue(): VALUE | PromiseLike<VALUE>;

	protected getRejectReason(): any {
		return undefined;
	}

	protected getType(): string {
		return "DDialogCommand";
	}
}
