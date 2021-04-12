/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "./e-shape";

export class EShapeSizes {
	static toRounded(value: number): number {
		return Math.round(value * 100) / 100;
	}

	static toNormalized(size: number): number {
		const THRESHOLD = 0.001;
		if (Math.abs(size) < THRESHOLD) {
			return size < 0 ? -THRESHOLD : +THRESHOLD;
		}
		return EShapeSizes.toRounded(size);
	}

	static resize(
		shape: EShape,
		from: IPoint,
		to: IPoint,
		centerMode: boolean,
		isPerfect: boolean
	): void {
		shape.disallowUploadedUpdate();
		const position = shape.transform.position;
		if (centerMode) {
			const dx = Math.abs(to.x - from.x);
			const dy = Math.abs(to.y - from.y);
			if (isPerfect) {
				const hsize = Math.max(dx, dy);
				const size = hsize + hsize;
				shape.size.set(EShapeSizes.toNormalized(size), EShapeSizes.toNormalized(size));
				position.set(EShapeSizes.toRounded(from.x), EShapeSizes.toRounded(from.y));
			} else {
				shape.size.set(
					EShapeSizes.toNormalized(dx + dx),
					EShapeSizes.toNormalized(dy + dy)
				);
				position.set(EShapeSizes.toRounded(from.x), EShapeSizes.toRounded(from.y));
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
				shape.size.set(EShapeSizes.toNormalized(size), EShapeSizes.toNormalized(size));
				position.set(EShapeSizes.toRounded(x), EShapeSizes.toRounded(y));
			} else {
				const x0 = Math.min(from.x, to.x);
				const y0 = Math.min(from.y, to.y);
				const x1 = Math.max(from.x, to.x);
				const y1 = Math.max(from.y, to.y);
				const width = x1 - x0;
				const height = y1 - y0;
				const px = width * 0.5;
				const py = height * 0.5;
				shape.size.set(EShapeSizes.toNormalized(width), EShapeSizes.toNormalized(height));
				position.set(EShapeSizes.toRounded(x0 + px), EShapeSizes.toRounded(y0 + py));
			}
		}
		shape.allowUploadedUpdate();
	}
}
