/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type EShapeLineBasePointsHitTesterToRange = (
	x: number,
	y: number,
	threshold: number,
	values: number[],
	result: [number, number]
) => [number, number];
