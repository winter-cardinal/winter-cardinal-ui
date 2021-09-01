/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeAcceptorType = {
	TAIL: 1,
	HEAD: 2,
	ALL: 3
} as const;

export type EShapeAcceptorType = typeof EShapeAcceptorType[keyof typeof EShapeAcceptorType];
