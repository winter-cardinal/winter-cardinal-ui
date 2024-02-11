/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";

export class DynamicAtlasItemImage extends DynamicAtlasItem {
	source: TexImageSource;

	constructor(
		src: string,
		width: number,
		height: number,
		source: TexImageSource,
		baseTexture: BaseTexture
	) {
		super(src, width / baseTexture.resolution, height / baseTexture.resolution, 0, baseTexture);
		this.source = source;
	}

	render(context: CanvasRenderingContext2D): void {
		const frame = this.frame;
		const x = frame.x;
		const y = frame.y;
		const w = frame.width;
		const h = frame.height;
		const source = this.source;

		if (source instanceof ImageData) {
			context.putImageData(source, x, y);

			context.putImageData(source, x - 1, y, 0, 0, 1, h);
			context.putImageData(source, x, y - 1, 0, 0, w, 1);
			context.putImageData(source, x + w, y, w - 1, 0, 1, h);
			context.putImageData(source, x, y + h, 0, h - 1, w, 1);
		} else {
			context.drawImage(source, x, y, w, h);

			context.drawImage(source, 0, 0, 1, h, x - 1, y - 1, 1, h + 2);
			context.drawImage(source, 0, 0, w, 1, x, y - 1, w, 1);
			context.drawImage(source, w - 1, 0, 1, h, x + w, y - 1, 1, h + 2);
			context.drawImage(source, 0, h - 1, w, 1, x, y + h, w, 1);
		}
	}
}
