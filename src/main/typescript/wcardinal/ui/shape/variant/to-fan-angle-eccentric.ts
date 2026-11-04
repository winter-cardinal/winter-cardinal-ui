/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Converts the half central angle of fans to the eccentric angle of the arc end points
 * of the fan whose arc is on the ellipse with the semi-axes (w, h).
 */
export const toFanAngleEccentric = (w: number, h: number, theta: number): number => {
	return Math.atan((h / w) * Math.tan(theta));
};
