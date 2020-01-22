/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DMenu, DMenuOptions } from "./d-menu";
import { Closeable } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemLinkMenuItemId } from "./d-menu-item-link-menu-item-id";
import { DMenuItemLinkState } from "./d-menu-item-link-state";
import { DMenuItemLinkTarget } from "./d-menu-item-link-target";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
import { DMenus } from "./d-menus";
import { isString } from "./util/is-string";
import { UtilClipboard } from "./util/util-clipboard";
import { UtilPointerEvent } from "./util/util-pointer-event";

export type DMenuItemLinkLinkMaker = ( item: DMenuItemLink ) => string | null | Promise<string | null>;
export type DMenuItemLinkChecker = ( item: DMenuItemLink ) => boolean | Promise<boolean>;

export interface DMenuItemLinkOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink
> extends DMenuItemTextOptions<VALUE, THEME> {
	link: string | DMenuItemLinkLinkMaker;
	target?: DMenuItemLinkTarget;
	checker?: DMenuItemLinkChecker;
	menu?: DMenuOptions<DMenuItemLinkMenuItemId> | DMenu<DMenuItemLinkMenuItemId>;
}

export interface DThemeMenuItemLink extends DThemeMenuItemText {
	getMenuOptions(): DMenuOptions<DMenuItemLinkMenuItemId>;
}

export class DMenuItemLink<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink,
	OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>
> extends DMenuItemText<VALUE, THEME, OPTIONS> {
	protected _link: string | DMenuItemLinkLinkMaker;
	protected _target?: DMenuItemLinkTarget;
	protected _checker?: DMenuItemLinkChecker;
	protected _menu?: DMenu<DMenuItemLinkMenuItemId>;
	protected _menuOptions?: DMenuOptions<DMenuItemLinkMenuItemId> | DMenu<DMenuItemLinkMenuItemId>;

	constructor( options: OPTIONS ) {
		super( options );
		this._link = options.link;
		this._target = options.target;
		this._checker = options.checker;
		this._menuOptions = options.menu;
	}

	protected init( options: OPTIONS ): void {
		if( options.target === DMenuItemLinkTarget.NEW_WINDOW ) {
			options.state = ( options.state || DBaseState.NONE ) || DMenuItemLinkState.NEW_WINDOW;
		}
		super.init( options );
	}

	get link(): string | null | Promise<string | null> {
		const link = this._link;
		if( isString( link ) || link == null ) {
			return link;
		} else {
			return link( this );
		}
	}

	get menu(): DMenu<DMenuItemLinkMenuItemId> {
		let menu = this._menu;
		if( menu == null ) {
			const theme = this.theme;
			const options = this._menuOptions || theme.getMenuOptions();
			menu = this.toMenu( options );
			this._menu = menu;
			menu.on( "select", (
				value: DMenuItemLinkMenuItemId,
				item: DMenuItem<DMenuItemLinkMenuItemId>,
				closeable: Closeable
			): void => {
				this.onMenuSelect( value, item, closeable );
			});
		}
		return menu;
	}

	protected toMenu(
		options: DMenuOptions<DMenuItemLinkMenuItemId> | DMenu<DMenuItemLinkMenuItemId>
	): DMenu<DMenuItemLinkMenuItemId> {
		if( options instanceof DisplayObject ) {
			return options;
		}
		return this.newMenu( options );
	}

	protected newMenu( options: DMenuOptions<DMenuItemLinkMenuItemId> ): DMenu<DMenuItemLinkMenuItemId> {
		return DMenus.newMenu( options );
	}

	protected onMenuSelect(
		value: DMenuItemLinkMenuItemId,
		item: DMenuItem<DMenuItemLinkMenuItemId>,
		closeable: Closeable
	): void {
		switch( value ) {
		case DMenuItemLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW:
			this.open( true );
			break;
		case DMenuItemLinkMenuItemId.COPY_LINK_ADDRESS:
			const link = this.link;
			if( link != null ) {
				if( isString( link ) ) {
					this.copy( link );
				} else {
					link.then(( resolved: string | null ): void => {
						if( resolved != null ) {
							this.copy( resolved );
						}
					});
				}
			}
			break;
		}
	}

	protected copy( link: string ): void {
		const a = document.createElement( "a" );
		a.href = link;
		UtilClipboard.copy( a.href );
	}

	protected initOnClick( options?: OPTIONS ): void {
		const onClick = ( e: interaction.InteractionEvent ): void => {
			if( this.isActionable() ) {
				this.onSelect( e );
			}
		};
		const onLongClick = ( e: interaction.InteractionEvent ): void => {
			if( this.isActionable() ) {
				const menu = this.menu;
				if( menu.isHidden() ) {
					menu.open( this );
				}
			}
		};
		const target = options && options.target;
		if( target === DMenuItemLinkTarget.NEW_WINDOW ) {
			UtilPointerEvent.onClick( this, onClick );
		} else {
			UtilPointerEvent.onLongClick( this, onClick, onLongClick );
		}
	}

	protected getType(): string {
		return "DMenuItemLink";
	}

	protected onSelect( e: KeyboardEvent | interaction.InteractionEvent ): void {
		super.onSelect( e );
		this.open( this.inNewWindow( e ) );
	}

	open( inNewWindow: boolean ): void {
		const link = this.link;
		if( link != null ) {
			if( isString( link )  ) {
				this.check( link, inNewWindow );
			} else {
				link.then(( resolved: string | null ): void => {
					if( resolved ) {
						this.check( resolved, inNewWindow );
					}
				});
			}
		}
	}

	protected check( link: string, inNewWindow: boolean ): void {
		const checker = this._checker;
		if( checker ) {
			const checked = checker( this );
			if( checked === true ) {
				this.exec( link, inNewWindow );
			} else if( checked === false ) {
				// DO NOTHING
			} else {
				checked.then(( resolved: boolean ): void => {
					if( resolved ) {
						this.exec( link, inNewWindow );
					}
				});
			}
		} else {
			this.exec( link, inNewWindow );
		}
	}

	protected exec( link: string, inNewWindow: boolean ): void {
		if( inNewWindow ) {
			const a = document.createElement( "a" );
			a.href = link;
			a.target = "_blank";
			a.style.display = "none";
			a.rel = "noopener noreferrer";
			document.body.appendChild( a );
			a.click();
			setTimeout((): void => {
				document.body.removeChild( a );
			}, 100);
		} else {
			window.location.href = link;
		}
	}

	protected inNewWindow( e: KeyboardEvent | interaction.InteractionEvent ): boolean {
		if( this._target === DMenuItemLinkTarget.NEW_WINDOW ) {
			return true;
		} else {
			const oe = ( e instanceof interaction.InteractionEvent ? e.data.originalEvent : e );
			return (
				( oe.ctrlKey || oe.shiftKey || oe.altKey || oe.metaKey ) ||
				( "button" in oe && oe.button !== 0 )
			);
		}
	}

	protected onShortcut( e: KeyboardEvent ) {
		super.onShortcut( e );
		this.onSelect( e );
	}

	static isCompatible<VALUE>( options: DMenuItemOptionsUnion<VALUE> ): options is DMenuItemLinkOptions<VALUE> {
		return "link" in options;
	}
}
