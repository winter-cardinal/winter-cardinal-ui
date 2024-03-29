/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeDataValueRange, EShapeDataValueRangeLike } from "./e-shape-data-value-range";
import { EShapeDataValueOrder } from "./e-shape-data-value-order";
import { EShapeDataValueScope } from "./e-shape-data-value-scope";
import { EShapeDataValueType } from "./e-shape-data-value-type";
import { EShapeDataValueState } from "./e-shape-data-value-state";
import { EShapeDataValueFormatter } from "./e-shape-data-value-formatter";

export interface EShapeDataValueLike {
	id: string;
	as: string;
	type: EShapeDataValueType;
	scope: EShapeDataValueScope;
	initial: string;
	format: string;
	range: EShapeDataValueRangeLike;
	capacity: number;
	order: EShapeDataValueOrder;
}

export interface EShapeDataValueParent {
	isChanged: boolean;
}

export interface EShapeDataValue extends EShapeDataValueLike {
	value: unknown;
	readonly nvalue: number;
	time: number;
	state: EShapeDataValueState;

	values: unknown[];
	times: number[];
	states: EShapeDataValueState[];

	range: EShapeDataValueRange;
	parent?: EShapeDataValueParent;

	formatter?: EShapeDataValueFormatter;

	clear(): void;
	toDirty(): void;
	remove(index: number): void;
	removeAll(indices: number[]): void;
	copy(target: EShapeDataValue): void;
	isEquals(target: EShapeDataValue): boolean;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
