/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";

export abstract class EShapeActionRuntimeMiscWrite extends EShapeActionRuntimeConditional {
	protected target: EShapeActionExpression<string | null>;
	protected value: EShapeActionExpression<unknown>;

	constructor( value: EShapeActionValueMisc ) {
		super( value, EShapeRuntimeReset.NONE );
		this.target = EShapeActionExpressions.ofStringOrNull( value.target );
		this.value = EShapeActionExpressions.ofUnknown( value.value );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const target = this.target( shape, time );
			if( target != null ) {
				this.write( shape, target, this.value( shape, time ), time );
			}
		}
	}

	protected abstract write( shape: EShape, target: string, value: unknown, time: number ): void;
}
