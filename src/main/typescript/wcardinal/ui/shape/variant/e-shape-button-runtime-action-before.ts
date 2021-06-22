/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntime } from "../action";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";

export class EShapeButtonRuntimeActionBefore extends EShapeActionRuntime {
	constructor() {
		super(EShapeRuntimeReset.NONE);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		const state = shape.state;
		if (state.isClicked) {
			if (!state.isActive) {
				state.isActivated = true;
			}
		}
	}
}
