/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";

export class EShapeTriangle extends EShapePrimitive {
	constructor(type = EShapeType.TRIANGLE) {
		super(type);
	}

	clone(): EShapeTriangle {
		return new EShapeTriangle().copy(this);
	}

	protected containsAbs_(x: number, y: number, a: number, ay1: number, ay2: number): boolean {
		// a = 2 * ay / ax
		// y = + a * x + ay1
		// y = - a * x + ay1
		// y = ay2;
		return +a * x + ay1 - y <= 0 && -a * x + ay1 - y <= 0 && y <= ay2;
	}

	containsAbs(x: number, y: number, ax: number, ay: number, sw: number, ss: number): boolean {
		if (super.containsAbsBBox(x, y, ax, ay)) {
			const a = (2 * ay) / ax;
			const fill = this.fill;
			if (fill.enable) {
				if (this.containsAbs_(x, y, a, -ay, +ay)) {
					return true;
				}
			} else {
				if (0 < sw) {
					const s = sw * ss;
					if (this.containsAbs_(x, y, a, -ay, +ay)) {
						const az = Math.sqrt(ax * ax + 4 * ay * ay);
						const aw = (2 * ax * ay) / (ax + az);

						const cy = ay - aw;
						const ay1 = cy + ((-ay - cy) * Math.max(0.0, aw - s)) / aw;
						const ay2 = ay - s;
						if (!this.containsAbs_(x, y, a, ay1, ay2)) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}
}
