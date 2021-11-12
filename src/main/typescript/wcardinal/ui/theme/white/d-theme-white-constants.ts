/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";

export class DThemeWhiteConstants {
	static COLOR = 0x444444;
	static ACTIVE_COLOR = 0xffffff;

	static BORDER_COLOR = 0xe5e5e5;

	static BACKGROUND_COLOR = 0xf2f2f2;
	static BACKGROUND_COLOR_ON_BOARD = 0xffffff;

	static HIGHLIGHT_COLOR = 0x3399ff;
	static HIGHLIGHT_ALPHA = 0.2;
	static HIGHLIGHT_BLENDED = UtilRgb.blend(
		DThemeWhiteConstants.BACKGROUND_COLOR,
		DThemeWhiteConstants.HIGHLIGHT_COLOR,
		DThemeWhiteConstants.HIGHLIGHT_ALPHA
	);
	static HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD,
		DThemeWhiteConstants.HIGHLIGHT_COLOR,
		DThemeWhiteConstants.HIGHLIGHT_ALPHA
	);

	static WEAK_HIGHLIGHT_COLOR = 0xcccccc;
	static WEAK_HIGHLIGHT_ALPHA = 0.2;
	static WEAK_HIGHLIGHT_BLENDED = UtilRgb.blend(
		DThemeWhiteConstants.BACKGROUND_COLOR,
		DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR,
		DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA
	);
	static WEAK_HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD,
		DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR,
		DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA
	);

	static INVALID_COLOR = 0xffaaaa;
	static INVALID_ALPHA = 0.2;
	static INVALID_BLENDED = UtilRgb.blend(
		DThemeWhiteConstants.BACKGROUND_COLOR,
		DThemeWhiteConstants.INVALID_COLOR,
		DThemeWhiteConstants.INVALID_ALPHA
	);
	static INVALID_BLENDED_ON_BOARD = UtilRgb.blend(
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD,
		DThemeWhiteConstants.INVALID_COLOR,
		DThemeWhiteConstants.INVALID_ALPHA
	);
}
