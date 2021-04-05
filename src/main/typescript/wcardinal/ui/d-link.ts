/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DLinkMenu } from "./d-link-menu";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";
import { UtilClipboard } from "./util/util-clipboard";
import { UtilPointerEvent } from "./util/util-pointer-event";

export type DLinkUrlMaker = () => string | null | Promise<string | null>;
export type DLinkChecker = () => boolean | Promise<boolean>;

export interface DLinkOptions {
	url?: string | null | DLinkUrlMaker;
	target?: DLinkTarget | (keyof typeof DLinkTarget);
	checker?: DLinkChecker;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DThemeLink {
	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}

export class DLink {
	protected static ANCHOR_ELEMENT?: HTMLAnchorElement;

	protected _url: string | null | DLinkUrlMaker;
	protected _target: DLinkTarget;
	protected _checker?: DLinkChecker;
	protected _menu: DLinkMenu;
	protected _theme: DThemeLink;
	protected _isEnabled: boolean;

	constructor( theme: DThemeLink, options?: DLinkOptions ) {
		this._url = options?.url ?? null;
		this._target = toEnum( options?.target ?? DLinkTarget.AUTO, DLinkTarget );
		this._checker = options?.checker;
		this._theme = theme;
		this._isEnabled = true;
		this._menu = new DLinkMenu( this, options?.menu ?? theme.getLinkMenuOptions() );
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable( enable: boolean ) {
		this._isEnabled = enable;
	}

	get url(): string | null | DLinkUrlMaker {
		return this._url;
	}

	set url( url: string | null | DLinkUrlMaker ) {
		this._url = url;
	}

	get target(): DLinkTarget {
		return this._target;
	}

	get menu(): DLinkMenu {
		return this._menu;
	}

	protected toStringifiedUrl( target: string | null | DLinkUrlMaker, onResolved: ( url: string ) => void ): void {
		const url = ( isFunction( target ) ? target() : target );
		if( url != null ) {
			if( isString( url )  ) {
				onResolved( url );
			} else {
				url.then(( resolved: string | null ): void => {
					if( resolved != null ) {
						onResolved( resolved );
					}
				});
			}
		}
	}

	protected toNormalizedUrl( url: string ): string {
		const a = DLink.ANCHOR_ELEMENT || document.createElement( "a" );
		DLink.ANCHOR_ELEMENT = a;
		a.href = url;
		return a.href;
	}

	/**
	 * Copys the URL to the clipboard.
	 */
	copy(): void {
		this.toStringifiedUrl( this._url, ( url: string ): void => {
			UtilClipboard.copy( this.toNormalizedUrl( url ) );
		});
	}

	/**
	 * Checks and opens the URL.
	 *
	 * @param e An event object which triggered this method call.
	 */
	open( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void;

	/**
	 * Checks and opens the URL.
	 *
	 * @param inNewWindow True to open in a new window
	 */
	open( inNewWindow: boolean ): void;
	open( x: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent | undefined | boolean ): void {
		this.toStringifiedUrl( this._url, ( url ): void => {
			const inNewWindow = ( x === true || x === false ?
				x : this.inNewWindow( x )
			);
			this.check( url, inNewWindow, (): void => {
				this.exec( url, inNewWindow );
			});
		});
	}

	check( url: string, inNewWindow: boolean, onResolved: () => void ): void {
		const checker = this._checker;
		if( checker ) {
			const checked = checker();
			if( checked === true ) {
				onResolved();
			} else if( checked === false ) {
				// DO NOTHING
			} else {
				checked.then(( resolved: boolean ): void => {
					if( resolved ) {
						onResolved();
					}
				});
			}
		} else {
			onResolved();
		}
	}

	/**
	 * Opens the given URL.
	 *
	 * @param url An URL to be opened
	 * @param inNewWindow True to open in a new window.
	 */
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

	/**
	 * Returns true if the URL need to be opened in a new window.
	 *
	 * @param e An event object.
	 */
	inNewWindow( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): boolean {
		switch( this._target ) {
		case DLinkTarget.NEW_WINDOW:
			return true;
		case DLinkTarget.THIS_WINDOW:
			return false;
		case DLinkTarget.AUTO:
			if( e != null ) {
				const oe = ( e instanceof interaction.InteractionEvent ? e.data.originalEvent : e );
				return (
					( oe.ctrlKey || oe.shiftKey || oe.altKey || oe.metaKey ) ||
					( "button" in oe && oe.button !== 0 )
				);
			}
			return false;
		}
	}

	add( base: DBase, onSelect: ( e: interaction.InteractionEvent ) => void ): void {
		const onClick = ( e: interaction.InteractionEvent ): void => {
			if( this._isEnabled && base.state.isActionable ) {
				onSelect( e );
			}
		};
		if( this._target === DLinkTarget.NEW_WINDOW ) {
			UtilPointerEvent.onClick( base, onClick );
		} else {
			const menu = this._menu;
			const onLongClick = ( e: interaction.InteractionEvent ): void => {
				if( this._isEnabled && base.state.isActionable ) {
					menu.open( base );
				}
			};
			const isLongClickable = ( e: interaction.InteractionEvent ): boolean => {
				return menu.enable;
			};
			UtilPointerEvent.onLongClick( base, onClick, onLongClick, isLongClickable );
		}
	}
}
