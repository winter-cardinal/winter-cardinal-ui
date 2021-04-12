/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionRuntimeMiscWrite } from "./e-shape-action-runtime-misc-write";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";

export class EShapeActionRuntimeMiscWriteRemote extends EShapeActionRuntimeMiscWrite {
	protected write(shape: EShape, target: string, value: unknown, time: number): void {
		EShapeActionRuntimes.write(shape, target, value, time, true);
	}
}
