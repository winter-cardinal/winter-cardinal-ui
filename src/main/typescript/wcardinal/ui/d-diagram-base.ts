/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBaseShadow } from "./d-base";
import {
	DCanvasContainer,
	DCanvasContainerEvents,
	DCanvasContainerOptions,
	DThemeCanvasContainer
} from "./d-canvas-container";
import { DDiagramBaseController } from "./d-diagram-base-controller";
import {
	DDiagramCanvasBackgroundOptions,
	DDiagramCanvasBase,
	DDiagramCanvasBaseOptions
} from "./d-diagram-canvas-base";
import { DDiagramCanvasTilePyramidFactory } from "./d-diagram-canvas-tile";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagramSnapshot, DDiagramSnapshotOptions } from "./d-diagram-snapshot";
import { DDiagrams } from "./d-diagrams";
import { DOnOptions } from "./d-on-options";
import { EShapeResourceManagerDeserializationMode } from "./shape/e-shape-resource-manager-deserialization-mode";
import { EShape } from "./shape/e-shape";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";
import { EShapeEmbeddedDatum } from "./shape/variant/e-shape-embedded-datum";

/**
 * {@link DDiagramBase} events.
 */
export interface DDiagramBaseEvents<CANVAS, EMITTER>
	extends DCanvasContainerEvents<CANVAS, EMITTER> {
	/**
	 * Triggered when all the shape initializations are finished.
	 *
	 * @param emitter an emitter
	 */
	ready(emitter: EMITTER): void;
}

/**
 * {@link DDiagramBase} "on" options.
 */
export interface DDiagramBaseOnOptions<CANVAS, EMITTER>
	extends Partial<DDiagramBaseEvents<CANVAS, EMITTER>>,
		DOnOptions {}

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

	/**
	 * Snapshot options.
	 */
	snapshot?: DDiagramSnapshotOptions<CANVAS>;

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
	OPTIONS extends DDiagramBaseOptions<
		CANVAS,
		CANVAS_OPTIONS,
		CONTROLLER,
		THEME
	> = DDiagramBaseOptions<CANVAS, CANVAS_OPTIONS, CONTROLLER, THEME>
> extends DCanvasContainer<CANVAS, CANVAS_OPTIONS, THEME, OPTIONS> {
	protected _serialized: DDiagramSerialized | null;
	protected _tileFactory?: DDiagramCanvasTilePyramidFactory;
	protected _controller?: CONTROLLER;
	protected _isAmbient: boolean;
	protected _snapshot: DDiagramSnapshot;
	protected _mode: EShapeResourceManagerDeserializationMode;

	constructor(options?: OPTIONS) {
		super(options);
		this._serialized = null;
		this._tileFactory = options?.tile;
		this._controller = options?.controller;
		this._isAmbient = options?.ambient ?? this.theme.isAmbient();
		this._snapshot = new DDiagramSnapshot(this, options?.snapshot);
		this._mode = this.toMode(options);
	}

	get snapshot(): DDiagramSnapshot {
		return this._snapshot;
	}

	get controller(): CONTROLLER | null {
		return this._controller || null;
	}

	set(serialized: null): Promise<null>;
	set(serialized: DDiagramSerialized): Promise<CANVAS>;
	set(serialized: DDiagramSerialized | null): Promise<CANVAS | null>;
	set(serialized: DDiagramSerialized | null): Promise<CANVAS | null> {
		const oldSerialized = this._serialized;
		if (oldSerialized !== serialized) {
			if (oldSerialized) {
				this._serialized = null;
				const canvas = this.canvas;
				if (canvas) {
					this.canvas = null;
				}
				this.onUnset();
			}

			this._serialized = serialized;
			if (serialized) {
				const canvas = this.newCanvas(serialized);
				const pieces = serialized.pieces;
				const mode = this._mode;
				const result = DDiagrams.toPieceData(this._controller, pieces, mode).then(
					(pieceData): Promise<CANVAS> => {
						return this.newLayer(serialized, canvas, mode, pieces, pieceData);
					}
				);
				this.onSet(serialized, canvas);
				this.canvas = canvas;
				return result;
			} else {
				return Promise.resolve(null);
			}
		} else {
			return Promise.resolve(this.canvas);
		}
	}

	protected onSet(serialized: DDiagramSerialized, canvas: CANVAS): void {
		// DO NOTHING
	}

	protected abstract toMode(options?: OPTIONS): EShapeResourceManagerDeserializationMode;

	protected newLayer(
		serialized: DDiagramSerialized,
		canvas: CANVAS,
		mode: EShapeResourceManagerDeserializationMode,
		pieces?: string[],
		pieceData?: Map<string, EShapeEmbeddedDatum | null>
	): Promise<CANVAS> {
		const manager = new EShapeResourceManagerDeserialization(
			serialized,
			pieces,
			pieceData,
			mode,
			0
		);
		const result = DDiagrams.newLayer(serialized, canvas.layer, manager).then(
			(shapes: EShape[]): CANVAS => {
				return this.initLayer(canvas, shapes);
			}
		);
		if (this._isAmbient) {
			const background = this.toCanvasBaseBackgroundOptions(serialized, this.theme, false);
			this.background.color = background.color;
			this.background.alpha = background.alpha;
		}
		return result;
	}

	protected initLayer(
		canvas: CANVAS,
		shapes: EShape[],
		mapper?: DDiagramDataMapper | null
	): CANVAS {
		canvas.layer.init();
		canvas.initialize(shapes, mapper);
		DApplications.update(this);
		this.emit("ready", this);
		return canvas;
	}

	protected toCanvasBaseOptions(serialized: DDiagramSerialized): DDiagramCanvasBaseOptions<any> {
		const theme = this.theme;
		const isAmbient = this._isAmbient;
		return {
			name: serialized.name,
			label: serialized.label,
			width: serialized.width,
			height: serialized.height,
			summary: serialized.summary,
			description: serialized.description,
			background: this.toCanvasBaseBackgroundOptions(serialized, theme, isAmbient),
			border: isAmbient ? { color: null } : undefined,
			outline: isAmbient ? { color: null } : undefined,
			shadow: isAmbient ? null : theme.getCanvasShadow(),
			tile: {
				factory: this._tileFactory,
				mapping: serialized.tile?.mapping
			},
			ambient: isAmbient
		};
	}

	protected toCanvasBaseBackgroundOptions(
		serialized: DDiagramSerialized,
		theme: THEME,
		isAmbient: boolean
	): DDiagramCanvasBackgroundOptions {
		if (isAmbient) {
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

	protected abstract newCanvas(serialized: DDiagramSerialized): CANVAS;

	protected onUnset(): void {
		// DO NOTHING
	}

	get(): DDiagramSerialized | null {
		return this._serialized;
	}

	get layer(): DDiagramLayer | null {
		const canvas = this.canvas;
		if (canvas) {
			return canvas.layer.active;
		}
		return null;
	}

	protected getType(): string {
		return "DDiagramBase";
	}
}
