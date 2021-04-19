/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type EShapeLineBasePointsHitTester<RESULT> = (
	x: number,
	y: number,
	p0x: number,
	p0y: number,
	p1x: number,
	p1y: number,
	index: number,
	threshold: number,
	result: RESULT
) => boolean;
