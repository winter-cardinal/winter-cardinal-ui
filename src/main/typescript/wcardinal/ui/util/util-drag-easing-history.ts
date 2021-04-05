/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilDragEasingHistory {
	dx: number;
	dy: number;
	ds: number;
	dt: number;

	constructor( dx: number, dy: number, ds: number, dt: number ) {
		this.dx = dx;
		this.dy = dy;
		this.ds = ds;
		this.dt = dt;
	}

	set( dx: number, dy: number, ds: number, dt: number ): void {
		this.dx = dx;
		this.dy = dy;
		this.ds = ds;
		this.dt = dt;
	}
}
