/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const hitTestBBox = (x: number, y: number, ax: number, ay: number): boolean => {
	return -ax <= x && x <= +ax && -ay <= y && y <= +ay;
};
