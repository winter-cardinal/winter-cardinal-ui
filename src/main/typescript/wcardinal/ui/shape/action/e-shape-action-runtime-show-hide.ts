/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueShowHide } from "./e-shape-action-value-show-hide";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";

/**
 * @deprecated in favor of {@link EShapeActionRuntimeShowHideShape}.
 */
export class EShapeActionRuntimeShowHide extends EShapeActionRuntimeConditional {
	visibility: boolean;

	constructor(value: EShapeActionValueShowHide) {
		super(value, EShapeRuntimeReset.VISIBILITY);
		this.visibility = value.subtype === EShapeActionValueShowHideType.SHAPE_SHOW;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			shape.visible = this.visibility;
			runtime.written |= this.reset;
		}
	}
}
