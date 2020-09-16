/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeCursor } from "./e-shape-action-value-change-cursor";

const nameDefault = (): string | null => null;

export class EShapeActionRuntimeChangeCursor extends EShapeActionRuntimeConditional {
	protected name: EShapeActionExpression<string | null>;

	constructor( value: EShapeActionValueChangeCursor ) {
		super( value, EShapeRuntimeReset.CURSOR );
		this.name = EShapeActionExpressions.from( value.name, nameDefault, "null" );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			const name = this.name( shape, time );
			if( name != null ) {
				shape.cursor = name;
				runtime.written |= this.reset;
			}
		}
	}
}
