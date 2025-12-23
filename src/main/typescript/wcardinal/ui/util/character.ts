/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const Character = {
	/**
	 * ASCII Character Ranges
	 * LOW: Printable ASCII (0x21-0x7E) - '!' to '~'
	 * HIGH: Extended ASCII (0xA1-0xFF) - '¡' to 'ÿ'
	 */
	ASCII: {
		LOW: {
			FROM: 0x21,
			TO: 0x7e
		},
		HIGH: {
			FROM: 0xa1,
			TO: 0xff
		}
	},
	/**
	 * Surrogate Pair Ranges
	 */
	SURROGATE: {
		LOW: {
			FROM: 0xdc00,
			TO: 0xdfff
		},
		HIGH: {
			FROM: 0xd800,
			TO: 0xdbff
		}
	},
	/**
	 * Variation Selector Range
	 */
	VARIATION: {
		FROM: 0xfe00,
		TO: 0xfe0f
	},
	SPACE: " ",
	TAB: "\t",
	SOFT_TAB: "    ",
	DOTS: "...",
	NEW_LINE: "\n"
} as const;
