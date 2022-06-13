/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeFill } from "../e-shape-fill";
import { EShapeLayer } from "../e-shape-layer";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeFillImpl } from "./e-shape-fill-impl";
import { EShapeGroupViewer } from "./e-shape-group-viewer";

export class EShapeEmbeddedLayer extends EShapeGroupViewer implements EShapeLayer {
	protected _name: string;

	constructor(name: string, isEditMode: boolean, type: EShapeType = EShapeType.EMBEDDED_LAYER) {
		super(isEditMode, type);
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
		result.size.init();
		return result;
	}

	protected newClone(): EShapeEmbeddedLayer {
		const constructor = this.constructor as typeof EShapeEmbeddedLayer;
		return new constructor(this._name, this._isEditMode, this.type);
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
