/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Point, Renderer } from "pixi.js";
import { DynamicSDFFontGeneratorRenderer } from "./dynamic-sdf-font-generator-renderer";

export class DynamicSDFFontGenerator extends DisplayObject {
	protected static _INSTANCE: DynamicSDFFontGenerator | null = null;

	protected _generatorRenderer: DynamicSDFFontGeneratorRenderer | null = null;
	protected _source: HTMLCanvasElement | HTMLImageElement | null;

	constructor() {
		super();

		const canvas = document.createElement("canvas");
		canvas.width = 64;
		canvas.height = 64;
		this._source = null;
	}

	get source(): HTMLCanvasElement | HTMLImageElement | null {
		return this._source;
	}

	set source(source: HTMLCanvasElement | HTMLImageElement | null) {
		this._source = source;
	}

	calculateBounds(): void {
		this._bounds.clear();
	}

	render(renderer: Renderer): void {
		if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
			return;
		}
		const source = this._source;
		if (source == null) {
			return;
		}

		let generatorRenderer: DynamicSDFFontGeneratorRenderer | null = this._generatorRenderer;
		if (generatorRenderer == null) {
			generatorRenderer = new DynamicSDFFontGeneratorRenderer(renderer);
			this._generatorRenderer = generatorRenderer;
		}
		renderer.batch.setObjectRenderer(generatorRenderer);

		const mask = this.mask;
		if (mask) {
			renderer.mask.push(this, mask);
			generatorRenderer.render_(source);
			renderer.mask.pop(this);
		} else {
			generatorRenderer.render_(source);
		}
	}

	containsPoint(point: Point): boolean {
		return false;
	}

	static getInstance(): DynamicSDFFontGenerator {
		if (DynamicSDFFontGenerator._INSTANCE == null) {
			DynamicSDFFontGenerator._INSTANCE = new DynamicSDFFontGenerator();
		}
		return DynamicSDFFontGenerator._INSTANCE;
	}
}
