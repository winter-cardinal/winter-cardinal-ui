/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { NineSlicePlane, Texture } from "pixi.js";
import { DBase } from "./d-base";
import { DShadow } from "./d-shadow";

export class DShadowImpl extends NineSlicePlane implements DShadow {
	protected _offsetX: number;
	protected _offsetY: number;
	protected _shiftX: number;
	protected _shiftY: number;

	constructor(texture: Texture, width: number, height: number, offsetX: number, offsetY: number) {
		super(texture, width, height, width, height);

		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._shiftX = width * 0.5;
		this._shiftY = height * 0.5;

		this.interactive = false;
		this.interactiveChildren = false;

		texture.on("update", (): void => {
			this.onTextureUpdate();
		});
	}

	protected onTextureUpdate(): void {
		this.emit("update", this);
	}

	onReflow(base: DBase, width: number, height: number): void {
		const sx = this._shiftX;
		const sy = this._shiftY;
		this.x = -sx + this._offsetX;
		this.y = -sy + this._offsetY;
		this.width = sx + width + sx;
		this.height = sy + height + sy;
	}
}
