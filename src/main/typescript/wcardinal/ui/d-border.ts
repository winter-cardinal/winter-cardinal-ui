/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
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
	getColor( state: DBaseStateSet ): number | null;
	getAlpha( state: DBaseStateSet ): number;
	getWidth( state: DBaseStateSet ): number;
	getAlign( state: DBaseStateSet ): number;
	getMask( state: DBaseStateSet ): DBorderMask;
}
