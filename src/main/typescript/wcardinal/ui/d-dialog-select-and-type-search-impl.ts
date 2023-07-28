/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DDialogSelectAndTypeSearch } from "./d-dialog-select-and-type-search";

export class DDialogSelectAndTypeSearhImpl<VALUE>
	extends utils.EventEmitter
	implements DDialogSelectAndTypeSearch<VALUE>
{
	protected _search: (word: string, type: number) => Promise<VALUE[]>;
	protected _id: number;
	protected _idCompleted: number;

	constructor(
		search?: (word: string, type: number) => Promise<VALUE[]>
	) {
		super();

		this._search = search || ((_: string, __: number) => Promise.resolve([]));
		this._id = 0;
		this._idCompleted = 0;
	}

	create(args: [string, number]): void {
		const id = ++this._id;
		this._search(args[0], args[1]).then(
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
