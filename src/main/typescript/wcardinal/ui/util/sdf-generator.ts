/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { RenderTexture, Renderer, SCALE_MODES } from "pixi.js";
import { SdfMesh } from "./sdf-mesh";
import { DApplications } from "../d-applications";

export class SdfGenerator {
	protected _mesh: SdfMesh;
	protected _renderTexture: RenderTexture;
	protected _imageData?: ImageData;
	protected _context?: CanvasRenderingContext2D | null;

	constructor() {
		this._mesh = new SdfMesh();
		this._renderTexture = RenderTexture.create({
			width: 64,
			height: 64,
			scaleMode: SCALE_MODES.LINEAR,
			resolution: 1
		});
	}

	get canvas(): HTMLCanvasElement {
		return this._mesh.canvas;
	}

	get imageData(): ImageData | undefined {
		return this._imageData;
	}

	toDirty(): void {
		this._mesh.texture.update();
	}

	copy(
		source:
			| ImageBitmap
			| ImageData
			| HTMLImageElement
			| HTMLCanvasElement
			| HTMLVideoElement
			| OffscreenCanvas
	): void {
		const mesh = this._mesh;
		const canvas = mesh.canvas;
		const width = source.width;
		const height = source.height;
		if (canvas.width !== width || canvas.height !== height) {
			canvas.width = width;
			canvas.height = height;
			let context = this._context;
			if (context === undefined) {
				context = canvas.getContext("2d");
				this._context = context;
			}
			if (context != null) {
				if (source instanceof ImageData) {
					context.putImageData(source, 0, 0);
				} else {
					context.drawImage(source, 0, 0);
				}
				mesh.texture.update();
			}
		}
	}

	generate(renderer?: Renderer): void {
		const mesh = this._mesh;
		const canvas = mesh.canvas;
		const width = canvas.width;
		const height = canvas.height;

		// Render the SDF image on the render texture
		const renderTexture = this._renderTexture;
		const frame = renderTexture.frame;
		if (width !== frame.width || height !== frame.height) {
			renderTexture.resize(width, height, true);
		}
		if (renderer == null) {
			renderer = DApplications.last().getLayerBase().renderer;
		}
		renderer.render(mesh, renderTexture, true, undefined, true);

		// Copy the rendered SDF image to the canvas
		let context = this._context;
		if (context === undefined) {
			context = canvas.getContext("2d");
			this._context = context;
		}
		if (context != null) {
			let imageData = this._imageData;
			if (imageData == null || imageData.width !== width || imageData.height !== height) {
				imageData = context.createImageData(width, height);
				this._imageData = imageData;
			}

			renderer.renderTexture.bind(renderTexture);
			const gl = renderer.gl;
			gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, imageData.data);
		}
	}

	toDataUrl(): string | undefined {
		const imageData = this._imageData;
		if (imageData != null) {
			const canvas = this._mesh.canvas;
			let context = this._context;
			if (context === undefined) {
				context = canvas.getContext("2d");
				this._context = context;
			}
			if (context != null) {
				context.putImageData(imageData, 0, 0);
			}
			return canvas.toDataURL();
		}
	}
}
