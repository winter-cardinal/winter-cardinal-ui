/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { settings, Texture } from "pixi.js";
import { DApplications } from "../d-applications";
import { DCornerMask } from "../d-corner";
import { utilToSvgUrl } from "./util-to-svg-url";

const toCornerTl = ( offset: number, size: number, tl: number ): string => {
	return ( 0 < tl ? `A${tl} ${tl} 0 0 1 ${offset + tl} ${offset}` : "" );
};

const toCornerBr = ( offset: number, size: number, br: number ): string => {
	return ( 0 < br ? `A${br} ${br} 0 0 1 ${offset + size - br} ${offset + size}` : "" );
};

export class UtilTexturePlane {
	protected static BACKGROUND_CACHE: Map<number, Texture> = new Map<number, Texture>();
	protected static BACKGROUND_ATTRIBUTE: string = `fill="#fff" stroke="none"`;
	protected static BORDER_CACHE: Map<number, Map<number, Texture>> = new Map<number, Map<number, Texture>>();
	protected static BORDER_ATTRIBUTE = ( width: number ): string => `fill="none" stroke="#fff" stroke-width="${width}"`;

	protected static make( radius: number, offset: number, attr: string ): Texture {
		const realRadius = Math.max( 0, radius - offset );
		const size: number = realRadius * 2 + 4;
		const realSize: number = size + offset * 2;
		const d =
			`M${offset + realRadius} ${offset}` +
			`L${offset + size} ${offset}` +
			`L${offset + size} ${offset + size - realRadius}` +
			toCornerBr( offset, size, realRadius ) +
			`L${offset} ${offset + size}` +
			`L${offset} ${offset + realRadius}` +
			toCornerTl( offset, size, realRadius ) +
			`Z`;
		return this.toSvg( realSize, attr, d );
	}

	protected static toSvg( realSize: number, attr: string, d: string ): Texture {
		const resolution = settings.RESOLUTION;
		const widthAttr = `width="${realSize * resolution}"`;
		const heightAttr = `height="${realSize * resolution}"`;
		const viewBoxAttr = `viewBox="0 0 ${realSize} ${realSize}"`;
		const svg = `<svg ${widthAttr} ${heightAttr} ${viewBoxAttr} xmlns="http://www.w3.org/2000/svg">` +
			`<path ${attr} d="${d}"></path>` +
		`</svg>`;
		return Texture.from( utilToSvgUrl( svg ), {
			resolution
		});
	}

	protected static onUpdate(): void {
		DApplications.update();
	}

	static newBackground( radius: number ): Texture {
		const cache = this.BACKGROUND_CACHE;

		let texture = cache.get( radius );
		if( texture == null ) {
			texture = this.make( radius, 0, this.BACKGROUND_ATTRIBUTE );
			texture.on( "update", this.onUpdate );
			cache.set( radius, texture );
		}

		return texture;
	}

	static newBorder( radius: number, width: number ): Texture {
		const cache = this.BORDER_CACHE;

		let maskToTexture = cache.get( radius );
		if( maskToTexture == null ) {
			maskToTexture = new Map<DCornerMask, Texture>();
			cache.set( radius, maskToTexture );
		}

		let texture = maskToTexture.get( width );
		if( texture == null ) {
			texture = this.make( radius, 0.5 * width, this.BORDER_ATTRIBUTE( width ) );
			texture.on( "update", this.onUpdate );
			maskToTexture.set( width, texture );
		}

		return texture;
	}
}
