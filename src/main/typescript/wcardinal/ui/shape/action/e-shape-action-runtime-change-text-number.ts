/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { NumberFormatter } from "../../util/number-formatter";
import { NumberFormatters } from "../../util/number-formatters";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeText } from "./e-shape-action-value-change-text";

export class EShapeActionRuntimeChangeTextNumber extends EShapeActionRuntimeConditional {
	protected number: EShapeActionExpression<number>;
	protected formatter: NumberFormatter | null;

	constructor( value: EShapeActionValueChangeText, format: string ) {
		super( value, EShapeRuntimeReset.TEXT );

		this.number = EShapeActionExpressions.ofNumber( value.value );

		format = format.trim();
		this.formatter = ( 0 < format.length ? NumberFormatters.create( format ) : null );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const value = this.number( shape, time );
			shape.text.value = ( this.formatter != null ? this.formatter.format( value, 0 ) : String(value) );
			runtime.written |= this.reset;
		}
	}
}
