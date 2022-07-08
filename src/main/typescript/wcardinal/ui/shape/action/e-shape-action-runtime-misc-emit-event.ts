/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";

export class EShapeActionRuntimeMiscEmitEvent extends EShapeActionRuntimeConditional {
	protected target: EShapeActionExpression<string | null>;

	constructor(value: EShapeActionValueMisc) {
		super(value, EShapeRuntimeReset.NONE);
		this.target = EShapeActionExpressions.ofStringOrNull(value.target);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const target = this.target(shape, time, EShapeActionEnvironment);
			if (target != null) {
				EShapeActionRuntimes.emit(shape, target);
			}
		}
	}
}
