/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";

export class DynamicSDFFontAtlasFont {
	protected static FONT_FAMILY_AUTO: string | null = null;

	id: string;
	size: number;
	italic: boolean;

	measured: boolean;
	ascent: number;
	descent: number;

	constructor(fontFamily: string) {
		this.id = DynamicSDFFontAtlasFont.toFontFamily(fontFamily);
		this.size = 32;
		this.italic = false;
		this.measured = false;
		this.ascent = 0;
		this.descent = 0;
	}

	static toFontFamily(fontFamily: string): string {
		return fontFamily === "auto" ? DynamicSDFFontAtlasFont.getAutoFontFamily() : fontFamily;
	}

	static getAutoFontFamily(): string {
		if (DynamicSDFFontAtlasFont.FONT_FAMILY_AUTO == null) {
			DynamicSDFFontAtlasFont.FONT_FAMILY_AUTO = DThemes.getInstance()
				.get<any>("DBase")
				.getFontFamilly() as string;
		}
		return DynamicSDFFontAtlasFont.FONT_FAMILY_AUTO;
	}
}
