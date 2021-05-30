/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListDataMapped } from "./d-list-data-mapped";

export interface DListDataMppedImplParent<NODE> {
	readonly before: NODE[];
	readonly items: NODE[];
	readonly after: NODE[];
}

export class DListDataMappedImpl<ITEM> implements DListDataMapped<ITEM> {
	protected readonly _parent: DListDataMppedImplParent<ITEM>;

	constructor(parent: DListDataMppedImplParent<ITEM>) {
		this._parent = parent;
	}

	size(): number {
		const parent = this._parent;
		return parent.before.length + parent.items.length + parent.after.length;
	}

	each(
		iteratee: (value: ITEM, index: number) => boolean | void,
		from?: number,
		to?: number
	): void {
		const parent = this._parent;
		const index0 = this.each_(iteratee, parent.before, 0, from, to);
		if (index0 < 0) {
			return;
		}
		const index1 = this.each_(iteratee, parent.items, index0, from, to);
		if (index1 < 0) {
			return;
		}
		this.each_(iteratee, parent.after, index1, from, to);
	}

	each_(
		iteratee: (value: ITEM, index: number) => boolean | void,
		items: ITEM[],
		start: number,
		from?: number,
		to?: number
	): number {
		const end = start + items.length;
		const ifrom = from != null ? Math.max(start, from) : start;
		const ito = to != null ? Math.min(end, to) : end;
		for (let i = ifrom; i < ito; ++i) {
			if (iteratee(items[i - start], i) === false) {
				return -1;
			}
		}
		return ito;
	}
}
