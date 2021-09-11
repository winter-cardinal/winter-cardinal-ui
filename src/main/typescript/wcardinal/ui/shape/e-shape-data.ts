/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeDataValue } from "./e-shape-data-value";
import { EShapeDataValueRange } from "./e-shape-data-value-range";

export interface EShapeData {
	readonly values: EShapeDataValue[];
	isChanged: boolean;

	// Shortcuts
	readonly id: string;
	readonly initial: string;
	readonly format: string;
	readonly range: EShapeDataValueRange;
	value: unknown;
	readonly nvalue: number;
	time: number;
	capacity: number;

	add(value: EShapeDataValue, index?: number): void;
	set(index: number, value: EShapeDataValue): EShapeDataValue | null;
	indexOf(target: EShapeDataValue): number;
	get(index: number): EShapeDataValue | null;
	remove(index: number): void;
	size(): number;
	swap(indexA: number, indexB: number): void;

	copy(target: EShapeData): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
