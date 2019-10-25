/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DTreeOptions<THEME extends DThemeTree> extends DBaseOptions<THEME> {

}

export interface DThemeTree extends DThemeBase {

}

export class DTree<
	THEME extends DThemeTree = DThemeTree,
	OPTIONS extends DTreeOptions<THEME> = DTreeOptions<THEME>
> extends DBase<THEME, OPTIONS> {

}
