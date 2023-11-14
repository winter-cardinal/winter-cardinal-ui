/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeTransform } from "../e-shape-transform";
import { EShapeLockPart } from "./e-shape-lock-part";

export interface EShapeGroupSizeParent {
	readonly children: EShape[];
	readonly transform: EShapeTransform;
	lock(part: EShapeLockPart): void;
	unlock(part: EShapeLockPart, invoke: boolean): void;
	onSizeChange(): void;
	updateTransform(): void;
}
