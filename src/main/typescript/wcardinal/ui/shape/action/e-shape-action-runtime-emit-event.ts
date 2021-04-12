/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";
import { EShapeActionValueEmitEvent } from "./e-shape-action-value-emit-event";

export class EShapeActionRuntimeEmitEvent extends EShapeActionRuntimeConditional {
	protected name: EShapeActionExpression<string | null>;

	constructor(value: EShapeActionValueEmitEvent) {
		super(value, EShapeRuntimeReset.NONE);
		this.name = EShapeActionExpressions.ofStringOrNull(value.name);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			const name = this.name(shape, time);
			if (name != null) {
				EShapeActionRuntimes.emit(shape, name);
			}
		}
	}
}
