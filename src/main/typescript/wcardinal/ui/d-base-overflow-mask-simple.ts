/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics, Renderer } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseReflowable } from "./d-base-reflowable";

export class DBaseOverflowMaskSimple extends Graphics implements DBaseReflowable {
	protected _isInitialized: boolean;
	protected _width: number;
	protected _height: number;

	constructor(parent: DBase) {
		super();
		this.parent = parent;

		this._isInitialized = false;
		this._width = this.width;
		this._height = this.height;
	}

	render(renderer: Renderer): void {
		this.updateTransform();
		super.render(renderer);
	}

	onReflow(base: DBase, width: number, height: number): void {
		if (this._isInitialized && this._width === width && this._height === height) {
			return;
		}
		this._isInitialized = true;
		this._width = width;
		this._height = height;

		this.clear();
		this.beginFill(0xffffff, 1);
		this.drawRect(0, 0, width, height);
		this.endFill();
	}
}
