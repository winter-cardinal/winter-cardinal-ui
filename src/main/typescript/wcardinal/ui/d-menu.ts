/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Point } from "pixi.js";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { DMenuAlign } from "./d-menu-align";
import { Closeable, DMenuContext } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenus } from "./d-menus";
import { UtilAttach } from "./util/util-attach";
import { UtilClickOutside } from "./util/util-click-outside";
import { utilIsString } from "./util/util-is-string";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";

export interface DMenuOptions<
	VALUE = unknown,
	THEME extends DThemeMenu = DThemeMenu
> extends DLayoutVerticalOptions<THEME> {
	align?: (keyof typeof DMenuAlign) | DMenuAlign;
	fit?: boolean;
	sticky?: boolean;
	items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>;
}

export interface DThemeMenu extends DThemeLayoutVertical {
	getOffsetX(): number;
	getOffsetY(): number;
}

export class DMenu<
	VALUE,
	THEME extends DThemeMenu = DThemeMenu,
	OPTIONS extends DMenuOptions<VALUE, THEME> = DMenuOptions<VALUE, THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected _align!: DMenuAlign;
	protected _fit!: boolean;
	protected _sticky!: boolean;
	protected _sub!: boolean;
	protected _owner!: DBase<any, any> | null;
	protected _context!: DMenuContext | null;
	protected _overlay!: UtilOverlay;
	protected _onPrerenderBound!: () => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._onPrerenderBound = (): void => {
			this.onPrerender();
		};

		if( options != null ) {
			this._align = ( options.align != null ?
				( utilIsString( options.align ) ? DMenuAlign[ options.align ] : options.align ) :
				DMenuAlign.BOTTOM
			);
			this._fit = ( options.fit != null ? options.fit : false );
			this._sticky = ( options.sticky != null ? options.sticky : false );
		} else {
			this._align = DMenuAlign.BOTTOM;
			this._fit = false;
			this._sticky = false;
		}
		this._sub = false;
		this._owner = null;
		this.visible = false;
		this._context = null;
		this.setState( DBaseState.FOCUS_ROOT, true );

		// Event handlers
		UtilClickOutside.apply( this, (): void => {
			this.close();
		});

		this.on( "select", (): void => {
			this.close();
		});

		// Items
		if( options && options.items ) {
			DMenus.newItems( this, options.items, this._sticky );
		}

		// Overlay
		this._overlay = new UtilOverlay( options );
	}

	findItem( value: VALUE ): DMenuItem<VALUE> | null {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DMenuItem && child.value === value ) {
				return child;
			}
		}
		return null;
	}

	protected getType(): string {
		return "DMenu";
	}

	getContext(): DMenuContext | null {
		return this._context;
	}

	getCloseable(): Closeable | null {
		return this;
	}

	open( owner: DBase<any, any>, closeable?: Closeable | null, context?: DMenuContext | null ): this {
		if( this.isHidden() ) {
			const layer = this._overlay.pick( this );
			this._owner = owner;

			// States
			const children = this.children;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.setState( DBaseState.FOCUSED | DBaseState.HOVERED, false );
				}
			}

			// Position & size
			const renderer = layer.renderer;
			const onPrerenderBound = this._onPrerenderBound;
			if( this._sticky ) {
				renderer.on( "prerender", onPrerenderBound );
			} else {
				renderer.once( "prerender", onPrerenderBound );
			}
			if( this._fit ) {
				const bounds = owner.getBounds();
				if( bounds != null ) {
					this.width = bounds.width;
				}
			}

			// Target
			this._sub = (context != null);
			context = context || new DMenuContext( owner );
			if( closeable != null ) {
				context.trim( closeable );
			}
			context.add( this );
			this._context = context;

			// Stage
			layer.stage.addChild( this );

			// Focus
			this.focus();

			// Show
			super.show();

			// Event
			this.emit( "open", this );
		}
		return this;
	}

	protected onPrerender(): void {
		const owner = this._owner;
		if( owner ) {
			const bounds = owner.getBounds();
			if( bounds ) {
				if( this._fit ) {
					this.width = bounds.width;
				}
				const layer = this._overlay.picked;
				if( layer ) {
					const theme = this.theme;
					UtilAttach.attach(
						this,
						bounds,
						theme.getOffsetX(), theme.getOffsetY(),
						layer.width, layer.height,
						this._align
					);
				}
			}
		}
	}

	close(): this {
		if( this.isShown() ) {
			const context = this._context;
			if( context ) {
				context.remove( this );
			}

			const parent = this.parent;
			if( parent ) {
				parent.removeChild( this );
			}

			const layer = this._overlay.picked;
			if( layer ) {
				layer.renderer.off( "prerender", this._onPrerenderBound );
			}

			this._owner = null;

			super.hide();

			this.emit( "close", this );
		}
		return this;
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isArrowUpKey( e ) || UtilKeyboardEvent.isArrowDownKey( e ) ) {
			const layer = this._overlay.picked;
			if( layer ) {
				const focusController = layer.getFocusController();
				const focused = focusController.getFocused();
				if( focused != null ) {
					const direction = UtilKeyboardEvent.isArrowDownKey( e );
					const next = focusController.findFocusable(
						focused, false, focused.hasState( DBaseState.FOCUS_ROOT ) || direction, direction
					);
					if( next != null ) {
						focusController.setFocused( next, true, true );
					}
				}
			}
		}

		return super.onKeyDown( e );
	}

	protected containsGlobalPoint( point: Point ): boolean {
		return ! this._sub;
	}
}

DMenus.setMenuCreator( ( options?: DMenuOptions<any> ) => new DMenu<any>( options ) );
