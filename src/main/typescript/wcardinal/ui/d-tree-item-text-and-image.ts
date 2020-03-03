/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DTreeItemTextAndImageOptions<
	THEME extends DThemeTreeItemTextAndImage = DThemeTreeItemTextAndImage>
	extends DImageOptions <string, THEME> {}

export interface DThemeTreeItemTextAndImage extends DThemeImage {
}

export class DTreeItemTextAndImage<
	THEME extends DThemeTreeItemTextAndImage = DThemeTreeItemTextAndImage,
	OPTIONS extends DTreeItemTextAndImageOptions <THEME> = DTreeItemTextAndImageOptions <THEME>
	>
	extends DImage <string, THEME, OPTIONS> {

		protected getType(): string {
			return "DTreeItemTextAndImage";
		}
	}
