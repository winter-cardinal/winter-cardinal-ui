/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValue } from "./e-shape-action-value";

export class EShapeActionRuntimeConditional extends EShapeActionRuntime {
	protected readonly condition: EShapeActionExpression<boolean>;

	constructor(value: EShapeActionValue, reset: EShapeRuntimeReset) {
		super(reset);
		this.condition = EShapeActionExpressions.ofBoolean(value.condition);
	}
}
