/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueType = {
	SHOW_HIDE: 0,
	BLINK: 1,
	TRANSFORM: 2,
	OPEN: 3,
	/** @deprecated in favor of {@link EShapeActionValueMiscType.MISC} */
	EMIT_EVENT: 4,
	/** @deprecated in favor of {@link EShapeActionValueType.CHANGE_COLOR} */
	CHANGE_COLOR_LEGACY: 5,
	CHANGE_TEXT: 6,
	CHANGE_CURSOR: 7,
	MISC: 8,
	CHANGE_COLOR: 9
} as const;

export type EShapeActionValueType =
	typeof EShapeActionValueType[keyof typeof EShapeActionValueType];
