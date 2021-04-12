/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeFont } from "../d-font";
import { DThemes } from "../theme/d-themes";

export type UtilWheelEventName = "wheel" | "mousewheel" | "DOMMouseScroll" | "MozMousePixelScroll";

export type UtilWheelEventHandler = (e: WheelEvent | Event) => void;

export interface UtilWheelEventDeltas {
	mode: number;
	delta: number;
	deltaX: number;
	deltaY: number;
	lowest: number;
}

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * See also https://github.com/mapbox/mapbox-gl-js/blob/001c7b9/js/ui/handler/scroll_zoom.js
 * and https://github.com/openlayers/openlayers/blob/v5.2.0/src/ol/interaction/MouseWheelZoom.js#L51
 */
export class UtilWheelEvent {
	private static INSTANCE: UtilWheelEvent | null;
	private _names?: UtilWheelEventName[];
	private _lowest: number | null = null;
	private _timestamp: number = 0;
	private _lineHeight: number | null = null;
	private _pageHeight: number | null = null;

	getNames(): UtilWheelEventName[] {
		let result = this._names;
		if (result == null) {
			if ("onwheel" in document || 9 <= (document as any).documentMode) {
				result = ["wheel"];
			} else {
				result = ["mousewheel", "DOMMouseScroll", "MozMousePixelScroll"];
			}
			this._names = result;
		}
		return result;
	}

	on(target: HTMLElement, handler: UtilWheelEventHandler, useCapture: boolean = false): void {
		const names = this.getNames();
		for (let i = names.length - 1; 0 <= i; --i) {
			const name = names[i];
			target.addEventListener(name, handler, useCapture);
		}
	}

	off(target: HTMLElement, handler: UtilWheelEventHandler, useCapture: boolean = false): void {
		const names = this.getNames();
		for (let i = names.length - 1; 0 <= i; --i) {
			const name = names[i];
			target.removeEventListener(name, handler, useCapture);
		}
	}

	getLineHeight(): number {
		if (this._lineHeight == null) {
			const theme = DThemes.getInstance().get("DBase") as DThemeFont;
			this._lineHeight = theme.getLineHeight();
		}
		return this._lineHeight;
	}

	getPageHeight(): number {
		if (this._pageHeight == null) {
			this._pageHeight = this.getLineHeight() * 12;
		}
		return this._pageHeight;
	}

	normalize(e: any): UtilWheelEventDeltas | null {
		let deltaX = 0;
		let deltaY = 0;

		// Old school scrollwheel delta
		if ("detail" in e) {
			deltaY = e.detail * -1;
		}
		if ("wheelDelta" in e) {
			deltaY = e.wheelDelta;
		}
		if ("wheelDeltaY" in e) {
			deltaY = e.wheelDeltaY;
		}
		if ("wheelDeltaX" in e) {
			deltaX = e.wheelDeltaX * -1;
		}

		// Firefox < 17 horizontal scrolling related to DOMMouseScroll event
		if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
			deltaX = deltaY * -1;
			deltaY = 0;
		}

		// New school wheel delta (wheel event)
		if ("deltaY" in e) {
			deltaY = e.deltaY * -1;
		}
		if ("deltaX" in e) {
			deltaX = e.deltaX;
		}

		// No change actually happened, no reason to go any further
		if (deltaY === 0 && deltaX === 0) {
			return null;
		}

		// Store lowest absolute delta to normalize the delta values
		let delta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

		// Reset the this._lowest to better handle multiple device types
		// that give different a different lowestDelta
		// Ex: trackpad = 3 and mouse wheel = 120
		const now = Date.now();
		if (this._timestamp + 200 <= now) {
			this._lowest = null;
		}
		this._timestamp = now;

		//
		const shouldAdjust = e.type === "mousewheel" && delta % 120 === 0;
		if (!this._lowest || delta < this._lowest) {
			this._lowest = delta;

			// Adjust older deltas if necessary
			if (shouldAdjust) {
				this._lowest /= 40;
			}
		}

		// Adjust older deltas if necessary
		if (shouldAdjust) {
			// Divide all the things by 40!
			delta /= 40;
			deltaX /= 40;
			deltaY /= 40;
		}

		// Get a whole, normalized value for the deltas
		const lowest = this._lowest;
		delta = Math.floor(delta / lowest);
		deltaX = Math[1 <= deltaX ? "floor" : "ceil"](deltaX / lowest);
		deltaY = Math[1 <= deltaY ? "floor" : "ceil"](deltaY / lowest);

		// Mode
		const mode = e.deltaMode || 0;
		if (mode !== 0) {
			const scale = mode === 1 ? this.getLineHeight() : this.getPageHeight();
			delta *= scale;
			deltaX *= scale;
			deltaY *= scale;
		}

		return {
			mode,
			delta,
			deltaX,
			deltaY,
			lowest
		};
	}

	static getInstance(): UtilWheelEvent {
		if (this.INSTANCE == null) {
			this.INSTANCE = new UtilWheelEvent();
		}
		return this.INSTANCE;
	}
}
