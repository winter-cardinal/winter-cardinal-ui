/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DLayoutBoardOptions<THEME extends DThemeLayoutBoard = DThemeLayoutBoard>
	extends DBaseOptions<THEME> {}

export interface DThemeLayoutBoard extends DThemeBase {}

/**
 * A board for layouting elements.
 * Unlike {@link DLayoutVertical} and {@link DLayoutHorizontal},
 * this class doesn't change the position and the size of children.
 * Unlike {@link DBase} and {@link DBoard}, this class doesn't have
 * the background, the border, and the outline. And its children are
 * interactive by default.
 */
export class DLayoutBoard<
	THEME extends DThemeLayoutBoard,
	OPTIONS extends DLayoutBoardOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected getType(): string {
		return "DLayoutBoard";
	}
}
