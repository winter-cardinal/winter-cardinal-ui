/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";

export class EShapeActionRuntimeBlinkVisibility extends EShapeActionRuntimeBlink {
	constructor( value: EShapeActionValueBlink ) {
		super( value, EShapeRuntimeReset.VISIBILITY );
	}

	protected toOn( shape: EShape, runtime: EShapeRuntime ): void {
		shape.visible = true;
		runtime.written |= this.reset;
	}

	protected toOff( shape: EShape, runtime: EShapeRuntime ): void {
		shape.visible = false;
		runtime.written |= this.reset;
	}
}
