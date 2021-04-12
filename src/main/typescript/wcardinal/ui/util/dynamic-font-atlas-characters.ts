/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";

export interface DynamicFontAtlasCharacters {
	[character: string]: DynamicFontAtlasCharacter;
}
