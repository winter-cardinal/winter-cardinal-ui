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
import { toEnum } from "./util";
import { UtilDrag } from "./util/util-drag";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

/**
 * {@link DPane} drag options.
 */
export interface DPaneDragOptions {
	mode?: (keyof typeof DDragMode) | DDragMode;
}

/**
 * {@link DPane} scroll bar options.
 */
export interface DPaneScrollBarOptions {
	vertical?: DScrollBarOptions;
	horizontal?: DScrollBarOptions;
}

export interface DPaneScrollBar {
	vertical: DScrollBarVertical;
	horizontal: DScrollBarHorizontal;
}

/**
 * {@link DPane} options.
 */
export interface DPaneOptions<
	THEME extends DThemePane = DThemePane,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DBaseOptions<THEME> {
	/**
	 * True to enable an overflow mask.
	 */
	mask?: boolean;

	/**
	 * Content options or a content.
	 */
	content?: CONTENT_OPTIONS | DBase;

	/**
	 * Scroll bar options.
	 */
	scrollbar?: DPaneScrollBarOptions;

	/**
	 * Drag options.
	 */
	drag?: DPaneDragOptions;
}

export interface DThemePane extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
	getWheelSpeed(): number;
	getDragMode(): DDragMode;
}

// Class
export class DPane<
	THEME extends DThemePane = DThemePane,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DPaneOptions<THEME, CONTENT_OPTIONS> = DPaneOptions<THEME, CONTENT_OPTIONS>
> extends DBase<THEME, OPTIONS> {
	protected static WORK_POINT?: Point;
	protected static WORK_RECTANGLE?: Rectangle;

	protected _content!: DBase;
	protected _overflowMask?: DBaseOverflowMask | null;
	protected _scrollbar?: DPaneScrollBar;
	protected _dragUtil?: UtilDrag;

	protected init( options?: OPTIONS ) {
		super.init( options );

		// Content
		const theme = this.theme;
		const content = this._content = this.toContent( options );
		if( options?.mask ?? theme.isOverflowMaskEnabled() ) {
			this.mask = this.getOverflowMask();
		}
		this.addChild( content );

		// Scroll bar
		const scrollbar = this.newScrollBar( theme, options?.scrollbar );
		this._scrollbar = scrollbar;
		scrollbar.vertical.on( "regionmove", ( start: number ): void => {
			this.onRegionMoveY( content, start );
		});
		scrollbar.horizontal.on( "regionmove", ( start: number ): void => {
			this.onRegionMoveX( content, start );
		});
		this.addChild( scrollbar.vertical );
		this.addChild( scrollbar.horizontal );
		content.on( "move", (): void => {
			this.onContentChange();
		});
		content.on( "resize", (): void => {
			this.onContentChange();
		});
		this.updateScrollBar();

		// Drag
		this.initDrag( content, theme, options );
	}

	protected initDrag( content: DBase, theme: THEME, options?: OPTIONS ): void {
		// Edge does not fire the wheel event when scrolling using the 2-fingure scroll gesture on a touchpad.
		// Instead, it fires touch events. This is why the dragging is enabled regardless of the `UtilPointerEvent.touchable`.
		// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7134034/
		const dragMode = toEnum( options?.drag?.mode ?? theme.getDragMode(), DDragMode );
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

	protected newScrollBar( theme: THEME, options?: DPaneScrollBarOptions ): DPaneScrollBar {
		return {
			vertical: new DScrollBarVertical( options?.vertical ),
			horizontal: new DScrollBarHorizontal( options?.horizontal )
		};
	}

	protected getType(): string {
		return "DPane";
	}

	get content(): DBase {
		return this._content;
	}

	protected toContent( options?: OPTIONS ): DBase {
		const content = options?.content;
		if( content ) {
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

	protected getOverflowMask(): DBaseOverflowMask {
		let result = this._overflowMask;
		if( result == null ) {
			result = new DBaseOverflowMask( this );
			this._overflowMask = result;
			this.addReflowable( result );
			this.toDirty();
		}
		return result;
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
		const scrollbar = this._scrollbar;
		if( scrollbar != null ) {
			const vertical = scrollbar.vertical;
			const horizontal = scrollbar.horizontal;
			this.updateScrollBarRegions( vertical, horizontal );
			this.updateScrollBarVisibilities( vertical, horizontal );
			this.updateScrollBarPositions( vertical, horizontal );
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

	protected updateScrollBarPositions( vertical: DScrollBarVertical, horizontal: DScrollBarHorizontal ): void {
		const width = this.width;
		const height = this.height;

		const verticalWidth = vertical.width;
		const verticalOffsetStart = this.getScrollBarOffsetVerticalStart( verticalWidth );
		const verticalOffsetEnd = this.getScrollBarOffsetVerticalEnd( verticalWidth );
		vertical.position.set( width - verticalWidth, verticalOffsetStart );
		vertical.height = height - verticalOffsetStart - verticalOffsetEnd;

		const horizontalHeight = horizontal.height;
		const horizontalOffsetStart = this.getScrollBarOffsetHorizontalStart( horizontalHeight );
		const horizontalOffsetEnd = this.getScrollBarOffsetHorizontalEnd( horizontalHeight );
		horizontal.position.set( horizontalOffsetStart, height - horizontalHeight );
		horizontal.width = width - horizontalOffsetStart - horizontalOffsetEnd;
	}

	protected updateScrollBarRegions( vertical: DScrollBarVertical, horizontal: DScrollBarHorizontal ): void {
		const content = this._content;
		const x = -content.x;
		const y = -content.y;
		horizontal.setRegion( x, x + this.width, content.width );
		vertical.setRegion( y, y + this.height, content.height );
	}

	protected updateScrollBarVisibilities( vertical: DScrollBarVertical, horizontal: DScrollBarHorizontal ): void {
		const isChangedHorizontal = this.updateScrollBarVisibility( horizontal );
		const isChangedVertical = this.updateScrollBarVisibility( vertical );
		if( isChangedHorizontal || isChangedVertical ) {
			// Update the overflow mask
			const overflowMask = this._overflowMask;
			if( overflowMask != null ) {
				if( horizontal.visible || vertical.visible ) {
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

	protected updateScrollBarVisibility( scrollbar: DScrollBar ): boolean {
		const isRegionVisible = scrollbar.isRegionVisible();
		if( scrollbar.visible !== isRegionVisible ) {
			scrollbar.visible = isRegionVisible;
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
