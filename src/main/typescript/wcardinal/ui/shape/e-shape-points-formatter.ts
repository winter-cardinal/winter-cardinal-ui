/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsFormattedWithoutBoundary } from "./e-shape-points-formatted";
import { EShapePointsStyle } from "./e-shape-points-style";

export type EShapePointsFormatter = (
	length: number,
	values: number[],
	segments: number[],
	style: EShapePointsStyle,
	result: EShapePointsFormattedWithoutBoundary
) => EShapePointsFormattedWithoutBoundary;
