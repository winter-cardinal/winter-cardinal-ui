/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationPadding } from "./d-application-padding";
import { DPadding } from "./d-padding";

/**
 * PixiJS options
 */
interface PixiApplicationOptions {
	width: number;
	height: number;
	autoStart: boolean;
	backgroundColor: number;
	antialias: boolean;
}

/**
 * DApplication options
 */
export class DApplicationOptions {
	private _root: HTMLElement;
	private _pixi: PixiApplicationOptions;
	private _padding: DPadding;

	constructor() {
		const body = this._root = document.body;
		const bbox = body.getBoundingClientRect();
		this._padding = new DApplicationPadding( 6, 6, 6, 6 );
		this._pixi = {
			width: bbox.width,
			height: bbox.height,
			autoStart: false,
			backgroundColor: 0xeeeeee,
			antialias: false
		};
	}

	/**
	 * Returns a root element.
	 * `HTMLCanvasElement` and other DOM elements are created in this element.
	 * The default root element is `document.body`.
	 */
	getRootElement(): HTMLElement {
		return this._root;
	}

	/**
	 * Sets a root element and updates the canvas width and height
	 * if `updateWidthAndHeight` is not false.
	 *
	 * @param root new root element
	 * @param updateWidthAndHeight false to preserve the canvas width / height
	 */
	setRootElement( root: HTMLElement, updateWidthAndHeight?: boolean ): this {
		if( this._root !== root ) {
			this._root = root;
			if( updateWidthAndHeight !== false ) {
				const bbox = root.getBoundingClientRect();
				const pixi = this._pixi;
				pixi.width = bbox.width;
				pixi.height = bbox.height;
			}
		}
		return this;
	}

	/**
	 * Returns a canvas width.
	 */
	getWidth() {
		return this._pixi.width;
	}

	/**
	 * Sets a canvas width.
	 *
	 * @param width new canvas width
	 */
	setWidth( width: number ): this {
		this._pixi.width = width;
		return this;
	}

	/**
	 * Returns a canvas height.
	 */
	getHeight() {
		return this._pixi.height;
	}

	/**
	 * Sets a canvas height.
	 *
	 * @param height new canvas height
	 */
	setHeight( height: number ): this {
		this._pixi.height = height;
		return this;
	}

	/**
	 * Returns padding sizes.
	 * The default padding size is 6.
	 */
	getPadding(): DPadding {
		return this._padding;
	}

	/**
	 * Sets padding sizes.
	 *
	 * @param left new left padding
	 * @param top new top padding
	 * @param right new right padding
	 * @param bottom new bottom padding
	 * @asse getPadding
	 */
	setPadding( left: number, top: number, right: number, bottom: number ): this {
		const padding = this._padding;
		padding.left = left;
		padding.top = top;
		padding.right = right;
		padding.bottom = bottom;
		return this;
	}

	/**
	 * Returns a background color.
	 */
	getBackgroundColor(): number {
		return this._pixi.backgroundColor;
	}

	/**
	 * Sets a background color.
	 *
	 * @param color new background color
	 */
	setBackgroundColor( color: number ): this {
		this._pixi.backgroundColor = color;
		return this;
	}

	/**
	 * Returns an antialias setting.
	 * The default antialias setting is false.
	 */
	getAntialias(): boolean {
		return this._pixi.antialias;
	}

	/**
	 * Sets an antialias setting.
	 *
	 * @param antialias new antialias setting
	 */
	setAntialias( antialias: boolean ): this {
		this._pixi.antialias = antialias;
		return this;
	}

	getPixiApplicationOptions(): PixiApplicationOptions {
		return this._pixi;
	}
}
