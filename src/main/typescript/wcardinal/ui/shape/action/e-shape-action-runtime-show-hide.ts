/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHide } from "./e-shape-action-value-show-hide";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";

export class EShapeActionRuntimeShowHide extends EShapeActionRuntimeConditional {
	visibility: boolean;

	constructor(value: EShapeActionValueShowHide) {
		super(value, EShapeRuntimeReset.VISIBILITY);
		this.visibility = value.subtype === EShapeActionValueShowHideType.SHOW;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			shape.visible = this.visibility;
			runtime.written |= this.reset;
		}
	}
}
