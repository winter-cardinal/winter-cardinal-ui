/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";

export class DThemeDarkConstants {
	static COLOR = 0xcccccc;
	static ACTIVE_COLOR = 0x000000;

	static BORDER_COLOR = 0x4a4a4a;

	static BACKGROUND_COLOR = 0x2e2e2e;
	static BACKGROUND_COLOR_ON_BOARD = 0x1f1f1f;

	static HIGHLIGHT_COLOR = 0x2297f3;
	static HIGHLIGHT_ALPHA = 0.2;
	static HIGHLIGHT_BLENDED = UtilRgb.blend(
		DThemeDarkConstants.BACKGROUND_COLOR,
		DThemeDarkConstants.HIGHLIGHT_COLOR,
		DThemeDarkConstants.HIGHLIGHT_ALPHA
	);
	static HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(
		DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD,
		DThemeDarkConstants.HIGHLIGHT_COLOR,
		DThemeDarkConstants.HIGHLIGHT_ALPHA
	);

	static WEAK_HIGHLIGHT_COLOR = 0x555555;
	static WEAK_HIGHLIGHT_ALPHA = 0.2;
	static WEAK_HIGHLIGHT_BLENDED = UtilRgb.blend(
		DThemeDarkConstants.BACKGROUND_COLOR,
		DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR,
		DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA
	);
	static WEAK_HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(
		DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD,
		DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR,
		DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA
	);

	static INVALID_COLOR = 0xda0e0e;
	static INVALID_ALPHA = 0.2;
	static INVALID_BLENDED = UtilRgb.blend(
		DThemeDarkConstants.BACKGROUND_COLOR,
		DThemeDarkConstants.INVALID_COLOR,
		DThemeDarkConstants.INVALID_ALPHA
	);
	static INVALID_BLENDED_ON_BOARD = UtilRgb.blend(
		DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD,
		DThemeDarkConstants.INVALID_COLOR,
		DThemeDarkConstants.INVALID_ALPHA
	);
}
