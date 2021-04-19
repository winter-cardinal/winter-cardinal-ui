/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "./e-shape-points-style";

export interface EShapePointsFormatterResult {
	length: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;
}
