/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import {
	DDialogSelectSearchFunction,
	DDialogSelectSearchFunctions
} from "./d-dialog-select-search-function";
import { DDialogSelectSearch } from "./d-dialog-select-search";

export class DDialogSelectSearhImpl<VALUE, CATEGORY, CATEGORY_ID>
	extends utils.EventEmitter
	implements DDialogSelectSearch<VALUE, CATEGORY, CATEGORY_ID>
{
	protected _search: DDialogSelectSearchFunction<VALUE, CATEGORY, CATEGORY_ID>;
	protected _id: number;
	protected _idCompleted: number;

	constructor(search?: DDialogSelectSearchFunction<VALUE, CATEGORY, CATEGORY_ID>) {
		super();

		this._search = DDialogSelectSearchFunctions.toCategorized(search);
		this._id = 0;
		this._idCompleted = 0;
	}

	create(args: [string] | [string, CATEGORY_ID | null]): void {
		const id = ++this._id;
		this._search(args[0], args[1] ?? null).then(
			(searchResult: VALUE[]) => {
				if (this._id === id) {
					this._idCompleted = id;
					this.emit("success", this, searchResult);
					this.emit("change", this);
				}
			},
			() => {
				if (this._id === id) {
					this._idCompleted = id;
					this.emit("fail", this);
					this.emit("change", this);
				}
			}
		);
		this.emit("change", this);
	}

	isDone(): boolean {
		return this._id === this._idCompleted;
	}
}
