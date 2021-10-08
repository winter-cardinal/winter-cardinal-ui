/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicFontAtlasCharacterOrigin } from "./dynamic-font-atlas-chaaracter-origin";
import { DynamicFontAtlasCharacterType } from "./dynamic-font-atlas-character-type";

export class DynamicFontAtlasCharacter {
	ref: number;
	life: number;
	character: string;
	x: number;
	y: number;
	width: number;
	height: number;
	advance: number;
	origin: DynamicFontAtlasCharacterOrigin;
	type: DynamicFontAtlasCharacterType;

	constructor(
		character: string,
		advance: number,
		width: number,
		height: number,
		type: DynamicFontAtlasCharacterType
	) {
		this.ref = 1;
		this.life = 10;
		this.character = character;
		this.x = 0;
		this.y = 0;
		this.width = width;
		this.height = height;
		this.advance = advance;
		this.origin = new DynamicFontAtlasCharacterOrigin(0, 0);
		this.type = type;
	}
}
