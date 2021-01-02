/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Rectangle } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DContent, DContentOptions } from "./d-content";
import { DDragMode } from "./d-drag-mode";
import { DScrollBar, DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarHorizontal } from "./d-scroll-bar-horizontal";
import { DScrollBarVertical } from "./d-scroll-bar-vertical";
import { isString } from "./util/is-string";
import { UtilDrag } from "./util/util-drag";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

export interface DPaneDragOptions {
	mode?: (keyof typeof DDragMode) | DDragMode;
}

export interface DPaneBarOptions {
	vertical?: DScrollBarOptions;
	horizontal?: DScrollBarOptions;
}

export interface DPaneOptions<
	THEME extends DThemePane = DThemePane,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DBaseOptions<THEME> {
	mask?: boolean;
	content?: CONTENT_OPTIONS | DBase;
	bar?: DPaneBarOptions;
	drag?: DPaneDragOptions;
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
	protected static WORK_POINT?: Point;
	protected static WORK_RECTANGLE?: Rectangle;

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
			( isString( options.drag.mode ) ? DDragMode[ options.drag.mode ] : options.drag.mode ) :
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
			this.onContentChange();
		});
		content.on( "resize", (): void => {
			this.onContentChange();
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

	protected onContentChange(): void {
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

	protected getScrollBarOffsetHorizontalStart( size: number ): number {
		return size * 0.5;
	}

	protected getScrollBarOffsetHorizontalEnd( size: number ): number {
		return size * 0.5;
	}

	protected getScrollBarOffsetVerticalStart( size: number ): number {
		return size * 0.5;
	}

	protected getScrollBarOffsetVerticalEnd( size: number ): number {
		return size * 0.5;
	}

	protected updateScrollBarPositions( verticalBar: DScrollBarVertical, horizontalBar: DScrollBarHorizontal ): void {
		const width = this.width;
		const height = this.height;

		const verticalBarWidth = verticalBar.width;
		const verticalBarOffsetStart = this.getScrollBarOffsetVerticalStart( verticalBarWidth );
		const verticalBarOffsetEnd = this.getScrollBarOffsetVerticalEnd( verticalBarWidth );
		verticalBar.position.set( width - verticalBarWidth, verticalBarOffsetStart );
		verticalBar.height = height - verticalBarOffsetStart - verticalBarOffsetEnd;

		const horizontalBarHeight = horizontalBar.height;
		const horizontalBarOffsetStart = this.getScrollBarOffsetHorizontalStart( horizontalBarHeight );
		const horizontalBarOffsetEnd = this.getScrollBarOffsetHorizontalEnd( horizontalBarHeight );
		horizontalBar.position.set( horizontalBarOffsetStart, height - horizontalBarHeight );
		horizontalBar.width = width - horizontalBarOffsetStart - horizontalBarOffsetEnd;
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
						(content as any).mask = null;
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

	protected getFocusedChildClippingRect(
		focused: DBase,
		contentX: number, contentY: number,
		contentWidth: number, contentHeight: number,
		width: number, height: number,
		result: Rectangle
	): Rectangle {
		result.x = 0;
		result.y = 0;
		result.width = width;
		result.height = height;
		return result;
	}

	protected onChildFocus( focused: DBase ): void {
		const point = DPane.WORK_POINT = (DPane.WORK_POINT || new Point());

		// Content rectangle
		const content = this._content;
		const contentX = content.x;
		const contentY = content.y;
		const contentWidth = content.width;
		const contentHeight = content.height;

		point.set( 0, 0 );
		focused.toGlobal( point, point, false );
		content.toLocal( point, undefined, point, false );
		const x0 = contentX + Math.min( contentWidth, Math.max( 0, point.x ) );
		const y0 = contentY + Math.min( contentHeight, Math.max( 0, point.y ) );

		point.set( focused.width, focused.height );
		focused.toGlobal( point, point, true );
		content.toLocal( point, undefined, point, true );
		const x1 = contentX + Math.min( contentWidth, Math.max( 0, point.x ) );
		const y1 = contentY + Math.min( contentHeight, Math.max( 0, point.y ) );

		const width = this.width;
		const height = this.height;
		const clippingRect = DPane.WORK_RECTANGLE = (DPane.WORK_RECTANGLE || new Rectangle());
		this.getFocusedChildClippingRect(
			focused,
			contentX, contentY,
			contentWidth, contentHeight,
			width, height,
			clippingRect
		);
		const clippingRectX = clippingRect.x;
		const clippingRectY = clippingRect.y;
		const clippingRectX0 = clippingRectX;
		const clippingRectY0 = clippingRectY;
		const clippingRectX1 = clippingRectX + clippingRect.width;
		const clippingRectY1 = clippingRectY + clippingRect.height;

		let newX: number | null = null;
		if( x0 < clippingRectX0 ) {
			if( x1 <= clippingRectX1 ) {
				newX = contentX + Math.min( clippingRectX0 - x0, clippingRectX1 - x1 );
				newX = Math.max( width - contentWidth, Math.min( 0, newX ) );
			}
		} else if( clippingRectX1 < x1 ) {
			newX = contentX - Math.min( x0 - clippingRectX0, x1 - clippingRectX1 );
			newX = Math.max( width - contentWidth, Math.min( 0, newX ) );
		}

		let newY: number | null = null;
		if( y0 < clippingRectY0 ) {
			if( y1 <= clippingRectY1 ) {
				newY = contentY + Math.min( clippingRectY0 - y0, clippingRectY1 - y1 );
				newY = Math.max( height - contentHeight, Math.min( 0, newY ) );
			}
		} else if( clippingRectY1 < y1 ) {
			newY = contentY - Math.min( y0 - clippingRectY0, y1 - clippingRectY1 );
			newY = Math.max( height - contentHeight, Math.min( 0, newY ) );
		}

		const contentPosition = content.position;
		if( newX != null ) {
			if( newY != null ) {
				contentPosition.set( newX, newY );
			} else {
				contentPosition.x = newX;
			}
		} else {
			if( newY != null ) {
				contentPosition.y = newY;
			}
		}

		super.onChildFocus( focused );
	}

	destroy(): void {
		// Overflow mask
		const overflowMask = this._overflowMask;
		if( overflowMask != null ) {
			this._overflowMask = null;
			overflowMask.destroy();
		}
		(this as any).mask = null;

		super.destroy();
	}
}
