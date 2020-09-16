
/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DColorGradientPoint {
	color: number;
	alpha: number;
	position: number;
}

export interface DColorGradient {
	points: DColorGradientPoint[];
	direction: number;
}
