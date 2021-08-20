/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeConnectorEdgeContainer } from "./e-shape-connector-edge-container";
import { EShapeConnectorEdgeImpl } from "./e-shape-connector-edge-impl";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export class EShapeConnectorEdgeContainerImpl implements EShapeConnectorEdgeContainer {
	protected _parent: EShapeConnector;
	protected _lockCount: number;
	protected _isChanged: boolean;
	protected _onChange: () => void;
	protected _left: EShapeConnectorEdge;
	protected _right: EShapeConnectorEdge;

	constructor(parent: EShapeConnector, onChange: () => void) {
		this._parent = parent;
		this._lockCount = 0;
		this._isChanged = false;
		this._onChange = onChange;
		const onChangeBound = (): void => {
			this.onChange();
		};
		this._left = new EShapeConnectorEdgeImpl(parent, onChangeBound);
		this._right = new EShapeConnectorEdgeImpl(parent, onChangeBound);
	}

	lock(): this {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isChanged = false;
		}
		return this;
	}

	unlock(): this {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			if (this._isChanged) {
				this._onChange();
			}
		}
		return this;
	}

	protected onChange(): void {
		if (0 < this._lockCount) {
			this._isChanged = true;
			return;
		}
		this._onChange();
	}

	get left(): EShapeConnectorEdge {
		return this._left;
	}

	get right(): EShapeConnectorEdge {
		return this._right;
	}

	copy(source: EShapeConnectorEdgeContainer): this {
		this.lock();
		this._left.copy(source.left);
		this._right.copy(source.right);
		this.unlock();
		return this;
	}

	fit(forcibly?: boolean): this {
		this.lock();
		this._left.fit(forcibly);
		this._right.fit(forcibly);
		this.unlock();
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const left = this._left;
		const leftId = left == null ? -1 : left.serialize(manager);
		const right = this._right;
		const rightId = right == null ? -1 : right.serialize(manager);
		return manager.addResource(`[${leftId},${rightId}]`);
	}

	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<[number, number]>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as [number, number];
				manager.setExtension(resourceId, parsed);
			}
			this.lock();
			this._left.deserialize(parsed[0], mapping, manager);
			this._right.deserialize(parsed[1], mapping, manager);
			this.unlock();
		}
	}

	attach(): this {
		this.lock();
		const left = this._left;
		const right = this._right;
		left.attach();
		right.attach();
		left.fit(true);
		right.fit(true);
		this.unlock();
		return this;
	}

	detach(): this {
		this.lock();
		this._left.detach();
		this._right.detach();
		this.unlock();
		return this;
	}
}
