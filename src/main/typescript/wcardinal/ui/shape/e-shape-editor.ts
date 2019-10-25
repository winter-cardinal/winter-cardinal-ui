/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";

export class EShapeEditor {
	localTransform: Matrix;
	internalTransform: Matrix;
	internalTransformParentInverse: Matrix;
	rotation: number;
	size: Point;

	constructor() {
		this.localTransform = new Matrix();
		this.internalTransform = new Matrix();
		this.internalTransformParentInverse = new Matrix();
		this.rotation = 0;
		this.size = new Point();
	}
}
