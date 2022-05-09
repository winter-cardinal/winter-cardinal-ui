/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UtilFontMetrics {
	ascent: number;
	descent: number;
}

export class UtilFont {
	private static _span?: HTMLSpanElement;
	private static _block?: HTMLDivElement;
	private static _div?: HTMLDivElement;
	private static _results?: Map<string, UtilFontMetrics>;

	public static measure(font: string): UtilFontMetrics {
		let results = this._results;
		if (results == null) {
			results = new Map<string, UtilFontMetrics>();
			this._results = results;
		}

		let result = results.get(font);
		if (result != null) {
			return result;
		}

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
		const blockRect = block.getBoundingClientRect();
		const blockRectTop = blockRect.top;
		const spanRect = span.getBoundingClientRect();
		const ascent = blockRectTop - spanRect.top;
		const descent = spanRect.bottom - blockRectTop;
		result = {
			ascent: ascent,
			descent: descent
		};
		results.set(font, result);
		return result;
	}
}
