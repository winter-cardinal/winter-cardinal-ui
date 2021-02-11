/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBaseShadow } from "./d-base";
import {
	DCanvasContainer, DCanvasContainerEvents, DCanvasContainerOptions, DThemeCanvasContainer
} from "./d-canvas-container";
import { DDiagramCanvasBackgroundOptions, DDiagramCanvasBase, DDiagramCanvasBaseOptions } from "./d-diagram-canvas-base";
import { DDiagramCanvasTilePyramidFactory } from "./d-diagram-canvas-tile";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { DDiagramSnapshot } from "./d-diagram-snapshot";
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
export interface DDiagramBaseOnOptions<CANVAS, EMITTER> extends Partial<DDiagramBaseEvents<CANVAS, EMITTER>> {
	[ key: string ]: Function | undefined;
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

	ambient?: boolean;

	on?: DDiagramBaseOnOptions<CANVAS, EMITTER>;
}

/**
 * {@link DDiagramBase} theme.
 */
export interface DThemeDiagramBase extends DThemeCanvasContainer {
	getCanvasBackgroundColor(): number;
	getCanvasBackgroundAlpha(): number;
	getCanvasShadow(): DBaseShadow | null;
	isAmbient(): boolean;
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
	protected _isAmbient: boolean;
	protected _snapshot: DDiagramSnapshot;

	constructor( options?: OPTIONS ) {
		super( options );
		this._serialized = null;
		this._tileFactory = options?.tile;
		this._controller = options?.controller;
		this._isAmbient = (options?.ambient ?? this.theme.isAmbient());
		this._snapshot = new DDiagramSnapshot( this );
	}

	get snapshot(): DDiagramSnapshot {
		return this._snapshot;
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
		const isEditMode = this.isEditMode();
		const pieceDataOrPromise = DDiagrams.toPieceData(
			this._controller, pieces, isEditMode
		);
		if( pieceDataOrPromise == null ) {
			this.newLayer( serialized, canvas, isEditMode );
		} else {
			pieceDataOrPromise.then(( pieceData ): void => {
				this.newLayer( serialized, canvas, isEditMode, pieces, pieceData );
			});
		}
		this.canvas = canvas;
	}

	protected abstract isEditMode(): boolean;

	protected newLayer(
		serialized: DDiagramSerialized,
		canvas: CANVAS,
		isEditMode: boolean,
		pieces?: string[],
		pieceData?: Map<string, EShapeEmbeddedDatum>
	): void {
		const layer = canvas.layer;
		const manager = new EShapeResourceManagerDeserialization(
			serialized, pieces, pieceData, isEditMode
		);
		DDiagrams.newLayer( serialized, layer, manager )
		.then(( shapes: EShape[] ): void => {
			layer.init();
			this.initialize( shapes );
			canvas.initialize( shapes );
			DApplications.update( this );
			this.emit( "ready", this );
		});
		if( this._isAmbient ) {
			const background = this.toCanvasBaseBackgroundOptions( serialized, this.theme, false );
			this.background.color = background.color;
			this.background.alpha = background.alpha;
		}
	}

	protected toCanvasBaseOptions( serialized: DDiagramSerialized ): DDiagramCanvasBaseOptions<any> {
		const theme = this.theme;
		const isAmbient = this._isAmbient;
		return {
			name: serialized.name,
			width: serialized.width,
			height: serialized.height,
			background: this.toCanvasBaseBackgroundOptions( serialized, theme, isAmbient ),
			border: isAmbient ? { color: null } : undefined,
			shadow: isAmbient ? null : theme.getCanvasShadow(),
			tile: {
				factory: this._tileFactory,
				mapping: serialized.tile?.mapping
			},
			ambient: isAmbient
		};
	}

	protected toCanvasBaseBackgroundOptions(
		serialized: DDiagramSerialized, theme: THEME, isAmbient: boolean
	): DDiagramCanvasBackgroundOptions {
		if( isAmbient ) {
			return {
				color: null
			};
		}
		const background = serialized.background;
		return {
			color: background?.color ?? theme.getCanvasBackgroundColor(),
			alpha: background?.alpha ?? theme.getCanvasBackgroundAlpha()
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
		if( canvas ) {
			this.canvas = null;
		}
	}

	get(): DDiagramSerialized | null {
		return this._serialized;
	}

	get layer(): DDiagramLayer | null {
		const canvas = this.canvas;
		if( canvas ) {
			return canvas.layer.active;
		}
		return null;
	}

	protected getType(): string {
		return "DDiagramBase";
	}
}
