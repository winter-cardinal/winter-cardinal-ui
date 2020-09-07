/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBaseBackgroundOptions } from "./d-base";
import {
	DCanvasContainer, DCanvasContainerEvents, DCanvasContainerOptions, DThemeCanvasContainer
} from "./d-canvas-container";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions } from "./d-diagram-canvas-base";
import { DDiagramCanvasTilePyramidFactory } from "./d-diagram-canvas-tile";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { EShape } from "./shape/e-shape";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";
import { EShapeEmbeddedDatum } from "./shape/variant/e-shape-embedded-datum";

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
 * {@link DDiagram} piece controller.
 */
export interface DDiagramBasePieceController {
	getByName( name: string ): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
}

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramBaseController {
	piece: DDiagramBasePieceController;
	getByName( name: string ): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
}

/**
 * {@link DDiagramBase} "on" options.
 */
export interface DDiagramBaseOnOptions<CANVAS, EMITTER>
	extends Partial<DDiagramBaseEvents<CANVAS, EMITTER> & Record<string, Function>> {

}

export interface DDiagramBaseBackgroundOptions extends DBaseBackgroundOptions {
	ambient?: boolean;
}

/**
 * {@link DDiagramBase} options.
 */
export interface DDiagramBaseOptions<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	CANVAS_OPTIONS extends DDiagramCanvasBaseOptions = DDiagramCanvasBaseOptions,
	CONTROLLER extends DDiagramBaseController = DDiagramBaseController,
	THEME extends DThemeDiagramBase = DThemeDiagramBase,
	EMITTER = any
> extends DCanvasContainerOptions<CANVAS, CANVAS_OPTIONS, THEME> {
	controller?: CONTROLLER;

	/**
	 * A tile pyramid factory.
	 */
	tile?: DDiagramCanvasTilePyramidFactory;

	background?: DDiagramBaseBackgroundOptions;

	on?: DDiagramBaseOnOptions<CANVAS, EMITTER>;
}

/**
 * {@link DDiagramBase} theme.
 */
export interface DThemeDiagramBase extends DThemeCanvasContainer {
	getBackgroundAmbient(): boolean;
}

export abstract class DDiagramBase<
	CANVAS extends DDiagramCanvasBase = DDiagramCanvasBase,
	CANVAS_OPTIONS extends DDiagramCanvasBaseOptions = DDiagramCanvasBaseOptions,
	CONTROLLER extends DDiagramBaseController = DDiagramBaseController,
	THEME extends DThemeDiagramBase = DThemeDiagramBase,
	OPTIONS extends DDiagramBaseOptions<CANVAS, CANVAS_OPTIONS, CONTROLLER, THEME>
		= DDiagramBaseOptions<CANVAS, CANVAS_OPTIONS, CONTROLLER, THEME>
> extends DCanvasContainer<CANVAS, CANVAS_OPTIONS, THEME, OPTIONS> {
	protected _serialized: DDiagramSerialized | null;
	protected _tileFactory?: DDiagramCanvasTilePyramidFactory;
	protected _controller?: CONTROLLER;
	protected _backgroundAmbient: boolean;

	constructor( options?: OPTIONS ) {
		super( options );
		this._serialized = null;
		this._tileFactory = options && options.tile;
		this._controller = options && options.controller;
		this._backgroundAmbient = this.toBackgroundAmbient( this.theme, this._options );
	}

	get controller(): CONTROLLER | null {
		return this._controller || null;
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
		const pieceDataOrPromise = DDiagrams.toPieceData(
			this._controller, pieces, this.isEditMode()
		);
		if( pieceDataOrPromise == null ) {
			this.newLayer( serialized, canvas );
		} else {
			pieceDataOrPromise.then(( pieceData ): void => {
				this.newLayer( serialized, canvas, pieces, pieceData );
			});
		}
		this.canvas = canvas;
	}

	protected newLayer(
		serialized: DDiagramSerialized,
		canvas: CANVAS,
		pieces?: string[],
		pieceData?: Map<string, EShapeEmbeddedDatum>
	): void {
		const layer = canvas.layer;
		const manager = new EShapeResourceManagerDeserialization(
			serialized, pieces, pieceData, this.isEditMode()
		);
		DDiagrams.newLayer( serialized, layer, manager )
		.then(( shapes: EShape[] ): void => {
			layer.init();
			this.initialize( shapes );
			canvas.initialize( shapes );
			DApplications.update( this );
			this.emit( "ready", this );
		});
		if( this._backgroundAmbient ) {
			const background = this.toBackground( serialized );
			this.background.color = background.color;
			this.background.alpha = background.alpha;
		}
	}

	protected toCanvasBaseOptions( serialized: DDiagramSerialized, options: CANVAS_OPTIONS ): CANVAS_OPTIONS {
		// Name
		if( options.name === undefined ) {
			options.name = serialized.name;
		}

		// Width
		if( options.width === undefined ) {
			options.width = serialized.width;
		}

		// Height
		if( options.height === undefined ) {
			options.height = serialized.height;
		}

		// Background, border and shadow
		const background = options.background = options.background || {};
		const backgroundAmbient = this._backgroundAmbient;
		const backgroundSerialized = this.toBackground( serialized );
		if( backgroundAmbient ) {
			if( background.color === undefined ) {
				background.color = null;
			}
			const border = options.border = options.border || {};
			if( border.color === undefined ) {
				border.color = null;
			}
		} else {
			if( background.color === undefined ) {
				background.color = backgroundSerialized.color;
			}
			if( background.alpha === undefined ) {
				background.alpha = backgroundSerialized.alpha;
			}
			if( options.shadow === undefined ) {
				options.shadow = "WEAK";
			}
		}
		if( background.ambient === undefined ) {
			const diagramOptions = this._options;
			if( diagramOptions ) {
				const diagramBackgroundOptions = diagramOptions.background;
				if( diagramBackgroundOptions && diagramBackgroundOptions.ambient !== undefined ) {
					background.ambient = backgroundAmbient;
				}
			}
		}

		// Tile
		const tileOptions = options.tile = options.tile || {};
		if( tileOptions.factory === undefined ) {
			tileOptions.factory = this._tileFactory;
		}
		if( tileOptions.mapping === undefined ) {
			tileOptions.mapping = serialized.tile && serialized.tile.mapping;
		}

		// Done
		return options;
	}

	protected toBackgroundAmbient( theme: THEME, options?: OPTIONS ): boolean {
		const background = options && options.background;
		const ambient = background && background.ambient;
		return ( ambient != null ? ambient : theme.getBackgroundAmbient() );
	}

	protected abstract isEditMode(): boolean;

	protected toBackground( serialized: DDiagramSerialized ): { color: number, alpha: number } {
		const background = serialized.background;
		if( background != null ) {
			const color = background.color;
			const alpha = background.alpha;
			return {
				color: ( color != null ? color : 0xffffff ),
				alpha: ( alpha != null ? alpha : 1.0 )
			};
		}
		return {
			color: 0xffffff,
			alpha: 1.0
		};
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
}
