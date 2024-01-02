/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";

export class DynamicAtlasItemFontAtlas extends DynamicAtlasItem {
	atlas: DynamicSDFFontAtlas;

	constructor(atlas: DynamicSDFFontAtlas, baseTexture: BaseTexture) {
		super(
			atlas.id,
			atlas.width / baseTexture.resolution,
			atlas.height / baseTexture.resolution,
			0,
			baseTexture
		);
		this.atlas = atlas;
	}

	render(context: CanvasRenderingContext2D): void {
		const imageData = this.atlas.imageData;
		if (imageData != null) {
			const frame = this.frame;
			context.putImageData(imageData, frame.x, frame.y);
		}
	}
}
