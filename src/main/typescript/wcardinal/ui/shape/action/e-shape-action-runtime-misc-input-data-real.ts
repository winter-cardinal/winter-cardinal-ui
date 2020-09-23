/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";

export class EShapeActionRuntimeMiscInputDataReal extends EShapeActionRuntimeMiscInputData {
	protected getInputType(): string {
		return "number";
	}

	protected initInput( shape: EShape, input: HTMLInputElement, value: string ): void {
		super.initInput( shape, input, value );
		input.step = "0.1";
	}
}
