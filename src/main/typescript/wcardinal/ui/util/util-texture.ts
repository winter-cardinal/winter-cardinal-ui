/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";

export class UtilTexture {
	static fromImage( url: string, resolution: number, onLoad: ( texture: Texture ) => void ) {
		const texture = Texture.from( url, {
			resolution
		});
		if( ! texture.baseTexture.valid ) {
			texture.once( "update", onLoad );
		} else {
			onLoad( texture );
		}
	}
}
