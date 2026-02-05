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
import { EShapeActionValueChangeFillPercent } from "./e-shape-action-value-change-fill-percent";

export class EShapeActionRuntimeChangeFillPercent extends EShapeActionRuntimeConditional {
	protected value: EShapeActionExpression<number>;

	constructor(value: EShapeActionValueChangeFillPercent) {
		super(value, EShapeRuntimeReset.FILL_PERCENT);
		this.value = EShapeActionExpressions.ofNumber(value.value);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			shape.fill.percent = this.value(shape, time, EShapeActionEnvironment);
			runtime.written |= this.reset;
		}
	}
}
