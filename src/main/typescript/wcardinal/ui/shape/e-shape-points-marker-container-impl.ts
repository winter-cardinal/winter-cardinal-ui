/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsMarker } from "./e-shape-points-marker";
import {
	EShapePointsMarkerContainer,
	EShapePointsMarkerContainerSerialized
} from "./e-shape-points-marker-container";
import { EShapePointsMarkerBaseParentParent } from "./e-shape-points-marker-base";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapePointsMarkerHead } from "./e-shape-points-marker-head";
import { EShapePointsMarkerTail } from "./e-shape-points-marker-tail";

export interface EShapePointsMarkerContainerImplParent extends EShapePointsMarkerBaseParentParent {
	onMarkerTypeChange(): void;
	onMarkerSizeChange(): void;
}

export class EShapePointsMarkerContainerImpl implements EShapePointsMarkerContainer {
	protected _parent: EShapePointsMarkerContainerImplParent;
	protected _lockCount: number;
	protected _isTypeChanged: boolean;
	protected _isSizeChanged: boolean;
	protected _head: EShapePointsMarker;
	protected _tail: EShapePointsMarker;

	constructor(parent: EShapePointsMarkerContainerImplParent) {
		this._parent = parent;
		this._lockCount = 0;
		this._isTypeChanged = false;
		this._isSizeChanged = false;
		this._head = new EShapePointsMarkerHead(this);
		this._tail = new EShapePointsMarkerTail(this);
	}

	lock(): this {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isTypeChanged = false;
			this._isSizeChanged = false;
		}
		return this;
	}

	unlock(): this {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			if (this._isTypeChanged) {
				this.onTypeChange();
			} else if (this._isSizeChanged) {
				this.onSizeChange();
			}
			this._isTypeChanged = false;
			this._isSizeChanged = false;
		}
		return this;
	}

	get parent(): EShapePointsMarkerContainerImplParent {
		return this._parent;
	}

	get head(): EShapePointsMarker {
		return this._head;
	}

	get tail(): EShapePointsMarker {
		return this._tail;
	}

	onTypeChange(): void {
		if (0 < this._lockCount) {
			this._isTypeChanged = true;
			return;
		}
		this._parent.onMarkerTypeChange();
	}

	onSizeChange(): void {
		if (0 < this._lockCount) {
			this._isSizeChanged = true;
			return;
		}
		this._parent.onMarkerSizeChange();
	}

	copy(source: EShapePointsMarkerContainer): this {
		this.lock();
		this._head.copy(source.head);
		this._tail.copy(source.tail);
		this.unlock();
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const headId = this._head.serialize(manager);
		const tailId = this._tail.serialize(manager);
		return manager.addResource(`[${headId},${tailId}]`);
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<EShapePointsMarkerContainerSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapePointsMarkerContainerSerialized;
				manager.setExtension(resourceId, parsed);
			}
			this.lock();
			this._head.deserialize(parsed[0], manager);
			this._tail.deserialize(parsed[1], manager);
			this.unlock();
		}
	}
}
