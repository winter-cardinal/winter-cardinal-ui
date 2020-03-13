/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DLink, DLinkOptions, DThemeLink } from "./d-link";

export interface DButtonLinkOptions<
	VALUE = unknown,
	THEME extends DThemeButtonLink = DThemeButtonLink
> extends DButtonBaseOptions<VALUE, THEME>, DLinkOptions {

}

export interface DThemeButtonLink extends DThemeButtonBase, DThemeLink {

}

export class DButtonLink<
	VALUE = unknown,
	THEME extends DThemeButtonLink = DThemeButtonLink,
	OPTIONS extends DButtonLinkOptions<VALUE, THEME> = DButtonLinkOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected _link!: DLink;

	protected initOnClick( options?: OPTIONS ): void {
		const link = new DLink( this.theme, options );
		this._link = link;
		link.apply( this, ( e: interaction.InteractionEvent ): void => {
			this.onClick( e );
		});
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		this.open( this._link.inNewWindow( e ) );
	}

	open( inNewWindow: boolean ): void {
		this._link.open( inNewWindow );
	}

	protected getType(): string {
		return "DButtonLink";
	}
}
