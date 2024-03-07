/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export interface DTableCategoryColumn extends utils.EventEmitter {
	label?: string;
	weight?: number;
	width?: number;
	offset: number;
}
