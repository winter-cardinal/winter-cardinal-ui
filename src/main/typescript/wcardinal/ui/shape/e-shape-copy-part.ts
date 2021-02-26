/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum EShapeCopyPart {
	NONE = 0,
	TRANSFORM = 1,
	SIZE = 2,
	STYLE = 4,
	ACTION = 8,
	POINTS = 16,
	STATE = 32,
	IMAGE = 64,
	TAG = 128,
	ALL = TRANSFORM | SIZE | STYLE | ACTION | POINTS | STATE | IMAGE | TAG
}
