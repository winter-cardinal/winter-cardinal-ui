/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueType = {
	SHOW_HIDE: 0,
	BLINK: 1,
	TRANSFORM: 2,
	OPEN: 3,
	/** @deprecated in favor of {@link EShapeActionValueMiscType}'s MISC */
	EMIT_EVENT: 4,
	/** @deprecated in favor of {@link EShapeActionValueType}'s CHANGE_COLOR */
	CHANGE_COLOR_LEGACY: 5,
	CHANGE_TEXT: 6,
	CHANGE_CURSOR: 7,
	MISC: 8,
	CHANGE_COLOR: 9,
	GESTURE: 10,
	CHANGE_FILL_PERCENT: 11,
	EXTENSION: 1000
} as const;

export type EShapeActionValueType = number;
