/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DColorAndAlpha } from "./d-color-and-alpha";

export interface DThemeColorRecent {
	getCapacity(): number;
	newColors(): DColorAndAlpha[];
}

export class DColorRecent extends utils.EventEmitter {
	protected _recents: DColorAndAlpha[];
	protected _capacity: number;

	constructor(recents: DColorAndAlpha[], capacity: number) {
		super();

		this._recents = recents;
		this._capacity = capacity;
	}

	get(index: number): DColorAndAlpha | null {
		const recents = this._recents;
		if (0 <= index && index < recents.length) {
			return recents[recents.length - 1 - index];
		}
		return null;
	}

	set(index: number, colorAndAlpha: DColorAndAlpha): DColorAndAlpha | null {
		const recents = this._recents;
		if (0 <= index && index < recents.length) {
			const result = recents[recents.length - 1 - index];
			recents[recents.length - 1 - index] = {
				color: colorAndAlpha.color,
				alpha: colorAndAlpha.alpha
			};
			this.emit("change", this);
			return result;
		}
		return null;
	}

	contains(colorAndAlpha: DColorAndAlpha): boolean {
		const recents = this._recents;
		for (let i = 0, imax = recents.length; i < imax; ++i) {
			const recent = recents[i];
			if (recent.color === colorAndAlpha.color && recent.alpha === colorAndAlpha.alpha) {
				return true;
			}
		}
		return false;
	}

	clear(): this {
		const recents = this._recents;
		if (0 < recents.length) {
			recents.length = 0;
			this.emit("change", this);
		}
		return this;
	}

	add(colorAndAlpha: DColorAndAlpha): this {
		const recents = this._recents;
		recents.push({
			color: colorAndAlpha.color,
			alpha: colorAndAlpha.alpha
		});
		if (this._capacity < recents.length) {
			recents.shift();
		}
		this.emit("change", this);
		return this;
	}

	addAll(colorAndAlphas: DColorAndAlpha[]): this {
		const length = colorAndAlphas.length;
		if (0 < length) {
			const recents = this._recents;
			for (let i = 0; i < length; ++i) {
				const colorAndAlpha = colorAndAlphas[i];
				recents.push({
					color: colorAndAlpha.color,
					alpha: colorAndAlpha.alpha
				});
				if (this._capacity < recents.length) {
					recents.shift();
				}
			}
			this.emit("change", this);
		}
		return this;
	}

	clearAndAddAll(colorAndAlphas: DColorAndAlpha[]): this {
		let isChanged = false;

		const recents = this._recents;
		if (0 < recents.length) {
			recents.length = 0;
			isChanged = true;
		}

		const length = colorAndAlphas.length;
		if (0 < length) {
			for (let i = 0; i < length; ++i) {
				const colorAndAlpha = colorAndAlphas[i];
				recents.push({
					color: colorAndAlpha.color,
					alpha: colorAndAlpha.alpha
				});
				if (this._capacity < recents.length) {
					recents.shift();
				}
			}
			isChanged = true;
		}

		if (isChanged) {
			this.emit("change", this);
		}

		return this;
	}

	pop(): DColorAndAlpha | null {
		const recents = this._recents;
		const result = recents.shift();
		if (result != null) {
			this.emit("change", this);
			return result;
		}
		return null;
	}

	size(): number {
		return this._recents.length;
	}
}
