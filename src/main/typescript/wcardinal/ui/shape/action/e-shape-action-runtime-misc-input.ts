/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";

export class EShapeActionRuntimeMiscInput extends EShapeActionRuntime {
	static data: EShapeActionRuntimeMiscInputData | null = null;

	protected onInputAction: EShapeActionValueOnInputAction;

	constructor( value: EShapeActionValueMisc ) {
		super();
		this.onInputAction = value.onInputAction;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( ! shape.state.inDisabled ) {
			const data = EShapeActionRuntimeMiscInput.getData();
			if( shape.state.isFocused ) {
				if( ! data.isShown( shape ) ) {
					setTimeout(() => {
						data.show( shape, shape.text.value, ( _: EShape, value: string ): void => {
							shape.text.value = value;
							EShapeActionValueOnInputActions.execute(
								shape, this.onInputAction, "input", value, Date.now()
							);
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

	static getData(): EShapeActionRuntimeMiscInputData {
		if( EShapeActionRuntimeMiscInput.data == null ) {
			EShapeActionRuntimeMiscInput.data = new EShapeActionRuntimeMiscInputData();
		}
		return EShapeActionRuntimeMiscInput.data;
	}
}
