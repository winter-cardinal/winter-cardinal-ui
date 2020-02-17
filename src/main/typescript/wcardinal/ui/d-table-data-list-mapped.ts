import { DTableData, DTableDataMapped, DTableDataMappedEachIterator } from "./d-table-data";

export interface DTableDataListMappedParent<ROW> extends DTableData<ROW> {
	readonly rows: ROW[];
	readonly supplimentals?: unknown[];
}

export class DTableDataListMapped<ROW> implements DTableDataMapped<ROW> {
	protected _parent: DTableDataListMappedParent<ROW>;

	constructor( parent: DTableDataListMappedParent<ROW> ) {
		this._parent = parent;
	}

	map( unmappedIndex: number ): number | null {
		const parent = this._parent;
		const sortedIndex = parent.sorter.map( unmappedIndex );
		if( sortedIndex != null ) {
			return parent.filter.map( sortedIndex );
		}
		return null;
	}

	unmap( index: number ): number {
		const parent = this._parent;
		return parent.sorter.unmap(
			parent.filter.unmap( index )
		);
	}

	size(): number {
		const parent = this._parent;
		const indicesFiltered = parent.filter.indices;
		return ( indicesFiltered != null ? indicesFiltered.length : parent.size() );
	}

	get( index: number ): ROW | null {
		const parent = this._parent;
		return parent.get( this.unmap( index ) );
	}

	each( iterator: DTableDataMappedEachIterator<ROW>, ifrom?: number, ito?: number ): void {
		const parent = this._parent;
		const rows = parent.rows;
		const supplimentals = parent.supplimentals;
		const indicesFiltered = parent.filter.indices;
		const indicesSorted = parent.sorter.indices;
		ifrom = ( ifrom != null ? Math.max( 0, ifrom ) : 0 );
		if( indicesFiltered ) {
			const size = indicesFiltered.length;
			ito = ( ito != null ? Math.min( size, ito ) : size );
			if( indicesSorted ) {
				for( let i = ifrom; i < ito; ++i ) {
					const unmappedIndex = indicesSorted[ indicesFiltered[ i ] ];
					const row = rows[ unmappedIndex ];
					const supplimental = ( supplimentals ? supplimentals[ unmappedIndex ] : null );
					if( iterator( row, supplimental, i, unmappedIndex ) === false ) {
						break;
					}
				}
			} else {
				for( let i = ifrom; i < ito; ++i ) {
					const unmappedIndex = indicesFiltered[ i ];
					const row = rows[ unmappedIndex ];
					const supplimental = ( supplimentals ? supplimentals[ unmappedIndex ] : null );
					if( iterator( row, supplimental, i, unmappedIndex ) === false ) {
						break;
					}
				}
			}
		} else {
			const size = rows.length;
			ito = ( ito != null ? Math.min( size, ito ) : size );
			if( indicesSorted ) {
				for( let i = ifrom; i < ito; ++i ) {
					const unmappedIndex = indicesSorted[ i ];
					const row = rows[ unmappedIndex ];
					const supplimental = ( supplimentals ? supplimentals[ unmappedIndex ] : null );
					if( iterator( row, supplimental, i, unmappedIndex ) === false ) {
						break;
					}
				}
			} else {
				for( let i = ifrom; i < ito; ++i ) {
					const row = rows[ i ];
					const supplimental = ( supplimentals ? supplimentals[ i ] : null );
					if( iterator( row, supplimental, i, i ) === false ) {
						break;
					}
				}
			}
		}
	}
}
