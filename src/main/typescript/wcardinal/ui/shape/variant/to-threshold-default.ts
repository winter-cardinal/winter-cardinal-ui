/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toThresholdDefault = (size: number, scale: number, offset: number): number => {
	return 0.5 * (offset + size * scale);
};
