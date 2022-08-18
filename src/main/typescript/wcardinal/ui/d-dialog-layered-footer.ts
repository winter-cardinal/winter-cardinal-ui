/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import { DButtonPrimary } from "./d-button-primary";
import {
	DLayoutHorizontal,
	DLayoutHorizontalOptions,
	DThemeLayoutHorizontal
} from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";

export interface DDialogLayeredFooterButtonOptions {
	/**
	 * A ok button label.
	 */
	ok?: string | null;

	/**
	 * A cancel button label.
	 */
	cancel?: string | null;
}

export interface DDialogLayeredFooterOptions<
	THEME extends DThemeDialogLayeredFooter = DThemeDialogLayeredFooter
> extends DLayoutHorizontalOptions<THEME> {
	button?: DDialogLayeredFooterButtonOptions;
}

export interface DThemeDialogLayeredFooter extends DThemeLayoutHorizontal {
	getButtonOk(): string | null;
	getButtonCancel(): string | null;
}

export interface DDialogLayeredFooterParent {
	ok(): void;
	cancel(): void;
}

export class DDialogLayeredFooter<
	THEME extends DThemeDialogLayeredFooter = DThemeDialogLayeredFooter,
	OPTIONS extends DDialogLayeredFooterOptions<THEME> = DDialogLayeredFooterOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _parent: DDialogLayeredFooterParent;
	protected _buttonOk?: DButton<string> | null;
	protected _buttonCancel?: DButton<string> | null;

	constructor(parent: DDialogLayeredFooterParent, options?: OPTIONS) {
		super(options);
		this._parent = parent;

		const buttonOk = this.buttonOk;
		const buttonCancel = this.buttonCancel;
		if (buttonOk != null || buttonCancel != null) {
			this.addChild(this.newButtonSpace());
			if (buttonCancel) {
				this.addChild(buttonCancel);
			}
			if (buttonOk) {
				this.addChild(buttonOk);
			}
			this.addChild(this.newButtonSpace());
		}
	}

	get buttonCancel(): DButton<string> | null {
		let result = this._buttonCancel;
		if (result === undefined) {
			result = this.newButtonCancel();
			this._buttonCancel = result;
		}
		return result;
	}

	protected newButtonCancel(): DButton<string> | null {
		let cancel = this._options?.button?.cancel;
		if (cancel === undefined) {
			cancel = this.theme.getButtonCancel();
		}
		if (cancel != null) {
			return new DButtonPrimary<string>({
				text: {
					value: cancel
				},
				on: {
					active: (): void => {
						this._parent.cancel();
					}
				}
			});
		}
		return null;
	}

	get buttonOk(): DButton<string> | null {
		let result = this._buttonOk;
		if (result === undefined) {
			result = this.newButtonOk();
			this._buttonOk = result;
		}
		return result;
	}

	protected newButtonOk(): DButton<string> | null {
		let ok = this._options?.button?.ok;
		if (ok === undefined) {
			ok = this.theme.getButtonOk();
		}
		if (ok != null) {
			if (this.buttonCancel != null) {
				return new DButton<string>({
					text: {
						value: ok
					},
					on: {
						active: (): void => {
							this._parent.ok();
						}
					}
				});
			} else {
				return new DButtonPrimary<string>({
					text: {
						value: ok
					},
					on: {
						active: (): void => {
							this._parent.ok();
						}
					}
				});
			}
		}
		return null;
	}

	protected newButtonSpace(): DLayoutSpace {
		return new DLayoutSpace({
			weight: 1
		});
	}

	protected getType(): string {
		return "DDialogLayeredFooter";
	}
}
