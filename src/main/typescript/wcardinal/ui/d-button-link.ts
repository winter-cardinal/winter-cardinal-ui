/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DButtonBaseWhen } from "./d-button-base-when";
import { DLink, DLinkOptions, DThemeLink } from "./d-link";

export interface DButtonLinkOptions<
	VALUE = unknown,
	THEME extends DThemeButtonLink<VALUE> = DThemeButtonLink<VALUE>
> extends DButtonBaseOptions<VALUE, THEME>, DLinkOptions {

}

export interface DThemeButtonLink<VALUE = unknown> extends DThemeButtonBase<VALUE>, DThemeLink {

}

export class DButtonLink<
	VALUE = unknown,
	THEME extends DThemeButtonLink<VALUE> = DThemeButtonLink<VALUE>,
	OPTIONS extends DButtonLinkOptions<VALUE, THEME> = DButtonLinkOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected _link!: DLink;

	protected initOnClick( when: DButtonBaseWhen, theme: THEME, options?: OPTIONS ): void {
		const link = new DLink( theme, options );
		this._link = link;
		link.add( this, ( e: interaction.InteractionEvent ): void => {
			if( when === DButtonBaseWhen.CLICKED ) {
				this.onClick( e );
			}
		});
	}

	get link(): DLink {
		return this._link;
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		this._link.open( e );
	}

	open( inNewWindow: boolean ): void {
		this._link.open( inNewWindow );
	}

	protected getType(): string {
		return "DButtonLink";
	}
}
