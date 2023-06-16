/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeAcceptorEdgeType = {
	TAIL: 1,
	HEAD: 2,
	ALL: 3
} as const;

export type EShapeAcceptorEdgeType =
	typeof EShapeAcceptorEdgeType[keyof typeof EShapeAcceptorEdgeType];
