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
		target: string, value: VALUE, time: number
	): void {
		switch( action ) {
		case EShapeActionValueOnInputAction.EMIT_EVENT:
			shape.emit( target, shape, value );
			EShapeActionRuntimes.toContainerShape( shape )?.emit( target, value, time, shape );
			break;
		case EShapeActionValueOnInputAction.WRITE_LOCAL:
			EShapeActionRuntimes.toContainerTag( shape )?.set( target, value, time );
			break;
		case EShapeActionValueOnInputAction.WRITE_REMOTE:
			EShapeActionRuntimes.toContainerTag( shape )?.remove.set( target, value, time );
			break;
		case EShapeActionValueOnInputAction.WRITE_BOTH:
			const containerTag = EShapeActionRuntimes.toContainerTag( shape );
			if( containerTag ) {
				containerTag.set( target, value, time );
				containerTag.remote.set( target, value, time );
			}
			break;
		}
	}
}
