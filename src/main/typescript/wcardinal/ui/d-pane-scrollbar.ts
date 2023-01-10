import { DApplicationTarget } from "./d-application-like";
import { DScrollBarOptions } from "./d-scroll-bar";
import { DScrollBarHorizontal } from "./d-scroll-bar-horizontal";
import { DScrollBarVertical } from "./d-scroll-bar-vertical";

export interface DPaneScrollBarOptions {
	vertical?: DScrollBarOptions;
	horizontal?: DScrollBarOptions;
}

export interface DPaneScrollBarParent extends DApplicationTarget {
	width: number;
	height: number;
	content: DPaneScrollBarContent;
}

export interface DPaneScrollBarContent {
	x: number;
	y: number;
	width: number;
	height: number;
}

export class DPaneScrollBar<PARENT extends DPaneScrollBarParent = DPaneScrollBarParent> {
	protected _parent: PARENT;
	protected _onUpdate: (isRegionVisible: boolean) => void;
	readonly vertical: DScrollBarVertical;
	readonly horizontal: DScrollBarHorizontal;

	protected _isLocked: number;
	protected _isCalled: boolean;
	protected _isCalledSilently?: boolean;

	constructor(
		parent: PARENT,
		options: DPaneScrollBarOptions | undefined,
		onUpdate: (isRegionVisible: boolean) => void
	) {
		this._parent = parent;
		this._onUpdate = onUpdate;
		this._isLocked = 0;
		this._isCalled = false;
		this.vertical = new DScrollBarVertical(options?.vertical);
		this.horizontal = new DScrollBarHorizontal(options?.horizontal);
	}

	lock(): void {
		this._isLocked += 1;
		if (this._isLocked === 1) {
			this._isCalled = false;
			this._isCalledSilently = undefined;
		}
	}

	unlock(callIfNeeded: boolean): void {
		this._isLocked -= 1;
		if (this._isLocked === 0) {
			if (callIfNeeded && this._isCalled) {
				this.update(this._isCalledSilently);
			}
			this._isCalled = false;
			this._isCalledSilently = undefined;
		}
	}

	update(silently?: boolean): void {
		if (0 < this._isLocked) {
			this._isCalled = true;
			if (silently != null) {
				this._isCalledSilently ||= silently;
			}
			return;
		}

		const parent = this._parent;
		const width = parent.width;
		const height = parent.height;
		const content = parent.content;
		const x = -content.x;
		const y = -content.y;

		const vertical = this.vertical;
		const verticalWidth = vertical.width;
		const verticalOffsetStart = this.getOffsetVerticalStart(verticalWidth);
		const verticalOffsetEnd = this.getOffsetVerticalEnd(verticalWidth);
		vertical.set(y, y + height, content.height, silently);
		vertical.position.set(width - verticalWidth, verticalOffsetStart);
		vertical.height = height - verticalOffsetStart - verticalOffsetEnd;

		const horizontal = this.horizontal;
		const horizontalHeight = horizontal.height;
		const horizontalOffsetStart = this.getOffsetHorizontalStart(horizontalHeight);
		const horizontalOffsetEnd = this.getOffsetHorizontalEnd(horizontalHeight);
		horizontal.set(x, x + width, content.width, silently);
		horizontal.position.set(horizontalOffsetStart, height - horizontalHeight);
		horizontal.width = width - horizontalOffsetStart - horizontalOffsetEnd;

		this._onUpdate(vertical.isRegionVisible() || horizontal.isRegionVisible());
	}

	touch(silently?: boolean): void {
		this.vertical.touch(silently);
		this.horizontal.touch(silently);
	}

	protected getOffsetHorizontalStart(size: number): number {
		return size * 0.5;
	}

	protected getOffsetHorizontalEnd(size: number): number {
		return size * 0.5;
	}

	protected getOffsetVerticalStart(size: number): number {
		return size * 0.5;
	}

	protected getOffsetVerticalEnd(size: number): number {
		return size * 0.5;
	}
}
