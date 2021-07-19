/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, utils } from "pixi.js";

export interface EShapeAnchor extends utils.EventEmitter {
	readonly position: IPoint;
	update(): void;
}
