/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";

const DUMMY_SHAPES: EShape[] = [];

export class EShapeRendererIteratorDatum {
	protected index: number;
	protected shapes: EShape[];

	constructor() {
		this.index = 0;
		this.shapes = DUMMY_SHAPES;
	}

	reset( shapes: EShape[] ) {
		this.index = -1;
		this.shapes = shapes;
	}

	next(): EShape | null {
		const index = this.index = this.index + 1;
		const shapes = this.shapes;
		if( index < shapes.length ) {
			return shapes[ index ];
		}
		return null;
	}
}
