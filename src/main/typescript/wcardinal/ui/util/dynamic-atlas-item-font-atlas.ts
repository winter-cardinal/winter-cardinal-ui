/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";

export class DynamicAtlasItemFontAtlas extends DynamicAtlasItem {
	canvas: HTMLCanvasElement | null;

	constructor( atlas: DynamicSDFFontAtlas, baseTexture: BaseTexture ) {
		super( atlas.id, atlas.width / baseTexture.resolution, atlas.height / baseTexture.resolution, 0, baseTexture );
		this.canvas = atlas.canvas;
	}

	render( context: CanvasRenderingContext2D ): void {
		const canvas = this.canvas;
		if( canvas != null ) {
			const frame = this.frame;
			context.drawImage( canvas, frame.x, frame.y, frame.width, frame.height );
		}
	}
}
