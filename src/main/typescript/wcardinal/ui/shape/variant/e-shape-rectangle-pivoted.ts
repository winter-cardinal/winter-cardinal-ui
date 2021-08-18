/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeBaseHitTestData } from "./e-shape-base-hit-test-data";
import { EShapeRectangle } from "./e-shape-rectangle";

export class EShapeRectanglePivoted extends EShapeRectangle {
	constructor(type = EShapeType.RECTANGLE_PIVOTED) {
		super(type);
	}

	toHitTestData(x: number, y: number): EShapeBaseHitTestData {
		const result = super.toHitTestData(x, y);
		result.x -= result.width;
		result.y -= result.height;
		return result;
	}
}
