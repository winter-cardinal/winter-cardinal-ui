/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScalarFunction } from "./d-scalar-function";

export interface DScalarSet {
	x?: DScalarFunction | null;
	y?: DScalarFunction | null;
	width?: DScalarFunction | null;
	height?: DScalarFunction | null;
}
