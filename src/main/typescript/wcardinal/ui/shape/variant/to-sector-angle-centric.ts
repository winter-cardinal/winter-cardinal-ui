/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Converts the central angle of a sector to the half central angle in [0, PI / 2].
 */
export const toSectorAngleCentric = (angle: number): number => {
	return 0.5 * Math.max(0, Math.min(Math.PI, angle));
};
