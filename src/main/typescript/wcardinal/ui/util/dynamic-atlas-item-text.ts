/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture, Text } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";

export class DynamicAtlasItemText extends DynamicAtlasItem {
	protected _text: Text;

	constructor( id: string, text: Text, baseTexture: BaseTexture ) {
		super( id, text.width, text.height, 0, baseTexture );
		this._text = text;
	}

	render( context: CanvasRenderingContext2D ): void {
		const frame = this.frame;
		context.drawImage( this._text.canvas, frame.x, frame.y, frame.width, frame.height );
	}
}
