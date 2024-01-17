/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, Point, Rectangle } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DContent, DContentOptions } from "./d-content";
import { UtilGestureMode } from "./util/util-gesture-mode";
import { DScrollBar } from "./d-scroll-bar";
import { toEnum } from "./util/to-enum";
import { UtilGesture } from "./util/util-gesture";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
import { DPaneScrollBar, DPaneScrollBarOptions } from "./d-pane-scrollbar";

/**
 * {@link DPane} gesture options.
 */
export interface DPaneGestureOptions {
	mode?: keyof typeof UtilGestureMode | UtilGestureMode;
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
	 * Gesture options.
	 */
	gesture?: DPaneGestureOptions;
}

export interface DThemePane extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
	getWheelSpeed(): number;
	getGestureMode(): UtilGestureMode;
}

// Class
export class DPane<
	THEME extends DThemePane = DThemePane,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DPaneOptions<THEME, CONTENT_OPTIONS> = DPaneOptions<THEME, CONTENT_OPTIONS>
> extends DBase<THEME, OPTIONS> {
	protected static WORK_POINT?: Point;
	protected static WORK_RECTANGLE?: Rectangle;

	protected _content?: DBase;
	protected _overflowMask?: DBaseOverflowMask | null;
	protected _scrollbar?: DPaneScrollBar;
	protected _gestureUtil?: UtilGesture<DPane>;

	constructor(options?: OPTIONS) {
		super(options);

		// Mask
		const theme = this.theme;
		if (options?.mask ?? theme.isOverflowMaskEnabled()) {
			this.mask = this.getOverflowMask();
		}

		// Content
		this.addChild(this.content);

		// Scroll bar
		const scrollbar = this.scrollbar;
		this.addChild(scrollbar.vertical);
		this.addChild(scrollbar.horizontal);
		scrollbar.update();

		// Gesture
		this.initGesture(theme, options);
	}

	protected initGesture(theme: THEME, options?: OPTIONS): void {
		// Edge does not fire the wheel event when scrolling using the 2-fingure scroll gesture on a touchpad.
		// Instead, it fires touch events. This is why the gesture is enabled regardless of the `UtilPointerEvent.touchable`.
		// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7134034/
		const mode = toEnum(options?.gesture?.mode ?? theme.getGestureMode(), UtilGestureMode);
		if (mode === UtilGestureMode.ON || mode === UtilGestureMode.TOUCH) {
			const position = new Point();
			const content = this.content;
			this._gestureUtil = new UtilGesture<DPane>({
				bind: this,
				touch: mode === UtilGestureMode.TOUCH,
				on: {
					start: (): void => {
						position.copyFrom(content.position);
					},
					move: (target: DPane, dx: number, dy: number): void => {
						position.set(position.x + dx, position.y + dy);
						content.position.set(
							this.toContentX(content, position.x),
							this.toContentY(content, position.y)
						);
					}
				}
			});
		}
	}

	get scrollbar(): DPaneScrollBar {
		let result = this._scrollbar;
		if (result == null) {
			result = this.newScrollBar(this._options?.scrollbar);
			this.initScrollBar(result);
			this._scrollbar = result;
		}
		return result;
	}

	protected newScrollBar(options?: DPaneScrollBarOptions): DPaneScrollBar {
		return new DPaneScrollBar(this, options, (isRegionVisible: boolean): void => {
			this.onScrollBarUpdate(isRegionVisible);
		});
	}

	protected onScrollBarUpdate(isRegionVisible: boolean): void {
		const overflowMask = this._overflowMask;
		if (overflowMask != null) {
			const content = this.content;
			if (isRegionVisible) {
				if (content.mask !== overflowMask) {
					content.mask = overflowMask;
					DApplications.update(this);
				}
			} else {
				if (content.mask) {
					(content as any).mask = null;
					DApplications.update(this);
				}
			}
		}
	}

	protected initScrollBar(scrollbar: DPaneScrollBar): void {
		scrollbar.vertical.on("regionmove", (start: number): void => {
			this.onScrollBarMoveY(start);
		});
		scrollbar.horizontal.on("regionmove", (start: number): void => {
			this.onScrollBarMoveX(start);
		});
	}

	protected onScrollBarMoveX(start: number): void {
		const gestureUtil = this._gestureUtil;
		if (gestureUtil != null) {
			gestureUtil.stop(this);
		}
		const content = this.content;
		content.x = -content.width * start;
	}

	protected onScrollBarMoveY(start: number): void {
		const gestureUtil = this._gestureUtil;
		if (gestureUtil != null) {
			gestureUtil.stop(this);
		}
		const content = this.content;
		content.y = -content.height * start;
	}

	protected override onOver(e: InteractionEvent): void {
		super.onOver(e);
		this.scrollbar.touch();
	}

	protected getType(): string {
		return "DPane";
	}

	get content(): DBase {
		let result = this._content;
		if (result == null) {
			result = this.toContent(this._options);
			this.initContent(result);
			this._content = result;
		}
		return result;
	}

	protected toContent(options?: OPTIONS): DBase {
		const content = options?.content;
		if (content) {
			if (content instanceof DBase) {
				return content;
			} else {
				return this.newContent(content);
			}
		}
		return this.newContent();
	}

	protected newContent(options?: CONTENT_OPTIONS): DBase {
		return new DContent(options);
	}

	protected initContent(content: DBase): void {
		content.on("move", (): void => {
			this.onContentChange();
		});
		content.on("resize", (): void => {
			this.onContentChange();
		});
	}

	protected getOverflowMask(): DBaseOverflowMask {
		let result = this._overflowMask;
		if (result == null) {
			result = new DBaseOverflowMask(this);
			this._overflowMask = result;
			this.reflowable.add(result);
			this.toDirty();
		}
		return result;
	}

	protected onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean {
		const content = this.content;
		const x = this.getWheelContentX(content, deltas.deltaX * deltas.lowest);
		const y = this.getWheelContentY(content, deltas.deltaY * deltas.lowest);
		if (content.x !== x || content.y !== y) {
			const gestureUtil = this._gestureUtil;
			if (gestureUtil != null) {
				gestureUtil.stop(this);
			}
			content.position.set(x, y);
			return true;
		}
		return false;
	}

	protected getWheelContentX(content: DBase, delta: number): number {
		if (0 < delta || delta < 0) {
			const speed = this.theme.getWheelSpeed();
			return this.toContentX(content, content.x - delta * speed);
		}
		return content.x;
	}

	protected getWheelContentY(content: DBase, delta: number): number {
		if (0 < delta || delta < 0) {
			const speed = this.theme.getWheelSpeed();
			return this.toContentY(content, content.y + delta * speed);
		}
		return content.y;
	}

	protected toContentX(content: DBase, x: number): number {
		return Math.min(0, Math.max(this.width - content.width, x));
	}

	protected toContentY(content: DBase, y: number): number {
		return Math.min(0, Math.max(this.height - content.height, y));
	}

	protected isRefitable(target: any): target is DBase<any, any> {
		return super.isRefitable(target) && !(target instanceof DScrollBar);
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		const scrollbar = this.scrollbar;
		scrollbar.lock();
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		scrollbar.update();
		scrollbar.unlock(true);
	}

	protected onContentChange(): void {
		this.scrollbar.update();
	}

	protected getFocusedChildClippingRect(
		focused: DBase,
		contentX: number,
		contentY: number,
		contentWidth: number,
		contentHeight: number,
		width: number,
		height: number,
		result: Rectangle
	): Rectangle {
		result.x = 0;
		result.y = 0;
		result.width = width;
		result.height = height;
		return result;
	}

	protected onChildFocus(focused: DBase): void {
		const point = DPane.WORK_POINT || new Point();
		DPane.WORK_POINT = point;

		// Content rectangle
		const content = this.content;
		const contentX = content.x;
		const contentY = content.y;
		const contentWidth = content.width;
		const contentHeight = content.height;

		point.set(0, 0);
		focused.toGlobal(point, point, false);
		content.toLocal(point, undefined, point, false);
		const x0 = contentX + Math.min(contentWidth, Math.max(0, point.x));
		const y0 = contentY + Math.min(contentHeight, Math.max(0, point.y));

		point.set(focused.width, focused.height);
		focused.toGlobal(point, point, true);
		content.toLocal(point, undefined, point, true);
		const x1 = contentX + Math.min(contentWidth, Math.max(0, point.x));
		const y1 = contentY + Math.min(contentHeight, Math.max(0, point.y));

		const width = this.width;
		const height = this.height;
		const clippingRect = DPane.WORK_RECTANGLE || new Rectangle();
		DPane.WORK_RECTANGLE = clippingRect;
		this.getFocusedChildClippingRect(
			focused,
			contentX,
			contentY,
			contentWidth,
			contentHeight,
			width,
			height,
			clippingRect
		);
		const clippingRectX = clippingRect.x;
		const clippingRectY = clippingRect.y;
		const clippingRectX0 = clippingRectX;
		const clippingRectY0 = clippingRectY;
		const clippingRectX1 = clippingRectX + clippingRect.width;
		const clippingRectY1 = clippingRectY + clippingRect.height;

		let newX: number | null = null;
		if (x0 < clippingRectX0) {
			if (x1 <= clippingRectX1) {
				newX = contentX + Math.min(clippingRectX0 - x0, clippingRectX1 - x1);
				newX = Math.max(width - contentWidth, Math.min(0, newX));
			}
		} else if (clippingRectX1 < x1) {
			newX = contentX - Math.min(x0 - clippingRectX0, x1 - clippingRectX1);
			newX = Math.max(width - contentWidth, Math.min(0, newX));
		}

		let newY: number | null = null;
		if (y0 < clippingRectY0) {
			if (y1 <= clippingRectY1) {
				newY = contentY + Math.min(clippingRectY0 - y0, clippingRectY1 - y1);
				newY = Math.max(height - contentHeight, Math.min(0, newY));
			}
		} else if (clippingRectY1 < y1) {
			newY = contentY - Math.min(y0 - clippingRectY0, y1 - clippingRectY1);
			newY = Math.max(height - contentHeight, Math.min(0, newY));
		}

		const contentPosition = content.position;
		if (newX != null) {
			if (newY != null) {
				contentPosition.set(newX, newY);
			} else {
				contentPosition.x = newX;
			}
		} else {
			if (newY != null) {
				contentPosition.y = newY;
			}
		}

		super.onChildFocus(focused);
	}

	destroy(): void {
		// Overflow mask
		const overflowMask = this._overflowMask;
		if (overflowMask != null) {
			this._overflowMask = null;
			overflowMask.destroy();
		}
		(this as any).mask = null;

		super.destroy();
	}
}
