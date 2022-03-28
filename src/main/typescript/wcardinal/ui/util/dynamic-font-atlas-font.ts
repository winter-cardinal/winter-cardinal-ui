/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextMetrics, utils } from "pixi.js";

export class DynamicFontAtlasFont {
	id: string;
	size: number;
	color: string;
	height: number;

	ascent: number;
	descent: number;

	constructor(fontId: string, size: number, color: number, padding: number) {
		this.id = fontId;
		this.size = size;
		this.color = utils.hex2string(color);
		this.height = size + padding * 2;
		const metrics = TextMetrics.measureFont(fontId);
		this.ascent = metrics.ascent;
		// Becase the descent returned by TextMatrics#measureFont is tend
		// to be the half of the actual descent browsers use internally.
		this.descent = metrics.descent * 2;
	}
}
