/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class DThemeWhiteConstants {
	static HIGHLIGHT_COLOR = 0x3399ff;
	static HIGHLIGHT_ALPHA = 0.2;
	static HIGHLIGHT_BLENDED = 0xddeeff; // UtilRgb.brighten( HIGHLIGHT_COLOR, 1 / (1 + HIGHLIGHT_ALPHA) )

	static WEAK_HIGHLIGHT_COLOR = 0xcccccc;
	static WEAK_HIGHLIGHT_ALPHA = 0.2;
	static WEAK_HIGHLIGHT_BLENDED = 0xf6f6f6; // UtilRgb.brighten( WEAK_HIGHLIGHT_COLOR, 1 / (1 + WEAK_HIGHLIGHT_ALPHA) );

	static INVALID_COLOR = 0xffaaaa;
	static INVALID_ALPHA = 0.2;
	static INVALID_BLENDED = 0xfff0f0;

	static BORDER_COLOR = 0xe5e5e5;

	static BACKGROUND_COLOR = 0xf2f2f2;
}
