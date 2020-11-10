/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeActionValueType {
	SHOW_HIDE = 0,
	BLINK = 1,
	TRANSFORM = 2,
	OPEN = 3,
	EMIT_EVENT = 4, // Deprecated in favor of EShapeActionValueMiscType.EMIT_EVENT
	CHANGE_COLOR_LEGACY = 5, // Deprecated in favor of EShapeActionValueType.CHANGE_COLOR
	CHANGE_TEXT = 6,
	CHANGE_CURSOR = 7,
	MISC = 8,
	CHANGE_COLOR = 9
}
