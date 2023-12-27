/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DButton } from "./d-button";
import { DButtonPrimary } from "./d-button-primary";
import {
	DLayoutHorizontal,
	DLayoutHorizontalOptions,
	DThemeLayoutHorizontal
} from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";

export interface DDialogLayeredFooterButtonSpaceOptions {
	/**
	 * True to make the left space.
	 */
	left?: boolean;

	/**
	 * True to make the right space.
	 */
	right?: boolean;
}

export interface DDialogLayeredFooterButtonOptions {
	/**
	 * A ok button label.
	 */
	ok?: string | null;

	/**
	 * A cancel button label.
	 */
	cancel?: string | null;

	/**
	 * A button spacer options.
	 */
	space?: DDialogLayeredFooterButtonSpaceOptions;
}

export interface DDialogLayeredFooterOptions<
	THEME extends DThemeDialogLayeredFooter = DThemeDialogLayeredFooter
> extends DLayoutHorizontalOptions<THEME> {
	button?: DDialogLayeredFooterButtonOptions;
}

export interface DThemeDialogLayeredFooter extends DThemeLayoutHorizontal {
	getButtonOk(): string | null;
	getButtonCancel(): string | null;
	isButtonSpaceLeftEnabled(): boolean;
	isButtonSpaceRightEnabled(): boolean;
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
	protected _buttonSpaceLeft?: DLayoutSpace | null;
	protected _buttonSpaceRight?: DLayoutSpace | null;
	protected _buttonOk?: DButton<string> | null;
	protected _buttonReset?: DButton<string> | null;
	protected _buttonCancel?: DButton<string> | null;

	constructor(parent: DDialogLayeredFooterParent, options?: OPTIONS) {
		super(options);
		this._parent = parent;
	}

	protected override init(options?: OPTIONS | undefined): void {
		super.init(options);

		const children = this.newChildren();
		if (0 < children.length) {
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child != null) {
					this.addChild(child);
				}
			}
		}
	}

	protected newChildren(): Array<DBase | null> {
		return [this.buttonSpaceLeft, this.buttonCancel, this.buttonOk, this.buttonSpaceRight];
	}

	get buttonSpaceLeft(): DLayoutSpace | null {
		let result = this._buttonSpaceLeft;
		if (result === undefined) {
			result = this.newButtonSpaceLeft();
			this._buttonSpaceLeft = result;
		}
		return result;
	}

	protected newButtonSpaceLeft(): DLayoutSpace | null {
		if (this._options?.button?.space?.left ?? this.theme.isButtonSpaceLeftEnabled()) {
			return new DLayoutSpace({
				weight: 1
			});
		}
		return null;
	}

	get buttonSpaceRight(): DLayoutSpace | null {
		let result = this._buttonSpaceRight;
		if (result === undefined) {
			result = this.newButtonSpaceRight();
			this._buttonSpaceRight = result;
		}
		return result;
	}

	protected newButtonSpaceRight(): DLayoutSpace | null {
		if (this._options?.button?.space?.right ?? this.theme.isButtonSpaceRightEnabled()) {
			return new DLayoutSpace({
				weight: 1
			});
		}
		return null;
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

	protected getType(): string {
		return "DDialogLayeredFooter";
	}
}
