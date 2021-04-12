/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture, Texture } from "pixi.js";
import { EShapeBufferUnit } from "./e-shape-buffer-unit";

export class EShapeBufferUnitBuilder {
	index: number;
	baseTexture: BaseTexture | null;
	units: EShapeBufferUnit[];

	constructor() {
		this.index = 0;
		this.baseTexture = null;
		this.units = [];
	}

	begin(): void {
		this.index = 0;
		this.baseTexture = null;
	}

	push(texture: Texture, indexOffset: number): void {
		if (this.index < this.units.length) {
			const unit = this.units[this.index];
			unit.texture = texture;
			unit.indexOffset = indexOffset;
		} else {
			this.units.push(new EShapeBufferUnit(texture, indexOffset));
		}
		this.index += 1;
	}

	end(): void {
		if (this.units.length !== this.index) {
			this.units.length = this.index;
		}
	}

	destroy(): void {
		this.units.length = 0;
	}
}
