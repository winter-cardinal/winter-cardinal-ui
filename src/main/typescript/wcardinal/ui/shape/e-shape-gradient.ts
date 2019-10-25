/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EShapeGradientPointLike {
	color: number;
	alpha: number;
	position: number;
}

export interface EShapeGradientLike {
	serialized?: string;
	points: EShapeGradientPointLike[];
	direction: number;
}
