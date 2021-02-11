/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBaseBackgroundOptions } from "./d-base";
import { DCanvas, DCanvasOptions, DThemeCanvas } from "./d-canvas";
import { DDiagramCanvasEditorBackground } from "./d-diagram-canvas-editor-background";
import { DDiagramCanvasTile, DDiagramCanvasTileOptions } from "./d-diagram-canvas-tile";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { EShape } from "./shape/e-shape";

export interface DDiagramCanvasBackgroundOptions extends DBaseBackgroundOptions {
	base?: number | null;
}

export interface DDiagramCanvasBaseOptions<
	THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase
> extends DCanvasOptions<THEME> {
	tile?: DDiagramCanvasTileOptions;
	background?: DDiagramCanvasBackgroundOptions;
	ambient?: boolean;
}

export interface DThemeDiagramCanvasBase extends DThemeCanvas {
	isAmbient(): boolean;
	getBackgroundBase(): number | null;
}

export class DDiagramCanvasBase<
	THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase,
	OPTIONS extends DDiagramCanvasBaseOptions<THEME> = DDiagramCanvasBaseOptions<THEME>
> extends DCanvas<THEME, OPTIONS> {
	protected _layer: DDiagramLayerContainer;
	protected _tile: DDiagramCanvasTile;

	constructor( options?: OPTIONS ) {
		super( options );

		// Background
		const theme = this.theme;
		if( ! this.isAmbient( theme, options ) ) {
			this._background = new DDiagramCanvasEditorBackground(
				this._background,
				this.toBackgroundBase( theme, options )
			);
		}

		// Layer
		const layer = new DDiagramLayerContainer();
		this._layer = layer;
		this.addChild( layer );

		// Tile
		const tile = new DDiagramCanvasTile( this, options?.tile );
		this._tile = tile;
		tile.init();
	}

	protected isAmbient( theme: THEME, options?: OPTIONS ): boolean {
		return options?.ambient ?? theme.isAmbient();
	}

	protected toBackgroundBase( theme: THEME, options?: OPTIONS ): number | null {
		return options?.background?.base ?? theme.getBackgroundBase();
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
