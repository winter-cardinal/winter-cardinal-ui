/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toLineOfAnyPointCount = (pointCount: number): number => {
	return Math.ceil(pointCount / 12) * 12;
};
