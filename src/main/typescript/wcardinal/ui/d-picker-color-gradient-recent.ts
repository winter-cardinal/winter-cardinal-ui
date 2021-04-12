/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DColorGradient } from "./d-color-gradient";

const isEqual = (a: DColorGradient, b: DColorGradient) => {
	if (a.direction !== b.direction) {
		return false;
	}

	const ap = a.points;
	const bp = b.points;
	if (ap.length !== bp.length) {
		return false;
	}

	for (let j = 0, jmax = ap.length; j < jmax; ++j) {
		const apj = ap[j];
		const bpj = bp[j];
		if (apj.color !== bpj.color || apj.alpha !== bpj.alpha || apj.position !== bpj.position) {
			return false;
		}
	}

	return true;
};

export class DPickerColorGradientRecent extends utils.EventEmitter {
	protected _recents: DColorGradient[];
	protected _capacity: number;

	constructor(recents: DColorGradient[], capacity: number) {
		super();

		this._recents = recents;
		this._capacity = capacity;
	}

	getCapacity(): number {
		return this._capacity;
	}

	get(index: number): DColorGradient | null {
		const recents = this._recents;
		if (0 <= index && index < recents.length) {
			return recents[recents.length - 1 - index];
		}
		return null;
	}

	set(index: number, points: DColorGradient): DColorGradient | null {
		const recents = this._recents;
		if (0 <= index && index < recents.length) {
			const result = recents[recents.length - 1 - index];
			recents[recents.length - 1 - index] = points;
			this.emit("change", this);
			return result;
		}
		return null;
	}

	contains(points: DColorGradient): boolean {
		const recents = this._recents;
		for (let i = 0, imax = recents.length; i < imax; ++i) {
			if (isEqual(recents[i], points)) {
				return true;
			}
		}
		return false;
	}

	add(points: DColorGradient): this {
		const recents = this._recents;
		recents.push(points);
		if (this._capacity < recents.length) {
			recents.shift();
		}
		this.emit("change", this);
		return this;
	}

	pop(): DColorGradient | null {
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
