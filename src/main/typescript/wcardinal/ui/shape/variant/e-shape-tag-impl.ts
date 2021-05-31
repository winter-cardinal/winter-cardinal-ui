/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTag } from "../e-shape-tag";
import { EShapeTagValue } from "../e-shape-tag-value";
import { EShapeTagValueRange } from "../e-shape-tag-value-range";
import { EShapeTagValueImpl } from "./e-shape-tag-value-impl";
import { EShapeTagValueRangeImpl } from "./e-shape-tag-value-range-impl";

let RANGE_DUMMY: EShapeTagValueRange | undefined;

export class EShapeTagImpl implements EShapeTag {
	protected _values: EShapeTagValue[];
	protected _isChanged: boolean;

	constructor() {
		this._values = [];
		this._isChanged = true;
	}

	get values(): EShapeTagValue[] {
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

	get range(): EShapeTagValueRange {
		const values = this._values;
		if (0 < values.length) {
			return values[0].range;
		}
		return (RANGE_DUMMY ??= new EShapeTagValueRangeImpl());
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

	add(value: EShapeTagValue, index?: number): void {
		const values = this._values;
		value.parent = this;
		if (index === undefined) {
			values.push(value);
		} else {
			values.splice(index, 0, value);
		}
	}

	set(index: number, value: EShapeTagValue): EShapeTagValue | null {
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

	indexOf(target: EShapeTagValue): number {
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

	get(index: number): EShapeTagValue | null {
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

	copy(target: EShapeTag): this {
		const values = this._values;
		values.length = 0;

		for (let i = 0, imax = target.size(); i < imax; ++i) {
			const value = target.get(i);
			if (value != null) {
				const newValue = new EShapeTagValueImpl().copy(value);
				newValue.parent = this;
				values.push(newValue);
			}
		}

		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const values = this._values;
		if (values.length <= 0) {
			return manager.addResource("[]");
		} else {
			let serialized = `[${values[0].serialize(manager)}`;
			for (let i = 1, imax = values.length; i < imax; ++i) {
				serialized += `,${values[i].serialize(manager)}`;
			}
			serialized += "]";
			return manager.addResource(serialized);
		}
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		if (0 <= target && target < manager.resources.length) {
			let deserialized: number[] | undefined = manager.getTag(target);
			if (deserialized == null) {
				deserialized = JSON.parse(manager.resources[target]) as number[];
				manager.setTag(target, deserialized);
			}

			const values = this._values;
			values.length = 0;
			const deserializedLength = deserialized.length;
			for (let i = 0; i < deserializedLength; ++i) {
				const index = deserialized[i];
				const value = new EShapeTagValueImpl();
				value.parent = this;
				value.deserialize(index, manager);
				values.push(value);
			}
		}
	}
}
