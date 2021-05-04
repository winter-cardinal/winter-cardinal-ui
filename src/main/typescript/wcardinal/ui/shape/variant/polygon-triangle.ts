/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolygonImpl } from "./polygon-impl";

export class PolygonTriangle extends PolygonImpl {
	protected newVertices(): number[] {
		return [0.0, -0.5, +0.5, +0.5, -0.5, +0.5];
	}

	protected static _instance?: PolygonTriangle;
	static getInstance(): PolygonTriangle {
		let result = this._instance;
		if (result == null) {
			result = new PolygonTriangle();
		}
		return result;
	}
}
