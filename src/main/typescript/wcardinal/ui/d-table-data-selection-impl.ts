/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableData } from "./d-table-data";
import { DTableDataSelection, DTableDataSelectionOptions, DTableDataSelectionType } from "./d-table-data-selection";
import { utilIsString } from "./util/util-is-string";

const COMPARATOR = ( a: [number, unknown], b: [number, unknown] ): number => {
	return a[ 0 ] - b[ 0 ];
};

export interface DTableDataSelectionImplParent<ROW> extends DTableData<ROW> {
	update(): void;
}

export class DTableDataSelectionImpl<ROW> extends utils.EventEmitter implements DTableDataSelection<ROW> {
	protected _parent: DTableDataSelectionImplParent<ROW>;
	protected _type: DTableDataSelectionType;
	protected _indices: Set<number>;

	constructor( parent: DTableDataSelectionImplParent<ROW>, options?: DTableDataSelectionOptions ) {
		super();

		this._parent = parent;
		this._type = this.toType( options );
		this._indices = new Set<number>();
	}

	protected toType( options?: DTableDataSelectionOptions ): DTableDataSelectionType {
		return ( options && options.type != null ?
			( utilIsString( options.type ) ? DTableDataSelectionType[ options.type ] : options.type ) :
			DTableDataSelectionType.NONE
		);
	}

	get type(): DTableDataSelectionType {
		return this._type;
	}

	protected onChange(): void {
		this._parent.update();
		this.emit( "change", this );
	}

	toggle( rowIndex: number ): void {
		const indices = this._indices;
		if( indices.has( rowIndex ) ) {
			indices.delete( rowIndex );
		} else {
			indices.add( rowIndex );
		}
		this.onChange();
	}

	add( rowIndex: number ): void {
		const indices = this._indices;
		const oldSize = indices.size;
		indices.add( rowIndex );
		const newSize = indices.size;
		if( oldSize !== newSize ) {
			this.onChange();
		}
	}

	protected getFirstIndex(): number | null {
		const indices = this._indices;
		if( 0 < indices.size ) {
			let result: number = NaN;
			indices.forEach(( index: number ): void => {
				if( result !== result ) {
					result = index;
				}
			});
			return result;
		}
		return null;
	}

	protected getLastIndex(): number | null {
		const indices = this._indices;
		if( 0 < indices.size ) {
			let result: number = 0;
			indices.forEach(( index: number ): void => {
				result = index;
			});
			return result;
		}
		return null;
	}

	addTo( rowIndex: number ): void {
		const lastRowIndex = this.getLastIndex();
		if( lastRowIndex != null ) {
			this.addRange( lastRowIndex, false, rowIndex, true );
		}
	}

	addRange( from: number, includeFrom: boolean, to: number, includeTo: boolean ): void {
		const indices = this._indices;
		const oldSize = indices.size;
		if( from < to ) {
			for( let i = from + (includeFrom ? 0 : 1), imax = to + (includeTo ? 1 : 0); i < imax; ++i ) {
				indices.add( i );
			}
		} else {
			for( let i = to + (includeTo ? 0 : 1), imax = from + (includeFrom ? 1 : 0); i < imax; ++i ) {
				indices.add( i );
			}
		}
		const newSize = indices.size;
		if( oldSize !== newSize ) {
			this.onChange();
		}
	}

	addAll( rowIndices: number[] ): void {
		const indices = this._indices;
		const oldSize = indices.size;
		for( let i = 0, imax = rowIndices.length; i < imax; ++i ) {
			indices.add( rowIndices[ i ] );
		}
		const newSize = indices.size;
		if( oldSize !== newSize ) {
			this.onChange();
		}
	}

	contains( rowIndex: number ): boolean {
		return this._indices.has( rowIndex );
	}

	remove( rowIndex: number ): void {
		if( this._indices.delete( rowIndex ) ) {
			this.onChange();
		}
	}

	clear(): void {
		const indices = this._indices;
		if( 0 < indices.size ) {
			indices.clear();
			this.onChange();
		}
	}

	clearAndAdd( rowIndex: number ): void {
		const indices = this._indices;
		if( ! indices.has( rowIndex ) || indices.size !== 1 ) {
			indices.clear();
			indices.add( rowIndex );
			this.onChange();
		}
	}

	clearAndAddAll( rowIndices: number[] ): void {
		const indices = this._indices;
		if( 0 < indices.size || 0 < rowIndices.length ) {
			indices.clear();
			for( let i = 0, imax = rowIndices.length; i < imax; ++i ) {
				indices.add( rowIndices[ i ] );
			}
			this.onChange();
		}
	}

	shift( rowIndex: number, amount: number ): void {
		const shifted: number[] = [];
		const indices = this._indices;
		indices.forEach(( index: number ): void => {
			if( rowIndex <= index ) {
				shifted.push( index );
			}
		});
		const shiftedLength = shifted.length;
		if( 0 < shiftedLength ) {
			for( let i = 0, imax = shifted.length; i < imax; ++i ) {
				indices.delete( shifted[ i ] );
			}
			for( let i = 0, imax = shifted.length; i < imax; ++i ) {
				indices.add( shifted[ i ] + amount );
			}
			this.onChange();
		}
	}

	size(): number {
		return this._indices.size;
	}

	isEmpty(): boolean {
		return this._indices.size === 0;
	}

	/**
	 * Returns a copy of an index array of selected rows.
	 * The order of indices is an insertion order.
	 */
	get indices(): number[] {
		const result: number[] = [];
		this._indices.forEach(( index: number ): void => {
			result.push( index );
		});
		return result;
	}

	/**
	 * Returns a copy of an array of selected row value.
	 * The order is an insertion order.
	 */
	get rows(): ROW[] {
		const result: ROW[] = [];
		const parent = this._parent;
		this._indices.forEach(( index: number ): void => {
			result.push( parent.get( index )! );
		});
		return result;
	}

	/**
	 * Returns an array of the (index, row value) pairs of selected rows.
	 * The order of pairs is an insertion order.
	 */
	toArray(): Array<[ number, ROW ]> {
		const result: Array<[ number, ROW ]> = [];
		const parent = this._parent;
		this._indices.forEach(( index: number ): void => {
			result.push([ index, parent.get( index )! ]);
		});
		return result;
	}

	/**
	 * Returns an sorted array of the (index, row value) pairs of selected rows.
	 */
	toSortedArray(): Array<[ number, ROW ]> {
		return this.toArray().sort( COMPARATOR );
	}

	toObject(): {[index: number]: ROW} {
		const result: {[index: number]: ROW} = {};
		const parent = this._parent;
		this._indices.forEach(( index: number ): void => {
			result[ index ] = parent.get( index )!;
		});
		return result;
	}

	toMap(): Map<number, ROW> {
		const result: Map<number, ROW> = new Map<number, ROW>();
		const parent = this._parent;
		this._indices.forEach(( index: number ): void => {
			result.set( index, parent.get( index )! );
		});
		return result;
	}
}
