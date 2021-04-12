/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeTextOffsetLike {
	horizontal: number;
	vertical: number;
}

export interface EShapeTextOffset extends EShapeTextOffsetLike {
	copy(target?: Partial<EShapeTextOffsetLike>): void;
	set(horizontal?: number, vertical?: number): void;
	toObject(): EShapeTextOffsetLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
