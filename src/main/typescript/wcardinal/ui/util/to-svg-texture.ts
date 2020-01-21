/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { toSvgUrl } from "./to-svg-url";

export const toSvgTexture = ( svg: string, resolution: number ): Texture => {
	return Texture.from( toSvgUrl( svg ), {
		resolution
	});
};
