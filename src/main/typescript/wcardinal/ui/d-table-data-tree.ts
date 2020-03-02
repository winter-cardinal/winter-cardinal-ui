import { utils } from "pixi.js";
import { DTableData, DTableDataMapped, DTableDataOptions, DTableDataParent } from "./d-table-data";
import { DTableDataFilter } from "./d-table-data-filter";
import { DTableDataFilterImpl } from "./d-table-data-filter-impl";
import { DTableDataListMapped } from "./d-table-data-list-mapped";
import { DTableDataSelection } from "./d-table-data-selection";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableDataSorterImpl } from "./d-table-data-sorter-impl";

export interface DTableDataTreeItem<PARENT, CHILD> {
	parent?: PARENT;
	children?: CHILD[];
}

export class DTableDataTree<ROW extends DTableDataTreeItem<ROW, ROW>> extends utils.EventEmitter
	implements DTableData<ROW> {
	protected _parent: DTableDataParent | null;
	protected _targets?: ROW[];
	protected _rows: ROW[];
	protected _supplimentals: number[];
	protected _flags: WeakMap<ROW, number>;
	protected _filter: DTableDataFilterImpl<ROW>;
	protected _sorter: DTableDataSorterImpl<ROW>;
	protected _selection: DTableDataSelectionImpl<ROW>;
	protected _mapped: DTableDataMapped<ROW>;

	constructor( options?: DTableDataOptions<ROW> ) {
		super();

		this._parent = null;
		this._mapped = new DTableDataListMapped<ROW>( this );
		this._rows = [];
		this._supplimentals = [];
		this._flags = new WeakMap<ROW, number>();
		this._selection = new DTableDataSelectionImpl<ROW>( this, options && options.selection );
		this._filter = new DTableDataFilterImpl<ROW>( this );
		this._sorter = new DTableDataSorterImpl<ROW>( this );
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

		// Update rows
		this.tree = options && options.rows;
	}

	bind( parent: DTableDataParent ): void {
		this._parent = parent;
	}

	get tree(): ROW[] | undefined {
		return this._targets;
	}

	set tree( targets: ROW[] | undefined ) {
		this._targets = targets;
		this.updateRows( targets );
		this._sorter.toDirty();
		this._filter.toDirty();
		this.update( true );
	}

	get rows(): ROW[] {
		return this._rows;
	}

	get supplimentals(): number[] {
		return this._supplimentals;
	}

	protected updateRows( targets: ROW[] | undefined ): void {
		const rows = this._rows;
		const supplimentals = this._supplimentals;
		const flags = this._flags;
		if( targets != null ) {
			const irows = this.updateRows_( targets, 0, 0, rows, supplimentals, flags );
			if( irows !== rows.length ) {
				rows.length = irows;
				supplimentals.length = irows;
			}
		} else {
			rows.length = 0;
			supplimentals.length = 0;
		}
	}

	protected toSupplimental( ilevel: number, hasChildren: boolean, isOpened: boolean ) {
		return (ilevel << 2) | (hasChildren ? 2 : 0) | (isOpened ? 1 : 0);
	}

	protected updateRows_(
		targets: ROW[],
		irows: number,
		ilevel: number,
		rows: ROW[],
		supplimentals: number[],
		flags: WeakMap<ROW, number>
	): number {
		for( let i = 0, imax = targets.length; i < imax; ++i ) {
			const target = targets[ i ];
			const children = target.children;
			const isOpened = flags.has( target );
			const supplimental = this.toSupplimental( ilevel, !! (children && 0 < children.length), isOpened );
			if( irows < rows.length ) {
				rows[ irows ] = target;
				supplimentals[ irows ] = supplimental;
			} else {
				rows.push( target );
				supplimentals.push( supplimental );
			}
			irows += 1;

			if( isOpened && children ) {
				irows = this.updateRows_( children, irows, ilevel + 1, rows, supplimentals, flags );
			}
		}
		return irows;
	}

	update( forcibly?: boolean ): void {
		const parent = this._parent;
		if( parent ) {
			parent.update( forcibly );
		}
	}

	size(): number {
		return this._rows.length;
	}

	get( index: number ): ROW | null {
		const rows = this._rows;
		if( 0 <= index && index < rows.length ) {
			return rows[ index ];
		}
		return null;
	}

	open( row: ROW ): void {
		const flags = this._flags;
		if( ! flags.has( row ) ) {
			flags.set( row, 1 );
			this.updateRows( this._targets );
			this.update( true );
		}
	}

	close( row: ROW ): void {
		const flags = this._flags;
		if( flags.has( row ) ) {
			flags.delete( row );
			this.updateRows( this._targets );
			this.update( true );
		}
	}

	isOpened( row: ROW ): boolean {
		return this._flags.has( row );
	}

	toggle( row: ROW ): void {
		const flags = this._flags;
		if( flags.has( row ) ) {
			flags.delete( row );
		} else {
			flags.set( row, 1 );
		}
		this.updateRows( this._targets );
		this.update( true );
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
