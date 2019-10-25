/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeRuntimeReset } from "../e-shape-runtime";
import { ACTION_EXPRESSION, EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValue } from "./e-shape-action-value";

const conditionDefault = (): boolean => true;

export class EShapeActionRuntimeConditional extends EShapeActionRuntime {
	protected readonly condition: ACTION_EXPRESSION<boolean>;

	constructor( value: EShapeActionValue, reset: EShapeRuntimeReset ) {
		super( reset );
		this.condition = this.parseExpression( value.condition, conditionDefault, "true" );
	}
}
