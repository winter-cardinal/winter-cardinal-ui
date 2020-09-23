/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";

export class EShapeActionRuntimeMiscInputDataText extends EShapeActionRuntimeMiscInputData {
	protected getInputType(): string {
		return "text";
	}
}
