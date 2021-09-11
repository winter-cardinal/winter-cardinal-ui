/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export enum EShapeDataValueRangeType {
	NONE = 0,
	FROM = 1,
	TO = 2,
	FROM_TO = 3
}

export interface EShapeDataValueRangeLike {
	type: EShapeDataValueRangeType;
	from: number;
	to: number;
}

export interface EShapeDataValueRangeParent {
	isChanged: boolean;
}

export interface EShapeDataValueRange extends EShapeDataValueRangeLike {
	parent?: EShapeDataValueRangeParent;

	set(from?: number | null, to?: number | null): boolean;
	normalize(value: number): number;
	isEquals(target: EShapeDataValueRangeLike): boolean;
	copy(target: EShapeDataValueRangeLike): void;
	toObject(): EShapeDataValueRangeLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
