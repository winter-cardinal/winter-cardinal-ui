/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeAcceptorEdgeSide = {
	NONE: 0,
	TOP: 1,
	RIGHT: 2,
	BOTTOM: 4,
	LEFT: 8,
	ALL: 15
};

export type EShapeAcceptorEdgeSide =
	(typeof EShapeAcceptorEdgeSide)[keyof typeof EShapeAcceptorEdgeSide];
