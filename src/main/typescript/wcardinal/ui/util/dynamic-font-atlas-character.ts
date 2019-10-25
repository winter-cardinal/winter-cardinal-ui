/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicFontAtlasCharacterOrigin } from "./dynamic-font-atlas-chaaracter-origin";

export class DynamicFontAtlasCharacter {
	ref: number;
	life: number;
	x: number;
	y: number;
	width: number;
	height: number;
	advance: number;
	origin: DynamicFontAtlasCharacterOrigin;
	reserved: boolean;

	constructor( advance: number, width: number, height: number, reserved: boolean ) {
		this.ref = 1;
		this.life = 10;
		this.x = 0;
		this.y = 0;
		this.width = width;
		this.height = height;
		this.advance = advance;
		this.origin = new DynamicFontAtlasCharacterOrigin( 0, 0 );
		this.reserved = reserved;
	}
}
