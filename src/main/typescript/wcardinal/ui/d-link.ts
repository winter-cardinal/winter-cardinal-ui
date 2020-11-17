/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { Closeable } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenus } from "./d-menus";
import { isString } from "./util/is-string";
import { UtilClipboard } from "./util/util-clipboard";
import { UtilPointerEvent } from "./util/util-pointer-event";

export type DLinkUrlMaker = () => string | null | Promise<string | null>;
export type DLinkChecker = () => boolean | Promise<boolean>;

export interface DLinkOptions {
	url?: string | DLinkUrlMaker;
	target?: DLinkTarget;
	checker?: DLinkChecker;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DThemeLink {
	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}

export class DLink {
	protected _url?: string | DLinkUrlMaker;
	protected _target?: DLinkTarget;
	protected _checker?: DLinkChecker;
	protected _menu?: DMenu<DLinkMenuItemId>;
	protected _menuOptions?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
	protected _theme: DThemeLink;
	protected _isEnabled: boolean;

	constructor( theme: DThemeLink, options?: DLinkOptions ) {
		if( options ) {
			this._url = options.url;
			this._target = options.target;
			this._checker = options.checker;
			this._menuOptions = options.menu;
		}
		this._theme = theme;
		this._isEnabled = true;
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable( enable: boolean ) {
		this._isEnabled = enable;
	}

	get url(): string | null | Promise<string | null> {
		const url = this._url;
		if( isString( url ) ) {
			return url;
		} else if( url == null ) {
			return null;
		} else {
			return url();
		}
	}

	get target(): DLinkTarget | undefined {
		return this._target;
	}

	get menu(): DMenu<DLinkMenuItemId> {
		let menu = this._menu;
		if( menu == null ) {
			const options = this._menuOptions || this._theme.getLinkMenuOptions();
			menu = this.toMenu( options );
			this._menu = menu;
			menu.on( "select", (
				value: DLinkMenuItemId,
				item: DMenuItem<DLinkMenuItemId>,
				closeable: Closeable
			): void => {
				this.onMenuSelect( value, item, closeable );
			});
		}
		return menu;
	}

	protected toMenu( options: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId> ): DMenu<DLinkMenuItemId> {
		if( options instanceof DisplayObject ) {
			return options;
		}
		return this.newMenu( options );
	}

	protected newMenu( options: DMenuOptions<DLinkMenuItemId> ): DMenu<DLinkMenuItemId> {
		return DMenus.newMenu( options );
	}

	protected onMenuSelect(
		value: DLinkMenuItemId,
		item: DMenuItem<DLinkMenuItemId>,
		closeable: Closeable
	): void {
		switch( value ) {
		case DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW:
			this.open( true );
			break;
		case DLinkMenuItemId.COPY_LINK_ADDRESS:
			const url = this.url;
			if( url != null ) {
				if( isString( url ) ) {
					this.copy( url );
				} else {
					url.then(( resolved: string | null ): void => {
						if( resolved != null ) {
							this.copy( resolved );
						}
					});
				}
			}
			break;
		}
	}

	copy( url: string ): void {
		const a = document.createElement( "a" );
		a.href = url;
		UtilClipboard.copy( a.href );
	}

	apply( target: DBase, onSelect: ( e: interaction.InteractionEvent ) => void ): void {
		const onClick = ( e: interaction.InteractionEvent ): void => {
			if( this.enable && target.state.isActionable ) {
				onSelect( e );
			}
		};
		const onLongClick = ( e: interaction.InteractionEvent ): void => {
			if( this.enable && target.state.isActionable ) {
				const menu = this.menu;
				if( menu.isHidden() ) {
					menu.open( target );
				}
			}
		};
		if( this._target === DLinkTarget.NEW_WINDOW ) {
			UtilPointerEvent.onClick( target, onClick );
		} else {
			UtilPointerEvent.onLongClick( target, onClick, onLongClick );
		}
	}

	open( inNewWindow: boolean ): void {
		const url = this.url;
		if( url != null ) {
			if( isString( url )  ) {
				this.check( url, inNewWindow );
			} else {
				url.then(( resolved: string | null ): void => {
					if( resolved ) {
						this.check( resolved, inNewWindow );
					}
				});
			}
		}
	}

	check( url: string, inNewWindow: boolean ): void {
		const checker = this._checker;
		if( checker ) {
			const checked = checker();
			if( checked === true ) {
				this.exec( url, inNewWindow );
			} else if( checked === false ) {
				// DO NOTHING
			} else {
				checked.then(( resolved: boolean ): void => {
					if( resolved ) {
						this.exec( url, inNewWindow );
					}
				});
			}
		} else {
			this.exec( url, inNewWindow );
		}
	}

	exec( url: string, inNewWindow: boolean ): void {
		if( inNewWindow ) {
			const a = document.createElement( "a" );
			a.href = url;
			a.target = "_blank";
			a.style.display = "none";
			a.rel = "noopener noreferrer";
			document.body.appendChild( a );
			a.click();
			setTimeout((): void => {
				document.body.removeChild( a );
			}, 100);
		} else {
			window.location.href = url;
		}
	}

	inNewWindow( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): boolean {
		if( this._target === DLinkTarget.NEW_WINDOW ) {
			return true;
		} else if( e != null ) {
			const oe = ( e instanceof interaction.InteractionEvent ? e.data.originalEvent : e );
			return (
				( oe.ctrlKey || oe.shiftKey || oe.altKey || oe.metaKey ) ||
				( "button" in oe && oe.button !== 0 )
			);
		} else {
			return false;
		}
	}
}
