/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";

export interface EShapeLayout {
	isCompatible( shape: EShape ): boolean;
	reset( shape: EShape, baseX: number, baseY: number ): void;
	update( shape: EShape, baseX: number, baseY: number, pivotX: number, pivotY: number ): void;
}
