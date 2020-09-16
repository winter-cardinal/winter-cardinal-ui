/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export abstract class EShapeActionRuntimeOpenDialog<VALUE = unknown> extends EShapeActionRuntimeOpen {
	protected onInputAction: EShapeActionValueOnInputAction;

	constructor( value: EShapeActionValueOpen ) {
		super( value, EShapeRuntimeReset.NONE );
		this.onInputAction = value.onInputAction;
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			const target = this.target( shape, time );
			if( target != null ) {
				this.open( target ).then(( value ) => {
					this.onInput( shape, this.onInputAction, target, value, time );
				});
			}
		}
	}

	protected onInput(
		shape: EShape,
		action: EShapeActionValueOnInputAction,
		target: string, value: VALUE, time: number
	): void {
		switch( action ) {
		case EShapeActionValueOnInputAction.EMIT_EVENT:
			shape.emit( target, shape, value );
			this.toContainerShape( shape )?.emit( target, shape, value );
			break;
		case EShapeActionValueOnInputAction.WRITE_LOCAL:
			this.toContainerTag( shape )?.set( target, value, time );
			break;
		case EShapeActionValueOnInputAction.WRITE_REMOTE:
			this.toContainerTag( shape )?.remove.set( target, value, time );
			break;
		case EShapeActionValueOnInputAction.WRITE_BOTH:
			const containerTag = this.toContainerTag( shape );
			if( containerTag ) {
				containerTag.set( target, value, time );
				containerTag.remote.set( target, value, time );
			}
			break;
		}
	}

	protected toContainerShape( shape: EShape ): any {
		const container = this.toContainer( shape );
		return container && container.shape;
	}

	protected toContainerTag( shape: EShape ): any {
		const container = this.toContainer( shape );
		return container && container.tag;
	}

	protected abstract open( target: string ): Promise<VALUE>;
}
