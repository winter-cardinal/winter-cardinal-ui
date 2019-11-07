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

	constructor( fontId: string, size: number, color: number, padding: number ) {
		this.id = fontId;
		this.size = size;
		this.color = utils.hex2string( color );
		const metrics = TextMetrics.measureFont( fontId );
		const shift = metrics.fontSize / 8;
		this.ascent = metrics.ascent - shift;
		this.descent = metrics.descent + shift;
		this.height = metrics.fontSize + padding * 2;
	}
}
