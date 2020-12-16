/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum DBaseState {
	NONE			= 0,

	HOVERED			= 1 << 0,
	ACTIVE			= 1 << 1,
	FOCUSED			= 1 << 2,
	UNFOCUSABLE		= 1 << 3,
	FOCUS_ROOT		= 1 << 4,
	FOCUS_REVERSE	= 1 << 5,
	READ_ONLY		= 1 << 6,
	DISABLED		= 1 << 7,
	DRAGGING		= 1 << 8,
	PRESSED			= 1 << 9,

	INVALID			= 1 << 10,
	SUCCEEDED		= 1 << 11,
	FAILED			= 1 << 12,
	WARNED			= 1 << 13,

	CHANGED			= 1 << 14,
	ALTERNATED		= 1 << 15,

	CUSTOM			= 1 << 16
}
