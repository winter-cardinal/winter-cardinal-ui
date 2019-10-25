/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";

export type DFontStyle = "normal" | "italic";
export type DFontWeight = "normal" | "bold" | "bolder" | "lighter" |
	"100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "800";
export type DFontVariant = "normal" | "small-caps";

export interface DThemeFont {
	getFontFamilly(): string;
	getFontSize(): number;
	getFontWeight(): DFontWeight;
	getFontStyle(): DFontStyle;
	getFontVariant(): DFontVariant;
	getColor( state: DBaseState ): number;
	getAlpha( state: DBaseState ): number;
	getLineHeight(): number;
}
