/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationPadding } from "./d-application-padding";
import { DPadding, DPaddingLike } from "./d-padding";
import { isNumber } from "./util/is-number";

/**
 * PixiJS options
 */
interface PixiApplicationOptions {
	width: number;
	height: number;
	autoStart: boolean;
	backgroundColor: number;
	transparent: boolean;
	resolution: number;
	antialias: boolean;
}

interface DApplicationLayerBackgroundOptions {
	color?: number | null;
}

interface DApplicationLayerOptionsOptions {
	root: HTMLElement;
	padding?: number | DPaddingLike;
	width?: number;
	height?: number;
	background?: DApplicationLayerBackgroundOptions;
	resolution: number;
	antialias?: boolean;

	/**
	 * Sets to true if a layer is a overlay layer.
	 */
	overlay: boolean;
}

/**
 * DApplicationLayer options
 */
export class DApplicationLayerOptions {
	private _root: HTMLElement;
	private _pixi: PixiApplicationOptions;
	private _padding: DPadding;
	private _overlay: boolean;

	constructor( options: DApplicationLayerOptionsOptions ) {
		// Root
		const root = this._root = options.root;

		// Overlay mode or not
		this._overlay = options.overlay;

		// Padding
		const padding = options && options.padding;
		if( isNumber( padding ) ) {
			this._padding = new DApplicationPadding( padding, padding, padding, padding );
		} else if( padding != null ) {
			this._padding = new DApplicationPadding(
				padding.top || 0,
				padding.right || 0,
				padding.bottom || 0,
				padding.left || 0
			);
		} else {
			this._padding = new DApplicationPadding( 6, 6, 6, 6 );
		}

		// Width & height
		let width = 100;
		let height = 100;
		if( options ) {
			if( options.width != null ) {
				width = options.width;
				if( options.height != null ) {
					height = options.height;
				} else {
					height = root.getBoundingClientRect().height;
				}
			} else if( options.height != null ) {
				width = root.getBoundingClientRect().width;
				height = options.height;
			} else {
				const bbox = root.getBoundingClientRect();
				width = bbox.width;
				height = bbox.height;
			}
		} else {
			const bbox = root.getBoundingClientRect();
			width = bbox.width;
			height = bbox.height;
		}

		// Background color
		const background = options && options.background;
		let backgroundColor = 0;
		let transparent = true;
		if( background != null ) {
			const color = background.color;
			if( color != null ) {
				backgroundColor = color;
				transparent = false;
			}
		}

		// Resolution
		const resolution = options.resolution;

		// Antialias
		const antialias = ( options && options.antialias != null ? options.antialias : false );

		// Pixi
		this._pixi = {
			width,
			height,
			autoStart: false,
			backgroundColor,
			transparent,
			resolution,
			antialias
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
	getWidth(): number {
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
	getHeight(): number {
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

	/**
	 * Returns true if a layer is supposed to be an overlay layer.
	 */
	isOverlay(): boolean {
		return this._overlay;
	}

	getPixiApplicationOptions(): PixiApplicationOptions {
		return this._pixi;
	}
}
