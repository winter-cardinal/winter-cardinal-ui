/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";

const DUMMY_SHAPES: EShape[] = [];

export class EShapeRendererIteratorDatum {
	public index: number;
	public shapes: EShape[];
	public current: EShape | null;

	constructor() {
		this.index = 0;
		this.shapes = DUMMY_SHAPES;
		this.current = null;
	}
}
