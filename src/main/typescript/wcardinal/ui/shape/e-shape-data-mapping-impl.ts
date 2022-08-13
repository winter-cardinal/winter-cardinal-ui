/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedDataMapping } from "../d-diagram-serialized";
import { EShapeDataMapping, EShapeDataMappingValue } from "./e-shape-data-mapping";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export class EShapeDataMappingImpl implements EShapeDataMapping {
	values: EShapeDataMappingValue[];

	constructor() {
		this.values = [];
	}

	add(value: EShapeDataMappingValue, index?: number): this {
		const values = this.values;
		if (index != null) {
			values.splice(index, 0, value);
		} else {
			values.push(value);
		}
		return this;
	}

	addAll(values: EShapeDataMappingValue[]): this {
		const destination = this.values;
		for (let i = 0, imax = values.length; i < imax; ++i) {
			destination.push(values[i]);
		}
		return this;
	}

	clearAndAdd(value: EShapeDataMappingValue): this {
		this.clear();
		this.add(value);
		return this;
	}

	clearAndAddAll(values: EShapeDataMappingValue[]): this {
		this.clear();
		this.addAll(values);
		return this;
	}

	indexOf(target: EShapeDataMappingValue): number {
		const values = this.values;

		// Instance-based matching
		for (let i = 0, imax = values.length; i < imax; ++i) {
			const value = values[i];
			if (value === target) {
				return i;
			}
		}

		// Data-based matching
		for (let i = 0, imax = values.length; i < imax; ++i) {
			const value = values[i];
			if (value[0] === target[0] && value[1] === target[1] && value[2] === target[2]) {
				return i;
			}
		}

		return -1;
	}

	get(index: number): EShapeDataMappingValue | null {
		const values = this.values;
		if (0 <= index || index < values.length) {
			return values[index];
		}
		return null;
	}

	set(index: number, value: EShapeDataMappingValue): EShapeDataMappingValue | null {
		const values = this.values;
		if (0 <= index || index < values.length) {
			const result = values[index];
			values[index] = value;
			return result;
		}
		return null;
	}

	remove(index: number): EShapeDataMappingValue | null {
		const values = this.values;
		if (0 <= index || index < values.length) {
			return values.splice(index, 1)[0];
		}
		return null;
	}

	clear(): this {
		this.values.length = 0;
		return this;
	}

	size(): number {
		return this.values.length;
	}

	swap(indexA: number, indexB: number): this {
		const values = this.values;
		const tmp = values[indexB];
		values[indexB] = values[indexA];
		values[indexA] = tmp;
		return this;
	}

	copy(target: EShapeDataMapping): void {
		this.clearAndAddAll(target.values);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const values = this.values;
		const valuesLength = values.length;
		if (valuesLength <= 0) {
			return -1;
		}
		let result: string = "[";
		let delimiter = "";
		for (let i = 0, imax = values.length; i < imax; ++i) {
			const value = values[i];
			const s = manager.addResource(value[0]);
			const d = manager.addResource(value[1]);
			const t = manager.addResource(value[2]);
			result += `${delimiter}${s},${d},${t}`;
			delimiter = ",";
		}
		result += "]";
		return manager.addResource(result);
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const values = this.values;
		values.length = 0;

		const resources = manager.resources;
		const resourcesLength = resources.length;
		if (0 <= target && target < resourcesLength) {
			let parsed = manager.getDataMapping(target);
			if (parsed == null) {
				parsed = JSON.parse(resources[target]) as DDiagramSerializedDataMapping;
				manager.setDataMapping(target, parsed);
			}
			for (let i = 0, imax = parsed.length; i < imax; i += 3) {
				const is = parsed[i];
				const id = parsed[i + 1];
				const it = parsed[i + 2];
				values.push([
					0 <= is && is < resourcesLength ? resources[is] : "",
					0 <= id && id < resourcesLength ? resources[id] : "",
					0 <= it && it < resourcesLength ? resources[it] : ""
				]);
			}
		}
	}
}
