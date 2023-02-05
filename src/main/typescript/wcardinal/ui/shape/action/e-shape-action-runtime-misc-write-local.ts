/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionRuntimeMiscWrite } from "./e-shape-action-runtime-misc-write";
import { EShapeActions } from "./e-shape-actions";

export class EShapeActionRuntimeMiscWriteLocal extends EShapeActionRuntimeMiscWrite {
	protected write(shape: EShape, target: string, value: unknown, time: number): void {
		EShapeActions.writeLocal(shape, target, value, time);
	}
}
