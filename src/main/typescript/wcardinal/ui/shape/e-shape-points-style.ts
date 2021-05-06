/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapePointsStyle {
	NONE = 0,

	CLOSED = 1,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_EXPANDING_WIDTH = 2,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_SHRINKING_WIDTH = 4,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_SCALING_DOT_AND_DASH = 8,

	/** @deprecated in favor of EShapeStrokeStyle. */
	NON_SCALING_MASK = NON_EXPANDING_WIDTH | NON_SHRINKING_WIDTH | NON_SCALING_DOT_AND_DASH,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED = 16,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED_DENSELY = 32,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED_LOOSELY = 64,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DOTTED_MASK = DOTTED | DOTTED_DENSELY | DOTTED_LOOSELY,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED = 128,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED_DENSELY = 256,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED_LOOSELY = 512,

	/** @deprecated in favor of EShapeStrokeStyle. */
	DASHED_MASK = DASHED | DASHED_DENSELY | DASHED_LOOSELY,

	STRAIGHT = 1024,
	CURVE = 2048
}
