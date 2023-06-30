/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export interface DThemeColorStandard {
	newColors(): number[];
}

export class DColorStandard extends utils.EventEmitter {
	protected _standards: number[];

	constructor(standards: number[]) {
		super();
		this._standards = standards;
	}

	get(index: number): number | null {
		const standards = this._standards;
		if (0 <= index && index < standards.length) {
			return standards[index];
		}
		return null;
	}

	set(index: number, color: number): number | null {
		const standards = this._standards;
		if (0 <= index && index < standards.length) {
			const result = standards[index];
			standards[index] = color;
			this.emit("change", this);
			return result;
		}
		return null;
	}

	setAll(colors: number[]): this {
		let isChanged = false;
		const standards = this._standards;
		for (let i = 0, imax = Math.min(colors.length, standards.length); i < imax; ++i) {
			if (standards[i] !== colors[i]) {
				standards[i] = colors[i];
				isChanged = true;
			}
		}
		if (isChanged) {
			this.emit("change", this);
		}
		return this;
	}

	contains(color: number): boolean {
		const standards = this._standards;
		for (let i = 0, imax = standards.length; i < imax; ++i) {
			if (standards[i] === color) {
				return true;
			}
		}
		return false;
	}

	size(): number {
		return this._standards.length;
	}
}
