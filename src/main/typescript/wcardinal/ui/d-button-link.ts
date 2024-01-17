/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DLink, DLinkOptions } from "./d-link";

export interface DButtonLinkOptions<
	VALUE = unknown,
	THEME extends DThemeButtonLink<VALUE> = DThemeButtonLink<VALUE>
> extends DButtonBaseOptions<VALUE, THEME>,
		DLinkOptions {}

export interface DThemeButtonLink<VALUE = unknown> extends DThemeButtonBase<VALUE> {}

export class DButtonLink<
	VALUE = unknown,
	THEME extends DThemeButtonLink<VALUE> = DThemeButtonLink<VALUE>,
	OPTIONS extends DButtonLinkOptions<VALUE, THEME> = DButtonLinkOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected _link?: DLink;

	protected onClick(e: InteractionEvent): void {
		if (!this.link.onClick(this, e)) {
			super.onClick(e);
		}
	}

	get link(): DLink {
		let result = this._link;
		if (result == null) {
			result = new DLink(this._options);
			this._link = result;
		}
		return result;
	}

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		super.onActivate(e);
		this.link.open(e);
	}

	open(inNewWindow: boolean): void {
		this.link.open(inNewWindow);
	}

	protected getType(): string {
		return "DButtonLink";
	}
}
