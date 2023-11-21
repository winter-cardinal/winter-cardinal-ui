/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Rectangle } from "pixi.js";
import { DBaseBackgroundOptions } from "./d-base";
import { DCanvas, DCanvasOptions, DThemeCanvas } from "./d-canvas";
import { DDiagramCanvasEditorBackground } from "./d-diagram-canvas-editor-background";
import { DDiagramCanvasTile, DDiagramCanvasTileOptions } from "./d-diagram-canvas-tile";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { EShape } from "./shape/e-shape";

export interface DDiagramCanvasBackgroundOptions extends DBaseBackgroundOptions {
	base?: number | null;
}

export interface DDiagramCanvasBaseOptions<
	THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase
> extends DCanvasOptions<THEME> {
	label?: string;
	category?: string | null;
	summary?: string;
	description?: string;
	tile?: DDiagramCanvasTileOptions;
	background?: DDiagramCanvasBackgroundOptions;
	ambient?: boolean;
}

export interface DThemeDiagramCanvasBase extends DThemeCanvas {
	isAmbient(): boolean;
	getBackgroundBase(): number | null;
	getLocalBoundsLimit(): number;
}

export class DDiagramCanvasBase<
	THEME extends DThemeDiagramCanvasBase = DThemeDiagramCanvasBase,
	OPTIONS extends DDiagramCanvasBaseOptions<THEME> = DDiagramCanvasBaseOptions<THEME>
> extends DCanvas<THEME, OPTIONS> {
	protected static WORK_LOCAL_BOUNDS?: Rectangle;

	protected _layer: DDiagramLayerContainer;
	protected _label: string;
	protected _category: string | null;
	protected _summary: string;
	protected _description: string;
	protected _tile: DDiagramCanvasTile;
	protected _localBoundsLimit: number;
	protected _localBoundsRect?: Rectangle;

	constructor(options?: OPTIONS) {
		super(options);

		// Background
		const theme = this.theme;
		if (!this.isAmbient(theme, options)) {
			this._background = new DDiagramCanvasEditorBackground(
				this._background,
				this.toBackgroundBase(theme, options)
			);
		}

		// Layer
		const layer = new DDiagramLayerContainer(this.width, this.height);
		this._layer = layer;
		this.addChild(layer);

		// Label, Category, Summary and Description
		if (options != null) {
			this._label = options.label ?? "";
			this._category = options.category ?? null;
			this._summary = options.summary ?? "";
			this._description = options.description ?? "";
		} else {
			this._label = "";
			this._category = null;
			this._summary = "";
			this._description = "";
		}

		// Tile
		const tile = new DDiagramCanvasTile(this, options?.tile);
		this._tile = tile;
		tile.init();

		// Local bounds limit
		this._localBoundsLimit = theme.getLocalBoundsLimit();
	}

	protected isAmbient(theme: THEME, options?: OPTIONS): boolean {
		return options?.ambient ?? theme.isAmbient();
	}

	protected toBackgroundBase(theme: THEME, options?: OPTIONS): number | null {
		return options?.background?.base ?? theme.getBackgroundBase();
	}

	get label(): string {
		return this._label;
	}

	set label(label: string) {
		this._label = label;
	}

	get category(): string | null {
		return this._category;
	}

	set category(category: string | null) {
		this._category = category;
	}

	get summary(): string {
		return this._summary;
	}

	set summary(summary: string) {
		this._summary = summary;
	}

	get description(): string {
		return this._description;
	}

	set description(description: string) {
		this._description = description;
	}

	get tile(): DDiagramCanvasTile {
		return this._tile;
	}

	get layer(): DDiagramLayerContainer {
		return this._layer;
	}

	initialize(shapes: EShape[], mapper?: DDiagramDataMapper | null): void {
		// DO NOTHING
	}

	destroy(): void {
		if (!this._destroyed) {
			this.onDestroy();
			super.destroy();
		}
	}

	protected onDestroy(): void {
		this._tile.destroy();
		this._layer.destroy();
	}

	hitTest(global: IPoint, onHit?: (shape: EShape) => boolean): EShape | null {
		const layers = this._layer.children;
		for (let i = layers.length - 1; 0 <= i; --i) {
			const layer = layers[i];
			if (layer.visible) {
				const shape = layer.hitTest(global, onHit);
				if (shape != null) {
					return shape;
				}
			}
		}
		return null;
	}

	override getLocalBounds(result?: Rectangle): Rectangle {
		if (result == null) {
			result = this._localBoundsRect ??= new Rectangle();
		}
		result.x = 0;
		result.y = 0;
		result.width = this.width;
		result.height = this.height;

		const limit = this._localBoundsLimit;
		if (limit === 0) {
			return result;
		}

		const layers = this.layer.children;
		const layersLength = layers.length;
		const work = (DDiagramCanvasBase.WORK_LOCAL_BOUNDS ??= new Rectangle());
		if (0 < limit) {
			let shapeCount = 0;
			for (let i = 0; i < layersLength; ++i) {
				const layer = layers[i];
				const p = layer.transform.position;
				work.x = p.x;
				work.y = p.y;
				work.width = layer.width;
				work.height = layer.height;
				result.enlarge(work);
				shapeCount += layer.children.length;
			}
			if (limit < shapeCount) {
				return result;
			}
			for (let i = 0; i < layersLength; ++i) {
				const layer = layers[i];
				const p = layer.transform.position;
				const px = p.x;
				const py = p.y;
				const shapes = layer.children;
				for (let j = 0, jmax = shapes.length; j < jmax; ++j) {
					const shape = shapes[j];
					shape.getBoundsInternal(true, work);
					work.x += px;
					work.y += py;
					result.enlarge(work);
				}
			}
		} else {
			for (let i = 0; i < layersLength; ++i) {
				const layer = layers[i];
				const p = layer.transform.position;
				const px = p.x;
				const py = p.y;
				work.x = px;
				work.y = py;
				work.width = layer.width;
				work.height = layer.height;
				result.enlarge(work);
				const shapes = layer.children;
				for (let j = 0, jmax = shapes.length; j < jmax; ++j) {
					const shape = shapes[j];
					shape.getBoundsInternal(true, work);
					work.x += px;
					work.y += py;
					result.enlarge(work);
				}
			}
		}
		return result;
	}

	protected getType(): string {
		return "DDiagramCanvasBase";
	}
}
