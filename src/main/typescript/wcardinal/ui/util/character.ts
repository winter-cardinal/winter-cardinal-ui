/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const Character = {
	ASCII: {
		LOW: {
			FROM: 33,
			TO: 126
		},
		HIGH: {
			FROM: 161,
			TO: 255
		}
	},
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
