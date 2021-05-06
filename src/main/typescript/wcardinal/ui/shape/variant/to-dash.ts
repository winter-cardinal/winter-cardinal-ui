/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";

export const toDash = (
	length: number,
	strokeWidth: number,
	style: EShapeStrokeStyle,
	result: IPoint
): IPoint => {
	if (style & EShapeStrokeStyle.DOTTED_MASK) {
		if (style & EShapeStrokeStyle.DOTTED) {
			result.set(strokeWidth, strokeWidth);
		} else if (style & EShapeStrokeStyle.DOTTED_DENSELY) {
			result.set(strokeWidth, strokeWidth * 0.5);
		} else {
			result.set(strokeWidth, strokeWidth * 2);
		}
	} else if (style & EShapeStrokeStyle.DASHED_MASK) {
		if (style & EShapeStrokeStyle.DASHED) {
			result.set(strokeWidth * 2, strokeWidth);
		} else if (style & EShapeStrokeStyle.DASHED_DENSELY) {
			result.set(strokeWidth * 2, strokeWidth * 0.5);
		} else {
			result.set(strokeWidth * 2, strokeWidth * 2);
		}
	} else {
		result.set(2 * length, 0);
	}
	return result;
};
