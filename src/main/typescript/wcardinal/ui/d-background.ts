/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DBackground {
	color?: DStateAwareOrValueMightBe<number | null>;
	alpha?: DStateAwareOrValueMightBe<number>;
}

export interface DBackgroundStateAware extends DBackground {
	getTheme(): DThemeBase;
	setTheme( theme: DThemeBase ): void;
	getColor( state: DBaseStateSet ): number | null;
	getAlpha( state: DBaseStateSet ): number;
}
