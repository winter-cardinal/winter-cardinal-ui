/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeConnectorEdgeContainer } from "./e-shape-connector-edge-container";
import { EShapeConnectorEdgeImpl } from "./e-shape-connector-edge-impl";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export class EShapeConnectorEdgeContainerImpl implements EShapeConnectorEdgeContainer {
	protected _parent: EShapeConnector;
	protected _left: EShapeConnectorEdge;
	protected _right: EShapeConnectorEdge;

	constructor(parent: EShapeConnector, onChange: () => void) {
		this._parent = parent;
		this._left = new EShapeConnectorEdgeImpl(parent, onChange);
		this._right = new EShapeConnectorEdgeImpl(parent, onChange);
	}

	get left(): EShapeConnectorEdge {
		return this._left;
	}

	get right(): EShapeConnectorEdge {
		return this._right;
	}

	copy(source: EShapeConnectorEdgeContainer): this {
		this._left.copy(source.left);
		this._right.copy(source.right);
		return this;
	}

	fit(forcibly?: boolean): this {
		this._left.fit(forcibly);
		this._right.fit(forcibly);
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const left = this._left;
		const leftId = left == null ? -1 : left.serialize(manager);
		const right = this._right;
		const rightId = right == null ? -1 : right.serialize(manager);
		return manager.addResource(`[${leftId},${rightId}]`);
	}

	attach(): this {
		const left = this._left;
		const right = this._right;
		left.attach();
		right.attach();
		left.fit(true);
		right.fit(true);
		return this;
	}

	detach(): this {
		this._left.detach();
		this._right.detach();
		return this;
	}
}
