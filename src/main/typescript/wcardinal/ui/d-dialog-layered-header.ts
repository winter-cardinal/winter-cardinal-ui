/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredHeaderButtonClose } from "./d-dialog-layered-header-button-close";
import { DDialogLayeredHeaderSeparator } from "./d-dialog-layered-header-separator";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DDialogLayeredHeaderButtonOptions {
	close?: boolean;
}

export interface DDialogLayeredHeaderOptions<
	THEME extends DThemeDialogLayeredHeader = DThemeDialogLayeredHeader
> extends DImageBaseOptions<string, THEME> {
	button?: DDialogLayeredHeaderButtonOptions;
	separator?: boolean;
}

export interface DThemeDialogLayeredHeader extends DThemeImageBase<string> {}

export interface DDialogLayeredHeaderParent {
	cancel(): void;
}

export class DDialogLayeredHeader<
	THEME extends DThemeDialogLayeredHeader = DThemeDialogLayeredHeader,
	OPTIONS extends DDialogLayeredHeaderOptions<THEME> = DDialogLayeredHeaderOptions<THEME>
> extends DImageBase<string, THEME, OPTIONS> {
	protected _parent: DDialogLayeredHeaderParent;
	protected _buttonClose?: DDialogLayeredHeaderButtonClose | null;
	protected _separator?: DDialogLayeredHeaderSeparator | null;

	constructor(parent: DDialogLayeredHeaderParent, options?: OPTIONS) {
		super(options);
		this._parent = parent;

		const separator = this.separator;
		if (separator) {
			this.addChild(separator);
		}

		const buttonClose = this.buttonClose;
		if (buttonClose) {
			this.addChild(buttonClose);
			buttonClose.on("active", (): void => {
				this._parent.cancel();
			});
		}
	}

	get buttonClose(): DDialogLayeredHeaderButtonClose | null {
		let result = this._buttonClose;
		if (result === undefined) {
			result = this.newButtonClose();
			this._buttonClose = result;
		}
		return result;
	}

	protected newButtonClose(): DDialogLayeredHeaderButtonClose | null {
		if (this._options?.button?.close !== false) {
			return new DDialogLayeredHeaderButtonClose();
		}
		return null;
	}

	get separator(): DDialogLayeredHeaderSeparator | null {
		let result = this._separator;
		if (result === undefined) {
			result = this.newSeparator();
			this._separator = result;
		}
		return result;
	}

	protected newSeparator(): DDialogLayeredHeaderSeparator | null {
		if (this._options?.separator !== false) {
			return new DDialogLayeredHeaderSeparator();
		}
		return null;
	}

	protected getType(): string {
		return "DDialogLayeredHeader";
	}
}
