/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type EShapeLineOfAnyPointsHitTester<RESULT> = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	ox: number,
	oy: number,
	px: number,
	py: number,
	sw: number,
	ss: number,
	index: number,
	threshold: number,
	result: RESULT
) => boolean;
