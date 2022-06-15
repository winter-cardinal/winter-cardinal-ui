/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueMiscExecute } from "./e-shape-action-value-misc-execute";

export class EShapeActionRuntimeMiscExecute extends EShapeActionRuntimeConditional {
	protected target: EShapeActionExpression<unknown>;

	constructor(value: EShapeActionValueMiscExecute) {
		super(value, EShapeRuntimeReset.NONE);
		this.target = EShapeActionExpressions.ofUnknown(value.target);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			this.target(shape, time);
		}
	}
}
