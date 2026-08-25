/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeBaseHitTestData } from "./e-shape-base-hit-test-data";
import { EShapeRectangleLegacy } from "./e-shape-rectangle-legacy";

export class EShapeRectanglePivoted extends EShapeRectangleLegacy {
	constructor(type: EShapeType = EShapeType.RECTANGLE_PIVOTED) {
		super(type);
	}

	toHitTestData(x: number, y: number): EShapeBaseHitTestData {
		const result = super.toHitTestData(x, y);
		result.x -= result.width;
		result.y -= result.height;
		return result;
	}
}
