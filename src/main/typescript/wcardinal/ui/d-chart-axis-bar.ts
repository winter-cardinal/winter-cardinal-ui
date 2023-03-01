/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { EShape } from "./shape/e-shape";

export interface DChartAxisBar<CHART extends DBase> {
	readonly shape: EShape;
}
