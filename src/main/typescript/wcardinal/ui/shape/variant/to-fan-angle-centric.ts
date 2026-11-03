/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Converts an angle ratio to the half central angle (theta) of a fan in [0, PI / 2].
 */
export const toFanAngleCentric = (angle: number): number => {
	return Math.PI * Math.max(0, Math.min(0.5, angle));
};
