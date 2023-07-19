/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export interface DViewParent extends utils.EventEmitter {
	stop(): void;
	toNormalizedScale(scale: number): number;
}
