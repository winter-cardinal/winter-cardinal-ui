/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export class DynamicFontAtlasFont {
	id: string;
	size: number;
	color: string;
	height: number;

	measured: boolean;
	ascent: number;
	descent: number;

	constructor(fontId: string, size: number, color: number, padding: number) {
		this.id = fontId;
		this.size = size;
		this.color = utils.hex2string(color);
		this.height = size + padding * 2;
		this.measured = false;
		this.ascent = 0;
		this.descent = 0;
	}
}
