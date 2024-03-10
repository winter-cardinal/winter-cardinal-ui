/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export interface DTableCategoryColumn extends utils.EventEmitter {
	readonly label?: string;
	weight?: number;
	readonly minWeight: number;
	width?: number;
	readonly minWidth: number;
	offset: number;
	readonly resizable: boolean;
}
