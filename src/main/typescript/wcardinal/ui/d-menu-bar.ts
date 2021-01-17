/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace, DLayoutSpaceOptions, DThemeLayoutSpace } from "./d-layout-space";
import { DMenuBarItem, DMenuBarItemOptions, DThemeMenuBarItem } from "./d-menu-bar-item";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

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
	items?: Array<DMenuBarItemOptions<VALUE, DThemeMenuBarItem<VALUE>> | DMenuBarItemSpaceOptions | DisplayObject>;
}

export interface DThemeMenuBar extends DThemeLayoutHorizontal {

}

export class DMenuBar<
	VALUE = unknown,
	THEME extends DThemeMenuBar = DThemeMenuBar,
	OPTIONS extends DMenuBarOptions<VALUE, THEME> = DMenuBarOptions<VALUE, THEME>
>　extends DLayoutHorizontal<THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );

		this.state.isFocusRoot = true;

		const items = options?.items;
		if( items != null ) {
			for( let i = 0, imax = items.length; i < imax; ++i ) {
				const itemOrItemOptions = items[ i ];
				const item = ( itemOrItemOptions instanceof DisplayObject ? itemOrItemOptions :
					( "space" in itemOrItemOptions ? new DLayoutSpace( itemOrItemOptions ) :
						new DMenuBarItem<VALUE>( itemOrItemOptions )
					)
				);
				this.addChild( item );
			}
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		UtilKeyboardEvent.moveFocusHorizontally( e, this );
		return super.onKeyDown( e );
	}

	protected getType(): string {
		return "DMenuBar";
	}
}
