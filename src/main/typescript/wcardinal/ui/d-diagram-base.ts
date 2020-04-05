/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import {
	DCanvasContainer, DCanvasContainerEvents, DCanvasContainerOptions, DThemeCanvasContainer
} from "./d-canvas-container";
import { DDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramCanvasTilePyramidFactory } from "./d-diagram-canvas-tile";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { EShape } from "./shape/e-shape";

/**
 * {@link DDiagramBase} events.
 */
export interface DDiagramBaseEvents<CANVAS, SELF> extends DCanvasContainerEvents<CANVAS, SELF> {
	/**
	 * Triggered when all the shape initializations are finished.
	 *
	 * @param self this
	 */
	ready( self: SELF ): void;
}

/**
 * Mappings of event names and handlers.
 */
export interface DDiagramBaseOnOptions<CANVAS, SELF>
	extends Partial<DDiagramBaseEvents<CANVAS, SELF> & Record<string, Function>> {

}

export interface DDiagramBaseOptions<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	THEME extends DThemeDiagramBase = DThemeDiagramBase,
	SELF = any
> extends DCanvasContainerOptions<CANVAS, THEME> {
	/**
	 * A tile pyramid factory.
	 */
	tile?: DDiagramCanvasTilePyramidFactory;

	on?: DDiagramBaseOnOptions<CANVAS, SELF>;
}

export interface DThemeDiagramBase extends DThemeCanvasContainer {

}

export interface DDiagramBase<CANVAS> {
	on<E extends keyof DDiagramBaseEvents<CANVAS, this>>(
		event: E, handler: DDiagramBaseEvents<CANVAS, this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DDiagramBaseEvents<CANVAS, this>>(
		event: E, ...args: Parameters<DDiagramBaseEvents<CANVAS, this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
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
			this.emit( "ready", this );
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
