/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueMiscType = {
	INPUT_TEXT: 0,
	INPUT_INTEGER: 1,
	INPUT_REAL: 2,
	EMIT_EVENT: 3,
	WRITE_BOTH: 4,
	WRITE_LOCAL: 5,
	WRITE_REMOTE: 6,
	HTML_ELEMENT: 7,
	HTML_ELEMENT_WITHOUT_POINTER_EVENTS: 8,
	LAYER_SHOW_HIDE: 9,
	LAYER_GESTURE: 10,
	GESTURE: 11
} as const;

export type EShapeActionValueMiscType =
	typeof EShapeActionValueMiscType[keyof typeof EShapeActionValueMiscType];
