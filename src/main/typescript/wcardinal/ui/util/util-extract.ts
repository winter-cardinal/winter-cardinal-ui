/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer, RenderTexture, utils } from "pixi.js";
import { DApplicationLayerLike } from "../d-application-layer-like";
import { DApplicationLike } from "../d-application-like";
import { DApplications } from "../d-applications";
import { DBase } from "../d-base";
import { isNumber } from "./is-number";
import { UtilExtractor } from "./util-extractor";
import { UtilExtractorPixels } from "./util-extractor-pixels";
import { UtilFileDownloader } from "./util-file-downloader";

export interface UtilExtractTextureResolutionOptions {
	size: number;
}

export interface UtilExtractTextureTransformOptions {
	update?: boolean;
}

export interface UtilExtractTextureOptions {
	target: DBase;
	resolution?: number | UtilExtractTextureResolutionOptions;
	transform?: UtilExtractTextureTransformOptions;
	clear?: boolean;
}

export interface UtilExtractPixelsOptions extends UtilExtractTextureOptions {
	renderer?: Renderer;
	application?: DApplicationLike;
	layer?: DApplicationLayerLike;
}

export interface UtilExtractCanvasScaleOptions {
	size: number;
}

export interface UtilExtractCanvasAlphaOptions {
	premultiplied?: {
		ignore?: boolean;
	};
}

export interface UtilExtractCanvasOptions extends UtilExtractPixelsOptions {
	scale?: number | UtilExtractCanvasScaleOptions;
	alpha?: UtilExtractCanvasAlphaOptions;
}

export interface UtilExtractBase64Options extends UtilExtractCanvasOptions {
	format?: string;
	quality?: number;
}

export interface UtilExtractFileOptions extends UtilExtractBase64Options {
	filename: string;
}

const toResolution = (options: UtilExtractTextureOptions): number => {
	const target = options.target;
	const resolution = options.resolution;
	if (resolution != null) {
		if (isNumber(resolution)) {
			return resolution;
		} else {
			const scale = target.transform.scale;
			const size = Math.max(target.width * scale.x, target.height * scale.y);
			return Math.min(1, resolution.size / size);
		}
	} else {
		return window.devicePixelRatio ?? 1;
	}
};

const toScale = (
	pixels: UtilExtractorPixels,
	options: UtilExtractCanvasOptions
): number | undefined => {
	const scale = options.scale;
	if (scale != null) {
		if (isNumber(scale)) {
			return scale;
		} else {
			const size = scale.size;
			return Math.min(1, size / pixels.width, size / pixels.height);
		}
	}
};

const toRenderer = (options: UtilExtractPixelsOptions): Renderer => {
	const renderer = options.renderer;
	if (renderer) {
		return renderer;
	}
	const application = options.application;
	if (application) {
		return application.getLayerBase().renderer;
	}
	const layer = options.layer || DApplications.getLayer(options.target);
	if (layer) {
		return layer.renderer;
	}
	throw new Error("No renderer / application / layer found.");
};

export class UtilExtract {
	static texture(options: UtilExtractTextureOptions): RenderTexture {
		const target = options.target;
		const resolution = toResolution(options);
		const skipUpdateTransform = options.transform?.update;
		return UtilExtractor.toTexture(target, resolution, options.clear, skipUpdateTransform);
	}

	static pixels(options: UtilExtractPixelsOptions): UtilExtractorPixels {
		const renderer = toRenderer(options);
		const texture = this.texture(options);
		try {
			return UtilExtractor.toPixels(texture, renderer);
		} finally {
			if (texture) {
				texture.destroy();
			}
		}
	}

	static canvas(options: UtilExtractCanvasOptions): utils.CanvasRenderTarget {
		const pixels = this.pixels(options);
		const ignorePremutipliedAlpha = options.alpha?.premultiplied?.ignore;
		const scale = toScale(pixels, options);
		return UtilExtractor.toCanvas(pixels, scale, ignorePremutipliedAlpha);
	}

	static base64(options: UtilExtractBase64Options): string {
		const canvas = this.canvas(options);
		try {
			return UtilExtractor.toBase64(canvas.canvas, options.format, options.quality);
		} finally {
			if (canvas) {
				canvas.destroy();
			}
		}
	}

	static file(options: UtilExtractFileOptions): void {
		UtilFileDownloader.downloadUrl(options.filename, this.base64(options));
	}
}
