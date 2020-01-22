/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBorderMask } from "./d-border-mask";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DBorder {
	color?: DStateAwareOrValueMightBe<number | null>;
	alpha?: DStateAwareOrValueMightBe<number>;
	width?: DStateAwareOrValueMightBe<number>;
	align?: DStateAwareOrValueMightBe<number>;
	mask?: DStateAwareOrValueMightBe<DBorderMask>;
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
