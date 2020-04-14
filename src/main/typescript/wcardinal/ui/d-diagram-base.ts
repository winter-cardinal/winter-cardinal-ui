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
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { EventSupport } from "./decorator/event-support";
import { EShape } from "./shape/e-shape";
import { EShapeLayerContainer } from "./shape/e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";
import { EShapeEmbeddedLayerContainer } from "./shape/variant/e-shape-embedded-layer-container";

/**
 * {@link DDiagramBase} events.
 */
export interface DDiagramBaseEvents<CANVAS, EMITTER> extends DCanvasContainerEvents<CANVAS, EMITTER> {
	/**
	 * Triggered when all the shape initializations are finished.
	 *
	 * @param emitter an emitter
	 */
	ready( emitter: EMITTER ): void;
}

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramBaseController {
	getByName( name: string ): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
	getPieceByName( name: string ): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
}

/**
 * {@link DDiagramBase} "on" options.
 */
export interface DDiagramBaseOnOptions<CANVAS, EMITTER>
	extends Partial<DDiagramBaseEvents<CANVAS, EMITTER> & Record<string, Function>> {

}

/**
 * {@link DDiagramBase} options.
 */
export interface DDiagramBaseOptions<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	CONTROLLER extends DDiagramBaseController = DDiagramBaseController,
	THEME extends DThemeDiagramBase = DThemeDiagramBase,
	EMITTER = any
> extends DCanvasContainerOptions<CANVAS, THEME> {
	controller?: CONTROLLER;

	/**
	 * A tile pyramid factory.
	 */
	tile?: DDiagramCanvasTilePyramidFactory;

	on?: DDiagramBaseOnOptions<CANVAS, EMITTER>;
}

/**
 * {@link DDiagramBase} theme.
 */
export interface DThemeDiagramBase extends DThemeCanvasContainer {

}

@EventSupport
export abstract class DDiagramBase<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	CONTROLLER extends DDiagramBaseController = DDiagramBaseController,
	THEME extends DThemeDiagramBase = DThemeDiagramBase,
	OPTIONS extends DDiagramBaseOptions<CANVAS, CONTROLLER, THEME> = DDiagramBaseOptions<CANVAS, CONTROLLER, THEME>
> extends DCanvasContainer<CANVAS, THEME, OPTIONS> {
	protected _serialized: DDiagramSerialized | null;
	protected _tileFactory?: DDiagramCanvasTilePyramidFactory;
	protected _controller?: CONTROLLER;

	constructor( options?: OPTIONS ) {
		super( options );
		this._serialized = null;
		this._tileFactory = options && options.tile;
		this._controller = options && options.controller;
	}

	set( serialized: DDiagramSerialized | null ): void {
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
		const pieces = serialized.pieces;
		const promise = this.toPieces( pieces );
		if( promise == null ) {
			this.newLayer( serialized, canvas );
		} else {
			promise.then(( pieceToShapes ): void => {
				this.newLayer( serialized, canvas, pieces, pieceToShapes );
			});
		}
		this.canvas = canvas;
	}

	protected newLayer(
		serialized: DDiagramSerialized,
		canvas: CANVAS,
		pieces?: string[],
		pieceToShapes?: Map<string, EShapeLayerContainer>
	): void {
		const layer = canvas.layer;
		const manager = new EShapeResourceManagerDeserialization(
			serialized.resources, serialized.tags, pieces, pieceToShapes
		);
		DDiagrams.newLayer( serialized, layer, manager )
		.then(( shapes: EShape[] ): void => {
			layer.init();
			this.initialize( shapes );
			canvas.initialize( shapes );
			DApplications.update( this );
			this.emit( "ready", this );
		});
		DDiagrams.applyBackground( serialized, canvas, this );
	}

	protected toPieces(
		pieces?: string[]
	): Promise<Map<string, EShapeLayerContainer>> | undefined {
		const controller = this._controller;
		if( pieces && controller ) {
			const mappings = new Map<string, EShapeLayerContainer>();
			return new Promise(( resolve ): void => {
				const size = pieces.length;
				let finished = size;
				const onFinished = (): void => {
					finished -= 1;
					if( finished <= 0 ) {
						resolve( mappings );
					}
				};
				const load = ( piece: string ): void => {
					controller.getPieceByName( piece ).then(( found ) => {
						const container = new EShapeEmbeddedLayerContainer();
						const serialized = DDiagrams.toSerialized( found );
						const manager = new EShapeResourceManagerDeserialization(
							serialized.resources, serialized.tags
						);
						DDiagrams.newLayer( serialized, container, manager )
						.then((): void => {
							mappings.set( piece, container );
							onFinished();
						}, onFinished );
					}, onFinished );
				};
				for( let i = 0; i < size; ++i ) {
					load( pieces[ i ] );
				}
			});
		}
	}

	openByName( name: string ) {
		const controller = this._controller;
		if( controller ) {
			controller.getByName( name ).then(( found ): void => {
				this.set( DDiagrams.toSerialized( found ) );
			});
		}
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

	// Event handlings
	on<E extends keyof DDiagramBaseEvents<CANVAS, this>>(
		event: E, handler: DDiagramBaseEvents<CANVAS, this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DDiagramBaseEvents<CANVAS, this>>(
		event: E, handler: DDiagramBaseEvents<CANVAS, this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DDiagramBaseEvents<CANVAS, this>>(
		event: E, ...args: Parameters<DDiagramBaseEvents<CANVAS, this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
