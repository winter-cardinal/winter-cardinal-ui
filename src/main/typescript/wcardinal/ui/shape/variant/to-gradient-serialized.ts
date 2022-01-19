/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeGradientLike } from "../e-shape-gradient";

export const toGradientSerialized = (gradient: EShapeGradientLike): string => {
	const points = gradient.points;
	let result = `[${gradient.direction}`;
	for (let i = 0, imax = points.length, j = 1; i < imax; i += 1, j += 3) {
		const point = points[i];
		result += `,${point.color},${point.alpha},${point.position}`;
	}
	result += "]";
	return result;
};
