/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeRuntime } from "./e-shape-runtime";

export const EShapeRuntimes: {
	[ type: number ]: (new ( shape: EShape ) => EShapeRuntime) | undefined
} = {};
