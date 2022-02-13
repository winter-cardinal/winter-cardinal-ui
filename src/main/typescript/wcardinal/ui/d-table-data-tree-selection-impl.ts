/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableDataSelectionOptions, DTableDataSelectionType } from "./d-table-data-selection";
import {
	DTableDataTreeSelection,
	DTableDataTreeSelectionParent
} from "./d-table-data-tree-selection";
import { toEnum } from "./util/to-enum";

const COMPARATOR = (a: [number, unknown], b: [number, unknown]): number => {
	return a[0] - b[0];
};

export class DTableDataTreeSelectionImpl<NODE>
	extends utils.EventEmitter
	implements DTableDataTreeSelection<NODE>
{
	protected _parent: DTableDataTreeSelectionParent<NODE>;
	protected _type: DTableDataSelectionType;
	protected _rows: Set<NODE>;

	constructor(parent: DTableDataTreeSelectionParent<NODE>, options?: DTableDataSelectionOptions) {
		super();
		this._parent = parent;
		this._type = toEnum(options?.type ?? DTableDataSelectionType.NONE, DTableDataSelectionType);
		this._rows = new Set<NODE>();
	}

	onNodeChange(nodes?: NODE[]): void {
		if (nodes != null) {
			const toChildren = this._parent.accessor.toChildren;
			const oldRows = this._rows;
			const newRows = this.newRows(nodes, toChildren, oldRows, new Set<NODE>());
			if (oldRows.size !== newRows.size) {
				this._rows = newRows;
				this.onChange();
			}
		} else {
			const rows = this._rows;
			if (0 < rows.size) {
				rows.clear();
				this.onChange();
			}
		}
	}

	protected newRows(
		nodes: NODE[],
		toChildren: (node: NODE) => NODE[] | null | undefined,
		rows: Set<NODE>,
		result: Set<NODE>
	): Set<NODE> {
		for (let i = 0, imax = nodes.length; i < imax; ++i) {
			const node = nodes[i];
			if (rows.has(node)) {
				result.add(node);
			}
			const children = toChildren(node);
			if (children != null) {
				this.newRows(children, toChildren, rows, result);
			}
		}
		return result;
	}

	get indices(): number[] {
		const rows = this._rows;
		const result: number[] = [];
		this._parent.each((row: NODE, index: number): void => {
			if (rows.has(row)) {
				result.push(index);
			}
		});
		return result;
	}

	get rows(): NODE[] {
		const result: NODE[] = [];
		this._rows.forEach((row: NODE): void => {
			result.push(row);
		});
		return result;
	}

	get type(): DTableDataSelectionType {
		return this._type;
	}

	protected getFirst(): NODE | null {
		const rows = this._rows;
		if (0 < rows.size) {
			let result: NODE | null = null;
			rows.forEach((row: NODE): void => {
				if (result == null) {
					result = row;
				}
			});
			return result;
		}
		return null;
	}

	protected getLast(): NODE | null {
		const rows = this._rows;
		if (0 < rows.size) {
			let result: NODE | null = null;
			rows.forEach((row: NODE): void => {
				result = row;
			});
			return result;
		}
		return null;
	}

	protected toIndex(target: NODE): number | null {
		let result: number | null = null;
		this._parent.each((row: NODE, index: number): boolean => {
			if (target === row) {
				result = index;
				return false;
			}
			return true;
		});
		return result;
	}

	get first(): number | null {
		const row = this.getFirst();
		if (row) {
			return this.toIndex(row);
		}
		return null;
	}

	get last(): number | null {
		const row = this.getLast();
		if (row) {
			return this.toIndex(row);
		}
		return null;
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	toggle(rowIndex: number): void {
		const row = this._parent.get(rowIndex);
		if (row) {
			const rows = this._rows;
			if (rows.has(row)) {
				rows.delete(row);
			} else {
				rows.add(row);
			}
			this.onChange();
		}
	}

	add(rowIndex: number): void {
		const row = this._parent.get(rowIndex);
		if (row) {
			const rows = this._rows;
			if (!rows.has(row)) {
				rows.add(row);
				this.onChange();
			}
		}
	}

	addTo(rowIndex: number): void {
		const lastRowIndex = this.last;
		if (lastRowIndex != null) {
			this.addRange(lastRowIndex, false, rowIndex, true);
		}
	}

	addRange(from: number, includeFrom: boolean, to: number, includeTo: boolean): void {
		const rows = this._rows;
		const oldSize = rows.size;
		const parent = this._parent;
		if (from < to) {
			parent.each(
				(row: NODE): void => {
					rows.add(row);
				},
				from + (includeFrom ? 0 : 1),
				to + (includeTo ? 1 : 0)
			);
		} else {
			parent.each(
				(row: NODE): void => {
					rows.add(row);
				},
				to + (includeTo ? 0 : 1),
				from + (includeFrom ? 1 : 0)
			);
		}
		const newSize = rows.size;
		if (oldSize !== newSize) {
			this.onChange();
		}
	}

	addAll(rowIndices: number[]): void {
		if (0 < rowIndices.length) {
			const rows = this._rows;
			const parent = this._parent;
			for (let i = 0, imax = rowIndices.length; i < imax; ++i) {
				const row = parent.get(rowIndices[i]);
				if (row) {
					rows.add(row);
				}
			}
			this.onChange();
		}
	}

	contains(rowIndex: number): boolean {
		const row = this._parent.get(rowIndex);
		if (row) {
			return this._rows.has(row);
		}
		return false;
	}

	remove(rowIndex: number): void {
		const row = this._parent.get(rowIndex);
		if (row) {
			const rows = this._rows;
			if (rows.has(row)) {
				rows.delete(row);
				this.onChange();
			}
		}
	}

	clear(): void {
		const rows = this._rows;
		if (0 < rows.size) {
			rows.clear();
			this.onChange();
		}
	}

	clearAndAdd(rowIndex: number): void {
		const row = this._parent.get(rowIndex);
		if (row) {
			const rows = this._rows;
			if (rows.has(row)) {
				if (1 < rows.size) {
					rows.clear();
					rows.add(row);
					this.onChange();
				}
			} else {
				rows.clear();
				rows.add(row);
				this.onChange();
			}
		}
	}

	clearAndAddAll(rowIndices: number[]): void {
		const rows = this._rows;
		if (0 < rows.size || 0 < rowIndices.length) {
			rows.clear();
			const parent = this._parent;
			for (let i = 0, imax = rowIndices.length; i < imax; ++i) {
				const row = parent.get(rowIndices[i]);
				if (row) {
					rows.add(row);
				}
			}
			this.onChange();
		}
	}

	shift(rowIndex: number, amount: number): void {
		// DO NOTHING
	}

	size(): number {
		return this._rows.size;
	}

	isEmpty(): boolean {
		return this._rows.size <= 0;
	}

	toArray(): Array<[number, NODE]> {
		const rows = this._rows;
		const result: Array<[number, NODE]> = [];
		this._parent.each((row: NODE, index: number): void => {
			if (rows.has(row)) {
				result.push([index, row]);
			}
		});
		return result;
	}

	toSortedArray(): Array<[number, NODE]> {
		return this.toArray().sort(COMPARATOR);
	}

	toObject(): Record<number, NODE> {
		const rows = this._rows;
		const result: Record<number, NODE> = {};
		this._parent.each((row: NODE, index: number): void => {
			if (rows.has(row)) {
				result[index] = row;
			}
		});
		return result;
	}

	toMap(): Map<number, NODE> {
		const rows = this._rows;
		const result = new Map<number, NODE>();
		this._parent.each((row: NODE, index: number): void => {
			if (rows.has(row)) {
				result.set(index, row);
			}
		});
		return result;
	}
}
