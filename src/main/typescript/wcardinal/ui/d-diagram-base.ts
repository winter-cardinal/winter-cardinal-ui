/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DCanvasContainer, DCanvasContainerOptions, DThemeCanvasContainer } from "./d-canvas-container";
import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasTilePyramidFactory } from "./d-diagram-canvas-tile";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { EShape } from "./shape/e-shape";

export interface DDiagramBaseOptions<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	THEME extends DThemeDiagramBase = DThemeDiagramBase
> extends DCanvasContainerOptions<CANVAS, THEME> {
	tile?: DDiagramCanvasTilePyramidFactory;
}

export interface DThemeDiagramBase extends DThemeCanvasContainer {

}

export abstract class DDiagramBase<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	THEME extends DThemeDiagramBase = DThemeDiagramBase,
	OPTIONS extends DDiagramBaseOptions<CANVAS, THEME> = DDiagramBaseOptions<CANVAS, THEME>
> extends DCanvasContainer<CANVAS, THEME, OPTIONS> {
	protected _serialized: DDiagramSerialized | null;
	protected _tileFactory?: DDiagramCanvasTilePyramidFactory;

	constructor( options?: OPTIONS ) {
		super( options );
		this._serialized = null;
		this._tileFactory = options && options.tile;
	}

	set( serialized: DDiagramSerialized | null ) {
		const oldSerialized = this._serialized;
		if( oldSerialized !== serialized ) {
			if( oldSerialized ) {
				this._serialized = null;
				this.onUnset();
			}

			this._serialized = serialized;
			if( serialized ) {
				this.onSet( serialized );
			}
		}
	}

	protected onSet( serialized: DDiagramSerialized ): void {
		const canvas = this.newCanvas( serialized );
		DDiagrams.newLayer( serialized, canvas.layer ).then(( shapes: EShape[] ): void => {
			this.initialize( shapes );
			canvas.initialize( shapes );
			DApplications.update( this );
		});
		DDiagrams.applyBackground( serialized, canvas, this );
		this.canvas = canvas;
	}

	protected initialize( shapes: EShape[] ): void {
		// DO NOTHING
	}

	protected abstract newCanvas( serialized: DDiagramSerialized ): CANVAS;

	protected onUnset(): void {
		const canvas = this.canvas;
		if( canvas != null ) {
			this.canvas = null;
		}
	}

	get(): DDiagramSerialized | null {
		return this._serialized;
	}

	get layer(): DDiagramLayer | null {
		const canvas = this.canvas;
		if( canvas != null ) {
			return canvas.layer.active;
		}
		return null;
	}

	protected getType(): string {
		return "DDiagramBase";
	}
}
