/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DStateAware } from "./d-state-aware";

export interface DBackground {
	color?: DStateAware<number | null | undefined> | number | null;
	alpha?: DStateAware<number | undefined> | number;
}

export interface DBackgroundStateAware extends DBackground {
	getTheme(): DThemeBase;
	setTheme( theme: DThemeBase ): void;
	getColor( state: DBaseState ): number | null;
	getAlpha( state: DBaseState ): number;
}
