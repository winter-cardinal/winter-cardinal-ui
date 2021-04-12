/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStroke } from "../e-shape-stroke";
import {
	EShapeLineOfAnyPoints,
	EShapeLineOfAnyPointsToHitThreshold
} from "./e-shape-line-of-any-points";

export const toHitThreshold = (
	target: { readonly stroke: EShapeStroke; readonly points: EShapeLineOfAnyPoints },
	toThreshold: EShapeLineOfAnyPointsToHitThreshold | null
): number => {
	const stroke = target.stroke;
	const size = target.points.size.getLimit() + (stroke.enable ? stroke.width * stroke.align : 0);
	return toThreshold ? toThreshold(size, 1) : size * 0.5;
};
