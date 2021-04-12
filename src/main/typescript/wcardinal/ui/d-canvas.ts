/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DCanvasOptions<THEME extends DThemeCanvas = DThemeCanvas>
	extends DBaseOptions<THEME> {}

export interface DThemeCanvas extends DThemeBase {}

export class DCanvas<
	THEME extends DThemeCanvas = DThemeCanvas,
	OPTIONS extends DCanvasOptions<THEME> = DCanvasOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected getType(): string {
		return "DCanvas";
	}
}
