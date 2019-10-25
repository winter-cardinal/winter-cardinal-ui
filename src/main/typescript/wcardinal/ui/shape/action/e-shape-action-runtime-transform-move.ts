/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeRuntimeReset } from "../e-shape-runtime";
import { ACTION_EXPRESSION } from "./e-shape-action-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueTransformMove } from "./e-shape-action-value-transform-move";

const amountDefault = (): number => 0;

export class EShapeActionRuntimeTransformMove extends EShapeActionRuntimeConditional {
	protected readonly amount: ACTION_EXPRESSION<number>;

	constructor( value: EShapeActionValueTransformMove, reset: EShapeRuntimeReset ) {
		super( value, reset );
		this.amount = this.parseExpression( value.amount, amountDefault, "0" );
	}
}
