/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";
import { DDiagramCanvasTileMappingImpl } from "./d-diagram-canvas-mapping-impl";
import { DMapTilePyramid } from "./d-map-tile-pyramid";

/**
 * A tile pyramid factory.
 */
export type DDiagramCanvasTilePyramidFactory = ( canvas: DDiagramCanvasBase<any, any> ) => DMapTilePyramid;

export interface DDiagramCanvasTileOptions {
	factory?: DDiagramCanvasTilePyramidFactory;
	mapping?: DDiagramCanvasTileMapping;
}

export class DDiagramCanvasTile {
	protected _canvas: DDiagramCanvasBase<any, any>;
	protected _pyramid?: DMapTilePyramid;
	protected _factory?: DDiagramCanvasTilePyramidFactory;
	protected _mapping: DDiagramCanvasTileMappingImpl;

	constructor( canvas: DDiagramCanvasBase<any, any>, options?: DDiagramCanvasTileOptions ) {
		this._canvas = canvas;
		this._factory = options && options.factory;
		this._mapping = new DDiagramCanvasTileMappingImpl((): void => {
			this.onMappingChange();
		}, options && options.mapping );
	}

	init(): void {
		this.onMappingChange();
	}

	protected onMappingChange(): void {
		const factory = this._factory;
		if( factory ) {
			const mapping = this._mapping;
			if( mapping.enable ) {
				const pyramid = this._pyramid;
				if( pyramid ) {
					pyramid.mapping = mapping;
				} else {
					this._pyramid = factory( this._canvas ).fit();
				}
			} else {
				const pyramid = this._pyramid;
				if( pyramid ) {
					this._pyramid = undefined;
					pyramid.destroy();
				}
			}
		}
	}

	get pyramid(): DMapTilePyramid | undefined {
		return this._pyramid;
	}

	get factory(): DDiagramCanvasTilePyramidFactory | undefined {
		return this._factory;
	}

	get mapping(): DDiagramCanvasTileMapping {
		return this._mapping;
	}

	serialize(): { mapping: DDiagramCanvasTileMapping } {
		return {
			mapping: this._mapping.serialize()
		};
	}

	destroy(): void {
		const pyramid = this._pyramid;
		if( pyramid != null ) {
			this._pyramid = undefined;
			pyramid.destroy();
		}
	}
}
