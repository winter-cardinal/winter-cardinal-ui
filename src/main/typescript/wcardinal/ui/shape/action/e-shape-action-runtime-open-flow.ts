/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeOpen } from "./e-shape-action-runtime-open";
import { EShapeActionRuntimes } from "./e-shape-action-runtimes";
import { EShapeActionValueOpen } from "./e-shape-action-value-open";

export class EShapeActionRuntimeOpenFlow extends EShapeActionRuntimeOpen {
	constructor( value: EShapeActionValueOpen ) {
		super( value, EShapeRuntimeReset.NONE );
	}

	execute( shape: EShape, runtime: EShapeRuntime, time: number ): void {
		if( !! this.condition( shape, time ) ) {
			const target = this.target( shape, time );
			if( target != null ) {
				const container = EShapeActionRuntimes.toContainer( shape );
				if( container ) {
					container.openByName( target );
				}
			}
		}
	}
}
