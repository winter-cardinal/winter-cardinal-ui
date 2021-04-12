/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeTextAlignHorizontal } from "./e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./e-shape-text-align-vertical";

export interface EShapeTextAlignLike {
	horizontal: EShapeTextAlignHorizontal;
	vertical: EShapeTextAlignVertical;
}

export interface EShapeTextAlign extends EShapeTextAlignLike {
	copy(target?: Partial<EShapeTextAlignLike>): void;
	set(horizontal?: EShapeTextAlignHorizontal, vertical?: EShapeTextAlignVertical): void;
	toObject(): EShapeTextAlignLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
