/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type EShapeLineOfAnyPointsHitTesterToRange = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	ox: number,
	oy: number,
	threshold: number,
	values: number[],
	result: [number, number]
) => [number, number];
