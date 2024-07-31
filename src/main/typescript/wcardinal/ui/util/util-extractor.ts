/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Extract, Matrix, Renderer, RenderTexture, SCALE_MODES } from "pixi.js";
import { DApplications } from "../d-applications";
import { DBase } from "../d-base";
import { UtilExtractorPixels } from "./util-extractor-pixels";
import { UtilExtractorCanvas } from "./util-extractor-canvas";

export class UtilExtractor {
	static toTexture(
		target: DBase,
		resolution?: number,
		clear?: boolean,
		skipUpdateTransform?: boolean
	): RenderTexture {
		const scale = target.transform.scale;
		const width = Math.max(1, Math.ceil(target.width * scale.x));
		const height = Math.max(1, Math.ceil(target.height * scale.y));
		const result = RenderTexture.create({
			width,
			height,
			scaleMode: SCALE_MODES.LINEAR,
			resolution
		});
		const matrix = new Matrix(
			undefined,
			undefined,
			undefined,
			undefined,
			-target.position.x,
			-target.position.y
		);
		const layer = DApplications.getLayer(target);
		if (layer) {
			layer.renderer.render(target, result, clear, matrix, skipUpdateTransform);
		}
		return result;
	}

	static toPixels(renderTexture: RenderTexture, renderer: Renderer): UtilExtractorPixels {
		const baseTexture = renderTexture.baseTexture;
		const realWidth = baseTexture.realWidth;
		const realHeight = baseTexture.realHeight;
		const resolution = renderTexture.resolution;
		const frame = renderTexture.frame;
		const x0 = Math.floor(frame.x * resolution);
		const y0 = Math.floor(frame.y * resolution);
		const x1 = Math.floor((frame.x + frame.width) * resolution);
		const y1 = Math.floor((frame.y + frame.height) * resolution);
		const width = Math.min(x1 - x0, realWidth);
		const height = Math.min(y1 - y0, realHeight);
		const pixels = new Uint8Array(4 * width * height);
		if (0 < width && 0 < height) {
			const oldRenderTexture = renderer.renderTexture.current;
			renderer.renderTexture.bind(renderTexture);
			const gl = renderer.gl;
			gl.readPixels(x0, y0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
			renderer.renderTexture.bind(oldRenderTexture);
		}
		return {
			width,
			height,
			array: pixels
		};
	}

	static toCanvas(
		pixels: UtilExtractorPixels,
		scale?: number,
		ignorePremutipliedAlpha?: boolean,
		result?: UtilExtractorCanvas
	): UtilExtractorCanvas {
		const width = pixels.width;
		const height = pixels.height;
		const array = pixels.array;
		if (result == null) {
			result = new UtilExtractorCanvas(width, height);
		} else {
			result.resize(width, height);
		}
		if (width <= 0 || height <= 0) {
			return result;
		}
		const context = result.getContext();
		const element = result.getElement();
		if (context == null || element == null) {
			return result;
		}
		const imageData = context.getImageData(0, 0, width, height);
		if (ignorePremutipliedAlpha) {
			imageData.data.set(array);
		} else {
			(Extract as any).arrayPostDivide(array, imageData.data);
		}
		context.putImageData(imageData, 0, 0);

		// Scale down
		if (scale != null && scale !== 1) {
			context.scale(scale, scale);
			context.drawImage(element, 0, 0);
			const scaledWidth = Math.floor(width * scale);
			const scaledHeight = Math.floor(height * scale);
			const scaledImageData = context.getImageData(0, 0, scaledWidth, scaledHeight);
			result.resize(scaledWidth, scaledHeight);
			context.putImageData(scaledImageData, 0, 0);
		}

		return result;
	}

	static toBase64(canvas: HTMLCanvasElement, format?: string, quality?: number): string {
		return canvas.toDataURL(format, quality);
	}
}
