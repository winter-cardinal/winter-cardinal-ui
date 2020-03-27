/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class DThemeDarkConstants {
	// Common configuration
	static FOCUSED_ALPHA = 0.04;
	static ACTIVE_ALPHA = 0.12;
	static PRESSED_ALPHA = 0.16;
	static DISABLED_ALPHA = 0.12;
	static DISABLED_TEXT_ALPHA = 0.38;
	static TINT_FOCUS_ALPHA = 0.1;

	// High light color when active
	static HIGHLIGHT_COLOR = 0x90caf9;
	static HIGHLIGHT_ALPHA = 0.2;
	static HIGHLIGHT_BLENDED = 0x4c636b; // UtilRgb.blend( 0x484848, HIGHLIGHT_COLOR, HIGHLIGHT_ALPHA )

	static WEAK_HIGHLIGHT_COLOR = 0x666666;
	static WEAK_HIGHLIGHT_ALPHA = 0.2;
	static WEAK_HIGHLIGHT_BLENDED = 0x4e4e4e; // UtilRgb.blend( 0x484848, WEAK_HIGHLIGHT_COLOR, WEAK_HIGHLIGHT_ALPHA );

	static INVALID_COLOR = 0xcf6679;
	static INVALID_ALPHA = 0.2;
	static INVALID_BLENDED = 0xfff0f0;

	static BORDER_COLOR = 0x4a4a4a;

	static BACKGROUND_COLOR = 0x2E2E2E;
}
