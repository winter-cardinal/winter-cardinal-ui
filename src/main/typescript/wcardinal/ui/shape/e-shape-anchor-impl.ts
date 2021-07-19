/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point, utils } from "pixi.js";
import { EShapeAnchor } from "./e-shape-anchor";

export class EShapeAnchorImpl extends utils.EventEmitter implements EShapeAnchor {
	protected _position: Point;

	constructor() {
		super();
		this._position = new Point();
	}

	get position(): IPoint {
		return this._position;
	}

	update(): void {
		this.emit("update", this);
	}
}
