/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

const targetDefault = (): string | null => null;

export class EShapeActionRuntimeOpen extends EShapeActionRuntimeConditional {
	protected readonly target: EShapeActionExpression<string | null>;

	constructor( value: EShapeActionValueOpen, reset: EShapeRuntimeReset ) {
		super( value, reset );
		this.target = EShapeActionExpressions.from( value.target, targetDefault, "null" );
	}
}
