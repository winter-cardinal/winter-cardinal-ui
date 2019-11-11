/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DContent, DContentOptions } from "./d-content";
import { DDragMode } from "./d-drag-mode";
import { DScrollBar, DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarHorizontal } from "./d-scroll-bar-horizontal";
import { DScrollBarVertical } from "./d-scroll-bar-vertical";
import { UtilDrag } from "./util/util-drag";
import { utilIsString } from "./util/util-is-string";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

export interface DPaneOptions<
	THEME extends DThemePane = DThemePane,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DBaseOptions<THEME> {
	mask?: boolean;
	content?: CONTENT_OPTIONS | DBase;
	bar?: {
		vertical?: DScrollBarOptions,
		horizontal?: DScrollBarOptions
	};
	drag?: {
		mode?: (keyof typeof DDragMode) | DDragMode;
	};
}

export interface DThemePane extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
	getWheelSpeed(): number;
	getDragMode(): DDragMode;
}

// Option parsers
const isOverflowMaskEnabled = <
	THEME extends DThemePane,
	CONTENT_OPTIONS extends DBaseOptions
>( theme: THEME, options?: DPaneOptions<THEME, CONTENT_OPTIONS> ): boolean => {
	if( options && options.mask != null ) {
		return options.mask;
	}
	return theme.isOverflowMaskEnabled();
};

const toBarOptionsVertical = ( options?: DPaneOptions ): DScrollBarOptions | undefined => {
	return options && options.bar && options.bar.vertical;
};

const toBarOptionsHorizontal = ( options?: DPaneOptions ): DScrollBarOptions | undefined => {
	return options && options.bar && options.bar.horizontal;
};

// Class
export class DPane<
	THEME extends DThemePane = DThemePane,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DPaneOptions<THEME, CONTENT_OPTIONS> = DPaneOptions<THEME, CONTENT_OPTIONS>
> extends DBase<THEME, OPTIONS> {
	protected static WORK_ON_FOCUSED = new Point();
	protected _content!: DBase;
	protected _overflowMask!: DBaseOverflowMask | null;
	protected _verticalBar?: DScrollBarVertical;
	protected _horizontalBar?: DScrollBarHorizontal;
	protected _dragUtil?: UtilDrag;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._overflowMask = null;

		// Content
		const theme = this.theme;
		const content = this._content = this.toContent( options );
		if( isOverflowMaskEnabled( theme, options ) ) {
			this.mask = this.getOrCreateOverflowMask();
		}
		this.addChild( content );

		// Scroll bar
		this.initScrollBar( content, theme, options );

		// Drag
		this.initDrag( content, theme, options );
	}

	protected initDrag( content: DBase, theme: THEME, options?: OPTIONS ): void {
		const dragMode = ( options && options.drag && options.drag.mode != null ?
			( utilIsString( options.drag.mode ) ? DDragMode[ options.drag.mode ] : options.drag.mode ) :
			theme.getDragMode()
		);
		// Edge does not fire the wheel event when scrolling using the 2-fingure scroll gesture on a touchpad.
		// Instead, it fires touch events. This is why the dragging is enabled regardless of the `UtilPointerEvent.touchable`.
		// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7134034/
		if( dragMode === DDragMode.ON || dragMode === DDragMode.TOUCH ) {
			const position = new Point();
			this._dragUtil = new UtilDrag({
				target: this,
				touch: dragMode === DDragMode.TOUCH,
				on: {
					start: (): void => {
						position.copyFrom( content.position );
					},
					move: ( dx: number, dy: number ): void => {
						position.set( position.x + dx, position.y + dy );
						content.position.set(
							this.toContentX( content, position.x ),
							this.toContentY( content, position.y )
						);
					}
				}
			});
		}
	}

	protected onRegionMoveX( content: DBase, start: number ) {
		const dragUtil = this._dragUtil;
		if( dragUtil != null ) {
			dragUtil.stop();
		}
		content.x = - content.width * start;
	}

	protected onRegionMoveY( content: DBase, start: number ) {
		const dragUtil = this._dragUtil;
		if( dragUtil != null ) {
			dragUtil.stop();
		}
		content.y = - content.height * start;
	}

	protected initScrollBar( content: DBase, theme: THEME, options?: OPTIONS ): void {
		// Vertical bar
		const verticalBar = this._verticalBar = new DScrollBarVertical( toBarOptionsVertical( options ) );
		verticalBar.on( "regionmove", ( start: number ): void => {
			this.onRegionMoveY( content, start );
		});
		this.addChild( verticalBar );

		// Horizontal bar
		const horizontalBar = this._horizontalBar = new DScrollBarHorizontal( toBarOptionsHorizontal( options ) );
		horizontalBar.on( "regionmove", ( start: number ): void => {
			this.onRegionMoveX( content, start );
		});
		this.addChild( horizontalBar );

		//
		content.on( "move", (): void => {
			this.onContentChanged();
		});
		content.on( "resize", (): void => {
			this.onContentChanged();
		});
		this.updateScrollBar();
	}

	protected getType(): string {
		return "DPane";
	}

	get content(): DBase {
		return this._content;
	}

	protected toContent( options?: OPTIONS ): DBase {
		if( options && options.content ) {
			const content = options.content;
			if( content instanceof DBase ) {
				return content;
			} else {
				return this.newContent( content );
			}
		}
		return this.newContent();
	}

	protected newContent( options?: CONTENT_OPTIONS ): DBase {
		return new DContent( options );
	}

	protected getOrCreateOverflowMask(): DBaseOverflowMask {
		if( this._overflowMask == null ) {
			this._overflowMask = new DBaseOverflowMask( this );
			this.addReflowable( this._overflowMask );
			this.toDirty();
		}
		return this._overflowMask;
	}

	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean {
		const content = this._content;
		const x = this.getWheelContentX( content, deltas.deltaX * deltas.lowest );
		const y = this.getWheelContentY( content, deltas.deltaY * deltas.lowest );
		if( content.x !== x || content.y !== y ) {
			const dragUtil = this._dragUtil;
			if( dragUtil != null ) {
				dragUtil.stop();
			}
			content.position.set( x, y );
			return true;
		}
		return false;
	}

	protected getWheelContentX( content: DBase, delta: number ): number {
		if( 0 < delta || delta < 0 ) {
			const speed = this.theme.getWheelSpeed();
			return this.toContentX( content, content.x - delta * speed );
		}
		return content.x;
	}

	protected getWheelContentY( content: DBase, delta: number ): number {
		if( 0 < delta || delta < 0 ) {
			const speed = this.theme.getWheelSpeed();
			return this.toContentY( content, content.y + delta * speed );
		}
		return content.y;
	}

	protected toContentX( content: DBase, x: number ): number {
		return Math.min( 0, Math.max( this.width - content.width, x ) );
	}

	protected toContentY( content: DBase, y: number ): number {
		return Math.min( 0, Math.max( this.height - content.height, y ) );
	}

	protected isRefitable( target: any ): target is DBase<any, any> {
		return super.isRefitable( target ) && ! ( target instanceof DScrollBar );
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
		this.updateScrollBar();
	}

	protected onContentChanged(): void {
		this.updateScrollBar();
	}

	protected updateScrollBar(): void {
		const verticalBar = this._verticalBar;
		const horizontalBar = this._horizontalBar;
		if( verticalBar != null && horizontalBar != null ) {
			this.updateScrollBarRegions( verticalBar, horizontalBar );
			this.updateScrollBarVisibilities( verticalBar, horizontalBar );
			this.updateScrollBarPositions( verticalBar, horizontalBar );
		}
	}

	protected updateScrollBarPositions( verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal ): void {
		const width = this.width;
		const height = this.height;

		const verticalBarWidth = verticalBar.width;
		verticalBar.position.set( width - verticalBarWidth, verticalBarWidth * 0.5 );
		verticalBar.height = height - verticalBarWidth;

		const horizontalBarHeight = horizontalBar.height;
		horizontalBar.position.set( horizontalBarHeight * 0.5, height - horizontalBarHeight );
		horizontalBar.width = width - horizontalBarHeight;
	}

	protected updateScrollBarRegions( verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal ): void {
		const content = this._content;
		const x = -content.x;
		const y = -content.y;
		horizontalBar.setRegion( x, x + this.width, content.width );
		verticalBar.setRegion( y, y + this.height, content.height );
	}

	protected updateScrollBarVisibilities( verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal ): void {
		const isChangedHorizontal = this.updateScrollBarVisibility( horizontalBar );
		const isChangedVertical = this.updateScrollBarVisibility( verticalBar );
		if( isChangedHorizontal || isChangedVertical ) {
			// Update the overflow mask
			const overflowMask = this._overflowMask;
			if( overflowMask != null ) {
				if( horizontalBar.visible || verticalBar.visible ) {
					const content = this._content;
					if( content.mask !== overflowMask ) {
						content.mask = overflowMask;
					}
				} else {
					const content = this._content;
					if( content.mask ) {
						content.mask = null;
					}
				}
			}

			// Rerender
			DApplications.update( this );
		}
	}

	protected updateScrollBarVisibility( bar: DScrollBar ): boolean {
		const isRegionVisible = bar.isRegionVisible();
		if( bar.visible !== isRegionVisible ) {
			bar.visible = isRegionVisible;
			return true;
		}
		return false;
	}

	protected onChildFocused( focused: DBase ): void {
		const work = DPane.WORK_ON_FOCUSED;
		const content = this.content;
		const contentX = content.x;
		const contentY = content.y;
		const contentWidth = content.width;
		const contentHeight = content.height;

		work.set( 0, 0 );
		focused.toGlobal( work, work, false );
		content.toLocal( work, undefined, work, false );
		const x0 = contentX + Math.min( contentWidth, Math.max( 0, work.x ) );
		const y0 = contentY + Math.min( contentHeight, Math.max( 0, work.y ) );

		work.set( focused.width, focused.height );
		focused.toGlobal( work, work, true );
		content.toLocal( work, undefined, work, true );
		const x1 = contentX + Math.min( contentWidth, Math.max( 0, work.x ) );
		const y1 = contentY + Math.min( contentHeight, Math.max( 0, work.y ) );

		const width = this.width;
		let newX: number | null = null;
		if( x0 < 0 ) {
			if( x1 <= width ) {
				newX = Math.max( width - contentWidth, Math.min( 0, contentX + (0 - x0) ) );
			}
		} else {
			if( width < x1 ) {
				newX = Math.max( width - contentWidth, Math.min( 0, contentX - (x1 - width) ) );
			}
		}

		const height = this.height;
		let newY: number | null = null;
		if( y0 < 0 ) {
			if( y1 <= height ) {
				newY = Math.max( height - contentHeight, Math.min( 0, contentY + (0 - y0) ) );
			}
		} else {
			if( height < y1 ) {
				newY = Math.max( height - contentHeight, Math.min( 0, contentY - (y1 - height) ) );
			}
		}

		if( newX != null ) {
			if( newY != null ) {
				content.position.set( newX, newY );
			} else {
				content.position.x = newX;
			}
		} else {
			if( newY != null ) {
				content.position.y = newY;
			}
		}

		super.onChildFocused( focused );
	}

	destroy(): void {
		// Overflow mask
		const overflowMask = this._overflowMask;
		if( overflowMask != null ) {
			this._overflowMask = null;
			overflowMask.destroy();
		}
		this.mask = null;

		super.destroy();
	}
}
