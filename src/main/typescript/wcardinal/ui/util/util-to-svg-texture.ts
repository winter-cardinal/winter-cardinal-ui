/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { utilToSvgUrl } from "./util-to-svg-url";

export const utilToSvgTexture = ( svg: string, resolution: number ): Texture => {
	return Texture.from( utilToSvgUrl( svg ), {
		resolution
	});
};
