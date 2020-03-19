import { utils } from "pixi.js";
import { DTableData, DTableDataMapped, DTableDataOptions, DTableDataParent } from "./d-table-data";
import { DTableDataFilter } from "./d-table-data-filter";
import { DTableDataFilterTree } from "./d-table-data-filter-tree";
import { DTableDataListMapped } from "./d-table-data-list-mapped";
import { DTableDataSelection } from "./d-table-data-selection";
import { DTableDataSelectionImpl } from "./d-table-data-selection-impl";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableDataSorterTree } from "./d-table-data-sorter-tree";
import { DTableDataTreeItem } from "./d-table-data-tree-item";

export interface DTableDataTreeOptions<NODE> extends DTableDataOptions<NODE> {
	nodes?: NODE[];
}

export class DTableDataTree<NODE extends DTableDataTreeItem<NODE, NODE>> extends utils.EventEmitter
	implements DTableData<NODE> {
	protected _parent: DTableDataParent | null;
	protected _nodes?: NODE[];
	protected _rows: NODE[];
	protected _isRowsDirty: boolean;
	protected _supplimentals: number[];
	protected _flags: WeakMap<NODE, number>;
	protected _filter: DTableDataFilterTree<NODE>;
	protected _sorter: DTableDataSorterTree<NODE>;
	protected _selection: DTableDataSelectionImpl<NODE>;
	protected _mapped: DTableDataMapped<NODE>;

	constructor( options?: DTableDataTreeOptions<NODE> ) {
		super();

		this._parent = null;
		this._mapped = new DTableDataListMapped<NODE>( this );
		this._rows = [];
		this._isRowsDirty = false;
		this._supplimentals = [];
		this._flags = new WeakMap<NODE, number>();
		this._selection = new DTableDataSelectionImpl<NODE>( this, options && options.selection );
		this._filter = new DTableDataFilterTree<NODE>( this );
		this._sorter = new DTableDataSorterTree<NODE>();
		if( options ) {
			// Filter
			const filter = options.filter;
			if( filter ) {
				this._filter.set( filter );
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
		this.nodes = options && options.nodes;
	}

	bind( parent: DTableDataParent ): void {
		this._parent = parent;
	}

	get nodes(): NODE[] | undefined {
		return this._nodes;
	}

	set nodes( nodes: NODE[] | undefined ) {
		this._nodes = nodes;
		this._isRowsDirty = true;
		this._filter.toDirty();
		this.update( true );
	}

	get rows(): NODE[] {
		if( this._isRowsDirty ) {
			this._isRowsDirty = false;
			this.updateRows( this._nodes );
		}
		return this._rows;
	}

	get supplimentals(): number[] {
		return this._supplimentals;
	}

	protected updateRows( nodes: NODE[] | undefined ): void {
		const rows = this._rows;
		const supplimentals = this._supplimentals;
		const flags = this._flags;
		if( nodes != null ) {
			const irows = this.updateRows_( nodes, 0, 0, rows, supplimentals, flags );
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
		nodes: NODE[],
		irows: number,
		ilevel: number,
		rows: NODE[],
		supplimentals: number[],
		flags: WeakMap<NODE, number>
	): number {
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			const node = nodes[ i ];
			const children = node.children;
			const isOpened = flags.has( node );
			const supplimental = this.toSupplimental( ilevel, !! (children && 0 < children.length), isOpened );
			if( irows < rows.length ) {
				rows[ irows ] = node;
				supplimentals[ irows ] = supplimental;
			} else {
				rows.push( node );
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
		return this.rows.length;
	}

	get( index: number ): NODE | null {
		const rows = this.rows;
		if( 0 <= index && index < rows.length ) {
			return rows[ index ];
		}
		return null;
	}

	open( node: NODE ): void {
		const flags = this._flags;
		if( ! flags.has( node ) ) {
			flags.set( node, 1 );
			this._isRowsDirty = true;
			this._filter.toDirty();
			this.update( true );
		}
	}

	close( node: NODE ): void {
		const flags = this._flags;
		if( flags.has( node ) ) {
			flags.delete( node );
			this._isRowsDirty = true;
			this._filter.toDirty();
			this.update( true );
		}
	}

	isOpened( node: NODE ): boolean {
		return this._flags.has( node );
	}

	toggle( node: NODE ): void {
		const flags = this._flags;
		if( flags.has( node ) ) {
			flags.delete( node );
		} else {
			flags.set( node, 1 );
		}
		this._isRowsDirty = true;
		this._filter.toDirty();
		this.update( true );
	}

	each( iteratee: ( node: NODE, index: number ) => boolean | void, ifrom?: number, ito?: number ): void {
		const rows = this.rows;
		ifrom = ( ifrom != null ? Math.max( 0, ifrom ) : 0 );
		ito = ( ito != null ? Math.min( rows.length, ito ) : rows.length );
		for( let i = ifrom; i < ito; ++i ) {
			const row = rows[ i ];
			if( iteratee( row, i ) === false ) {
				break;
			}
		}
	}

	get selection(): DTableDataSelection<NODE> {
		return this._selection;
	}

	get filter(): DTableDataFilter<NODE> {
		return this._filter;
	}

	get sorter(): DTableDataSorter<NODE> {
		return this._sorter;
	}

	get mapped(): DTableDataMapped<NODE> {
		return this._mapped;
	}
}
