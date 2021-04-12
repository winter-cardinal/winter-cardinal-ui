/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture, Rectangle, Texture } from "pixi.js";

export abstract class DynamicAtlasItem {
	id: string;
	ref: number;
	frame: Rectangle;
	texture: Texture;

	width: number;
	height: number;
	strokeWidth: number;

	constructor(
		id: string,
		width: number,
		height: number,
		strokeWidth: number,
		baseTexture: BaseTexture
	) {
		this.id = id;
		this.ref = 0;
		const resolution = baseTexture.resolution;
		this.frame = new Rectangle(0, 0, width * resolution, height * resolution);
		this.texture = new Texture(baseTexture, new Rectangle(0, 0, 1, 1));

		this.width = width;
		this.height = height;
		this.strokeWidth = strokeWidth;
	}

	abstract render(context: CanvasRenderingContext2D): void;

	applyFrame(): void {
		const resolutionInverse = 1 / this.texture.baseTexture.resolution;
		this.texture.frame.x = this.frame.x * resolutionInverse;
		this.texture.frame.y = this.frame.y * resolutionInverse;
		this.texture.frame.width = this.width;
		this.texture.frame.height = this.height;
		this.texture.updateUvs();
		this.texture.emit("update", this);
	}

	destroy(): void {
		this.texture.destroy();
	}
}
