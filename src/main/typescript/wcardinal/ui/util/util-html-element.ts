/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Matrix, Point, Rectangle, Renderer } from "pixi.js";
import { DApplications } from "../d-applications";
import { DBase } from "../d-base";
import { DBaseStateSet } from "../d-base-state-set";
import { DFocusableMightBe } from "../d-controller-focus";
import { toEnum } from "./to-enum";
import { UtilHtmlElementWhen } from "./util-html-element-when";

export interface UtilHtmlElementPaddingLTRB {
	getLeft(): number;
	getTop(): number;
	getRight(): number;
	getBottom(): number;
}

export interface UtilHtmlElementPaddingVH {
	readonly horizontal: number;
	readonly vertical: number;
}

export type UtilHtmlElementPadding = UtilHtmlElementPaddingVH | UtilHtmlElementPaddingLTRB;

export type UtilHtmlElementCreator<T extends HTMLElement> = (container: HTMLElement) => T | null;
export type UtilHtmlElementStyler<T extends HTMLElement> = (
	target: T,
	state: DBaseStateSet,
	padding: UtilHtmlElementPadding | null,
	elementRect: Rectangle | null,
	elementMatrix: Matrix | null,
	clipperRect: Rectangle | null
) => void;

export type UtilHtmlElementStylerBefore = (target: HTMLDivElement) => void;
export type UtilHtmlElementStylerAfter = (target: HTMLDivElement) => void;
export type UtilHtmlElementToRect = (
	resolution: number,
	work: Point,
	result: Rectangle
) => Rectangle | null;
export type UtilHtmlElementToMatrix = () => Matrix | null;

export interface UtilHtmlElementElementOptions<ELEMENT extends HTMLElement> {
	creator?: UtilHtmlElementCreator<ELEMENT>;
	styler?: UtilHtmlElementStyler<ELEMENT>;
}

export interface UtilHtmlElementClipperOptions {
	creator?: UtilHtmlElementCreator<HTMLDivElement>;
	styler?: UtilHtmlElementStyler<HTMLDivElement>;
}

export interface UtilHtmlElementBeforeOptions {
	creator?: UtilHtmlElementCreator<HTMLDivElement>;
	styler?: UtilHtmlElementStylerBefore;
}

export interface UtilHtmlElementAfterOptions {
	creator?: UtilHtmlElementCreator<HTMLDivElement>;
	styler?: UtilHtmlElementStylerAfter;
}

export interface UtilHtmlElementOptions<ELEMENT extends HTMLElement = HTMLElement> {
	element?: UtilHtmlElementElementOptions<ELEMENT>;
	clipper?: UtilHtmlElementClipperOptions;
	before?: UtilHtmlElementBeforeOptions;
	after?: UtilHtmlElementAfterOptions;
	when?: UtilHtmlElementWhen | keyof typeof UtilHtmlElementWhen;
	select?: boolean;
}

export interface UtilThemeHtmlElement<ELEMENT extends HTMLElement> {
	getElementCreator(): UtilHtmlElementCreator<ELEMENT>;
	setElementStyle(
		target: ELEMENT,
		state: DBaseStateSet,
		padding: UtilHtmlElementPadding | null,
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperRect: Rectangle | null
	): void;
	getClipperCreator(): UtilHtmlElementCreator<HTMLDivElement>;
	setClipperStyle(
		target: HTMLDivElement,
		state: DBaseStateSet,
		padding: UtilHtmlElementPadding | null,
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperRect: Rectangle | null
	): void;
	getBeforeCreator(): UtilHtmlElementCreator<HTMLDivElement>;
	setBeforeStyle(target: HTMLDivElement): void;
	getAfterCreator(): UtilHtmlElementCreator<HTMLDivElement>;
	setAfterStyle(target: HTMLDivElement): void;
	getWhen(): UtilHtmlElementWhen;
	getSelect(): boolean;
}

export interface UtilHtmlElementElementData<ELEMENT extends HTMLElement> {
	creator: UtilHtmlElementCreator<ELEMENT>;
	styler: UtilHtmlElementStyler<ELEMENT>;
}

export interface UtilHtmlElementClipperData {
	creator: UtilHtmlElementCreator<HTMLDivElement>;
	styler: UtilHtmlElementStyler<HTMLDivElement>;
}

export interface UtilHtmlElementBeforeData {
	creator: UtilHtmlElementCreator<HTMLDivElement>;
	styler: UtilHtmlElementStylerBefore;
}

export interface UtilHtmlElementAfterData {
	creator: UtilHtmlElementCreator<HTMLDivElement>;
	styler: UtilHtmlElementStylerAfter;
}

export interface UtilHtmlElementData<ELEMENT extends HTMLElement = HTMLElement> {
	element: UtilHtmlElementElementData<ELEMENT>;
	clipper: UtilHtmlElementClipperData;
	before: UtilHtmlElementBeforeData;
	after: UtilHtmlElementAfterData;
	when: UtilHtmlElementWhen;
	select: boolean;
}

export interface UtilHtmlElementTarget extends DFocusableMightBe {
	readonly state: DBaseStateSet;
	readonly cursor: string;
	readonly worldVisible: boolean;

	focus(): void;
}

export interface UtilHtmlElementOperation<ELEMENT extends HTMLElement> {
	getElementRect(resolution: number, work: Point, result: Rectangle): Rectangle | null;
	getElementMatrix(): Matrix | null;
	getClipperRect(resolution: number, work: Point, result: Rectangle): Rectangle | null;
	getPadding(): UtilHtmlElementPadding | null;
	containsPoint(point: Point): boolean;
	onStart(): void;
	onCancel(): void;
	onEnd(): void;
}

export class UtilHtmlElement<
	ELEMENT extends HTMLElement = HTMLElement,
	TARGET extends UtilHtmlElementTarget = UtilHtmlElementTarget,
	OPERATION extends UtilHtmlElementOperation<ELEMENT> = UtilHtmlElementOperation<ELEMENT>,
	THEME extends UtilThemeHtmlElement<ELEMENT> = UtilThemeHtmlElement<ELEMENT>,
	OPTIONS extends UtilHtmlElementOptions<ELEMENT> = UtilHtmlElementOptions<ELEMENT>
> {
	protected _target: TARGET;
	protected _operation: OPERATION;
	protected _data: UtilHtmlElementData<ELEMENT>;

	protected _point?: Point;

	protected _clipper?: HTMLDivElement | null;
	protected _clipperRectResult?: Rectangle;

	protected _element?: ELEMENT | null;
	protected _elementRectResult?: Rectangle;
	protected _isElementShown: boolean;
	protected _onElementFocusBound: (e: FocusEvent) => void;

	protected _before?: HTMLDivElement | null;
	protected _onBeforeFocusBound: (e: FocusEvent) => void;

	protected _after?: HTMLDivElement | null;
	protected _onAfterFocusBound!: (e: FocusEvent) => void;

	protected _isStarted: boolean;
	protected _wasStarted: boolean;
	protected _doSelectBound: () => void;
	protected _isStartRequested: boolean;

	protected _rendererBound?: Renderer;
	protected _onPostRenderBound: () => void;

	constructor(target: TARGET, operation: OPERATION, theme: THEME, options?: OPTIONS) {
		this._target = target;
		this._operation = operation;
		const data = this.toData(theme, options);
		this._data = data;

		this._isElementShown = false;
		this._onElementFocusBound = (e: FocusEvent): void => {
			this.onElementFocus(e);
		};

		this._onBeforeFocusBound = (e: FocusEvent): void => {
			this.onBeforeFocus(e);
		};

		this._onAfterFocusBound = (e: FocusEvent): void => {
			this.onAfterFocus(e);
		};

		this._isStarted = false;
		this._wasStarted = false;
		this._doSelectBound = () => {
			this.doSelect();
		};
		this._isStartRequested = this._data.when === UtilHtmlElementWhen.ALWAYS;
		this._onPostRenderBound = () => {
			this.updateElement(this._rendererBound!);
		};
	}

	protected toData(theme: THEME, options?: OPTIONS): UtilHtmlElementData<ELEMENT> {
		return {
			element: this.toElementData(theme, options?.element),
			clipper: this.toClipperData(theme, options?.clipper),
			before: this.toBeforeData(theme, options?.before),
			after: this.toAfterData(theme, options?.after),
			when: toEnum(options?.when ?? theme.getWhen(), UtilHtmlElementWhen),
			select: options?.select ?? theme.getSelect()
		};
	}

	protected toElementData(
		theme: THEME,
		options?: OPTIONS["element"]
	): UtilHtmlElementElementData<ELEMENT> {
		return {
			creator: options?.creator ?? theme.getElementCreator(),
			styler: options?.styler ?? this.newElementStyler(theme)
		};
	}

	protected newElementStyler(theme: THEME) {
		return (
			target: ELEMENT,
			state: DBaseStateSet,
			padding: UtilHtmlElementPadding | null,
			elementRect: Rectangle | null,
			elementMatrix: Matrix | null,
			clipperRect: Rectangle | null
		): void => {
			return theme.setElementStyle(
				target,
				state,
				padding,
				elementRect,
				elementMatrix,
				clipperRect
			);
		};
	}

	protected toClipperData(
		theme: THEME,
		options?: OPTIONS["clipper"]
	): UtilHtmlElementClipperData {
		return {
			creator: options?.creator ?? theme.getClipperCreator(),
			styler: options?.styler ?? this.newClipperStyler(theme)
		};
	}

	protected newClipperStyler(theme: THEME) {
		return (
			target: HTMLDivElement,
			state: DBaseStateSet,
			padding: UtilHtmlElementPadding | null,
			elementRect: Rectangle | null,
			elementMatrix: Matrix | null,
			clipperRect: Rectangle | null
		): void => {
			return theme.setClipperStyle(
				target,
				state,
				padding,
				elementRect,
				elementMatrix,
				clipperRect
			);
		};
	}

	protected toBeforeData(theme: THEME, options?: OPTIONS["before"]): UtilHtmlElementBeforeData {
		return {
			creator: options?.creator ?? theme.getBeforeCreator(),
			styler: options?.styler ?? this.newBeforeStyler(theme)
		};
	}

	protected newBeforeStyler(theme: THEME) {
		return (target: HTMLDivElement): void => {
			theme.setBeforeStyle(target);
		};
	}

	protected toAfterData(theme: THEME, options?: OPTIONS["after"]): UtilHtmlElementAfterData {
		return {
			creator: options?.creator ?? theme.getAfterCreator(),
			styler: options?.styler ?? this.newAfterStyler(theme)
		};
	}

	protected newAfterStyler(theme: THEME) {
		return (target: HTMLDivElement): void => {
			theme.setAfterStyle(target);
		};
	}

	get element(): ELEMENT | null {
		return this._element ?? null;
	}

	get when(): UtilHtmlElementWhen {
		return this._data.when;
	}

	onDowning(e: interaction.InteractionEvent | KeyboardEvent): void {
		this._wasStarted = this._isStarted;
		switch (this.when) {
			case UtilHtmlElementWhen.CLICKED:
				this.start();
				break;
			case UtilHtmlElementWhen.FOCUSED:
				if (this._target.state.isFocused) {
					this.start();
				}
				break;
		}
	}

	onDown(e: interaction.InteractionEvent | KeyboardEvent): void {
		if (!this._wasStarted && this._isStarted) {
			if ("data" in e) {
				e.data.originalEvent.preventDefault();
			} else {
				e.preventDefault();
			}
		}
	}

	onDblClick(
		e: MouseEvent | TouchEvent | KeyboardEvent,
		interactionManager: interaction.InteractionManager
	): void {
		switch (this.when) {
			case UtilHtmlElementWhen.DOUBLE_CLICKED:
				this.start();
				break;
		}
	}

	onFocus(): void {
		switch (this.when) {
			case UtilHtmlElementWhen.FOCUSED:
				this.start();
				break;
			default:
				this._element?.focus();
				break;
		}
	}

	onBlur(): void {
		switch (this.when) {
			case UtilHtmlElementWhen.CLICKED:
			case UtilHtmlElementWhen.DOUBLE_CLICKED:
			case UtilHtmlElementWhen.FOCUSED:
				this.onEndByBlur();
				this.cancel();
				break;
			default:
				this._element?.blur();
				break;
		}
	}

	isStartable(): boolean {
		switch (this.when) {
			case UtilHtmlElementWhen.CLICKED:
			case UtilHtmlElementWhen.DOUBLE_CLICKED:
			case UtilHtmlElementWhen.FOCUSED:
				return this._target.state.isActionable;
			default:
				return true;
		}
	}

	start(): void {
		if (!this._isStarted && this.isStartable()) {
			this._isStarted = true;
			if (this._target.worldVisible) {
				this.doStart();
			} else {
				this._isStartRequested = true;
			}
			DApplications.update(this._target);
		}
	}

	isShown(): boolean {
		return this._isElementShown;
	}

	onRender(renderer: Renderer): void {
		if (
			this._isStartRequested ||
			(!this._isElementShown && this.when === UtilHtmlElementWhen.ALWAYS)
		) {
			this._isStartRequested = false;
			this.doStart(renderer);
		}
		if (this._isStarted) {
			this._isStarted = false;
		}
	}

	protected getElementRect(resolution: number): Rectangle | null {
		const point = this._point || new Point(0, 0);
		this._point = point;
		const result = this._elementRectResult || new Rectangle();
		this._elementRectResult = result;
		return this._operation.getElementRect(resolution, point, result);
	}

	protected getElementMatrix(): Matrix | null {
		return this._operation.getElementMatrix();
	}

	protected getClipperRect(resolution: number): Rectangle | null {
		const point = this._point || new Point(0, 0);
		this._point = point;
		const result = this._clipperRectResult || new Rectangle();
		this._clipperRectResult = result;
		return this._operation.getClipperRect(resolution, point, result);
	}

	protected doStart(renderer?: Renderer): void {
		if (!this._isElementShown) {
			this._isElementShown = true;

			const rendererBound = this._rendererBound;
			if (rendererBound != null) {
				this._rendererBound = undefined;
				rendererBound.off("postrender", this._onPostRenderBound);
			}

			const target = this._target;
			if (renderer == null) {
				renderer = DApplications.getLayer(target)?.renderer;
			}
			if (renderer) {
				this._rendererBound = renderer;
				renderer.on("postrender", this._onPostRenderBound);
			}

			this.onStart();

			const clipper = this.getClipper();
			if (clipper) {
				const before = this.getBefore(clipper);
				const element = this.getElement(clipper);
				const after = this.getAfter(clipper);
				if (element) {
					const resolution = renderer?.resolution ?? DApplications.getResolution(target);
					const elementRect = this.getElementRect(resolution);
					const elementMatrix = this.getElementMatrix();
					const clipperRect = this.toClipperRectAdjusted(
						elementRect,
						elementMatrix,
						this.getClipperRect(resolution)
					);
					const state = target.state;
					const padding = this._operation.getPadding();
					const options = this._data;
					options.clipper.styler(
						clipper,
						state,
						padding,
						elementRect,
						elementMatrix,
						clipperRect
					);
					options.element.styler(
						element,
						state,
						padding,
						elementRect,
						elementMatrix,
						clipperRect
					);
					if (before) {
						options.before.styler(before);
					}
					if (after) {
						options.after.styler(after);
					}
					this.onElementAttached(element, before, after);

					// Show HTML elements
					clipper.style.display = "";
					if (state.isFocused) {
						this.toElementFocused(element);
					}
					clipper.scrollTop = 0;
					clipper.scrollLeft = 0;

					// Select the element if required.
					// Note that a selecting without the setTimeout causes a key stroke drop on Microsoft Edge.
					if (this._data.select) {
						setTimeout(this._doSelectBound, 0);
					}
				}
			}
		}
	}

	protected toElementFocused(element: ELEMENT): void {
		element.focus({
			preventScroll: true
		});
	}

	protected onStart(): void {
		this._operation.onStart();
	}

	protected doSelect(): void {
		const element = this._element;
		if (element) {
			if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
				// The following does not work on mobile devices.
				// I think selecting texts on a tap is annoying.
				// Therefore, I leave this untouched.
				element.select();
			}
		}
	}

	cancel(): void {
		if (this._isElementShown) {
			this._isElementShown = false;

			const rendererBound = this._rendererBound;
			if (rendererBound != null) {
				this._rendererBound = undefined;
				rendererBound.off("postrender", this._onPostRenderBound);
			}

			this.onCancel();

			const target = this._target;
			const layer = DApplications.getLayer(target);
			if (layer) {
				const view = layer.view;
				switch (this.when) {
					case UtilHtmlElementWhen.CLICKED:
					case UtilHtmlElementWhen.DOUBLE_CLICKED:
					case UtilHtmlElementWhen.FOCUSED:
						if (document.activeElement === this._element) {
							view.focus();
						}
						break;
				}

				const state = target.state;
				const interactionManager = layer.renderer.plugins.interaction;
				if (
					this._operation.containsPoint(interactionManager.mouse.global) &&
					!state.isHovered
				) {
					state.isHovered = true;
					view.style.cursor = target.cursor;
				}

				layer.update();
			}

			const element = this._element;
			if (element != null) {
				this.onElementDetached(element, this._before, this._after);
			}

			const clipper = this._clipper;
			if (clipper != null) {
				clipper.style.display = "none";
			}
		}
	}

	protected onCancel(): void {
		this._operation.onCancel();
	}

	protected onElementAttached(
		element: ELEMENT,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		before?.addEventListener("focus", this._onBeforeFocusBound);
		after?.addEventListener("focus", this._onAfterFocusBound);
		element.addEventListener("focus", this._onElementFocusBound, true);
	}

	protected onElementDetached(
		element: ELEMENT,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		before?.removeEventListener("focus", this._onBeforeFocusBound);
		after?.removeEventListener("focus", this._onAfterFocusBound);
		element.removeEventListener("focus", this._onElementFocusBound, true);
	}

	protected getClipper(): HTMLDivElement | null {
		let result = this._clipper;
		if (result == null) {
			const layer = DApplications.getLayer(this._target);
			result = layer ? this._data.clipper.creator(layer.getElementContainer()) : null;
			this._clipper = result;
		}
		return result;
	}

	protected getElement(clipper: HTMLDivElement): ELEMENT | null {
		let result = this._element;
		if (result == null) {
			result = this._data.element.creator(clipper);
			this._element = result;
		}
		return result;
	}

	protected getBefore(clipper: HTMLDivElement): HTMLDivElement | null {
		let result = this._before;
		if (result == null) {
			result = this._data.before.creator(clipper);
			this._before = result;
		}
		return result;
	}

	protected getAfter(clipper: HTMLDivElement): HTMLDivElement | null {
		let result = this._after;
		if (result == null) {
			result = this._data.after.creator(clipper);
			this._after = result;
		}
		return result;
	}

	protected onBeforeFocus(e: FocusEvent): void {
		const target = this._target;
		const layer = DApplications.getLayer(target);
		if (layer) {
			const focusController = layer.getFocusController();
			const focusable = focusController.find(target, false, false, false);
			layer.view.focus();
			focusController.focus(focusable);
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}

	protected onAfterFocus(e: FocusEvent): void {
		const target = this._target;
		const layer = DApplications.getLayer(target);
		if (layer) {
			const focusController = layer.getFocusController();
			const focusable = focusController.find(target, false, false, true);
			layer.view.focus();
			focusController.focus(focusable);
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}

	protected onElementFocus(e: FocusEvent): void {
		if (this.when === UtilHtmlElementWhen.ALWAYS) {
			const target = this._target;
			if (!target.state.isFocused) {
				target.focus();
			}
		}
	}

	protected onEndByBlur(): void {
		this.onEnd();
	}

	protected onEnd(): void {
		this._operation.onEnd();
	}

	end(): void {
		this.onEnd();
		this.cancel();
	}

	select(): this {
		if (this._isElementShown && this._data.select) {
			this.doSelect();
		}
		return this;
	}

	protected toClipperRectAdjusted(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperRect: Rectangle | null
	): Rectangle | null {
		if (clipperRect && elementRect && elementMatrix == null) {
			const ex0 = elementRect.x;
			const ey0 = elementRect.y;
			const ex1 = ex0 + elementRect.width;
			const ey1 = ey0 + elementRect.height;
			const cx0 = clipperRect.x;
			const cy0 = clipperRect.y;
			const cx1 = cx0 + clipperRect.width;
			const cy1 = cy0 + clipperRect.height;
			const ncx0 = Math.min(Math.max(cx0, ex0), cx1);
			const ncx1 = Math.min(Math.max(cx0, ex1), cx1);
			const ncy0 = Math.min(Math.max(cy0, ey0), cy1);
			const ncy1 = Math.min(Math.max(cy0, ey1), cy1);
			clipperRect.x = ncx0;
			clipperRect.y = ncy0;
			clipperRect.width = ncx1 - ncx0;
			clipperRect.height = ncy1 - ncy0;
		}
		return clipperRect;
	}

	protected updateElement(renderer: Renderer): void {
		if (this._isElementShown) {
			const target = this._target;
			if (target.worldVisible) {
				const element = this._element;
				const clipper = this._clipper;
				if (element && clipper) {
					const resolution = renderer.resolution;
					const elementRect = this.getElementRect(resolution);
					const elementMatrix = this.getElementMatrix();
					const clipperRect = this.toClipperRectAdjusted(
						elementRect,
						elementMatrix,
						this.getClipperRect(resolution)
					);
					const state = target.state;
					const padding = this._operation.getPadding();
					const options = this._data;
					options.clipper.styler(
						clipper,
						state,
						padding,
						elementRect,
						elementMatrix,
						clipperRect
					);
					options.element.styler(
						element,
						state,
						padding,
						elementRect,
						elementMatrix,
						clipperRect
					);
				}
			} else {
				switch (this.when) {
					case UtilHtmlElementWhen.ALWAYS:
						const clipper = this._clipper;
						if (clipper) {
							clipper.style.display = "none";
						}
						break;
					default:
						this.cancel();
						break;
				}
			}
		}
	}

	static getClipperRect(
		parent: unknown,
		target: unknown,
		resolution: number,
		point: Point,
		result: Rectangle
	): Rectangle | null {
		let isFirst = true;

		let x0 = 0;
		let y0 = 0;
		let x1 = 0;
		let y1 = 0;

		let current = parent;
		while (current instanceof DBase) {
			current.getClippingRect(target, result);

			point.set(result.x, result.y);
			current.toGlobal(point, point, false);
			const cx0 = ((point.x * resolution) | 0) / resolution;
			const cy0 = ((point.y * resolution) | 0) / resolution;

			point.set(result.x + result.width, result.y + result.height);
			current.toGlobal(point, point, true);
			const cx1 = point.x;
			const cy1 = point.y;

			const dx0 = Math.min(cx0, cx1);
			const dy0 = Math.min(cy0, cy1);
			const dx1 = Math.max(cx0, cx1);
			const dy1 = Math.max(cy0, cy1);

			if (isFirst) {
				isFirst = false;
				x0 = dx0;
				y0 = dy0;
				x1 = dx1;
				y1 = dy1;
			} else {
				x0 = Math.min(Math.max(x0, dx0), dx1);
				y0 = Math.min(Math.max(y0, dy0), dy1);
				x1 = Math.min(Math.max(x1, dx0), dx1);
				y1 = Math.min(Math.max(y1, dy0), dy1);
			}

			current = current.parent;
		}

		if (isFirst) {
			return null;
		}

		result.x = x0;
		result.y = y0;
		result.width = x1 - x0;
		result.height = y1 - y0;
		return result;
	}
}
