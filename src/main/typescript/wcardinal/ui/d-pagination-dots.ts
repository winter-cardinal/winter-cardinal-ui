/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DPaginationDotsOptions<THEME extends DThemePaginationDots = DThemePaginationDots>
	extends DImageBaseOptions<string, THEME> {}

export interface DThemePaginationDots extends DThemeImageBase<string> {}

export class DPaginationDots<
	THEME extends DThemePaginationDots = DThemePaginationDots,
	OPTIONS extends DPaginationDotsOptions<THEME> = DPaginationDotsOptions<THEME>
> extends DImageBase<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationDots";
	}
}
