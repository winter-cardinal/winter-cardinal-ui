/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture, MIPMAP_MODES, Texture } from "pixi.js";
import { DynamicAtlasItem } from "./dynamic-atlas-item";
import { DynamicAtlasItemEmpty } from "./dynamic-atlas-item-empty";
import { DynamicAtlasItemWhite } from "./dynamic-atlas-item-white";

const MAXIMUM_TEXTURE_SIZE = 4096;

export class DynamicAtlas {
	protected static INSTANCE: DynamicAtlas | null;

	protected _canvas: HTMLCanvasElement;
	protected _sortedData: DynamicAtlasItem[];
	protected _idToDatum: { [id: string]: DynamicAtlasItem };
	protected _baseTexture: BaseTexture;
	protected _isDirty: boolean;
	protected _predefined: { [id: string]: DynamicAtlasItem };

	constructor(resolution: number) {
		const canvas = (this._canvas = document.createElement("canvas"));
		canvas.width = canvas.height = 256;

		const baseTexture = (this._baseTexture = BaseTexture.from(canvas, {
			mipmap: MIPMAP_MODES.OFF,
			resolution
		}));

		this._idToDatum = {};
		this._sortedData = [];
		this._predefined = {
			empty: new DynamicAtlasItemEmpty("empty", 10, 10, 0, baseTexture),
			white: new DynamicAtlasItemWhite("white", 10, 10, 0, baseTexture)
		};

		this._isDirty = true;
	}

	updateFrames(width: number, data: DynamicAtlasItem[]): number {
		const padding = 4;
		let x = padding;
		let y = padding;
		let maxRowHeight = 0;
		for (let i = 0, imax = data.length; i < imax; ++i) {
			const datum = data[i];
			if (width < x + datum.frame.width + padding) {
				x = padding;
				y += maxRowHeight + padding;
				maxRowHeight = 0;
			}
			datum.frame.x = x | 0;
			datum.frame.y = y | 0;
			x += datum.frame.width + padding;
			maxRowHeight = Math.max(maxRowHeight, datum.frame.height);
		}

		const minHeight = y + maxRowHeight + padding;
		let result = 256;
		while (result < minHeight) {
			result <<= 1;
		}
		return Math.min(MAXIMUM_TEXTURE_SIZE, result);
	}

	renderFrames(width: number, height: number, data: DynamicAtlasItem[]): void {
		const canvas = this._canvas;
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext("2d");
		if (context != null) {
			for (let i = 0, imax = data.length; i < imax; ++i) {
				const datum = data[i];
				datum.render(context);
			}
		}
	}

	applyFrames(data: DynamicAtlasItem[]): void {
		for (let i = 0, imax = data.length; i < imax; ++i) {
			const datum = data[i];
			datum.applyFrame();
		}
	}

	calcCanvasWidth(data: DynamicAtlasItem[]): number {
		let result = 128;
		for (let i = data.length - 1; 0 <= i; --i) {
			const datum = data[i];
			const size = Math.max(datum.frame.width, datum.frame.height);
			while (result < size) {
				result <<= 1;
			}
		}
		return Math.min(MAXIMUM_TEXTURE_SIZE, result << 1);
	}

	cleanup(data: DynamicAtlasItem[]): void {
		data.sort(DynamicAtlas.ITEM_COMPARATOR);
		for (let i = data.length - 1; 0 <= i; --i) {
			const datum = data[i];
			if (0 < datum.ref) {
				data.length = i + 1;
				return;
			}
		}
		data.length = 0;
	}

	begin(): void {
		const data = this._sortedData;
		for (let i = 0, imax = data.length; i < imax; ++i) {
			const datum = data[i];
			datum.ref = 0;
		}

		this._isDirty = false;
	}

	end(): void {
		const idToDatum = this._idToDatum;
		const data = this._sortedData;
		for (let i = 0, imax = data.length; i < imax; ++i) {
			const datum = data[i];
			if (datum.ref <= 0) {
				if (!(datum.id in this._predefined)) {
					datum.destroy();
				}
				delete idToDatum[datum.id];
				this._isDirty = true;
			}
		}
	}

	repack(forcibly?: boolean): void {
		if (forcibly === true || this._isDirty) {
			this._isDirty = false;
			const data = this._sortedData;
			this.cleanup(data);
			const canvasWidth = this.calcCanvasWidth(data);
			const canvasHeight = this.updateFrames(canvasWidth, data);
			this.renderFrames(canvasWidth, canvasHeight, data);
			this._baseTexture.setRealSize(canvasWidth, canvasHeight);
			this.applyFrames(data);
		}
	}

	get(id: string): DynamicAtlasItem | null {
		const idToDatum = this._idToDatum;
		const datum = idToDatum[id];
		if (datum != null) {
			datum.ref += 1;
			return datum;
		} else {
			const predefined = this._predefined[id];
			if (predefined != null) {
				this.set(id, predefined);
				return predefined;
			}
		}
		return null;
	}

	set(id: string, item: DynamicAtlasItem): DynamicAtlasItem | undefined {
		const result = this._idToDatum[id];
		item.ref += 1;
		this._idToDatum[id] = item;
		this._sortedData.push(item);
		this._isDirty = true;
		return result;
	}

	toDirty(): void {
		this._isDirty = true;
	}

	getDefaultTexture(): Texture {
		return this.get("white")!.texture;
	}

	getBaseTexture(): BaseTexture {
		return this._baseTexture;
	}

	release(id: string): void {
		const idToDatum = this._idToDatum;
		const datum = idToDatum[id];
		if (datum != null) {
			datum.ref -= 1;
			if (datum.ref <= 0) {
				if (!(datum.id in this._predefined)) {
					datum.destroy();
				}
				delete idToDatum[id];
				this._isDirty = true;
			}
		}
	}

	static ITEM_COMPARATOR = (a: DynamicAtlasItem, b: DynamicAtlasItem): number => {
		if (a.ref <= 0) {
			if (b.ref <= 0) {
				return 0;
			} else {
				return +1;
			}
		} else {
			if (b.ref <= 0) {
				return -1;
			}
		}

		if (a.frame.height < b.frame.height) {
			return -1;
		} else if (b.frame.height < a.frame.height) {
			return +1;
		} else {
			return a.frame.width - b.frame.width;
		}
	};
}
