/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

const FROM = 1;
const TO = 2;

export const EShapeDataValueRangeType = {
	NONE: 0,
	FROM,
	TO,
	FROM_TO: FROM | TO
} as const;

export type EShapeDataValueRangeType = number;

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
