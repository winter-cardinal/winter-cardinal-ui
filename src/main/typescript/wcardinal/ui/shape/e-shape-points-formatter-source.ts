/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "./e-shape-points-style";

export interface EShapePointsFormatterSource {
	readonly length: number;
	readonly values: number[];
	readonly segments: number[];
	readonly style: EShapePointsStyle;
}
