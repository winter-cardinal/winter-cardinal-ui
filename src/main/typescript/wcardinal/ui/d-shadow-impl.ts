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

	constructor( texture: Texture, width: number, height: number, offsetX: number, offsetY: number ) {
		super( texture, width, height, width, height );

		this._offsetX = offsetX;
		this._offsetY = offsetY;

		this.interactive = false;
		this.interactiveChildren = false;

		texture.on( "update", (): void => {
			this.onTextureUpdate();
		});
	}

	protected onTextureUpdate(): void {
		this.emit( "update", this );
	}

	onReflow( base: DBase, width: number, height: number ): void {
		this.x = -this.leftWidth + this._offsetX;
		this.y = -this.topHeight + this._offsetY;
		this.width = this.leftWidth + width + this.rightWidth;
		this.height = this.topHeight + height + this.bottomHeight;
	}
}
