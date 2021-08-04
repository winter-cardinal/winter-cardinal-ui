/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

interface EShapeConnectorEdgeImplParent {
	onChange(): void;
}

export class EShapeConnectorEdgeImpl implements EShapeConnectorEdge {
	protected _parent: EShapeConnectorEdgeImplParent;
	protected _shape: EShape | null;
	protected _x: number;
	protected _y: number;

	constructor(parent: EShapeConnectorEdgeImplParent) {
		this._parent = parent;
		this._shape = null;
		this._x = 0;
		this._y = 0;
	}

	get shape(): EShape | null {
		return this._shape;
	}

	set shape(shape: EShape | null) {
		this.set(shape, undefined, undefined);
	}

	get x(): number {
		return this._x;
	}

	set x(x: number) {
		this.set(undefined, x, undefined);
	}

	get y(): number {
		return this._y;
	}

	set y(y: number) {
		this.set(undefined, undefined, y);
	}

	set(shape?: EShape | null, x?: number, y?: number): this {
		let isChanged = false;

		if (shape !== undefined && shape !== this._shape) {
			this._shape = shape;
			isChanged = true;
		}

		if (x != null && x !== this._x) {
			this._x = x;
			isChanged = true;
		}

		if (y != null && y !== this._y) {
			this._y = y;
			isChanged = true;
		}

		if (isChanged) {
			this._parent.onChange();
		}
		return this;
	}

	copy(source: EShapeConnectorEdge): this {
		return this.set(source.shape, source.x, source.y);
	}

	isEqual(other: EShapeConnectorEdge): boolean {
		return this._shape === other.shape && this._x === other.x && this._y === other.y;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const shape = this._shape;
		return manager.addResource(`[${shape ? shape.uuid : null},${this._x},${this._y}]`);
	}

	onDeserialized(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): this {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<[number | null, number, number]>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as [number, number, number];
				manager.setExtension(resourceId, parsed);
			}
			let shape: EShape | null | undefined = null;
			const shapeUuid = parsed[0];
			if (shapeUuid != null) {
				shape = mapping.find(shapeUuid);
			}
			this.set(shape, parsed[1], parsed[2]);
		}
		return this;
	}
}
