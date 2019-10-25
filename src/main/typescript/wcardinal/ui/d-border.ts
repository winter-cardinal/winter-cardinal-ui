/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DStateAware } from "./d-state-aware";

export enum DBorderMask {
	NONE = 0,

	TOP = 1,
	RIGHT = 2,
	BOTTOM = 4,
	LEFT = 8,

	TOP_RIGHT = TOP | RIGHT,
	TOP_BOTTOM = TOP | BOTTOM,
	TOP_LEFT = TOP | LEFT,

	RIGHT_BOTTOM = RIGHT | BOTTOM,
	RIGHT_LEFT = RIGHT | LEFT,

	BOTTOM_LEFT = BOTTOM | LEFT,

	NOT_TOP = RIGHT | BOTTOM | LEFT,
	NOT_RIGHT = TOP | BOTTOM | LEFT,
	NOT_BOTTOM = TOP | RIGHT | LEFT,
	NOT_LEFT = TOP | RIGHT | BOTTOM,

	ALL = TOP | RIGHT | BOTTOM | LEFT
}

export interface DBorder {
	color?: DStateAware<number | null | undefined> | number | null;
	alpha?: DStateAware<number | undefined> | number;
	width?: DStateAware<number | undefined> | number;
	align?: DStateAware<number | undefined> | number;
	mask?: DStateAware<DBorderMask | undefined> | DBorderMask;
}

export interface DBorderStateAware extends DBorder {
	getTheme(): DThemeBase;
	setTheme( theme: DThemeBase ): void;
	getColor( state: DBaseState ): number | null;
	getAlpha( state: DBaseState ): number;
	getWidth( state: DBaseState ): number;
	getAlign( state: DBaseState ): number;
	getMask( state: DBaseState ): DBorderMask;
}
