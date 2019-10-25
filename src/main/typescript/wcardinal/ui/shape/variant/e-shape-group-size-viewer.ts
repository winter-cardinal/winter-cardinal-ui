/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { ObservablePoint, Point } from "pixi.js";
import { EShapeGroupSize } from "./e-shape-group-size";

export class EShapeGroupSizeViewer extends ObservablePoint implements EShapeGroupSize {
	base: Point;

	constructor( cb: () => void, x: number, y: number ) {
		super( cb, undefined, x, y );
		this.base = new Point( x, y );
	}

	init(): void {
		this.base.copyFrom( this );
		(this as any).cb();
	}

	fit(): void {
		// DO NOTHING
	}
}
