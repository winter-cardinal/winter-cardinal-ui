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
import { EShapeActions } from "./e-shape-actions";
import { EShapeActionValueEmitEvent } from "./e-shape-action-value-emit-event";

export class EShapeActionRuntimeEmitEvent extends EShapeActionRuntimeConditional {
	protected name: EShapeActionExpression<string | null>;

	constructor(value: EShapeActionValueEmitEvent) {
		super(value, EShapeRuntimeReset.NONE);
		this.name = EShapeActionExpressions.ofStringOrNull(value.name);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const name = this.name(shape, time, EShapeActionEnvironment);
			if (name != null) {
				EShapeActions.emit(shape, name);
			}
		}
	}
}
