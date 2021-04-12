/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class ESnapperResult {
	distance: number;
	result: number;
	threshold: number;

	constructor() {
		this.distance = NaN;
		this.result = 0;
		this.threshold = 10;
	}

	reset(value: number, scale: number): void {
		this.distance = NaN;
		this.result = value;
		this.threshold = 0.0001 < scale ? 10 / scale : 10;
	}

	set(value: number, snapped: number): void {
		const newDistance = Math.abs(snapped - value);
		if (newDistance <= this.threshold) {
			const oldDistance = this.distance;
			if (oldDistance !== oldDistance || newDistance < oldDistance) {
				this.distance = newDistance;
				this.result = snapped;
			}
		}
	}
}
