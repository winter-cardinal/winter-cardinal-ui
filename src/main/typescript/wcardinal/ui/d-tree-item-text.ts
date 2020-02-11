/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DTreeItemTextOptions <
	THEME extends DThemeTreeItemText = DThemeTreeItemText >
	extends DImageOptions < string, THEME > {}

export interface DThemeTreeItemText extends DThemeImage {
}

export class DTreeItemText <
	THEME extends DThemeTreeItemText = DThemeTreeItemText,
	OPTIONS extends DTreeItemTextOptions < THEME > = DTreeItemTextOptions < THEME >
	>
	extends DImage < string, THEME, OPTIONS > {

		protected init(options ? : OPTIONS) {
			super.init(options);
		}

		protected getType(): string {
			return "DTreeItemText";
		}
	}
