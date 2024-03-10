import { utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DTableDataFilter, DTableDataFilterer } from "./d-table-data-filter";
import {
	DTableDataSelection,
	DTableDataSelectionCreator,
	DTableDataSelectionOptions
} from "./d-table-data-selection";
import { DTableDataComparator, DTableDataSorter } from "./d-table-data-sorter";

export type DTableDataSupplimental = number;

export type DTableDataMappedEachIteratee<ROW> = (
	row: ROW,
	supplimental: DTableDataSupplimental | null,
	index: number,
	unmappedIndex: number
) => void | boolean;

export interface DTableDataMapped<ROW> {
	/**
	 * Mapped rows.
	 */
	readonly rows: ROW[];

	/**
	 * Returns an mapped index of the specified unmapped index.
	 * A mapped index is an index on rows filters and sorters are applied.
	 *
	 * @param unmappedIndex a unmapped index
	 */
	map(unmappedIndex: number): number | null;

	/**
	 * Returns an unmapped index of the specified mapped index.
	 * A mapped index is an index on rows filters and sorters are applied.
	 *
	 * @param index a mapped index
	 */
	unmap(index: number): number;

	/**
	 * Returns a size of rows.
	 */
	size(): number;

	/**
	 * Returns a row data at the specified index.
	 * The index is an index on rows filters and sorters are applied.
	 *
	 * @param index a mapped index
	 */
	get(index: number): ROW | null;

	/**
	 * Calls the specified iteratee on each mapped datum of the specified index range.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each mapped datum
	 * @param istart an index to start an iteration
	 * @param iend an index before which an interation stops
	 */
	each(iteratee: DTableDataMappedEachIteratee<ROW>, istart?: number, iend?: number): void;
}

export type DTableDataEachIteratee<ROW> = (row: ROW, index: number) => void | boolean;

export interface DTableDataOptions<ROW, EMITTER = any> {
	/**
	 * Selection options.
	 */
	selection?:
		| DTableDataSelection<ROW>
		| DTableDataSelectionCreator<ROW>
		| DTableDataSelectionOptions;

	/**
	 * A filter.
	 */
	filter?: DTableDataFilterer<ROW>;

	/**
	 * A comparator.
	 */
	comparator?: DTableDataComparator<ROW>;

	/**
	 * Mappings of event names and event handlers.
	 */
	on?: DBaseOnOptions<EMITTER>;
}

export interface DTableDataParent {
	lock(): void;
	unlock(callIfNeeded: boolean): void;
	update(forcibly?: boolean): void;
}

export interface DTableData<ROW> extends utils.EventEmitter {
	/**
	 * A data selection.
	 */
	readonly selection: DTableDataSelection<ROW>;

	/**
	 * A data filter.
	 */
	readonly filter: DTableDataFilter<ROW>;

	/**
	 * A data sorter.
	 */
	readonly sorter: DTableDataSorter<ROW>;

	/**
	 * Sorted and filtered data.
	 */
	readonly mapped: DTableDataMapped<ROW>;

	/** A list of rows. */
	readonly rows: ROW[];

	bind(parent: DTableDataParent): void;

	update(forcibly?: boolean): void;

	lock(): void;

	unlock(callIfNeeded: boolean): void;

	/**
	 * Returns a size of rows.
	 */
	size(): number;

	/**
	 * Returns a row data at the specified index.
	 * The index is an index on rows filters and sorters are not applied.
	 *
	 * @param index  an index on rows filters and sorters are not applied
	 */
	get(index: number): ROW | null;

	/**
	 * Calls the specified iteratee on each datum of the specified index range.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each datum
	 * @param ifrom an index to start an iteration
	 * @param ito an index before which an interation stops
	 */
	each(iteratee: DTableDataEachIteratee<ROW>, ifrom?: number, ito?: number): void;
}
