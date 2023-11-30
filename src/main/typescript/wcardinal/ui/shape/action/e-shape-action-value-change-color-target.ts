/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueChangeColorTarget = {
	COLOR_AND_ALPHA: 0,
	COLOR: 1,
	ALPHA: 2,
	CODE: 3,
	BRIGHTNESS: 4
} as const;

export type EShapeActionValueChangeColorTarget =
	(typeof EShapeActionValueChangeColorTarget)[keyof typeof EShapeActionValueChangeColorTarget];
