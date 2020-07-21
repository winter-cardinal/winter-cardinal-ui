/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace, DLayoutSpaceOptions, DThemeLayoutSpace } from "./d-layout-space";
import { DMenuBarBlocker } from "./d-menu-bar-blocker";
import { DMenuBarItem, DMenuBarItemOptions, DThemeMenuBarItem } from "./d-menu-bar-item";
import { Closeable, DMenuContext } from "./d-menu-context";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilOverlay } from "./util/util-overlay";

export interface DMenuBarItemSpaceOptions<
	THEME extends DThemeMenuBarItemSpace = DThemeMenuBarItemSpace
> extends DLayoutSpaceOptions<THEME> {
	space: true;
}

export interface DThemeMenuBarItemSpace extends DThemeLayoutSpace {

}

export interface DMenuBarOptions<
	VALUE = unknown,
	THEME extends DThemeMenuBar = DThemeMenuBar
> extends DLayoutHorizontalOptions<THEME> {
	items?: Array<DMenuBarItemOptions<VALUE, DThemeMenuBarItem> | DMenuBarItemSpaceOptions | DisplayObject>;
}

export interface DThemeMenuBar extends DThemeLayoutHorizontal {

}

export class DMenuBar<
	VALUE = unknown,
	THEME extends DThemeMenuBar = DThemeMenuBar,
	OPTIONS extends DMenuBarOptions<VALUE, THEME> = DMenuBarOptions<VALUE, THEME>
>　extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _context!: DMenuContext | null;
	protected _blocker!: DMenuBarBlocker;
	protected _overlay!: UtilOverlay;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.state.isFocusRoot = true;

		if( options != null && options.items != null ) {
			const items = options.items;
			UtilClickOutside.apply( this, (): void => {
				this.close();
			});
			const onItemStateChangeBound = (
				newState: DBaseStateSet,
				oldState: DBaseStateSet,
				item: DMenuBarItem<VALUE>
			): void => {
				this.onItemStateChange( newState, oldState, item );
			};
			for( let i = 0, imax = items.length; i < imax; ++i ) {
				const itemOrItemOptions = items[ i ];
				const item = ( itemOrItemOptions instanceof DisplayObject ? itemOrItemOptions :
					( "space" in itemOrItemOptions ? new DLayoutSpace( itemOrItemOptions ) :
						new DMenuBarItem<VALUE>( itemOrItemOptions )
					)
				);
				if( item instanceof DMenuBarItem ) {
					item.on( "statechange", onItemStateChangeBound );
				}
				this.addChild( item );
			}
		}

		this.on( "select", (): void => {
			this.close();
		});

		this._context = null;
		this._blocker = new DMenuBarBlocker( this );
		this._overlay = new UtilOverlay( options );
	}

	protected onItemStateChange( newState: DBaseStateSet, oldState: DBaseStateSet, item: DMenuBarItem<VALUE> ): void {
		const context = this._context;
		if( context == null ) {
			if( ! newState.inDisabled ) {
				if( newState.isPressed ) {
					if( item.menu.isHidden() ) {
						item.state.isPressed = false;
						this.open( item );
					}
				}
			}
		} else {
			if( ! newState.inDisabled ) {
				if( newState.isHovered && ! oldState.isHovered ) {
					const menu = item.menu;
					if( menu.isHidden() ) {
						menu.open( item, this, context );
					}
				}
			}
		}
	}

	getContext(): DMenuContext | null {
		return this._context;
	}

	getCloseable(): Closeable | null {
		return this;
	}

	open( item: DMenuBarItem<VALUE> ): void {
		let context = this._context;
		if( context == null ) {
			const layer = this._overlay.pick( this );
			layer.stage.addChild( this._blocker );
			context = this._context = new DMenuContext( this );
			context.trim( item );
			context.add( this );
			item.menu.open( item, this, context );
		}
	}

	close(): void {
		const context = this._context;
		if( context != null ) {
			this._context = null;
			context.remove( this );
			const blocker = this._blocker;
			const parent = blocker.parent;
			if( parent ) {
				parent.removeChild( blocker );
			}
		}
	}

	protected getType(): string {
		return "DMenuBar";
	}
}
