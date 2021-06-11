/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseReflowable } from "./d-base-reflowable";

export class DBaseReflowableContainer implements DBaseReflowable {
	protected _list: DBaseReflowable[];

	constructor() {
		this._list = [];
	}

	add(reflowable: DBaseReflowable): void {
		this._list.push(reflowable);
	}

	remove(reflowable: DBaseReflowable): void {
		const list = this._list;
		const index = list.indexOf(reflowable);
		if (0 <= index) {
			list.splice(index, 1);
		}
	}

	onReflow(base: DBase, width: number, height: number): void {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].onReflow(base, width, height);
		}
	}
}
