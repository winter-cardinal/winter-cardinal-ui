/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeBaseHitTestData {
	x: number;
	y: number;
	width: number;
	height: number;
	strokeWidth: number;
	strokeScale: number;

	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
		this.strokeWidth = 0;
		this.strokeScale = 1;
	}

	set(
		x: number,
		y: number,
		width: number,
		height: number,
		strokeWidth: number,
		strokeScale: number
	): this {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.strokeWidth = strokeWidth;
		this.strokeScale = strokeScale;
		return this;
	}
}
