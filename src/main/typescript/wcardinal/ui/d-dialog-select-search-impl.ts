/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DDialogSelectSearchFunction } from "./d-dialog-select-search-function";
import { DDialogSelectSearch } from "./d-dialog-select-search";

export class DDialogSelectSearhImpl<VALUE, CATEGORY_ID>
	extends utils.EventEmitter
	implements DDialogSelectSearch<VALUE, CATEGORY_ID>
{
	protected _search: DDialogSelectSearchFunction<VALUE, CATEGORY_ID>;
	protected _id: number;
	protected _idCompleted: number;

	constructor(search?: DDialogSelectSearchFunction<VALUE, CATEGORY_ID>) {
		super();

		this._search =
			search ?? ((word: string, categoryId?: CATEGORY_ID | null) => Promise.resolve([]));
		this._id = 0;
		this._idCompleted = 0;
	}

	create(args: [string] | [string, CATEGORY_ID | null]): void {
		const id = ++this._id;
		const search = this._search;
		(args.length <= 1 ? search(args[0]) : search(args[0], args[1])).then(
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
