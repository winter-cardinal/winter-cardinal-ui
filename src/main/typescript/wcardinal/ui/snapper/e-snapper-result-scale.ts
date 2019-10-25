/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";

export class ESnapperResultScale {
	distance: number;
	scale: Point;

	constructor() {
		this.distance = NaN;
		this.scale = new Point();
	}
}
