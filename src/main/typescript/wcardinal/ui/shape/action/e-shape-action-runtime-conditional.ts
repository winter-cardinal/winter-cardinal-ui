/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression, EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValue } from "./e-shape-action-value";

const conditionDefault = (): boolean => true;

export class EShapeActionRuntimeConditional extends EShapeActionRuntime {
	protected readonly condition: EShapeActionExpression<boolean>;

	constructor( value: EShapeActionValue, reset: EShapeRuntimeReset ) {
		super( reset );
		this.condition = this.toExpression( value.condition, conditionDefault, "true" );
	}
}
