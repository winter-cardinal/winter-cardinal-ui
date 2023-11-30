/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueOnInputAction = {
	EMIT_EVENT: 0,
	WRITE_BOTH: 1,
	WRITE_LOCAL: 2,
	WRITE_REMOTE: 3
} as const;

export type EShapeActionValueOnInputAction =
	(typeof EShapeActionValueOnInputAction)[keyof typeof EShapeActionValueOnInputAction];
