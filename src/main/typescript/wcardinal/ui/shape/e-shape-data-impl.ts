/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeData } from "./e-shape-data";
import { EShapeDataValue } from "./e-shape-data-value";
import { EShapeDataValueRange } from "./e-shape-data-value-range";
import { EShapeDataValueImpl } from "./e-shape-data-value-impl";
import { EShapeDataValueRangeImpl } from "./e-shape-data-value-range-impl";
import { EShapeDataValueType } from "./e-shape-data-value-type";
import { EShapeDataMapping } from "./e-shape-data-mapping";
import { EShapeDataMappingImpl } from "./e-shape-data-mapping-impl";
import { EShapeDataValueScope } from "./e-shape-data-value-scope";
import { DDiagramSerializedData, DDiagramSerializedDataWithMapping } from "../d-diagram-serialized";
import { isArray } from "../util/is-array";
import { EShapeDataScoped } from "./e-shape-data-scoped";
import { EShapeDataScopedImpl } from "./e-shape-data-scoped-impl";
import { EShapeDataValueState } from "./e-shape-data-value-state";
import { EShapeDataSystem } from "./e-shape-data-system";
import { EShapeDataSystemImpl } from "./e-shape-data-system-impl";

let RANGE_DUMMY: EShapeDataValueRange | undefined;
let ALIAS_DUMMY: Record<string, EShapeDataValue> | undefined;

export class EShapeDataImpl implements EShapeData {
	protected _values: EShapeDataValue[];
	protected _isChanged: boolean;
	protected _mapping?: EShapeDataMapping;
	protected _private?: EShapeDataScoped;
	protected _system?: EShapeDataSystem;
	protected _alias?: Record<string, EShapeDataValue>;

	constructor() {
		this._values = [];
		this._isChanged = true;
	}

	get values(): EShapeDataValue[] {
		return this._values;
	}

	get isChanged(): boolean {
		return this._isChanged;
	}

	set isChanged(isChanged: boolean) {
		this._isChanged = isChanged;
	}

	get id(): string {
		const values = this._values;
		if (0 < values.length) {
			return values[0].id;
		}
		return "";
	}

	get as(): string {
		const values = this._values;
		if (0 < values.length) {
			return values[0].as;
		}
		return "";
	}

	get type(): EShapeDataValueType {
		const values = this._values;
		if (0 < values.length) {
			return values[0].type;
		}
		return EShapeDataValueType.NUMBER;
	}

	get scope(): EShapeDataValueScope {
		const values = this._values;
		if (0 < values.length) {
			return values[0].scope;
		}
		return EShapeDataValueScope.PRIVATE;
	}

	get initial(): string {
		const values = this._values;
		if (0 < values.length) {
			return values[0].initial;
		}
		return "";
	}

	get format(): string {
		const values = this._values;
		if (0 < values.length) {
			return values[0].format;
		}
		return "";
	}

	get range(): EShapeDataValueRange {
		const values = this._values;
		if (0 < values.length) {
			return values[0].range;
		}
		return (RANGE_DUMMY ??= new EShapeDataValueRangeImpl());
	}

	get value(): unknown {
		const values = this._values;
		if (0 < values.length) {
			return values[0].value;
		}
		return 0;
	}

	set value(value: unknown) {
		const values = this._values;
		if (0 < values.length) {
			values[0].value = value;
		}
	}

	get nvalue(): number {
		const values = this._values;
		if (0 < values.length) {
			return values[0].nvalue;
		}
		return 0;
	}

	get time(): number {
		const values = this._values;
		if (0 < values.length) {
			return values[0].time;
		}
		return 0;
	}

	set time(time: number) {
		const values = this._values;
		if (0 < values.length) {
			values[0].time = time;
		}
	}

	get state(): EShapeDataValueState {
		const values = this._values;
		if (0 < values.length) {
			return values[0].state;
		}
		return EShapeDataValueState.UNKNOWN;
	}

	set state(state: EShapeDataValueState) {
		const values = this._values;
		if (0 < values.length) {
			values[0].state = state;
		}
	}

	get capacity(): number {
		const values = this._values;
		if (0 < values.length) {
			return values[0].capacity;
		}
		return 0;
	}

	set capacity(capacity: number) {
		const values = this._values;
		if (0 < values.length) {
			values[0].capacity = capacity;
		}
	}

	get alias(): Record<string, EShapeDataValue> {
		let result = this._alias;
		if (result == null) {
			result = this.newAlias();
			this._alias = result;
		}
		return result;
	}

	protected newAlias(): Record<string, EShapeDataValue> {
		const values = this._values;
		const valuesLength = values.length;
		if (0 < valuesLength) {
			const result: Record<string, EShapeDataValue> = {};
			for (let i = 0; i < valuesLength; ++i) {
				const value = values[i];
				result[value.as || value.id] = value;
			}
			return result;
		} else {
			return (ALIAS_DUMMY ??= {});
		}
	}

	get mapping(): EShapeDataMapping {
		let result = this._mapping;
		if (result == null) {
			result = this.newMapping();
			this._mapping = result;
		}
		return result;
	}

	protected newMapping(): EShapeDataMapping {
		return new EShapeDataMappingImpl();
	}

	getMapping(): EShapeDataMapping | undefined {
		return this._mapping;
	}

	get private(): EShapeDataScoped {
		let result = this._private;
		if (result == null) {
			result = this.newPrivate();
			this._private = result;
		}
		return result;
	}

	protected newPrivate(): EShapeDataScoped {
		return new EShapeDataScopedImpl();
	}

	getPrivate(): EShapeDataScoped | undefined {
		return this._private;
	}

	get system(): EShapeDataSystem {
		let result = this._system;
		if (result == null) {
			result = this.newSystem();
			this._system = result;
		}
		return result;
	}

	protected newSystem(): EShapeDataSystem {
		return new EShapeDataSystemImpl();
	}

	getSystem(): EShapeDataSystem | undefined {
		return this._system;
	}

	add(value: EShapeDataValue, index?: number): void {
		const values = this._values;
		value.parent = this;
		if (index === undefined) {
			values.push(value);
		} else {
			values.splice(index, 0, value);
		}
	}

	set(index: number, value: EShapeDataValue): EShapeDataValue | null {
		const values = this._values;
		if (0 <= index && index < values.length) {
			const result = values[index];
			value.parent = this;
			values[index] = value;
			result.parent = undefined;
			return result;
		}
		return null;
	}

	remove(index: number): void {
		const values = this._values;
		if (0 <= index && index < values.length) {
			values.splice(index, 1)[0].parent = undefined;
		}
	}

	indexOf(target: EShapeDataValue): number {
		const values = this._values;
		const valuesLength = values.length;

		// Instance-based matching
		for (let i = 0; i < valuesLength; ++i) {
			if (values[i] === target) {
				return i;
			}
		}

		// Data-based matching
		for (let i = 0; i < valuesLength; ++i) {
			if (values[i].isEquals(target)) {
				return i;
			}
		}

		// ID-based matching
		for (let i = 0; i < valuesLength; ++i) {
			if (values[i].id === target.id) {
				return i;
			}
		}

		return -1;
	}

	get(index: number): EShapeDataValue | null {
		const values = this._values;
		if (0 <= index && index < values.length) {
			return values[index];
		}
		return null;
	}

	size(): number {
		return this._values.length;
	}

	swap(indexA: number, indexB: number): void {
		const values = this._values;
		const tmp = values[indexB];
		values[indexB] = values[indexA];
		values[indexA] = tmp;
	}

	copy(target: EShapeData): this {
		const values = this._values;
		values.length = 0;

		for (let i = 0, imax = target.size(); i < imax; ++i) {
			const value = target.get(i);
			if (value != null) {
				const newValue = new EShapeDataValueImpl().copy(value);
				newValue.parent = this;
				values.push(newValue);
			}
		}

		const targetMapping = target.getMapping();
		if (targetMapping) {
			this.mapping.copy(targetMapping);
		}

		const targetSystem = target.getSystem();
		if (targetSystem) {
			this.system.copy(targetSystem);
		}

		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const values = this._values;
		const result: number[] = [];
		for (let i = 0, imax = values.length; i < imax; ++i) {
			result.push(values[i].serialize(manager));
		}

		const mapping = this._mapping;
		if (mapping != null) {
			result.push(mapping.serialize(manager));

			const system = this._system;
			if (system != null) {
				return manager.addResource(
					`[${JSON.stringify(result)},${system.serialize(manager)}]`
				);
			} else {
				return manager.addResource(`[${JSON.stringify(result)}]`);
			}
		} else {
			const system = this._system;
			if (system != null) {
				result.push(-1);
				return manager.addResource(
					`[${JSON.stringify(result)},${system.serialize(manager)}]`
				);
			} else {
				return manager.addResource(JSON.stringify(result));
			}
		}
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= target && target < resources.length) {
			let parsed = manager.getData(target);
			if (parsed == null) {
				parsed = JSON.parse(resources[target]) as DDiagramSerializedData;
				manager.setData(target, parsed);
			}

			const values = this._values;
			values.length = 0;
			if (this.isMapped(parsed)) {
				const first = parsed[0];
				const firstLength = first.length;
				for (let i = 0, imax = firstLength - 1; i < imax; ++i) {
					const index = first[i];
					const value = new EShapeDataValueImpl();
					value.parent = this;
					value.deserialize(index, manager);
					values.push(value);
				}

				const mappingId = first[firstLength - 1];
				if (0 <= mappingId) {
					this.mapping.deserialize(mappingId, manager);
				}

				const systemId = parsed[1];
				if (systemId != null && 0 <= systemId) {
					this.system.deserialize(systemId, manager);
				}
			} else {
				for (let i = 0, imax = parsed.length; i < imax; ++i) {
					const index = parsed[i];
					const value = new EShapeDataValueImpl();
					value.parent = this;
					value.deserialize(index, manager);
					values.push(value);
				}
			}
		}
	}

	protected isMapped(
		target: DDiagramSerializedData
	): target is DDiagramSerializedDataWithMapping {
		return 0 < target.length && isArray(target[0]);
	}
}
