/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DApplications } from "../d-applications";
import { DCornerMask } from "../d-corner-mask";
import { toSvgUrl } from "./to-svg-url";

export class UtilTexturePlane {
	protected static INSTANCE: UtilTexturePlane | null = null;

	protected _backgroundCache: Map<number, Texture>;
	protected _backgroundAttribute: string;
	protected _borderCache: Map<number, Map<number, Texture>>;
	protected _borderAttribute: (width: number) => string;
	protected _onUpdate: () => void;

	constructor() {
		this._backgroundCache = new Map<number, Texture>();
		this._backgroundAttribute = `fill="#fff" stroke="none"`;
		this._borderCache = new Map<number, Map<number, Texture>>();
		this._borderAttribute = (width: number): string => {
			return `fill="none" stroke="#fff" stroke-width="${width}"`;
		};
		this._onUpdate = (): void => {
			DApplications.update();
		};
	}

	protected toCornerTl(offset: number, size: number, tl: number): string {
		return 0 < tl ? `A${tl} ${tl} 0 0 1 ${offset + tl} ${offset}` : "";
	}

	protected toCornerBr(offset: number, size: number, br: number): string {
		return 0 < br ? `A${br} ${br} 0 0 1 ${offset + size - br} ${offset + size}` : "";
	}

	protected make(radius: number, offset: number, attr: string): Texture {
		const realRadius = Math.max(0, radius - offset);
		const size: number = realRadius * 2 + 4;
		const realSize: number = size + offset * 2;
		const d =
			`M${offset + realRadius} ${offset}` +
			`L${offset + size} ${offset}` +
			`L${offset + size} ${offset + size - realRadius}` +
			this.toCornerBr(offset, size, realRadius) +
			`L${offset} ${offset + size}` +
			`L${offset} ${offset + realRadius}` +
			this.toCornerTl(offset, size, realRadius) +
			`Z`;
		return this.toSvg(realSize, attr, d);
	}

	protected toSvg(realSize: number, attr: string, d: string): Texture {
		const resolution = window.devicePixelRatio ?? 1;
		const widthAttr = `width="${realSize * resolution}"`;
		const heightAttr = `height="${realSize * resolution}"`;
		const viewBoxAttr = `viewBox="0 0 ${realSize} ${realSize}"`;
		const svg =
			`<svg ${widthAttr} ${heightAttr} ${viewBoxAttr} xmlns="http://www.w3.org/2000/svg">` +
			`<path ${attr} d="${d}"></path>` +
			`</svg>`;
		return Texture.from(toSvgUrl(svg), {
			resolution
		});
	}

	newBackground(radius: number): Texture {
		const result = this.make(radius, 0, this._backgroundAttribute);
		result.on("update", this._onUpdate);
		return result;
	}

	newBorder(radius: number, width: number): Texture {
		const result = this.make(radius, 0.5 * width, this._borderAttribute(width));
		result.on("update", this._onUpdate);
		return result;
	}

	getBackground(radius: number): Texture {
		const cache = this._backgroundCache;

		let texture = cache.get(radius);
		if (texture == null) {
			texture = this.newBackground(radius);
			cache.set(radius, texture);
		}

		return texture;
	}

	getBorder(radius: number, width: number): Texture {
		const cache = this._borderCache;

		let maskToTexture = cache.get(radius);
		if (maskToTexture == null) {
			maskToTexture = new Map<DCornerMask, Texture>();
			cache.set(radius, maskToTexture);
		}

		let texture = maskToTexture.get(width);
		if (texture == null) {
			texture = this.newBorder(radius, width);
			maskToTexture.set(width, texture);
		}

		return texture;
	}

	static getInstance(): UtilTexturePlane {
		if (UtilTexturePlane.INSTANCE == null) {
			UtilTexturePlane.INSTANCE = new UtilTexturePlane();
		}
		return UtilTexturePlane.INSTANCE;
	}
}
