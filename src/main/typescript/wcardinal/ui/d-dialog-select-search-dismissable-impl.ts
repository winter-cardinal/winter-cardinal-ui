/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DDialogSelectSearch } from "./d-dialog-select-search";
import {
	DDialogSelectSearchDismissable,
	DDialogSelectSearhDismissableFilter,
	DDialogSelectSearhDismissableOptions
} from "./d-dialog-select-search-dismissable";

export class DDialogSelectSearhDismissableImpl<VALUE, CATEGORY, CATEGORY_ID>
	extends utils.EventEmitter
	implements DDialogSelectSearchDismissable<VALUE, CATEGORY, CATEGORY_ID>
{
	protected _target: DDialogSelectSearch<VALUE, CATEGORY, CATEGORY_ID>;

	protected _args?: [string, CATEGORY_ID | null];
	protected _value?: VALUE;
	protected _filter?: DDialogSelectSearhDismissableFilter<VALUE, CATEGORY, CATEGORY_ID>;

	constructor(
		target: DDialogSelectSearch<VALUE, CATEGORY, CATEGORY_ID>,
		options: DDialogSelectSearhDismissableOptions<VALUE, CATEGORY, CATEGORY_ID>
	) {
		super();

		this._target = target;
		this._value = options.value;
		this._filter = options.filter;

		target.on("change", (): void => {
			this.emit("change", this);
		});
		target.on("success", (e, values): void => {
			this.emit("success", this, this.toDismissable(values));
		});
		target.on("fail", (): void => {
			this.emit("fail", this);
		});
	}

	protected toDismissValue(args?: [string, CATEGORY_ID | null]): VALUE | undefined {
		if (args == null) {
			return;
		}
		const value = this._value;
		if (value === undefined) {
			return;
		}
		const filter = this._filter;
		if (filter != null && !filter(value, args[0])) {
			return;
		}
		return value;
	}

	protected toDismissable(values: VALUE[]): VALUE[] {
		const value = this.toDismissValue(this._args);
		if (value === undefined) {
			return values;
		}
		const result: VALUE[] = [];
		for (let i = 0, imax = values.length; i < imax; ++i) {
			result.push(values[i]);
		}
		result.push(value);
		return result;
	}

	create(args: [string, CATEGORY_ID | null]): void {
		this._args = args;
		this._target.create(args);
	}

	isDone(): boolean {
		return this._target.isDone();
	}
}
