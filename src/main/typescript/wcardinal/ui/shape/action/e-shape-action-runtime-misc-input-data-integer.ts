/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionRuntimeMiscInputDataBase } from "./e-shape-action-runtime-misc-input-data-base";

export class EShapeActionRuntimeMiscInputDataInteger extends EShapeActionRuntimeMiscInputDataBase {
	protected getInputType(): string {
		return "number";
	}

	protected initInput( shape: EShape, input: HTMLInputElement, value: string ): void {
		super.initInput( shape, input, value );
		input.step = "1";
	}
}
