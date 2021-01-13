import { utils } from "pixi.js";
import { DTableData, DTableDataMapped, DTableDataOptions, DTableDataParent } from "./d-table-data";
import { DTableDataFilter } from "./d-table-data-filter";
import { DTableDataListFilter } from "./d-table-data-list-filter";
import { DTableDataListMapped } from "./d-table-data-list-mapped";
import { DTableDataSelection, DTableDataSelectionOptions } from "./d-table-data-selection";
import { DTableDataListSelection } from "./d-table-data-list-selection";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableDataListSorter } from "./d-table-data-list-sorter";

export interface DTableDataListOptions<ROW> extends DTableDataOptions<ROW> {
	rows?: ROW[];
}

export class DTableDataList<ROW> extends utils.EventEmitter implements DTableData<ROW> {
	protected _parent: DTableDataParent | null;
	protected _rows: ROW[];
	protected _filter: DTableDataListFilter<ROW>;
	protected _sorter: DTableDataListSorter<ROW>;
	protected _selection: DTableDataSelection<ROW>;
	protected _mapped: DTableDataMapped<ROW>;

	constructor( options?: DTableDataListOptions<ROW> ) {
		super();

		this._parent = null;
		this._rows = this.toRows( options?.rows );
		this._mapped = new DTableDataListMapped<ROW>( this );
		this._selection = this.toSelection( options?.selection );
		this._filter = new DTableDataListFilter<ROW>( this );
		this._sorter = new DTableDataListSorter<ROW>( this );
		if( options ) {
			// Filter
			const filter = options.filter;
			if( filter ) {
				this._filter.set( filter );
			}

			// Comparator
			const comparator = options.comparator;
			if( comparator ) {
				this._sorter.set( comparator );
			}

			// Events
			const on = options.on;
			if( on ) {
				for( const name in on ) {
					const handler = on[ name ];
					if( handler ) {
						this.on( name, handler );
					}
				}
			}
		}
	}

	protected toSelection( options?: DTableDataSelection<ROW> | DTableDataSelectionOptions ): DTableDataSelection<ROW> {
		if( options instanceof utils.EventEmitter ) {
			return options;
		}
		return this.newSelection( options );
	}

	protected newSelection( options?: DTableDataSelectionOptions ): DTableDataSelection<ROW> {
		return new DTableDataListSelection( this, options );
	}

	bind( parent: DTableDataParent ): void {
		this._parent = parent;
	}

	protected toRows( row?: ROW[] ): ROW[] {
		const result: ROW[] = [];
		if( row != null ) {
			for( let i = 0, imax = row.length; i < imax; ++i ) {
				result.push( row[ i ] );
			}
		}
		return result;
	}

	get rows(): ROW[] {
		return this._rows;
	}

	update(): void {
		const parent = this._parent;
		if( parent ) {
			parent.update();
		}
	}

	lock(): void {
		const parent = this._parent;
		if( parent ) {
			parent.lock();
		}
	}

	unlock(): void {
		const parent = this._parent;
		if( parent ) {
			parent.unlock( false );
			parent.update();
		}
	}

	size(): number {
		return this._rows.length;
	}

	clear(): void {
		const rows = this._rows;
		if( 0 < rows.length ) {
			rows.length = 0;
			this.lock();
			this._selection.clear();
			this._sorter.toDirty();
			this._filter.toDirty();
			this.unlock();
		}
	}

	clearAndAdd( row: ROW ): void {
		const rows = this._rows;
		rows.length = 0;
		rows.push( row );
		this.lock();
		this._selection.clear();
		this._sorter.toDirty();
		this._filter.toDirty();
		this.unlock();
	}

	clearAndAddAll( newRows: ROW[] ): void {
		const rows = this._rows;
		rows.length = 0;
		for( let i = 0, imax = newRows.length; i < imax; ++i ) {
			rows.push( newRows[ i ] );
		}
		this.lock();
		this._selection.clear();
		this._sorter.toDirty();
		this._filter.toDirty();
		this.unlock();
	}

	add( row: ROW, index?: number ): void {
		const rows = this._rows;
		const selection = this._selection;
		const sorter = this._sorter;
		const filter = this._filter;
		if( index == null ) {
			rows.push( row );
			this.lock();
			sorter.toDirty();
			filter.toDirty();
			this.unlock();
		} else if( 0 <= index && index < rows.length ) {
			rows.splice( index, 0, row );
			this.lock();
			selection.shift( index, 1 );
			sorter.toDirty();
			filter.toDirty();
			this.unlock();
		}
	}

	addAll( newRows: ROW[], index?: number ): void {
		const rows = this._rows;
		const rowsLength = rows.length;
		const selection = this._selection;
		const sorter = this._sorter;
		const filter = this._filter;
		if( index == null ) {
			const newRowsLength = newRows.length;
			for( let i = 0, imax = newRowsLength; i < imax; ++i ) {
				rows.push( newRows[ i ] );
			}
			this.lock();
			sorter.toDirty();
			filter.toDirty();
			this.unlock();
		} else if( 0 <= index && index < rowsLength ) {
			const newRowsLength = newRows.length;
			for( let i = 0; i < newRowsLength; ++i ) {
				rows.splice( index + i, 0, newRows[ i ] );
			}
			this.lock();
			selection.shift( index, newRowsLength );
			sorter.toDirty();
			filter.toDirty();
			this.unlock();
		}
	}

	get( index: number ): ROW | null {
		const rows = this._rows;
		if( 0 <= index && index < rows.length ) {
			return rows[ index ];
		}
		return null;
	}

	set( index: number, row: ROW ): ROW | null {
		const rows = this._rows;
		if( 0 <= index && index < rows.length ) {
			const result = rows[ index ];
			rows[ index ] = row;
			this.lock();
			this._sorter.toDirty();
			this._filter.toDirty();
			this.unlock();
			return result;
		}
		return null;
	}

	remove( index: number ): ROW | null {
		const rows = this._rows;
		if( 0 <= index && index < rows.length ) {
			const result = rows.splice( index, 1 )[ 0 ];
			this.lock();
			this._selection.remove( index );
			this._sorter.toDirty();
			this._filter.toDirty();
			this.unlock();
			return result;
		}
		return null;
	}

	each( iteratee: ( row: ROW, index: number ) => boolean | void, ifrom?: number, ito?: number ): void {
		const rows = this._rows;
		ifrom = ( ifrom != null ? Math.max( 0, ifrom ) : 0 );
		ito = ( ito != null ? Math.min( rows.length, ito ) : rows.length );
		for( let i = ifrom; i < ito; ++i ) {
			const row = rows[ i ];
			if( iteratee( row, i ) === false ) {
				break;
			}
		}
	}

	get selection(): DTableDataSelection<ROW> {
		return this._selection;
	}

	get filter(): DTableDataFilter<ROW> {
		return this._filter;
	}

	get sorter(): DTableDataSorter<ROW> {
		return this._sorter;
	}

	get mapped(): DTableDataMapped<ROW> {
		return this._mapped;
	}
}
