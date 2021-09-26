/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeActionValueChangeTextType = {
	TEXT: 0,
	NUMBER: 1
} as const;

export type EShapeActionValueChangeTextType = typeof EShapeActionValueChangeTextType[keyof typeof EShapeActionValueChangeTextType];
