/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer, RenderTexture } from "pixi.js";
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

export interface UtilExtractCanvasOptions extends UtilExtractPixelsOptions {
	scale?: number | {
		size: number;
	};
	alpha?: {
		premultiplied?: {
			ignore?: boolean;
		}
	};
}

export interface UtilExtractBase64Options extends UtilExtractCanvasOptions {
	format?: string;
	quality?: number;
}

export interface UtilExtractFileOptions extends UtilExtractBase64Options {
	filename: string;
}

const toSkipUpdateTransform = ( options: UtilExtractTextureOptions ): boolean | undefined => {
	return options.transform && options.transform.update;
};

const toResolution = ( options: UtilExtractTextureOptions ): number => {
	const target = options.target;
	if( options.resolution != null ) {
		if( isNumber( options.resolution ) ) {
			return options.resolution;
		} else {
			const scale = target.transform.scale;
			const size = Math.max( target.width * scale.x, target.height * scale.y );
			return Math.min( 1, options.resolution.size / size );
		}
	} else {
		return window.devicePixelRatio || 1;
	}
};

const toIgnorePremultipliedAlpha = ( options: UtilExtractCanvasOptions ): boolean | undefined => {
	return ( options.alpha && options.alpha.premultiplied && options.alpha.premultiplied.ignore );
};

const toScale = ( pixels: UtilExtractorPixels, options: UtilExtractCanvasOptions ): number | undefined => {
	if( options.scale != null ) {
		if( isNumber( options.scale ) ) {
			return options.scale;
		} else {
			const size = options.scale.size;
			return Math.min( 1, size / pixels.width, size / pixels.height );
		}
	}
};

const toRenderer = ( options: UtilExtractPixelsOptions ): Renderer => {
	if( options.renderer ) {
		return options.renderer;
	} else if( options.application ) {
		return options.application.getLayerBase().renderer;
	} else if( options.layer ) {
		return options.layer.renderer;
	} else {
		const layer = DApplications.getLayer( options.target );
		if( layer ) {
			return layer.renderer;
		} else {
			throw new Error( "No renderer / application / layer found." );
		}
	}
};

export class UtilExtract {
	static texture( options: UtilExtractTextureOptions ): RenderTexture {
		const target = options.target;
		const resolution = toResolution( options );
		const skipUpdateTransform = toSkipUpdateTransform( options );
		return UtilExtractor.toTexture( target, resolution, options.clear, skipUpdateTransform );
	}

	static pixels( options: UtilExtractPixelsOptions ): UtilExtractorPixels {
		const renderer = toRenderer( options );
		return UtilExtractor.toPixels( this.texture( options ), renderer );
	}

	static canvas( options: UtilExtractCanvasOptions ): HTMLCanvasElement {
		const pixels = this.pixels( options );
		const ignorePremutipliedAlpha = toIgnorePremultipliedAlpha( options );
		const scale = toScale( pixels, options );
		return UtilExtractor.toCanvas( pixels, scale, ignorePremutipliedAlpha );
	}

	static base64( options: UtilExtractBase64Options ): string {
		return UtilExtractor.toBase64( this.canvas( options ), options.format, options.quality );
	}

	static file( options: UtilExtractFileOptions ): void {
		UtilFileDownloader.downloadUrl( options.filename, this.base64( options ) );
	}
}
