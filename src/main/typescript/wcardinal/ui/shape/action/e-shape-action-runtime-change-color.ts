/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeChangeColorBase } from "./e-shape-action-runtime-change-color-base";
import { EShapeActionValueChangeColor } from "./e-shape-action-value-change-color";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";

export class EShapeActionRuntimeChangeColor extends EShapeActionRuntimeChangeColorBase {
	protected readonly color: number | null;
	protected readonly alpha: number | null;
	protected readonly blend: EShapeActionExpression<number | null>;

	constructor( value: EShapeActionValueChangeColor ) {
		super( value );

		switch( value.target ) {
		case EShapeActionValueChangeColorTarget.COLOR:
			this.color = value.color;
			this.alpha = null;
			break;
		case EShapeActionValueChangeColorTarget.ALPHA:
			this.color = null;
			this.alpha = value.alpha;
			break;
		default:
			this.color = value.color;
			this.alpha = value.alpha;
			break;
		}

		this.blend = EShapeActionExpressions.ofNumberOrNull( value.blend );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( this.condition( shape, time ) ) {
			const color = this.color;
			const alpha = this.alpha;
			const blend = this.blend( shape, time );
			this.set( shape, runtime, time, color, alpha, blend );
		}
	}
}
