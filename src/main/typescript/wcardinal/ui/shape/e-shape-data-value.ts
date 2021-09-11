/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeDataValueRange, EShapeDataValueRangeLike } from "./e-shape-data-value-range";

export enum EShapeDataValueOrder {
	ASCENDING,
	DESCENDING
}

export interface EShapeDataValueLike {
	id: string;
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

	values: unknown[];
	times: number[];

	range: EShapeDataValueRange;
	parent?: EShapeDataValueParent;

	formatter?: (value: unknown) => unknown;

	clear(): void;
	remove(index: number): void;
	removeAll(indices: number[]): void;
	copy(target: EShapeDataValue): void;
	isEquals(target: EShapeDataValue): boolean;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
