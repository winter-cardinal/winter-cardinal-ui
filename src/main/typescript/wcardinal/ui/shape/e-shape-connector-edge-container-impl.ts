/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeConnectorEdgeContainer } from "./e-shape-connector-edge-container";
import { EShapeConnectorEdgeImpl } from "./e-shape-connector-edge-impl";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeConnectorEdgeContainerImplParent {
	fit(): void;
}

export class EShapeConnectorEdgeContainerImpl implements EShapeConnectorEdgeContainer {
	protected _parent: EShapeConnectorEdgeContainerImplParent;
	protected _left: EShapeConnectorEdge;
	protected _right: EShapeConnectorEdge;

	constructor(parent: EShapeConnectorEdgeContainerImplParent) {
		this._parent = parent;
		this._left = new EShapeConnectorEdgeImpl(this);
		this._right = new EShapeConnectorEdgeImpl(this);
	}

	get left(): EShapeConnectorEdge {
		return this._left;
	}

	get right(): EShapeConnectorEdge {
		return this._right;
	}

	onChange(): void {
		this._parent.fit();
	}

	copy(source: EShapeConnectorEdgeContainer): this {
		this._left.copy(source.left);
		this._right.copy(source.right);
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const left = this._left;
		const leftId = left == null ? -1 : left.serialize(manager);
		const right = this._right;
		const rightId = right == null ? -1 : right.serialize(manager);
		return manager.addResource(`[${leftId},${rightId}]`);
	}
}
