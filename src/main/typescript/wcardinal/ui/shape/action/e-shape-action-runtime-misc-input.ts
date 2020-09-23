/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";

export abstract class EShapeActionRuntimeMiscInput extends EShapeActionRuntime {
	protected readonly target: EShapeActionExpression<string | null>;
	protected onInputAction: EShapeActionValueOnInputAction;

	constructor( value: EShapeActionValueMisc ) {
		super();
		this.target = EShapeActionExpressions.ofStringOrNull( value.target );
		this.onInputAction = value.onInputAction;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( ! shape.state.inDisabled ) {
			const data = this.getData();
			if( shape.state.isFocused ) {
				if( ! data.isShown( shape ) ) {
					setTimeout(() => {
						data.show( shape, this.toValue( shape.text.value ), ( _: EShape, value: string ): void => {
							shape.text.value = value;
							const now = Date.now();
							const target = this.target( shape, now );
							if( target != null ) {
								EShapeActionValueOnInputActions.execute(
									shape, this.onInputAction, target, this.fromValue( value ), now
								);
							}
						});
					}, 0);
				}
			} else {
				if( data.isShown( shape ) ) {
					data.onInputChange();
					data.hide();
				}
			}
		}
	}

	protected abstract getData(): EShapeActionRuntimeMiscInputData;
	protected abstract toValue( value: string ): string;
	protected abstract fromValue( value: string ): unknown;
}
