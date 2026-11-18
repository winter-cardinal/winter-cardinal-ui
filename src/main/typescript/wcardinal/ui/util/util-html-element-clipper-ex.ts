/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Rectangle } from "pixi.js";
import { UtilHtmlElementClipperExRects } from "./util-html-element-clipper-ex-rects";
import { UtilHtmlElementClipperExMargin } from "./util-html-element-clipper-ex-margin";

export interface UtilHtmlElementClipperEx {
	readonly id: string;
	update(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperExMargin: UtilHtmlElementClipperExMargin,
		clipperExRects: UtilHtmlElementClipperExRects
	): void;
}
