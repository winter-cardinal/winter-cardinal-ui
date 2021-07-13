/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Matrix, Point, Rectangle, Renderer } from "pixi.js";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import {
	UtilHtmlElement,
	UtilHtmlElementOperation,
	UtilHtmlElementOptions,
	UtilHtmlElementPadding,
	UtilThemeHtmlElement
} from "./util/util-html-element";

export interface DHtmlElementOptions<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement,
	THEME extends DThemeHtmlElement<VALUE, ELEMENT> = DThemeHtmlElement<VALUE, ELEMENT>
> extends DImageBaseOptions<VALUE, THEME>,
		UtilHtmlElementOptions<ELEMENT> {}

export interface DThemeHtmlElement<VALUE = unknown, ELEMENT extends HTMLElement = HTMLElement>
	extends DThemeImageBase<VALUE>,
		UtilThemeHtmlElement<ELEMENT> {}

export class DHtmlElement<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement,
	THEME extends DThemeHtmlElement<VALUE, ELEMENT> = DThemeHtmlElement<VALUE, ELEMENT>,
	OPTIONS extends DHtmlElementOptions<VALUE, ELEMENT, THEME> = DHtmlElementOptions<
		VALUE,
		ELEMENT,
		THEME
	>,
	UTIL extends UtilHtmlElement<ELEMENT> = UtilHtmlElement<ELEMENT>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected _util?: UTIL;

	protected getUtil(): UTIL {
		let result = this._util;
		if (result == null) {
			result = this.newUtil();
			this._util = result;
		}
		return result;
	}

	protected newUtil(): UTIL {
		return new UtilHtmlElement<ELEMENT>(
			this,
			this.newOperation(),
			this.theme,
			this._options
		) as any;
	}

	protected newOperation(): UtilHtmlElementOperation<ELEMENT> {
		return {
			getElementRect: (
				resolution: number,
				work: Point,
				result: Rectangle
			): Rectangle | null => {
				return this.getElementRect(resolution, work, result);
			},

			getElementMatrix: (): Matrix | null => {
				return null;
			},

			getClipperRect: (
				resolution: number,
				work: Point,
				result: Rectangle
			): Rectangle | null => {
				return this.getClipperRect(resolution, work, result);
			},

			getPadding: (): UtilHtmlElementPadding | null => {
				return this.padding;
			},

			containsPoint: (point: Point): boolean => {
				return this.containsPoint(point);
			},

			onStart: (): void => {
				// DO NOTHING
			},

			onCancel: (): void => {
				// DO NOTHING
			},

			onEnd: (): void => {
				// DO NOTHING
			}
		};
	}

	get element(): ELEMENT | null {
		return this.getUtil().element;
	}

	protected onDownThis(e: interaction.InteractionEvent): void {
		const util = this.getUtil();
		util.onDowning(e);
		super.onDownThis(e);
		util.onDown(e);
	}

	onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		this.getUtil().onDblClick(e, interactionManager);
		return super.onDblClick(e, interactionManager);
	}

	protected onFocus(): void {
		super.onFocus();
		this.getUtil().onFocus();
	}

	protected onBlur(): void {
		super.onBlur();
		this.getUtil().onBlur();
	}

	start(): void {
		this.getUtil().start();
	}

	render(renderer: Renderer): void {
		this.getUtil().onRender(renderer);
		super.render(renderer);
	}

	/**
	 * Please note that this method does not update transforms.
	 *
	 * @param resolution
	 */
	protected getElementRect(
		resolution: number,
		point: Point,
		result: Rectangle
	): Rectangle | null {
		point.set(0, 0);
		this.toGlobal(point, point, false);
		result.x = point.x;
		result.y = point.y;

		point.set(this.width, this.height);
		this.toGlobal(point, point, true);
		result.width = point.x - result.x;
		result.height = point.y - result.y;

		// Rounds pixels as Pixi.js does
		result.x = ((result.x * resolution) | 0) / resolution;
		result.y = ((result.y * resolution) | 0) / resolution;

		return result;
	}

	protected getClipperRect(
		resolution: number,
		point: Point,
		result: Rectangle
	): Rectangle | null {
		return UtilHtmlElement.getClipperRect(this.parent, this, resolution, point, result);
	}

	cancel(): void {
		this.getUtil().cancel();
	}

	end(): void {
		this.getUtil().end();
	}

	select(): this {
		this.getUtil().select();
		return this;
	}

	protected onActivateKeyDown(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			this.state.isPressed = true;
		}
	}

	protected onActivateKeyUp(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this.state.isPressed) {
				this.start();
			}
			this.state.isPressed = false;
		}
	}

	onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyDown(e);
		}
		return super.onKeyDown(e);
	}

	onKeyUp(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyUp(e);
		}
		return super.onKeyUp(e);
	}

	protected getType(): string {
		return "DHtmlElement";
	}
}
