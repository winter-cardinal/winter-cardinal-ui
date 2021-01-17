/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DImage, DImageOptions, DThemeImage } from "./d-image";

export interface DTreeItemToggleIconOptions<
	THEME extends DThemeTreeItemToggleIcon = DThemeTreeItemToggleIcon
> extends DImageOptions<string, THEME> {

}

export interface DThemeTreeItemToggleIcon extends DThemeImage<string> {

}

export class DTreeItemToggleIcon<
	THEME extends DThemeTreeItemToggleIcon = DThemeTreeItemToggleIcon,
	OPTIONS extends DTreeItemToggleIconOptions<THEME> = DTreeItemToggleIconOptions<THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DTreeItemToggleIcon";
	}
}
