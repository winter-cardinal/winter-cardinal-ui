/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DColorAndAlpha } from "./d-color-and-alpha";

export class DPickerColorStandard extends utils.EventEmitter {
	protected _standardColors: DColorAndAlpha[];
	protected _capacity: number;

	constructor(standardColors: DColorAndAlpha[], capacity: number) {
		super();

		this._standardColors = standardColors;
		this._capacity = capacity;
	}

	get(index: number): DColorAndAlpha | null {
		const standardColors = this._standardColors;
		if (0 <= index && index < standardColors.length) {
			return standardColors[index];
		}
		return null;
	}

	set(index: number, colorAndAlpha: DColorAndAlpha): DColorAndAlpha | null {
		const standardColors = this._standardColors;
		if (0 <= index && index < standardColors.length) {
			const result = standardColors[index];
			standardColors[index] = {
				color: colorAndAlpha.color,
				alpha: colorAndAlpha.alpha
			};
			this.emit("change", this);
			return result;
		}
		return null;
	}

	contains(colorAndAlpha: DColorAndAlpha): boolean {
		const standardColors = this._standardColors;
		for (let i = 0, imax = standardColors.length; i < imax; ++i) {
			const standardColor = standardColors[i];
			if (
				standardColor.color === colorAndAlpha.color &&
				standardColor.alpha === colorAndAlpha.alpha
			) {
				return true;
			}
		}
		return false;
	}

	size(): number {
		return this._standardColors.length;
	}
}
