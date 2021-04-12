/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DBoardOptions<THEME extends DThemeBoard = DThemeBoard>
	extends DBaseOptions<THEME> {}

export interface DThemeBoard extends DThemeBase {}

export class DBoard<
	THEME extends DThemeBoard = DThemeBoard,
	OPTIONS extends DBoardOptions<THEME> = DBoardOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected getType(): string {
		return "DBoard";
	}
}
