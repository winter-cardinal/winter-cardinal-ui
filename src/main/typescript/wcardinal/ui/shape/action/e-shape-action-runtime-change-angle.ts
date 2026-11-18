/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeAngle } from "./e-shape-action-value-change-angle";

export class EShapeActionRuntimeChangeAngle extends EShapeActionRuntimeConditional {
	protected value: EShapeActionExpression<number>;

	constructor(value: EShapeActionValueChangeAngle) {
		super(value, EShapeRuntimeReset.ANGLE);
		this.value = EShapeActionExpressions.ofNumber(value.value);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			// this.value(...) is expected to represent the central angle in degrees.
			// Therefore, shape.angle should be set to this.value(...) / 360.
			const value = this.value(shape, time, EShapeActionEnvironment);
			shape.angle = Math.max(0, Math.min(1, value * 0.002777777777777778));
			runtime.written |= this.reset;
		}
	}
}
