/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture, Rectangle, resources, SCALE_MODES, settings, Texture } from "pixi.js";
import { SVGResource } from "../resource/svg-resource";
import { utilToSvgUrl } from "./util-to-svg-url";

// PixiJS's SVGResource has a issue on Microsoft Edge.
// Edge may invoke the HTMLImageElement#onload on an unexpected timing.
// Thus, PixiJS may lost the `load` event in some situations.
resources.INSTALLED.push( SVGResource );

export interface UtilSvgAtlasBuilderBuildOptions {
	force?: boolean;
	scaling?: SCALE_MODES;
}

export class UtilSvgAtlasBuilder {
	protected _width: number;
	protected _ratio: number;
	protected _margin: number;

	protected _frames: { [ name: string ]: Rectangle };
	protected _svg: string;
	protected _nextX: number;
	protected _nextY: number;
	protected _height: number;

	protected _built?: { [ name: string ]: Texture };

	constructor( width: number, ratio: number, margin: number ) {
		this._width = width;
		this._ratio = ratio;
		this._margin = margin;

		this._frames = {};
		this._svg = "";
		this._nextX = 0;
		this._nextY = 0;
		this._height = 0;
	}

	get width(): number {
		return this._width;
	}

	get ratio(): number {
		return this._ratio;
	}

	get margin(): number {
		return this._margin;
	}

	add( name: string, width: number, height: number, path: string ): boolean {
		const frames = this._frames;
		if( ! ( name in frames ) ) {
			// Position
			const margin = this._margin;
			let x = this._nextX;
			let y = this._nextY;
			if( this._width <= x + width ) {
				x = 0;
				y = this._nextY + this._height + margin;
				this._height = height;
				this._nextY = y;
			} else {
				this._height = Math.max( this._height, height );
			}
			this._nextX = x + width + margin;

			// Frame
			frames[ name ] = new Rectangle( x, y, width, height );

			// Svg
			const ratio = this._ratio;
			this._svg += `<g transform="translate(${x * ratio},${y * ratio})">${path}</g>`;
			return true;
		}
		return false;
	}

	get mappings(): { [ name: string ]: Texture } {
		return this.build();
	}

	build( options?: UtilSvgAtlasBuilderBuildOptions ): { [ name: string ]: Texture } {
		let built = this._built;
		if( built == null || (options && options.force) ) {
			const resolution = settings.RESOLUTION;
			const width = this._width;
			const height = Math.pow( 2, Math.ceil( Math.log( this._nextY + this._height ) / Math.LN2 ) );
			const realWidth = width * resolution;
			const realHeight = height * resolution;
			const ratio = this._ratio;
			const attrWidth = `width="${realWidth}"`;
			const attrHeight = `height="${realHeight}"`;
			const attrViewBox = `viewBox="0 0 ${width * ratio} ${height * ratio}"`;
			const attrXmlns = `xmlns="http://www.w3.org/2000/svg"`;
			const url = utilToSvgUrl( `<svg ${attrWidth} ${attrHeight} ${attrViewBox} ${attrXmlns}>${this._svg}</svg>` );
			const scaleMode = (options && options.scaling != null ? options.scaling : SCALE_MODES.NEAREST);
			const baseTexture = BaseTexture.from( url, {
				resolution,
				scaleMode
			});
			const frames = this._frames;
			built = this._built = {};
			for( const name in frames ) {
				built[ name ] = new Texture( baseTexture, frames[ name ] );
			}
		}
		return built;
	}
}
