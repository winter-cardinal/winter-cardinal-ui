/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "../e-shape";
import { toSizeNormalized } from "./to-size-normalized";
import { toSizeRounded } from "./to-size-rounded";
import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeLockPart } from "./e-shape-lock-part";

export const toResized = (
	shape: EShape,
	from: IPoint,
	to: IPoint,
	centerMode: boolean,
	isPerfect: boolean
): void => {
	const cposition = EShapeCapabilities.contains(shape, EShapeCapability.POSITION);
	const cwidth = EShapeCapabilities.contains(shape, EShapeCapability.WIDTH);
	const cheight = EShapeCapabilities.contains(shape, EShapeCapability.HEIGHT);
	shape.lock(EShapeLockPart.UPLOADED);
	const position = shape.transform.position;
	if (centerMode) {
		const dx = Math.abs(to.x - from.x);
		const dy = Math.abs(to.y - from.y);
		if (isPerfect) {
			const d = Math.max(dx, dy);
			const s = toSizeNormalized(d + d);
			const x = toSizeRounded(from.x);
			const y = toSizeRounded(from.y);
			const size = shape.size;
			if (cwidth && cheight) {
				size.set(s, s);
			} else if (cwidth) {
				size.x = s;
			} else if (cheight) {
				size.y = s;
			}
			if (cposition) {
				position.set(x, y);
			}
		} else {
			const w = toSizeNormalized(dx + dx);
			const h = toSizeNormalized(dy + dy);
			const x = toSizeRounded(from.x);
			const y = toSizeRounded(from.y);
			const size = shape.size;
			if (cwidth && cheight) {
				size.set(w, h);
			} else if (cwidth) {
				size.x = w;
			} else if (cheight) {
				size.y = h;
			}
			if (cposition) {
				position.set(x, y);
			}
		}
	} else {
		if (isPerfect) {
			const dx = to.x - from.x;
			const dy = to.y - from.y;
			const d = Math.max(Math.abs(dx), Math.abs(dy));
			const x2 = from.x + (dx < 0 ? -d : +d);
			const y2 = from.y + (dy < 0 ? -d : +d);
			const hd = d * 0.5;
			const s = toSizeNormalized(d);
			const x = toSizeRounded(Math.min(from.x, x2) + hd);
			const y = toSizeRounded(Math.min(from.y, y2) + hd);
			const size = shape.size;
			if (cwidth && cheight) {
				size.set(s, s);
			} else if (cwidth) {
				size.x = s;
			} else if (cheight) {
				size.y = s;
			}
			if (cposition) {
				position.set(x, y);
			}
		} else {
			const x0 = Math.min(from.x, to.x);
			const y0 = Math.min(from.y, to.y);
			const x1 = Math.max(from.x, to.x);
			const y1 = Math.max(from.y, to.y);
			const dx = x1 - x0;
			const dy = y1 - y0;
			const px = dx * 0.5;
			const py = dy * 0.5;
			const w = toSizeNormalized(dx);
			const h = toSizeNormalized(dy);
			const x = toSizeRounded(x0 + px);
			const y = toSizeRounded(y0 + py);
			const size = shape.size;
			if (cwidth && cheight) {
				size.set(w, h);
			} else if (cwidth) {
				size.x = w;
			} else if (cheight) {
				size.y = h;
			}
			if (cposition) {
				position.set(x, y);
			}
		}
	}
	shape.unlock(EShapeLockPart.UPLOADED, true);
};
