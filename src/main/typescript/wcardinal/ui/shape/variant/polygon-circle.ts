/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolygonImpl } from "./polygon-impl";

export class PolygonCircle extends PolygonImpl {
	protected newVertices(): number[] {
		const dc = this.getDivisionCount();
		const result = this.newArray(4 * dc);
		const a0 = -Math.PI;
		const ad = +(Math.PI * 0.5) / dc;
		for (let i = 0; i < dc; ++i) {
			const a = a0 + ad * i;
			const x = 0.5 * Math.cos(a);
			const y = 0.5 * Math.sin(a);

			const i0 = i << 1;
			result[i0] = x;
			result[i0 + 1] = y;

			const i1 = (i + dc) << 1;
			result[i1] = -y;
			result[i1 + 1] = x;

			const i2 = (i + dc + dc) << 1;
			result[i2] = -x;
			result[i2 + 1] = -y;

			const i3 = (i + dc + dc + dc) << 1;
			result[i3] = +y;
			result[i3 + 1] = -x;
		}
		return result;
	}

	protected newNormals(): number[] {
		return this.newVertices();
	}

	protected static _instance?: PolygonCircle;
	static getInstance(): PolygonCircle {
		let result = this._instance;
		if (result == null) {
			result = new PolygonCircle();
		}
		return result;
	}
}
