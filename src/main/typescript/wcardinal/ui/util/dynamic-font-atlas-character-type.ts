/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const RESERVED = 1;
const NON_BREAKING = 2;

const SPACE = 4;
const SPACE_R = SPACE | RESERVED;
const SPACE_NB = SPACE | NON_BREAKING;
const SPACE_RNB = SPACE | RESERVED | NON_BREAKING;

const LETTER = 8;
const LETTER_R = LETTER | RESERVED;
const LETTER_NB = LETTER | NON_BREAKING;
const LETTER_RNB = LETTER | RESERVED | NON_BREAKING;

export const DynamicFontAtlasCharacterType = {
	RESERVED,
	NON_BREAKING,

	SPACE,
	SPACE_R,
	SPACE_NB,
	SPACE_RNB,

	LETTER,
	LETTER_R,
	LETTER_NB,
	LETTER_RNB
} as const;

export type DynamicFontAtlasCharacterType = number;
