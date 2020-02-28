import { DTreeItemRawData } from "./d-tree";

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class DTreeSelection {
	protected _selection!: DTreeItemRawData[];

	constructor() {
		this._selection = [];
	}

	public add(item: DTreeItemRawData) {
		if(!this._selection.includes(item)) {
			this._selection.push(item);
		}
	}

	public remove(item: DTreeItemRawData) {
		const itemIndex = this._selection.indexOf(item);
		if(itemIndex !== -1) {
			this._selection.splice(itemIndex, 1);
		}
	}

	public toggle(item: DTreeItemRawData) {
		const itemIndex = this._selection.indexOf(item);
		if(itemIndex !== -1) {
			this._selection.splice(itemIndex, 1);
		} else {
			this._selection.push(item);
		}
	}

	public clear() {
		this._selection.length = 0;
	}

	public get() {
		return this._selection;
	}

	public size() {
		return this._selection.length;
	}

}
