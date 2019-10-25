/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

export enum DTableSelectionType {
	NONE,
	SINGLE,
	MULTIPLE
}

const COMPARATOR = ( a: [number, unknown], b: [number, unknown] ): number => {
	return a[ 0 ] - b[ 0 ];
};

export class DTableSelection<ROW> extends utils.EventEmitter {
	protected _type: DTableSelectionType;
	protected _indices: Set<number>;
	protected _data: ROW[];
	protected _onChange: () => void;

	constructor( type: DTableSelectionType, data: ROW[], onChange: () => void ) {
		super();

		this._type = type;
		this._indices = new Set<number>();
		this._data = data;
		this._onChange = onChange;
	}

	get type(): DTableSelectionType {
		return this._type;
	}

	protected onChange(): void {
		this._onChange();
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
	get rows(): unknown[] {
		const result: unknown[] = [];
		const data = this._data;
		this._indices.forEach(( index: number ): void => {
			result.push( data[ index ] );
		});
		return result;
	}

	/**
	 * Returns an array of the (index, row value) pairs of selected rows.
	 * The order of pairs is an insertion order.
	 */
	toArray(): Array<[ number, unknown ]> {
		const result: Array<[ number, unknown ]> = [];
		const data = this._data;
		this._indices.forEach(( index: number ): void => {
			result.push([ index, data[ index ]]);
		});
		return result;
	}

	/**
	 * Returns an sorted array of the (index, row value) pairs of selected rows.
	 */
	toSortedArray(): Array<[ number, unknown ]> {
		return this.toArray().sort( COMPARATOR );
	}

	toObject(): {[index: number]: unknown} {
		const result: {[index: number]: unknown} = {};
		const data = this._data;
		this._indices.forEach(( index: number ): void => {
			result[ index ] = data[ index ];
		});
		return result;
	}

	toMap(): Map<number, unknown> {
		const result: Map<number, unknown> = new Map<number, unknown>();
		const data = this._data;
		this._indices.forEach(( index: number ): void => {
			result.set( index, data[ index ] );
		});
		return result;
	}
}
