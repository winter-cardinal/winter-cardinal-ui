/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeTransform } from "../e-shape-transform";

export interface EShapeGroupSizeParent {
	readonly children: EShape[];
	readonly transform: EShapeTransform;
	updateTransform(): void;
	disallowOnTransformChange(): void;
	allowOnTransformChange(invokeOnTransformChange: boolean): void;
	onSizeChange(): void;
}
