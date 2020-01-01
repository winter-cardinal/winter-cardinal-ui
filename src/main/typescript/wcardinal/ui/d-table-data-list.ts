import { utils } from "pixi.js";
import { DTableData, DTableDataMapped, DTableDataOptions, DTableDataParent } from "./d-table-data";
import { DTableDataFilter } from "./d-table-data-filter";
import { DTableDataFilterImpl } from "./d-table-data-filter-impl";
import { DTableDataMappedList } from "./d-table-data-mapped-list";
import { DTableDataSelection } from "./d-table-data-selection";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableBodySorterImpl } from "./d-table-data-sorter-impl";

export class DTableDataList<ROW> extends utils.EventEmitter implements DTableData<ROW> {
	protected _parent: DTableDataParent | null;
	protected _rows: ROW[];
	protected _filter: DTableDataFilterImpl<ROW>;
	protected _sorter: DTableBodySorterImpl<ROW>;
	protected _selection: DTableDataSelectionImpl<ROW>;
	protected _mapped: DTableDataMappedList<ROW>;

	constructor( options?: DTableDataOptions<ROW> ) {
		super();

		this._parent = null;
		this._mapped = new DTableDataMappedList<ROW>( this );
		this._rows = this.toRows( options && options.rows );
		this._selection = new DTableDataSelectionImpl<ROW>( this, options && options.selection );
		this._filter = new DTableDataFilterImpl<ROW>( this );
		this._sorter = new DTableBodySorterImpl<ROW>( this );
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
					this.on( name, on[ name ] );
				}
			}
		}
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
			this._sorter.clear();
			this._filter.clear();
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

	addAll( rows: ROW[], index?: number ): void {
		const data = this._rows;
		const dataLength = data.length;
		const selection = this._selection;
		const sorter = this._sorter;
		const filter = this._filter;
		if( index == null ) {
			const rowsLength = rows.length;
			for( let i = 0, imax = rowsLength; i < imax; ++i ) {
				data.push( rows[ i ] );
			}
			this.lock();
			sorter.toDirty();
			filter.toDirty();
			this.unlock();
		} else if( 0 <= index && index < dataLength ) {
			const rowsLength = rows.length;
			for( let i = 0; i < rowsLength; ++i ) {
				data.splice( index + i, 0, rows[ i ] );
			}
			this.lock();
			selection.shift( index, rowsLength );
			sorter.toDirty();
			filter.toDirty();
			this.unlock();
		}
	}

	get( index: number ): ROW | null {
		const data = this._rows;
		if( 0 <= index && index < data.length ) {
			return data[ index ];
		}
		return null;
	}

	set( index: number, row: ROW ): ROW | null {
		const data = this._rows;
		if( 0 <= index && index < data.length ) {
			const result = data[ index ];
			data[ index ] = row;
			this._sorter.toDirty();
			this._filter.toDirty();
			this.update();
			return result;
		}
		return null;
	}

	remove( index: number ): ROW | null {
		const data = this._rows;
		if( 0 <= index && index < data.length ) {
			const result = data.splice( index, 1 )[ 0 ];
			this.lock();
			this._selection.remove( index );
			this._sorter.toDirty();
			this._filter.toDirty();
			this.unlock();
			return result;
		}
		return null;
	}

	each( iterator: ( row: ROW, index: number ) => boolean | void, ifrom?: number, ito?: number ): void {
		const data = this._rows;
		ifrom = ( ifrom != null ? Math.max( 0, ifrom ) : 0 );
		ito = ( ito != null ? Math.min( data.length, ito ) : data.length );
		for( let i = ifrom; i < ito; ++i ) {
			const row = data[ i ];
			if( iterator( row, i ) === false ) {
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
