/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DOnOptions } from "./d-on-options";
import { DTableData } from "./d-table-data";

export const DTableDataSelectionType = {
	NONE: 0,
	SINGLE: 1,
	MULTIPLE: 2
} as const;

export type DTableDataSelectionType =
	typeof DTableDataSelectionType[keyof typeof DTableDataSelectionType];

/**
 * {@link DTableDataSelection} events.
 */
export interface DTableDataSelectionEvents<EMITTER> {
	/**
	 * Triggered when s selection is changed.
	 *
	 *     on( "change", ( emitter ) => {} )
	 *
	 * @param emitter an emitter
	 */
	change(emitter: EMITTER): void;
}

/**
 * {@link DTableDataSelection} "on" options.
 */
export interface DTableDataSelectionOnOptions<EMITTER>
	extends Partial<DTableDataSelectionEvents<EMITTER>>,
		DOnOptions {}

export interface DTableDataSelectionOptions<EMITTER = any> {
	type?: keyof typeof DTableDataSelectionType | DTableDataSelectionType;
	on?: DTableDataSelectionOnOptions<EMITTER>;
}

export type DTableDataSelectionEachIteratee = (index: number) => void | boolean;

export interface DTableDataSelection<ROW> extends utils.EventEmitter {
	readonly parent: DTableData<ROW>;

	/**
	 * Returns a copy of an index array of selected rows.
	 * The order of indices is an insertion order.
	 */
	readonly indices: number[];

	/**
	 * Returns a copy of an array of selected row value.
	 * The order is an insertion order.
	 */
	readonly rows: ROW[];

	readonly type: DTableDataSelectionType;

	readonly first: number | null;
	readonly last: number | null;

	toggle(rowIndex: number): void;
	add(rowIndex: number): void;
	addTo(rowIndex: number): void;
	addRange(from: number, includeFrom: boolean, to: number, includeTo: boolean): void;
	addAll(rowIndices: number[]): void;
	contains(rowIndex: number): boolean;
	remove(rowIndex: number): void;
	clear(): void;
	clearAndAdd(rowIndex: number): void;
	clearAndAddAll(rowIndices: number[]): void;
	shift(rowIndex: number, amount: number): void;
	size(): number;
	isEmpty(): boolean;

	/**
	 * Calls the specified iteratee on each indices.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each indices
	 */
	each(iteratee: DTableDataSelectionEachIteratee): void;

	/**
	 * Returns an array of the (index, row value) pairs of selected rows.
	 * The order of pairs is an insertion order.
	 */
	toArray(): Array<[number, ROW]>;

	/**
	 * Returns an sorted array of the (index, row value) pairs of selected rows.
	 */
	toSortedArray(): Array<[number, ROW]>;

	toObject(): Record<number, ROW>;

	toMap(): Map<number, ROW>;
}

export interface DTableDataSelectionParent<ROW> extends DTableData<ROW> {
	update(): void;
}

export type DTableDataSelectionCreator<NODE> = (
	parent: DTableDataSelectionParent<NODE>
) => DTableDataSelection<NODE>;
