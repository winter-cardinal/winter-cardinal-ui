/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenPage extends EShapeActionRuntimeOpen {
	constructor(value: EShapeActionValueOpen) {
		super(value, EShapeRuntimeReset.NONE);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time)) {
			const target = this.target(shape, time);
			if (target != null) {
				window.open(target);
			}
		}
	}
}
