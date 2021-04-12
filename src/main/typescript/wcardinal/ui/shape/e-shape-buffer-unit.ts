/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";

export class EShapeBufferUnit {
	texture: Texture;
	indexOffset: number;

	constructor(texture: Texture, indexOffset: number) {
		this.texture = texture;
		this.indexOffset = indexOffset;
	}
}
