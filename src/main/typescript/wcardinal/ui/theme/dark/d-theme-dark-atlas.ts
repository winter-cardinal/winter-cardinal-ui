/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { MIPMAP_MODES, SCALE_MODES } from "pixi.js";
import { UtilSvgAtlasBuilder } from "../../util/util-svg-atlas-builder";

export const DThemeDarkAtlas = new UtilSvgAtlasBuilder({
	width: 1024,
	scaling: SCALE_MODES.LINEAR,
	mipmap: MIPMAP_MODES.OFF
});
