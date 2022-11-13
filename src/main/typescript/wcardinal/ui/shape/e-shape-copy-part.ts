/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const TRANSFORM = 1;
const SIZE = 2;
const STYLE = 4;
const ACTION = 8;
const POINTS = 16;
const STATE = 32;
const IMAGE = 64;
const DATA = 128;
const CONNECTOR = 256;

export const EShapeCopyPart = {
	NONE: 0,
	TRANSFORM,
	SIZE,
	STYLE,
	ACTION,
	POINTS,
	STATE,
	IMAGE,
	DATA,
	/** @deprecated in favor of {@link DATA} */
	TAG: DATA,
	CONNECTOR,
	ALL: TRANSFORM | SIZE | STYLE | ACTION | POINTS | STATE | IMAGE | DATA | CONNECTOR
} as const;

export type EShapeCopyPart = number;
