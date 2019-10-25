/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBorderMask } from "./d-border";
import { DStateAware } from "./d-state-aware";

export type DOutlineMask = DBorderMask;
export const DOutlineMask = DBorderMask;

export interface DOutlineLike {
	color?: DStateAware<number | null | undefined> | number | null;
	alpha?: DStateAware<number | undefined> | number;
	width?: DStateAware<number | undefined> | number;
	offset?: DStateAware<number | undefined> | number;
	align?: DStateAware<number | undefined> | number;
	mask?: DStateAware<DOutlineMask | undefined> | DOutlineMask;
}

export interface DOutline extends DOutlineLike {
	getTheme(): DThemeBase;
	setTheme( theme: DThemeBase ): void;
	getColor( state: DBaseState ): number | null;
	getAlpha( state: DBaseState ): number;
	getWidth( state: DBaseState ): number;
	getOffset( state: DBaseState ): number;
	getAlign( state: DBaseState ): number;
	getMask( state: DBaseState ): DOutlineMask;
}
