/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
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
	summary?: string;
	description?: string;
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
	protected _label: string;
	protected _summary: string;
	protected _description: string;
	protected _tile: DDiagramCanvasTile;

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

		// Label
		this._label = options?.label ?? "";

		// Summary
		this._summary = options?.summary ?? "";

		// Description
		this._description = options?.description ?? "";

		// Tile
		const tile = new DDiagramCanvasTile(this, options?.tile);
		this._tile = tile;
		tile.init();
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

	protected getType(): string {
		return "DDiagramCanvasBase";
	}
}
