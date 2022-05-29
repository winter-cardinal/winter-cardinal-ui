/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export type EShapeDataMappingValue = [string, string, string];

export interface EShapeDataMapping {
	readonly values: EShapeDataMappingValue[];

	add(value: EShapeDataMappingValue, index?: number): this;
	addAll(values: EShapeDataMappingValue[]): this;
	clearAndAdd(value: EShapeDataMappingValue): this;
	clearAndAddAll(values: EShapeDataMappingValue[]): this;
	indexOf(target: EShapeDataMappingValue): number;
	get(index: number): EShapeDataMappingValue | null;
	set(index: number, value: EShapeDataMappingValue): EShapeDataMappingValue | null;
	remove(index: number): EShapeDataMappingValue | null;
	clear(): this;
	size(): number;
	swap(indexA: number, indexB: number): this;

	copy(target: EShapeDataMapping): void;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
