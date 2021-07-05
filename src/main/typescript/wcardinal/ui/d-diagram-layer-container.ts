/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramLayer } from "./d-diagram-layer";
import { DDiagramSerializedItem, DDiagramSerializedLayer } from "./d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "./shape";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";

export class DDiagramLayerContainer extends Container {
	declare children: DDiagramLayer[];
	protected _active: DDiagramLayer | null;
	protected _width: number;
	protected _height: number;

	constructor(width: number, height: number) {
		super();
		this._active = null;
		this._width = width;
		this._height = height;
		this.interactive = false;
		this.interactiveChildren = false;
	}

	init(): void {
		if (this._active == null) {
			const children = this.children;
			const childrenLength = children.length;
			if (0 < childrenLength) {
				this._active = children[childrenLength - 1];
			}
		}
	}

	get active(): DDiagramLayer | null {
		return this._active;
	}

	set active(layer: DDiagramLayer | null) {
		if (this._active !== layer && (layer == null || 0 <= this.children.indexOf(layer))) {
			this._active = layer;
			this.onLayerChange();
		}
	}

	create(name: string, activate?: boolean): DDiagramLayer {
		const result = new DDiagramLayer(name);
		this.attach(result, activate);
		return result;
	}

	/**
	 * Adds the specified layer and activates it if the `activate` is true.
	 *
	 * @param layer
	 * @param activate
	 */
	attach(layer: DDiagramLayer, activate?: boolean): void {
		this.addChild(layer);
		if (activate === true) {
			this._active = layer;
		}
		this.onLayerChange();
		DApplications.update(this);
	}

	attachAt(layer: DDiagramLayer, index: number, activate?: boolean): void {
		this.addChildAt(layer, index);
		if (activate === true) {
			this._active = layer;
		}
		this.onLayerChange();
		DApplications.update(this);
	}

	/**
	 * Removes the specified layer from this container and activates the specified layer.
	 * This method does not destroy the secified layer.
	 *
	 * @param layer
	 */
	detach(layer: DDiagramLayer, active: DDiagramLayer | null): void {
		const children = this.children;
		const index = children.indexOf(layer);
		if (0 <= index) {
			this._active = active;

			children.splice(index, 1);
			(layer as any).parent = undefined;

			this.onLayerChange();
			DApplications.update(this);
		}
	}

	/**
	 * Removes the specified layer and activate the next layer.
	 * This method does not destroy the specified layer.
	 *
	 * @param layer
	 * @param activateNext
	 */
	delete(layer: DDiagramLayer, activateNext?: boolean): number {
		const children = this.children;
		const index = children.indexOf(layer);
		if (0 <= index) {
			children.splice(index, 1);
			(layer as any).parent = undefined;

			if (this._active === layer) {
				if (activateNext === true) {
					if (index < children.length) {
						this._active = children[index];
					} else if (0 < children.length) {
						this._active = children[index - 1];
					} else {
						this._active = null;
					}
				} else {
					this._active = null;
				}
			}

			this.onLayerChange();
			DApplications.update(this);
		}
		return index;
	}

	get(index: number): DDiagramLayer | null {
		const child = this.children[index];
		if (child != null) {
			return child;
		}
		return null;
	}

	clear(): void {
		const children = this.children;
		if (0 < children.length) {
			for (let i = children.length - 1; 0 <= i; --i) {
				const child = children[i];
				(child as any).parent = null;
				child.destroy();
			}
			children.length = 0;
			this.onLayerChange();
			DApplications.update(this);
		}
	}

	destroy(): void {
		if (!this._destroyed) {
			this.clear();
			super.destroy();
		}
	}

	size(): number {
		return this.children.length;
	}

	protected onLayerChange(): void {
		this.emit("change", this);
	}

	serialize(
		manager: EShapeResourceManagerSerialization,
		items: DDiagramSerializedItem[]
	): DDiagramSerializedLayer[] {
		const result: DDiagramSerializedLayer[] = [];
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].addUuid(manager);
		}
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].updateUuid(manager);
		}
		for (let i = 0, imax = children.length; i < imax; ++i) {
			result.push(children[i].serialize(i, manager, items));
		}
		return result;
	}

	deserialize(
		serializedLayers: DDiagramSerializedLayer[],
		manager: EShapeResourceManagerDeserialization
	): void {
		const serializedLayersLength = serializedLayers.length;
		if (0 < serializedLayersLength) {
			const width = this._width;
			const height = this._height;
			for (let i = 0; i < serializedLayersLength; ++i) {
				this.addChild(
					DDiagramLayer.deserialize(serializedLayers[i], manager, width, height)
				);
			}
			this.onLayerChange();
			DApplications.update(this);
		}
	}
}
