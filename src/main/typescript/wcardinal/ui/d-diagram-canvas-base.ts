/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DCanvas, DCanvasOptions, DThemeCanvas } from "./d-canvas";
import { DDiagramCanvasTile, DDiagramCanvasTileOptions } from "./d-diagram-canvas-tile";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { EShape } from "./shape/e-shape";

export interface DDiagramCanvasBaseOptions<
	THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase
> extends DCanvasOptions<THEME> {
	tile?: DDiagramCanvasTileOptions;
}

export interface DThemeDiagramCanvasBase extends DThemeCanvas {

}

export class DDiagramCanvasBase<
	THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase,
	OPTIONS extends DDiagramCanvasBaseOptions<THEME> = DDiagramCanvasBaseOptions<THEME>
> extends DCanvas<THEME, OPTIONS> {
	protected _layer: DDiagramLayerContainer;
	protected _tile: DDiagramCanvasTile;

	constructor( options?: OPTIONS ) {
		super( options );

		const layer = new DDiagramLayerContainer();
		this._layer = layer;
		this.addChild( layer );

		const tile = this._tile = new DDiagramCanvasTile( this, options && options.tile );
		tile.init();
	}

	get tile(): DDiagramCanvasTile {
		return this._tile;
	}

	get layer(): DDiagramLayerContainer {
		return this._layer;
	}

	initialize( shapes: EShape[] ): void {
		// DO NOTHING
	}

	destroy(): void {
		if( ! this._destroyed ) {
			this._tile.destroy();
			this._layer.destroy();
			super.destroy();
		}
	}

	hitTest( global: IPoint, handler?: ( shape: EShape ) => boolean ): EShape | null {
		const layers = this._layer.children;
		for( let i = layers.length - 1; 0 <= i; --i ) {
			const layer = layers[ i ];
			const shape = layer.hitTest( global, handler );
			if( shape != null ) {
				return shape;
			}
		}
		return null;
	}

	protected getType(): string {
		return "DDiagramCanvasBase";
	}
}
