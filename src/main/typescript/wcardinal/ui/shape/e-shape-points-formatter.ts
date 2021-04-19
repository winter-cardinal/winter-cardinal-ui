/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsFormatterResult } from "./e-shape-points-formatter-result";
import { EShapePointsFormatterSource } from "./e-shape-points-formatter-source";

export type EShapePointsFormatter = (
	source: EShapePointsFormatterSource,
	result: EShapePointsFormatterResult
) => EShapePointsFormatterResult;
