/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableDataComparator, DTableDataOrder, DTableDataSorter } from "./d-table-data-sorter";
import { isFunction } from "./util/is-function";

export interface DTableDataListSorterParent<ROW> {
	readonly rows: ROW[];
	update(): void;
}

export class DTableDataListSorter<ROW> extends utils.EventEmitter implements DTableDataSorter<ROW> {
	protected _id: number;
	protected _idUpdated: number;
	protected _isApplied: boolean;
	protected _parent: DTableDataListSorterParent<ROW>;
	protected _comparator: DTableDataComparator<ROW> | null;
	protected _sorted: number[] | null;
	protected _order: DTableDataOrder;

	constructor(parent: DTableDataListSorterParent<ROW>) {
		super();

		this._id = 0;
		this._idUpdated = -1;
		this._isApplied = false;
		this._parent = parent;
		this._comparator = null;
		this._sorted = null;
		this._order = DTableDataOrder.ASCENDING;
	}

	get id(): number {
		return this._id;
	}

	get order(): DTableDataOrder {
		return this._order;
	}

	set order(order: DTableDataOrder) {
		this._order = order;
	}

	apply(): void {
		this._isApplied = true;
		this._id += 1;
		this._parent.update();
	}

	unapply(): void {
		if (this._isApplied) {
			this._isApplied = false;
			this._id += 1;
			this._parent.update();
		}
	}

	isApplied(): boolean {
		return this._isApplied;
	}

	protected newSorted(): number[] | null {
		const comparator = this._comparator;
		if (comparator != null) {
			const parent = this._parent;
			const sorted: number[] = [];
			const rows: ROW[] = parent.rows;
			for (let i = 0, imax = rows.length; i < imax; ++i) {
				sorted.push(i);
			}
			sorted.sort(this.toComparator(rows, comparator));
			return sorted;
		} else {
			return null;
		}
	}

	protected toComparator(
		rows: ROW[],
		comparator: DTableDataComparator<ROW>
	): (indexA: number, indexB: number) => number {
		const order = this._order;
		if (isFunction(comparator)) {
			if (order === DTableDataOrder.ASCENDING) {
				return (indexA: number, indexB: number): number => {
					return comparator(rows[indexA], rows[indexB], indexA, indexB);
				};
			} else {
				return (indexA: number, indexB: number): number => {
					return comparator(rows[indexB], rows[indexA], indexB, indexA);
				};
			}
		} else {
			if (order === DTableDataOrder.ASCENDING) {
				return (indexA: number, indexB: number): number => {
					return comparator.compare(rows[indexA], rows[indexB], indexA, indexB);
				};
			} else {
				return (indexA: number, indexB: number): number => {
					return comparator.compare(rows[indexB], rows[indexA], indexB, indexA);
				};
			}
		}
	}

	get(): DTableDataComparator<ROW> | null {
		return this._comparator;
	}

	set(comparator: DTableDataComparator<ROW> | null): void {
		if (this._comparator !== comparator) {
			this._comparator = comparator;
		}
	}

	toDirty(): void {
		this._id += 1;
	}

	update(): void {
		if (this._id !== this._idUpdated) {
			this._idUpdated = this._id;
			if (this._isApplied) {
				this._sorted = this.newSorted();
				this.emit("change", this);
			} else if (this._sorted != null) {
				this._sorted = null;
				this.emit("change", this);
			}
		}
	}

	get indices(): number[] | null {
		this.update();
		return this._sorted;
	}

	map(unmappedIndex: number): number | null {
		let result = unmappedIndex;

		const indicesSorted = this.indices;
		if (indicesSorted) {
			const index = indicesSorted.indexOf(result);
			if (0 <= index) {
				result = index;
			} else {
				return null;
			}
		}

		return result;
	}

	unmap(index: number): number {
		let result = index;

		const indicesSorted = this.indices;
		if (indicesSorted) {
			result = indicesSorted[result];
		}

		return result;
	}
}
