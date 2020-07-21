/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";

export class EShapeActionRuntimeMiscInput extends EShapeActionRuntime {
	static data: EShapeActionRuntimeMiscInputData | null = null;

	constructor() {
		super();
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( ! shape.state.inDisabled ) {
			const data = EShapeActionRuntimeMiscInput.getData();
			if( shape.state.isFocused ) {
				if( ! data.isShown( shape ) ) {
					setTimeout(() => {
						data.show( shape, shape.text.value, ( _: EShape, value: string ): void => {
							shape.text.value = value;
							shape.emit( name, shape, value );
							const container = this.toContainer( shape );
							if( container && ("shape" in container) ) {
								container.shape.emit( name, shape, value );
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

	static getData(): EShapeActionRuntimeMiscInputData {
		if( EShapeActionRuntimeMiscInput.data == null ) {
			EShapeActionRuntimeMiscInput.data = new EShapeActionRuntimeMiscInputData();
		}
		return EShapeActionRuntimeMiscInput.data;
	}
}
