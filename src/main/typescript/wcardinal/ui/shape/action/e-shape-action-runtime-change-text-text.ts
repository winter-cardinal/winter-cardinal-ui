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
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";

export class EShapeActionRuntimeChangeTextText extends EShapeActionRuntimeConditional {
	protected text: EShapeActionExpression<string>;

	constructor(value: EShapeActionValueChangeText) {
		super(value, EShapeRuntimeReset.TEXT);
		this.text = EShapeActionExpressions.ofString(value.value);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			shape.text.value = this.text(shape, time, EShapeActionEnvironment);
			runtime.written |= this.reset;
		}
	}
}
