/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHideShape } from "./e-shape-action-value-show-hide-shape";

export class EShapeActionRuntimeShowHideShape extends EShapeActionRuntimeConditional {
	constructor(value: EShapeActionValueShowHideShape) {
		super(value, EShapeRuntimeReset.VISIBILITY);
	}

	initialize(shape: EShape, runtime: EShapeRuntime): void {
		super.initialize(shape, runtime);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		shape.visible = this.condition(shape, time, EShapeActionEnvironment);
		runtime.written |= this.reset;
	}
}
