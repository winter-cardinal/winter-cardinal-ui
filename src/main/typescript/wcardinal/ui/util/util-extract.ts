/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Renderer, RenderTexture, SCALE_MODES, utils } from "pixi.js";
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
	protected static WORK_RENDER_TEXTURE?: RenderTexture;

	static texture(options: UtilExtractTextureOptions): RenderTexture {
		const target = options.target;
		const resolution = toResolution(options);
		const skipUpdateTransform = options.transform?.update;
		return UtilExtractor.toTexture(target, resolution, options.clear, skipUpdateTransform);
	}

	/**
	 * Extracts pixels from the target.
	 * This method internally creates one render texture and use that to extract pixels from the target.
	 * To free the allocated render texture, please call {@link destroy()}.
	 *
	 * @param options an extraction options
	 * @returns extracted pixels
	 */
	static pixels(options: UtilExtractPixelsOptions): UtilExtractorPixels {
		const renderer = toRenderer(options);

		// Create a render texture
		const target = options.target;
		const scale = target.transform.scale;
		const width = Math.floor(target.width * scale.x);
		const height = Math.floor(target.height * scale.y);
		const resolution = toResolution(options);
		let renderTexture = UtilExtract.WORK_RENDER_TEXTURE;
		if (renderTexture == null) {
			renderTexture = RenderTexture.create({
				width,
				height,
				scaleMode: SCALE_MODES.LINEAR,
				resolution
			});
			UtilExtract.WORK_RENDER_TEXTURE = renderTexture;
		} else {
			const baseTexture = renderTexture.baseTexture;
			const baseTextureWidth = baseTexture.width;
			const baseTextureHeight = baseTexture.height;
			const isWidthDirty = baseTextureWidth < width;
			const isHeightDirty = baseTextureHeight < height;
			const isResolutionDirty = renderTexture.resolution !== resolution;
			if (isResolutionDirty || isWidthDirty || isHeightDirty) {
				if (isResolutionDirty) {
					baseTexture.resolution = resolution;
				}
				renderTexture.resize(
					Math.max(width, baseTextureWidth),
					Math.max(height, baseTextureHeight),
					true
				);
			}
		}

		// Render to the render texture
		const frame = renderTexture.frame;
		if (frame.x !== 0 || frame.y !== 0 || frame.width !== width || frame.height !== height) {
			frame.x = 0;
			frame.y = 0;
			frame.width = width;
			frame.height = height;
			renderTexture.frame = frame;
		}

		const targetPosition = target.position;
		const matrix = new Matrix(1, 0, 0, 1, -targetPosition.x, -targetPosition.y);

		renderer.render(target, renderTexture, options.clear, matrix, options.transform?.update);

		// Extract pixels
		return UtilExtractor.toPixels(renderTexture, renderer);
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

	/**
	 * Clears all the memories.
	 */
	static destroy(): void {
		const texture = this.WORK_RENDER_TEXTURE;
		if (texture != null) {
			this.WORK_RENDER_TEXTURE = undefined;
			texture.destroy(true);
		}
	}
}
