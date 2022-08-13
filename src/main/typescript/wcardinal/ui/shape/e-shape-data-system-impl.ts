/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedDataSystem } from "../d-diagram-serialized";
import { EShapeDataSystem } from "./e-shape-data-system";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export class EShapeDataSystemImpl implements EShapeDataSystem {
	protected _data: Map<string, string>;

	constructor() {
		this._data = new Map<string, string>();
	}

	set(key: string, value: string): this {
		this._data.set(key, value);
		return this;
	}

	get(key: string): string | null {
		return this._data.get(key) ?? null;
	}

	contains(key: string): boolean {
		return this._data.has(key);
	}

	remove(key: string): string | null {
		const data = this._data;
		const result = data.get(key);
		data.delete(key);
		return result ?? null;
	}

	clear(): this {
		this._data.clear();
		return this;
	}

	size(): number {
		return this._data.size;
	}

	each(iteratee: (value: string, key: string) => boolean | void): this {
		let isCanceled = false;
		this._data.forEach((value, key): void => {
			if (!isCanceled) {
				if (iteratee(value, key) === false) {
					isCanceled = true;
				}
			}
		});
		return this;
	}

	copy(target: EShapeDataSystem): this {
		const data = this._data;
		data.clear();
		target.each((value, key): void => {
			data.set(key, value);
		});
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const data = this._data;
		if (data.size <= 0) {
			return -1;
		}
		const result: number[] = [];
		data.forEach((value, key): void => {
			const valueId = manager.addResource(value);
			const keyId = manager.addResource(key);
			result.push(keyId, valueId);
		});
		return manager.addResource(JSON.stringify(result));
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const data = this._data;
		data.clear();

		const resources = manager.resources;
		const resourcesLength = resources.length;
		if (0 <= target && target < resourcesLength) {
			let parsed = manager.getDataSystem(target);
			if (parsed == null) {
				parsed = JSON.parse(resources[target]) as DDiagramSerializedDataSystem;
				manager.setDataSystem(target, parsed);
			}

			for (let i = 0, imax = parsed.length; i < imax; i += 2) {
				const keyId = parsed[i];
				if (0 <= keyId && keyId < resourcesLength) {
					const key = resources[keyId];
					const valueId = parsed[i + 1];
					if (0 <= valueId && valueId < resourcesLength) {
						data.set(key, resources[valueId]);
					}
				}
			}
		}
	}
}
