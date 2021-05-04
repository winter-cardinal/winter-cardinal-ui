/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolygonImpl } from "./polygon-impl";

export class PolygonRectangle extends PolygonImpl {
	protected newVertices(): number[] {
		return [-0.5, -0.5, +0.5, -0.5, +0.5, +0.5, -0.5, +0.5];
	}

	protected newNormals(): number[] {
		return [0, -1, +1, 0, 0, +1, -1, 0];
	}

	protected static _instance?: PolygonRectangle;
	static getInstance(): PolygonRectangle {
		let result = this._instance;
		if (result == null) {
			result = new PolygonRectangle();
		}
		return result;
	}
}
