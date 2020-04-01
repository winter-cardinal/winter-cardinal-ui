import { utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataSelection, DTableDataSelectionOptions } from "./d-table-data-selection";
import { DTableDataComparatorFunction, DTableDataComparatorObject, DTableDataSorter } from "./d-table-data-sorter";

export type DTableDataMappedEachIteratee<ROW> = (
	row: ROW, supplimental: unknown, index: number, unmappedIndex: number
) => void | boolean;

export interface DTableDataMapped<ROW> {
	/**
	 * Returns an mapped index of the specified unmapped index.
	 * A mapped index is an index on rows filters and sorters are applied.
	 *
	 * @param unmappedIndex a unmapped index
	 */
	map( unmappedIndex: number ): number | null;

	/**
	 * Returns an unmapped index of the specified mapped index.
	 * A mapped index is an index on rows filters and sorters are applied.
	 *
	 * @param index a mapped index
	 */
	unmap( index: number ): number;

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
	get( index: number ): ROW | null;

	/**
	 * Calls the specified iteratee on each mapped datum of the specified index range.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each mapped datum
	 * @param ifrom an index to start an iteration
	 * @param ito an index before which an interation stops
	 */
	each( iteratee: DTableDataMappedEachIteratee<ROW>, ifrom?: number, iend?: number ): void;
}

export type DTableDataEachIteratee<ROW> = ( row: ROW, index: number ) => void | boolean;

export interface DTableDataOptions<ROW, SELF = any> {
	/**
	 * Selection options.
	 */
	selection?: DTableDataSelectionOptions;

	/**
	 * A filter.
	 */
	filter?: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW>;

	/**
	 * A comparator.
	 */
	comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;

	/**
	 * Mappings of event names and event handlers.
	 */
	on?: DBaseOnOptions<SELF>;
}

export interface DTableDataParent {
	lock(): void;
	unlock( callIfNeeded: boolean ): void;
	update( forcibly?: boolean ): void;
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

	bind( parent: DTableDataParent ): void;

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
	get( index: number ): ROW | null;

	/**
	 * Calls the specified iteratee on each datum of the specified index range.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each datum
	 * @param ifrom an index to start an iteration
	 * @param ito an index before which an interation stops
	 */
	each( iteratee: DTableDataEachIteratee<ROW>, ifrom?: number, ito?: number ): void;
}
