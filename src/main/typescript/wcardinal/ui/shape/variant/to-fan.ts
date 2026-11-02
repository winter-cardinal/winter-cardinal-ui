/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeSide } from "../e-shape-stroke-side";

/**
 * How the stroke of a fan is drawn.
 * `NOT_TOP` draws the stroke only at the straight sides.
 */
export const EShapeFanStrokeMode = {
	NONE: 0,
	ALL: 1,
	NOT_BOTTOM: 2,
	NOT_TOP: 3
} as const;

export type EShapeFanStrokeMode = (typeof EShapeFanStrokeMode)[keyof typeof EShapeFanStrokeMode];

/**
 * Converts a stroke side to a fan stroke mode.
 * The top bit stands for the arc and the bottom bit stands for the two straight sides.
 */
export const toFanStrokeMode = (side: EShapeStrokeSide): EShapeFanStrokeMode => {
	const top = (side & EShapeStrokeSide.TOP) !== 0;
	const bottom = (side & EShapeStrokeSide.BOTTOM) !== 0;
	if (top) {
		return bottom ? EShapeFanStrokeMode.ALL : EShapeFanStrokeMode.NOT_BOTTOM;
	}
	return bottom ? EShapeFanStrokeMode.NOT_TOP : EShapeFanStrokeMode.NONE;
};

/**
 * Converts an angle ratio to the half central angle (theta) of a fan in [0, PI / 2].
 */
export const toFanTheta = (angle: number): number => {
	const theta = Math.PI * angle;
	return 0 < theta ? Math.min(Math.PI * 0.5, theta) : 0;
};

/**
 * Converts the half central angle (theta) to the eccentric angle (chi) of the arc end points
 * of the fan whose arc is on the ellipse with the semi-axes (w, h).
 */
export const toFanChi = (w: number, h: number, theta: number): number => {
	return Math.PI * 0.5 <= theta ? Math.PI * 0.5 : Math.atan((h / w) * Math.tan(theta));
};
