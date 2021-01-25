/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker, DThemeLink } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DLinks } from "./d-links";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
import { isString } from "./util/is-string";

export type DMenuItemLinkUrlMaker = ( item: DMenuItemLink ) => string | null | Promise<string | null>;
export type DMenuItemLinkChecker = ( item: DMenuItemLink ) => boolean | Promise<boolean>;

export interface DMenuItemLinkOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink
> extends DMenuItemTextOptions<VALUE, THEME> {
	url?: string | DMenuItemLinkUrlMaker;
	target?: DLinkTarget | (keyof typeof DLinkTarget);
	checker?: DMenuItemLinkChecker;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DThemeMenuItemLink extends DThemeMenuItemText, DThemeLink {

}

export class DMenuItemLink<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink,
	OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>
> extends DMenuItemText<VALUE, THEME, OPTIONS> {
	protected _link!: DLink;

	protected toLinkOptions( options?: OPTIONS ): DLinkOptions | undefined {
		if( options ) {
			return {
				url: this.toUrl( options.url ),
				target: options.target,
				checker: this.toChecker( options.checker ),
				menu: options.menu
			};
		}
		return undefined;
	}

	protected toUrl( url?: string | DMenuItemLinkUrlMaker ): string | DLinkUrlMaker | undefined {
		if( isString( url ) || url == null ) {
			return url;
		} else {
			return () => {
				return url( this );
			};
		}
	}

	protected toChecker( checker?: DMenuItemLinkChecker ): DLinkChecker | undefined {
		if( checker != null ) {
			return () => {
				return checker( this );
			};
		}
		return undefined;
	}

	protected init( options?: OPTIONS ): void {
		this._link = new DLink( this.theme, this.toLinkOptions( options ) );
		super.init( DLinks.toStateOptions( options?.target, options ) );
	}

	get link(): DLink {
		return this._link;
	}

	protected initOnClick( options?: OPTIONS ): void {
		this._link.apply( this, ( e ) => this.onSelect( e ) );
	}

	protected getType(): string {
		return "DMenuItemLink";
	}

	protected onSelect( e: KeyboardEvent | interaction.InteractionEvent ): void {
		super.onSelect( e );
		this._link.open( e );
	}

	open( inNewWindow: boolean ): void {
		this._link.open( inNewWindow );
	}

	protected onShortcut( e: KeyboardEvent ) {
		super.onShortcut( e );
		this.onSelect( e );
	}

	static isCompatible<VALUE>( options: DMenuItemOptionsUnion<VALUE> ): options is DMenuItemLinkOptions<VALUE> {
		return "url" in options;
	}
}
