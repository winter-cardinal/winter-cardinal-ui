/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseState } from "./d-base-state";
import { DBaseStates } from "./d-base-states";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DMenuBarBlocker } from "./d-menu-bar-blocker";
import { DMenuBarItem, DMenuBarItemOptions, DThemeMenuBarItem } from "./d-menu-bar-item";
import { Closeable, DMenuContext } from "./d-menu-context";
import { UtilClickOutside } from "./util/util-click-outside";

export interface DMenuBarOptions<
	VALUE = unknown,
	THEME extends DThemeMenuBar = DThemeMenuBar
> extends DLayoutHorizontalOptions<THEME> {
	items?: Array<DMenuBarItemOptions<VALUE, DThemeMenuBarItem> | DisplayObject>;
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

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.setState( DBaseState.FOCUS_ROOT, true );

		if( options != null && options.items != null ) {
			const items = options.items;
			UtilClickOutside.apply( this, (): void => {
				this.close();
			});
			const onStateChange = ( newState: DBaseState, oldState: DBaseState, item: DMenuBarItem<VALUE> ): void => {
				const context = this._context;
				if( context == null ) {
					if( ! DBaseStates.isDisabled( newState ) ) {
						if( DBaseStates.isPressed( newState ) && ! DBaseStates.isPressed( oldState ) ) {
							this.open( item );
						}
					}
				} else {
					if( ! DBaseStates.isDisabled( newState ) ) {
						if( DBaseStates.isHovered( newState ) && ! DBaseStates.isHovered( oldState ) ) {
							const menu = item.menu;
							if( menu.isHidden() ) {
								menu.open( item, this, context );
							}
						}
					}
				}
			};
			for( let i = 0, imax = items.length; i < imax; ++i ) {
				const itemOrItemOptions = items[ i ];
				const item = ( itemOrItemOptions instanceof DisplayObject ?
					itemOrItemOptions : new DMenuBarItem<VALUE>( itemOrItemOptions )
				);
				if( item instanceof DMenuBarItem ) {
					item.on( "statechange", onStateChange );
				}
				this.addChild( item );
			}
		}

		this.on( "select", (): void => {
			this.close();
		});

		this._context = null;
		this._blocker = new DMenuBarBlocker( this );
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
			DApplications.getInstance().stage.addChild( this._blocker );
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
			DApplications.getInstance().stage.removeChild( this._blocker );
		}
	}

	protected getType(): string {
		return "DMenuBar";
	}
}
