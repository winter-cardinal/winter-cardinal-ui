/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeFill } from "../e-shape-fill";
import { EShapeLayer } from "../e-shape-layer";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeFillImpl } from "./e-shape-fill-impl";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupViewer } from "./e-shape-group-viewer";

export class EShapeEmbeddedLayer extends EShapeGroupViewer implements EShapeLayer {
	protected _name: string;

	constructor(
		name: string,
		mode: EShapeResourceManagerDeserializationMode,
		depth: number,
		type: EShapeType = EShapeType.EMBEDDED_LAYER
	) {
		super(mode, depth, type);
		this._name = name;
	}

	get name(): string {
		return this._name;
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeFillImpl(this, false, 0xffffff, 1);
	}

	protected isGroupSizeFittable(): boolean {
		return false;
	}

	protected newGroupSize(
		mode: EShapeResourceManagerDeserializationMode,
		depth: number
	): EShapeGroupSize {
		const sizeX = EShapeDefaults.SIZE_X;
		const sizeY = EShapeDefaults.SIZE_Y;
		return new EShapeGroupSizeViewer(this, sizeX, sizeY, sizeX, sizeY);
	}

	clone(): EShapeEmbeddedLayer {
		const result = this.newClone().copy(this);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const clone = children[i].clone();
			clone.parent = result;
			result.children.push(clone);
		}
		result.onChildTransformChange();
		result.toDirty();
		const size = this.size;
		if (size instanceof EShapeGroupSizeViewer) {
			const base = size.base;
			result.size.set(base.x, base.y).init().set(size.x, size.y);
		} else {
			result.size.init();
		}
		return result;
	}

	protected newClone(): EShapeEmbeddedLayer {
		const constructor = this.constructor as typeof EShapeEmbeddedLayer;
		return new constructor(this._name, this._mode, this._depth, this.type);
	}

	serializeChildren(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem[] {
		return [];
	}

	serializeImage(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	serializeGradient(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}
}
