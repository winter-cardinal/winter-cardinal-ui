/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntime } from "../action/e-shape-action-runtime";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeButton } from "./e-shape-button";
import { EShapeButtonRuntimeActionAfter } from "./e-shape-button-runtime-action-after";
import { EShapeButtonRuntimeActionAfterToggle } from "./e-shape-button-runtime-action-after-toggle";
import { EShapeButtonRuntimeActionBefore } from "./e-shape-button-runtime-action-before";
import { EShapeButtonRuntimeActionBeforeToggle } from "./e-shape-button-runtime-action-before-toggle";

export class EShapeButtonRuntime extends EShapeRuntime {
	protected static BEFORE_TOGGLE?: EShapeButtonRuntimeActionBeforeToggle;
	protected static BEFORE?: EShapeButtonRuntimeActionBefore;

	constructor(shape: EShape) {
		super(shape);
		if (shape instanceof EShapeButton) {
			const isToggle = shape.isToggle;
			const actions = this.actions;
			actions.unshift(this.newActionBefore(isToggle));
			actions.push(this.newActionAfter(isToggle));
		}
	}

	protected newActionBefore(isToggle: boolean): EShapeActionRuntime {
		if (isToggle) {
			return (EShapeButtonRuntime.BEFORE_TOGGLE ??= new EShapeButtonRuntimeActionBeforeToggle());
		} else {
			return (EShapeButtonRuntime.BEFORE ??= new EShapeButtonRuntimeActionBefore());
		}
	}

	protected newActionAfter(isToggle: boolean): EShapeActionRuntime {
		if (isToggle) {
			return new EShapeButtonRuntimeActionAfterToggle(this);
		} else {
			return new EShapeButtonRuntimeActionAfter(this);
		}
	}
}
