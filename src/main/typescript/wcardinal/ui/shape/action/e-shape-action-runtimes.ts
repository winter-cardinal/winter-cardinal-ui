/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCanvasContainer } from "../../d-canvas-container";
import { EShape } from "../e-shape";

export class EShapeActionRuntimes {
	static toContainer( shape: EShape ): any | null {
		let current: { parent: any; } = shape;
		while( current != null ) {
			if( current instanceof DCanvasContainer ) {
				return current;
			}
			current = current.parent;
		}
		return null;
	}

	static toContainerShape( shape: EShape ): any {
		const container = EShapeActionRuntimes.toContainer( shape );
		return container && container.shape;
	}

	static toContainerTag( shape: EShape ): any {
		const container = this.toContainer( shape );
		return container && container.tag;
	}
}
