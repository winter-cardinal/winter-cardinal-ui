/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOnInputActions } from "./e-shape-action-value-on-input-actions";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export abstract class EShapeActionRuntimeOpenDialog<VALUE = unknown> extends EShapeActionRuntimeOpen {
	protected onInputAction: EShapeActionValueOnInputAction;

	constructor( value: EShapeActionValueOpen ) {
		super( value, EShapeRuntimeReset.NONE );
		this.onInputAction = value.onInputAction;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			const target = this.target( shape, time );
			if( target != null ) {
				this.open( target ).then(( value ) => {
					EShapeActionValueOnInputActions.execute( shape, this.onInputAction, target, value, time );
				});
			}
		}
	}

	protected abstract open( target: string ): Promise<VALUE>;
}
