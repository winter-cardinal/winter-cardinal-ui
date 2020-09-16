/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";

export class EShapeActionRuntime {
	reset: EShapeRuntimeReset;

	constructor( reset?: EShapeRuntimeReset ) {
		this.reset = reset || EShapeRuntimeReset.NONE;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		// OVERRIDE THIS
	}
}
