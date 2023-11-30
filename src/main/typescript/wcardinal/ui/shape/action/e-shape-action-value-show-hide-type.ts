/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueShowHideType = {
	/** @deprecated in favor of {@link SHAPE} */
	SHAPE_SHOW: 0,
	/** @deprecated in favor of {@link SHAPE} */
	SHAPE_HIDE: 1,
	SHAPE: 2,
	LAYER: 3
} as const;

export type EShapeActionValueShowHideType =
	(typeof EShapeActionValueShowHideType)[keyof typeof EShapeActionValueShowHideType];
