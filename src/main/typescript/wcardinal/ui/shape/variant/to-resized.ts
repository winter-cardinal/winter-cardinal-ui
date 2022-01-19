/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "../e-shape";
import { toSizeNormalized } from "./to-size-normalized";
import { toSizeRounded } from "./to-size-rounded";

export const toResize = (
	shape: EShape,
	from: IPoint,
	to: IPoint,
	centerMode: boolean,
	isPerfect: boolean
): void => {
	shape.disallowUploadedUpdate();
	const position = shape.transform.position;
	if (centerMode) {
		const dx = Math.abs(to.x - from.x);
		const dy = Math.abs(to.y - from.y);
		if (isPerfect) {
			const hsize = Math.max(dx, dy);
			const size = hsize + hsize;
			shape.size.set(toSizeNormalized(size), toSizeNormalized(size));
			position.set(toSizeRounded(from.x), toSizeRounded(from.y));
		} else {
			shape.size.set(toSizeNormalized(dx + dx), toSizeNormalized(dy + dy));
			position.set(toSizeRounded(from.x), toSizeRounded(from.y));
		}
	} else {
		if (isPerfect) {
			const dx = to.x - from.x;
			const dy = to.y - from.y;
			const size = Math.max(Math.abs(dx), Math.abs(dy));
			const x2 = from.x + (dx < 0 ? -size : +size);
			const y2 = from.y + (dy < 0 ? -size : +size);
			const hsize = size * 0.5;
			const x = Math.min(from.x, x2) + hsize;
			const y = Math.min(from.y, y2) + hsize;
			shape.size.set(toSizeNormalized(size), toSizeNormalized(size));
			position.set(toSizeRounded(x), toSizeRounded(y));
		} else {
			const x0 = Math.min(from.x, to.x);
			const y0 = Math.min(from.y, to.y);
			const x1 = Math.max(from.x, to.x);
			const y1 = Math.max(from.y, to.y);
			const width = x1 - x0;
			const height = y1 - y0;
			const px = width * 0.5;
			const py = height * 0.5;
			shape.size.set(toSizeNormalized(width), toSizeNormalized(height));
			position.set(toSizeRounded(x0 + px), toSizeRounded(y0 + py));
		}
	}
	shape.allowUploadedUpdate();
};
