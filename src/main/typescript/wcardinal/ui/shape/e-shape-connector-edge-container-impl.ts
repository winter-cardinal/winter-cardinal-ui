/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import {
	EShapeConnectorEdgeContainer,
	EShapeConnectorEdgeContainerSerialized
} from "./e-shape-connector-edge-container";
import { EShapeConnectorEdgeImpl } from "./e-shape-connector-edge-impl";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export class EShapeConnectorEdgeContainerImpl implements EShapeConnectorEdgeContainer {
	protected _parent: EShapeConnector;
	protected _lockCount: number;
	protected _isChanged: boolean;
	protected _onChange: () => void;
	protected _tail: EShapeConnectorEdge;
	protected _head: EShapeConnectorEdge;

	constructor(parent: EShapeConnector, onChange: () => void) {
		this._parent = parent;
		this._lockCount = 0;
		this._isChanged = false;
		this._onChange = onChange;
		const onChangeBound = (): void => {
			this.onChange();
		};
		const tail = new EShapeConnectorEdgeImpl(parent, onChangeBound);
		const head = new EShapeConnectorEdgeImpl(parent, onChangeBound);
		tail.other = head;
		head.other = tail;
		this._tail = tail;
		this._head = head;
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

	get tail(): EShapeConnectorEdge {
		return this._tail;
	}

	get head(): EShapeConnectorEdge {
		return this._head;
	}

	copy(source: EShapeConnectorEdgeContainer): this {
		this.lock();
		this._tail.copy(source.tail);
		this._head.copy(source.head);
		this.unlock();
		return this;
	}

	fit(forcibly?: boolean): this {
		this.lock();
		this._tail.fit(forcibly);
		this._head.fit(forcibly);
		this.unlock();
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const tailId = this._tail.serialize(manager);
		const headId = this._head.serialize(manager);
		return manager.addResource(`[${tailId},${headId}]`);
	}

	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<EShapeConnectorEdgeContainerSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(
					resources[resourceId]
				) as EShapeConnectorEdgeContainerSerialized;
				manager.setExtension(resourceId, parsed);
			}
			this.lock();
			this._tail.deserialize(parsed[0], mapping, manager);
			this._head.deserialize(parsed[1], mapping, manager);
			this.unlock();
		}
	}

	attach(): this {
		this.lock();
		const tail = this._tail;
		const head = this._head;
		tail.attach();
		head.attach();
		tail.fit(true);
		head.fit(true);
		this.unlock();
		return this;
	}

	detach(exceptions?: Set<EShape>): this {
		this.lock();
		this._tail.detach(exceptions);
		this._head.detach(exceptions);
		this.unlock();
		return this;
	}
}
