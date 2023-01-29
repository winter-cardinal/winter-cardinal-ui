/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilSvgAtlasBuilder } from "../util/util-svg-atlas-builder";

export interface DTheme {
	get<THEME>(type: string): THEME;
	set<THEME>(type: string, instance: THEME): this;
	getClass<THEME>(type: string): new () => THEME;
	setClass<THEME>(type: string, themeClass: new () => THEME): this;
	getAtlas(): UtilSvgAtlasBuilder;
}
