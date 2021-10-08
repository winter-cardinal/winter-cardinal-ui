/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, Rectangle } from "pixi.js";
import { DHtmlElement, DHtmlElementOptions, DThemeHtmlElement } from "./d-html-element";
import { UtilHtmlElementPadding } from "./util/util-html-element";
import { UtilInput, UtilInputOperation, UtilInputOptions, UtilThemeInput } from "./util/util-input";

export interface DInputOptions<
	VALUE = unknown,
	ELEMENT extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement,
	THEME extends DThemeInput<VALUE, ELEMENT> = DThemeInput<VALUE, ELEMENT>
> extends DHtmlElementOptions<VALUE, ELEMENT, THEME>,
		UtilInputOptions<VALUE, ELEMENT> {}

export interface DThemeInput<
	VALUE = unknown,
	ELEMENT extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement
> extends DThemeHtmlElement<VALUE, ELEMENT>,
		UtilThemeInput<VALUE, ELEMENT> {}

export abstract class DInput<
	VALUE = unknown,
	ELEMENT extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement,
	THEME extends DThemeInput<VALUE, ELEMENT> = DThemeInput<VALUE, ELEMENT>,
	OPTIONS extends DInputOptions<VALUE, ELEMENT, THEME> = DInputOptions<VALUE, ELEMENT, THEME>,
	UTIL extends UtilInput<VALUE, ELEMENT> = UtilInput<VALUE, ELEMENT>
> extends DHtmlElement<VALUE, ELEMENT, THEME, OPTIONS, UTIL> {
	protected newOperation(): UtilInputOperation<VALUE, ELEMENT> {
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
				this.hideText();
			},

			onCancel: (): void => {
				this.showText();
			},

			onEnd: (): void => {
				// DO NOTHING
			},

			getValue: (): VALUE | undefined => {
				return this._textValueComputed;
			},

			onValueInput: (newValue: VALUE): void => {
				this.onValueInput(newValue);
			},

			onValueChange: (newValue: VALUE, oldValue: VALUE): void => {
				this.text = newValue;
				this.onValueChange(newValue, oldValue);
			},

			onEnter: (): void => {
				this.onEnter();
			},

			applyTitle: (): void => {
				this.applyTitle();
			}
		};
	}

	get value(): VALUE {
		return this._textValueComputed!;
	}

	set value(value: VALUE) {
		this.text = value;
	}

	protected onTextChange(): void {
		super.onTextChange();
		this.validate();
	}

	protected onValueChange(newValue: VALUE, oldValue: VALUE): void {
		this.emit("change", newValue, oldValue, this);
	}

	protected onValueInput(newValue: VALUE): void {
		this.emit("input", newValue, this);
	}

	protected onEnter(): void {
		this.emit("enter", this);
	}

	validate(): string | null {
		return this.getUtil().validate();
	}

	protected applyTitle(): void {
		if (!this.getUtil().applyTitle()) {
			super.applyTitle();
		}
	}

	protected getType(): string {
		return "DInput";
	}
}
