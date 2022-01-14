/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorBody, EShapeConnectorBodySerialized } from "./e-shape-connector-body";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export class EShapeConnectorBodyImpl implements EShapeConnectorBody {
	protected _parent: EShapeConnector;
	protected _id: number;
	protected _values: number[];
	protected _lockCount: number;
	protected _isChanged: boolean;
	protected _onChange: () => void;

	constructor(parent: EShapeConnector, onChange: () => void) {
		this._parent = parent;
		this._id = 0;
		this._values = [];
		this._lockCount = 0;
		this._isChanged = false;
		this._onChange = onChange;
	}

	lock(): void {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isChanged = false;
		}
	}

	unlock(): void {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			if (this._isChanged) {
				this.onChange();
			}
			this._isChanged = false;
		}
	}

	get id(): number {
		return this._id;
	}

	get values(): number[] {
		return this._values;
	}

	set values(newValues: number[]) {
		this.set(newValues);
	}

	set(newValues?: number[]): this {
		if (newValues != null) {
			this._id += 1;
			if (this._values !== newValues) {
				const length = newValues.length;
				const values = this._values;
				for (let i = 0; i < length; ++i) {
					values[i] = newValues[i];
				}
				values.length = length;
			}
			this.onChange();
		}
		return this;
	}

	copy(source: EShapeConnectorBody): this {
		return this.set(source.values);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return manager.addResource(JSON.stringify(this._values));
	}

	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<EShapeConnectorBodySerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapeConnectorBodySerialized;
				manager.setExtension(resourceId, parsed);
			}
			this.set(parsed);
		}
	}

	protected onChange(): void {
		if (0 < this._lockCount) {
			this._isChanged = true;
			return;
		}
		this._onChange();
	}
}
