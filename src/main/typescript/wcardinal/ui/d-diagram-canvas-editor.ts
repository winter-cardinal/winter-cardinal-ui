/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDiagramCanvasBase,
	DDiagramCanvasBaseOptions,
	DThemeDiagramCanvasBase
} from "./d-diagram-canvas-base";
import { DDiagramCanvasEditorShape } from "./d-diagram-canvas-editor-shape";
import { DDiagramCanvasEditorShapeImpl } from "./d-diagram-canvas-editor-shape-impl";
import {
	DDiagramCanvasEditorSnap,
	DDiagramCanvasEditorSnapOptions,
	DThemeDiagramCanvasEditorSnap
} from "./d-diagram-canvas-editor-snap";
import {
	DDiagramSerialized,
	DDiagramSerializedItem,
	DDiagramSerializedVersion
} from "./d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
import { isNumber } from "./util/is-number";

export interface DDiagramCanvasEditorOptions<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor
> extends DDiagramCanvasBaseOptions<THEME> {
	snap?: DDiagramCanvasEditorSnapOptions;
}

export interface DThemeDiagramCanvasEditor
	extends DThemeDiagramCanvasBase,
		DThemeDiagramCanvasEditorSnap {}

export interface DDiagramCanvasEditorThumbnail {
	serialize(): string | undefined;
}

export class DDiagramCanvasEditor<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor,
	OPTIONS extends DDiagramCanvasEditorOptions<THEME> = DDiagramCanvasEditorOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	protected _shape?: DDiagramCanvasEditorShape;
	protected _snap: DDiagramCanvasEditorSnap | null;

	constructor(options: OPTIONS) {
		super(options);
		this._snap = this.toSnap(this.theme, options.snap);
	}

	protected toSnap(
		theme: THEME,
		options?: DDiagramCanvasEditorSnapOptions
	): DDiagramCanvasEditorSnap | null {
		if (options) {
			return new DDiagramCanvasEditorSnap(this, theme, options);
		}
		return null;
	}

	get snap(): DDiagramCanvasEditorSnap | null {
		return this._snap;
	}

	get shape(): DDiagramCanvasEditorShape {
		let result = this._shape;
		if (result == null) {
			result = this.newShape();
			this._shape = result;
		}
		return result;
	}

	protected newShape(): DDiagramCanvasEditorShape {
		return new DDiagramCanvasEditorShapeImpl(this);
	}

	serialize(id?: number, thumbnail?: DDiagramCanvasEditorThumbnail): DDiagramSerialized {
		const manager = new EShapeResourceManagerSerialization();
		const items: DDiagramSerializedItem[] = [];
		const background = this._background;
		const backgroundColor = background.color;
		const backgroundAlpha = background.alpha;
		return {
			version: DDiagramSerializedVersion,
			id,
			name: this.name,
			width: this.width,
			height: this.height,
			background: {
				color: isNumber(backgroundColor) ? backgroundColor : 0xffffff,
				alpha: isNumber(backgroundAlpha) ? backgroundAlpha : 0
			},
			tile: this._tile.serialize(),
			resources: manager.resources,
			data: manager.data,
			pieces: manager.pieces,
			layers: this._layer.serialize(manager, items),
			items,
			snap: this._snap?.serialize(),
			thumbnail: thumbnail?.serialize()
		};
	}

	onReflow(): void {
		super.onReflow();
		this._snap?.onReflow();
	}

	protected getType(): string {
		return "DDiagramCanvasEditor";
	}
}
