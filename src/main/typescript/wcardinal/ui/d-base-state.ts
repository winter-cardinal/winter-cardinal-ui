/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum DBaseState {
	NONE		= 0,

	HOVERED		= 1 << 0,
	ACTIVE		= 1 << 1,
	FOCUSED		= 1 << 2,
	UNFOCUSABLE	= 1 << 3,
	FOCUS_ROOT	= 1 << 4,
	READ_ONLY	= 1 << 5,
	DISABLED	= 1 << 6,
	DRAGGING	= 1 << 7,
	PRESSED		= 1 << 8,

	INVALID		= 1 << 9,
	SUCCEEDED	= 1 << 10,
	FAILED		= 1 << 11,
	WARNED		= 1 << 12,

	CHANGED		= 1 << 13,
	ALTERNATED	= 1 << 14,

	CUSTOM		= 1 << 15
}
