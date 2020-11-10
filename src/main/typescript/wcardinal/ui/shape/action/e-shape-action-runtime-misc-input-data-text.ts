/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntimeMiscInputDataBase } from "./e-shape-action-runtime-misc-input-data-base";

export class EShapeActionRuntimeMiscInputDataText extends EShapeActionRuntimeMiscInputDataBase {
	protected getInputType(): string {
		return "text";
	}
}
