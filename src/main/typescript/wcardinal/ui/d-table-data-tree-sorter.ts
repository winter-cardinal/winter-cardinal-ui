/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import {
	DTableDataComparatorFunction, DTableDataComparatorObject,
	DTableDataOrder, DTableDataSorter
} from "./d-table-data-sorter";

export class DTableDataTreeSorter<NODE> extends utils.EventEmitter implements DTableDataSorter<NODE> {
	constructor() {
		super();
	}

	get id(): number {
		return 0;
	}

	get order(): DTableDataOrder {
		return DTableDataOrder.ASCENDING;
	}

	set order( order: DTableDataOrder ) {
		// DO NOTHING
	}

	apply(): void {
		// DO NOTHING
	}

	unapply(): void {
		// DO NOTHING
	}

	isApplied(): boolean {
		return false;
	}

	get(): DTableDataComparatorFunction<NODE> | DTableDataComparatorObject<NODE> | null {
		return null;
	}

	set( comparator: DTableDataComparatorFunction<NODE> | DTableDataComparatorObject<NODE> | null ): void {
		// DO NOTHING
	}

	toDirty(): void {
		// DO NOTHING
	}

	update(): void {
		// DO NOTHING
	}

	get indices(): number[] | null {
		return null;
	}

	map( unmappedIndex: number ): number | null {
		return unmappedIndex;
	}

	unmap( index: number ): number {
		return index;
	}
}
