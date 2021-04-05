/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationLayerLike } from "../d-application-layer-like";
import { DynamicFontAtlas } from "./dynamic-font-atlas";

const update = ( atlas: DynamicFontAtlas ): void => {
	atlas.update();
};

const updateAll = ( colorToAltas: Map<number, DynamicFontAtlas> ): void => {
	colorToAltas.forEach( update );
};

const destroy = ( atlas: DynamicFontAtlas ): void => {
	atlas.update();
};

const destroyAll = ( colorToAltas: Map<number, DynamicFontAtlas> ): void => {
	colorToAltas.forEach( destroy );
};

export class DynamicFontAtlases {
	protected _atlases: Map<string, Map<number, DynamicFontAtlas>>;
	protected _resolution: number;

	constructor( layer: DApplicationLayerLike ) {
		this._atlases = new Map<string, Map<number, DynamicFontAtlas>>();
		this._resolution = layer.renderer.resolution;

		layer.renderer.on( "prerender", (): void => {
			this.update();
		});
	}

	add( fontId: string, fontSize: number, fontColor: number, targets: string ): void {
		const atlases = this._atlases;
		let colorToAtlas = atlases.get( fontId );
		if( colorToAtlas == null ) {
			colorToAtlas = new Map<number, DynamicFontAtlas>();
			atlases.set( fontId, colorToAtlas );
		}
		let atlas = colorToAtlas.get( fontColor );
		if( atlas == null ) {
			atlas = new DynamicFontAtlas( fontId, fontSize, fontColor, this._resolution );
			colorToAtlas.set( fontColor, atlas );
		}
		atlas.add( targets );
	}

	remove( fontId: string, fontColor: number, targets: string ): void {
		const colorToAtlas = this._atlases.get( fontId );
		if( colorToAtlas != null ) {
			const atlas = colorToAtlas.get( fontColor );
			if( atlas != null ) {
				atlas.remove( targets );
			}
		}
	}

	get( fontId: string, fontColor: number ): DynamicFontAtlas | null {
		const atlases = this._atlases;
		const colorToAtlas = atlases.get( fontId );
		if( colorToAtlas == null ) {
			return null;
		}
		const atlas = colorToAtlas.get( fontColor );
		if( atlas == null ) {
			return null;
		}
		return atlas;
	}

	update(): void {
		this._atlases.forEach( updateAll );
	}

	destroy(): void {
		const atlases = this._atlases;
		atlases.forEach( destroyAll );
		atlases.clear();
	}
}
