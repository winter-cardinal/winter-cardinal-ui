/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export abstract class EShapeActionRuntimeOpenDialog<VALUE = unknown> extends EShapeActionRuntimeOpen {
	protected onInputAction: EShapeActionValueOnInputAction;
	protected isOpened: boolean;
	protected initial: EShapeActionExpression<VALUE>;

	constructor( value: EShapeActionValueOpen ) {
		super( value, EShapeRuntimeReset.NONE );
		this.onInputAction = value.onInputAction;
		this.isOpened = false;
		this.initial = EShapeActionExpressions.from( value.initial, this.newInitial, this.getInitialLiteral() );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( ! this.isOpened ) {
			if( !! this.condition( shape, time ) ) {
				const target = this.target( shape, time );
				if( target != null ) {
					const initial = this.initial( shape, time );
					this.isOpened = true;
					setTimeout(() => {
						this.open( target, initial ).then(( value ) => {
							this.isOpened = false;
							EShapeActionValueOnInputActions.execute( shape, this.onInputAction, target, value, time );
						}, () => {
							this.isOpened = false;
						});
					}, 0);
				}
			}
		}
	}

	protected abstract open( target: string, initial: VALUE ): Promise<VALUE>;
	protected abstract newInitial( this: unknown ): VALUE;
	protected abstract getInitialLiteral(): string;
}
