/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActions } from "./e-shape-actions";
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
				EShapeActions.emit(shape, target, value, time);
				break;
			case EShapeActionValueOnInputAction.WRITE_LOCAL:
				EShapeActions.writeLocal(shape, target, value, time);
				break;
			case EShapeActionValueOnInputAction.WRITE_REMOTE:
				EShapeActions.writeRemote(shape, target, value);
				break;
			case EShapeActionValueOnInputAction.WRITE_BOTH:
				EShapeActions.writeLocal(shape, target, value, time);
				EShapeActions.writeRemote(shape, target, value);
				break;
		}
	}
}
