/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";

export class DynamicAtlasItemImage extends DynamicAtlasItem {
	image: HTMLImageElement;

	constructor(image: HTMLImageElement, baseTexture: BaseTexture) {
		super(
			image.src,
			image.width / baseTexture.resolution,
			image.height / baseTexture.resolution,
			0,
			baseTexture
		);
		this.image = image;
	}

	render(context: CanvasRenderingContext2D): void {
		const frame = this.frame;
		const x = frame.x;
		const y = frame.y;
		const w = frame.width;
		const h = frame.height;
		const image = this.image;

		context.drawImage(image, x, y, w, h);

		context.drawImage(image, 0, 0, 1, h, x - 1, y - 1, 1, h + 2);
		context.drawImage(image, 0, 0, w, 1, x, y - 1, w, 1);
		context.drawImage(image, w - 1, 0, 1, h, x + w, y - 1, 1, h + 2);
		context.drawImage(image, 0, h - 1, w, 1, x, y + h, w, 1);
	}
}
