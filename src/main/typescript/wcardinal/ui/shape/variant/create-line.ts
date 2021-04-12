/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeLine } from "./e-shape-line";

export const createLine = (
	points: number[],
	segments: number[],
	strokeWidth: number,
	style: EShapePointsStyle
): EShapeLine => {
	return new EShapeLine(points, segments, strokeWidth, style);
};

export const toLineStrokeWidth = (index: number, resources: string[]): number => {
	if (0 <= index && index < resources.length) {
		try {
			return JSON.parse(resources[index])[3];
		} catch (e) {
			//
		}
	}
	return 8;
};
