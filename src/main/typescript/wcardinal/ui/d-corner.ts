/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeBase } from "./d-base";
import { DCornerMask } from "./d-corner-mask";

export interface DCornerLike {
	radius?: number;
	mask?: DCornerMask;
}

export interface DCorner extends DCornerLike {
	set( radius: number, mask: DCornerMask ): void;
	getTheme(): DThemeBase;
	setTheme( theme: DThemeBase ): void;
	getRadius(): number;
	getMask(): DCornerMask;
}
