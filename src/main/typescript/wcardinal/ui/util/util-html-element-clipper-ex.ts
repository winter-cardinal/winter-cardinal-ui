/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Rectangle } from "pixi.js";
import { UtilHtmlElementClipperExRects } from "./util-html-element-clipper-ex-rects";

export interface UtilHtmlElementClipperEx {
	readonly id: string;
	update(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperExRects: UtilHtmlElementClipperExRects
	): void;
}
