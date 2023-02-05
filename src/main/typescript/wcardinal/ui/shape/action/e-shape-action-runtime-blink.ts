/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";

export class EShapeActionRuntimeBlink extends EShapeActionRuntimeConditional {
	protected interval: number;

	constructor(value: EShapeActionValueBlink, reset: EShapeRuntimeReset) {
		super(value, reset);
		this.interval = value.interval;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const interval = this.interval;
			const dinterval = interval << 1;
			const elapsed = time % dinterval;
			if (elapsed < interval) {
				this.toOff(shape, runtime);
				runtime.effect = time + (interval - elapsed);
			} else {
				this.toOn(shape, runtime);
				runtime.effect = time + (dinterval - elapsed);
			}
		}
	}

	protected toOn(shape: EShape, runtime: EShapeRuntime): void {
		//
	}

	protected toOff(shape: EShape, runtime: EShapeRuntime): void {
		//
	}
}
