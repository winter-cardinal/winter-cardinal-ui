/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilHtmlElementOverlapperRects } from "./util-html-element-overlapper-rects";

export class UtilHtmlElementOverlapperRectsImpl implements UtilHtmlElementOverlapperRects {
	private _data: number[];
	private _size: number;
	private _index: number;
	private _isDirty: boolean;

	constructor() {
		this._data = [];
		this._size = 0;
		this._index = 0;
		this._isDirty = true;
	}

	get data(): number[] {
		return this._data;
	}

	get size(): number {
		return this._size;
	}

	isDirty(): boolean {
		return this._isDirty;
	}

	toClean(): void {
		this._isDirty = false;
	}

	begin(): this {
		this._index = 0;
		return this;
	}

	end(): this {
		const index = this._index;
		this._size = index;
		const data = this._data;
		const newDataLength = index << 2;
		if (data.length !== newDataLength) {
			data.length = newDataLength;
			this._isDirty = true;
		}
		return this;
	}

	add(x0: number, y0: number, x1: number, y1: number): this {
		const index = this._index << 2;
		this._index += 1;
		const data = this._data;
		if (index < data.length) {
			if (
				data[index + 0] !== x0 ||
				data[index + 1] !== y0 ||
				data[index + 2] !== x1 ||
				data[index + 3] !== y1
			) {
				data[index + 0] = x0;
				data[index + 1] = y0;
				data[index + 2] = x1;
				data[index + 3] = y1;
				this._isDirty = true;
			}
		} else {
			data.push(x0, y0, x1, y1);
			this._isDirty = true;
		}
		return this;
	}
}
