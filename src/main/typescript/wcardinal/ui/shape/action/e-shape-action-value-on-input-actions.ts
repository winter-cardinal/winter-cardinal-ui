/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";

export class EShapeActionValueOnInputActions {
	static execute<VALUE>(
		shape: EShape,
		action: EShapeActionValueOnInputAction,
		target: string,
		value: VALUE,
		time: number
	): void {
		switch (action) {
			case EShapeActionValueOnInputAction.EMIT_EVENT:
				shape.emit(target, shape, value);
				EShapeActionRuntimes.emit(shape, target, value, time);
				break;
			case EShapeActionValueOnInputAction.WRITE_LOCAL:
				EShapeActionRuntimes.writeLocal(shape, target, value, time);
				break;
			case EShapeActionValueOnInputAction.WRITE_REMOTE:
				EShapeActionRuntimes.writeRemote(shape, target, value);
				break;
			case EShapeActionValueOnInputAction.WRITE_BOTH:
				EShapeActionRuntimes.writeLocal(shape, target, value, time);
				EShapeActionRuntimes.writeRemote(shape, target, value);
				break;
		}
	}
}
