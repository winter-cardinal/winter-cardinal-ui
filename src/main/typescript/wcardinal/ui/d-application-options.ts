/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationPadding } from "./d-application-padding";
import { DPadding } from "./d-padding";

interface PixiApplicationOptions {
	width: number;
	height: number;
	autoStart: boolean;
	backgroundColor: number;
	antialias: boolean;
}

export class DApplicationOptions {
	private _body: HTMLElement;
	private _options: PixiApplicationOptions;
	private _padding: DPadding;

	constructor() {
		const body = this._body = document.body;
		const bbox = body.getBoundingClientRect();
		this._padding = new DApplicationPadding( 6, 6, 6, 6 );
		this._options = {
			width: bbox.width,
			height: bbox.height,
			autoStart: false,
			backgroundColor: 0xeeeeee,
			antialias: false
		};
	}

	getRootElement() {
		return this._body;
	}

	getWidth() {
		return this._options.width;
	}

	getHeight() {
		return this._options.height;
	}

	setPadding( left: number, top: number, right: number, bottom: number ): this {
		const padding = this._padding;
		padding.left = left;
		padding.top = top;
		padding.right = right;
		padding.bottom = bottom;
		return this;
	}

	getPadding(): DPadding {
		return this._padding;
	}

	setBackgroundColor( color: number ): this {
		this._options.backgroundColor = color;
		return this;
	}

	getBackgroundColor(): number {
		return this._options.backgroundColor;
	}

	setAntialias( antialias: boolean ): this {
		this._options.antialias = antialias;
		return this;
	}

	getAntialias(): boolean {
		return this._options.antialias;
	}

	getPixiApplicationOptions(): PixiApplicationOptions {
		return this._options;
	}
}
