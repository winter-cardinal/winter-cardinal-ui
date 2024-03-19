/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextMetrics } from "pixi.js";

export interface UtilFontMetrics {
	ascent: number;
	descent: number;
}

export interface UtilFontFont {
	id: string;
	measured: boolean;
	ascent: number;
	descent: number;
}

export class UtilFont {
	private static _span?: HTMLSpanElement;
	private static _block?: HTMLDivElement;
	private static _div?: HTMLDivElement;

	static measure(context: CanvasRenderingContext2D, font: UtilFontFont): void {
		if (!font.measured) {
			if ("fontBoundingBoxAscent" in window.TextMetrics.prototype) {
				const metrics = context.measureText(TextMetrics.METRICS_STRING);
				font.ascent = metrics.fontBoundingBoxAscent;
				font.descent = metrics.fontBoundingBoxDescent;
			} else {
				const measured = TextMetrics.measureFont(font.id);
				font.ascent = measured.ascent;
				font.descent = measured.descent;
			}
			font.measured = true;
		}
	}

	static toSize(font: string): number {
		this.setup(font);
		return parseFloat(window.getComputedStyle(this._span!).fontSize);
	}

	private static setup(font: string): void {
		let span = this._span;
		if (span == null) {
			span = document.createElement("span");
			span.innerText = "|ÉqÅ";
			span.style.border = "none";
			span.style.margin = "0px";
			this._span = span;
		}

		let block = this._block;
		if (block == null) {
			block = document.createElement("div");
			block.style.display = "inline-block";
			block.style.width = "0px";
			block.style.height = "0px";
			block.style.border = "none";
			block.style.margin = "0px";
			block.style.verticalAlign = "baseline";
			this._block = block;
		}

		let div = this._div;
		if (div == null) {
			div = document.createElement("div");
			div.style.position = "absolute";
			div.style.padding = "0px";
			div.style.margin = "0px";
			div.style.visibility = "hidden";
			div.appendChild(span);
			div.appendChild(block);
			document.body.appendChild(div);
			this._div = div;
		}

		span.style.font = font;
	}
}
