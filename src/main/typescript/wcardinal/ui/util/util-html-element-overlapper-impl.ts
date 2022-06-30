/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Rectangle } from "pixi.js";
import { UtilHtmlElementOverlapper } from "./util-html-element-overlapper";
import { UtilHtmlElementOverlapperRects } from "./util-html-element-overlapper-rects";

const SVG_XMLNS = "http://www.w3.org/2000/svg";

const toStr = (target: number): string => {
	return 1 < target ? "1" : target < 0 ? "0" : target.toFixed(5);
};

export class UtilHtmlElementOverlapperImpl implements UtilHtmlElementOverlapper {
	private static WORK_MATRIX?: Matrix;

	private _id: string;
	private _path: SVGPathElement;
	private _pathD: string;

	constructor(container: HTMLElement) {
		const element = document.createElementNS(SVG_XMLNS, "svg");
		element.setAttribute("style", "position: absolute;");
		element.setAttribute("width", "0px");
		element.setAttribute("height", "0px");

		const defs = document.createElementNS(SVG_XMLNS, "defs");
		const clipPath = document.createElementNS(SVG_XMLNS, "clipPath");
		const clipPathId = `overlapper_${Math.random().toString(32).substring(2)}`;
		clipPath.setAttribute("id", clipPathId);
		clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
		const path = document.createElementNS(SVG_XMLNS, "path");
		this._path = path;
		this._pathD = "";
		path.setAttribute("clip-rule", "evenodd");
		clipPath.appendChild(path);
		defs.appendChild(clipPath);
		element.appendChild(defs);
		this._id = clipPathId;
		container.appendChild(element);
	}

	get id(): string {
		return this._id;
	}

	update(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		overlappingRects: UtilHtmlElementOverlapperRects
	): void {
		const d = this.toD(elementRect, elementMatrix, overlappingRects);
		if (this._pathD != d) {
			this._path.setAttribute("d", d);
			this._pathD = d;
		}
	}

	protected toD(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		overlappingRects: UtilHtmlElementOverlapperRects
	): string {
		if (elementRect == null) {
			return "";
		}

		const w = elementRect.width;
		const h = elementRect.height;
		const threshold = 0.0001;
		if (w < threshold || h < threshold) {
			return "";
		}

		const overlappingRectsSize = overlappingRects.size;
		if (overlappingRectsSize <= 0) {
			return "M0,0 h1 v1 h-1z";
		}

		const matrix = (UtilHtmlElementOverlapperImpl.WORK_MATRIX ??= new Matrix());
		if (elementMatrix != null) {
			matrix.copyFrom(elementMatrix);
			matrix.invert();
		} else {
			matrix.identity();
		}
		matrix.translate(-elementRect.x, -elementRect.y);
		matrix.scale(1 / w, 1 / h);

		let result = "M0,0 H1 V1 H0Z";
		const a = matrix.a;
		const b = matrix.b;
		const c = matrix.c;
		const d = matrix.d;
		const tx = matrix.tx;
		const ty = matrix.ty;
		const data = overlappingRects.data;
		for (let i = 0; i < overlappingRectsSize; ++i) {
			const index = i << 2;
			const d0 = data[index + 0];
			const d1 = data[index + 1];
			const d2 = data[index + 2];
			const d3 = data[index + 3];
			const x0 = toStr(a * d0 + c * d1 + tx);
			const y0 = toStr(b * d0 + d * d1 + ty);
			const x1 = toStr(a * d2 + c * d1 + tx);
			const y1 = toStr(b * d2 + d * d1 + ty);
			const x2 = toStr(a * d2 + c * d3 + tx);
			const y2 = toStr(b * d2 + d * d3 + ty);
			const x3 = toStr(a * d0 + c * d3 + tx);
			const y3 = toStr(b * d0 + d * d3 + ty);
			result += ` M${x0},${y0} L${x1},${y1} L${x2},${y2} L${x3},${y3}Z`;
		}
		return result;
	}
}
