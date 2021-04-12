/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeChangeColorBase } from "./e-shape-action-runtime-change-color-base";
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";

export class EShapeActionRuntimeChangeColorCode extends EShapeActionRuntimeChangeColorBase {
	protected readonly color: EShapeActionExpression<number | null>;
	protected readonly alpha: EShapeActionExpression<number | null>;
	protected readonly blend: EShapeActionExpression<number | null>;

	constructor(value: EShapeActionValueChangeColorCode) {
		super(value);
		this.color = EShapeActionExpressions.ofNumberOrNull(value.color);
		this.alpha = EShapeActionExpressions.ofNumberOrNull(value.alpha);
		this.blend = EShapeActionExpressions.ofNumberOrNull(value.blend);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			const color = this.color(shape, time);
			const alpha = this.alpha(shape, time);
			const blend = this.blend(shape, time);
			this.set(shape, runtime, time, color, alpha, blend);
		}
	}
}
