/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const CLOSED = 1;

const NON_EXPANDING_WIDTH = 2;
const NON_SHRINKING_WIDTH = 4;
const NON_SCALING_DOT_AND_DASH = 8;

const DOTTED = 16;
const DOTTED_DENSELY = 32;
const DOTTED_LOOSELY = 64;

const DASHED = 128;
const DASHED_DENSELY = 256;
const DASHED_LOOSELY = 512;

const CURVE = 1024;

export const EShapePointsStyle = {
	NONE: 0,

	CLOSED,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_EXPANDING_WIDTH,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_SHRINKING_WIDTH,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_SCALING_DOT_AND_DASH,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_SCALING_MASK: NON_EXPANDING_WIDTH | NON_SHRINKING_WIDTH | NON_SCALING_DOT_AND_DASH,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED_DENSELY,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED_LOOSELY,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED_MASK: DOTTED | DOTTED_DENSELY | DOTTED_LOOSELY,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED_DENSELY,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED_LOOSELY,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED_MASK: DASHED | DASHED_DENSELY | DASHED_LOOSELY,

	CURVE,
	FORMATTER_MASK: CURVE
} as const;

export type EShapePointsStyle = number;
