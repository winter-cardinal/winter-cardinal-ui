/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Rectangle } from "pixi.js";
import { UtilHtmlElementOverlapperRects } from "./util-html-element-overlapper-rects";

export interface UtilHtmlElementOverlapper {
	readonly id: string;
	update(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		overlappingRects: UtilHtmlElementOverlapperRects
	): void;
}
