import { utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataSelection, DTableDataSelectionOptions } from "./d-table-data-selection";
import { DTableDataSorter, DTableDataSorterFunction, DTableDataSorterObject } from "./d-table-data-sorter";

export type DTableDataMappedEachIterator<ROW> = ( row: ROW, index: number, unmappedIndex: number ) => void | boolean;

export interface DTableDataMapped<ROW> {
	/**
	 * Returns an index of the specified mapped index.
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

	each( iterator: DTableDataMappedEachIterator<ROW>, ifrom?: number, iend?: number ): void;
}

export type DTableDataEachIterator<ROW> = ( row: ROW, index: number ) => void | boolean;

export interface DTableDataOptions<ROW> {
	rows?: ROW[];
	selection?: DTableDataSelectionOptions;
	filter?: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW>;
	sorter?: DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW>;

	/**
	 * Mappings of event names and event handlers.
	 */
	on?: DBaseOnOptions;
}

export interface DTableDataParent {
	lock(): void;
	unlock( callIfNeeded: boolean ): void;
	update( forcibly?: boolean ): void;
}

export interface DTableData<ROW> extends utils.EventEmitter {
	readonly selection: DTableDataSelection<ROW>;
	readonly filter: DTableDataFilter<ROW>;
	readonly sorter: DTableDataSorter<ROW>;
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
	 * Calls the specified iterator on each datum of the specified index range.
	 * If called iterator explicitly returns false, stops an iteration.
	 *
	 * @param iterator
	 * @param ifrom
	 * @param ito
	 */
	each( iterator: DTableDataEachIterator<ROW>, ifrom?: number, ito?: number ): void;
}
