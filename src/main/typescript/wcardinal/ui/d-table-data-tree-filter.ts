/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataTreeItem } from "./d-table-data-tree-item";
import { DTableDataTreeItemAccessor } from "./d-table-data-tree-item-accessor";
import { isFunction } from "./util/is-function";

interface DTableDataTreeFilterParent<NODE> {
	readonly nodes: NODE[] | undefined;
	readonly accessor: DTableDataTreeItemAccessor<NODE>;
	isOpened( node: NODE ): boolean;
	update(): void;
}

export class DTableDataTreeFilter<NODE extends DTableDataTreeItem<NODE, NODE>>
	extends utils.EventEmitter implements DTableDataFilter<NODE> {
	protected _id: number;
	protected _idUpdated: number;
	protected _isApplied: boolean;
	protected _parent: DTableDataTreeFilterParent<NODE>;
	protected _filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE> | null;
	protected _filtered: number[] | null;

	constructor( parent: DTableDataTreeFilterParent<NODE> ) {
		super();

		this._id = 0;
		this._idUpdated = -1;
		this._isApplied = false;

		this._parent = parent;
		this._filter = null;
		this._filtered = null;
	}

	get id(): number {
		return this._id;
	}

	apply(): void {
		this._isApplied = true;
		this._id += 1;
		this._parent.update();
	}

	unapply(): void {
		if( this._isApplied ) {
			this._isApplied = false;
			this._id += 1;
			this._parent.update();
		}
	}

	isApplied(): boolean {
		return this._isApplied;
	}

	protected isFiltered(
		node: NODE, index: number,
		filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE>
	): boolean {
		if( isFunction( filter ) ) {
			return filter( node, index );
		} else {
			return filter.test( node, index );
		}
	}

	protected hasFiltered(
		parent: DTableDataTreeFilterParent<NODE>,
		nodes: NODE[],
		filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE>
	): boolean {
		const toChildren = this._parent.accessor.toChildren;
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			const node = nodes[ i ];
			if( this.isFiltered( node, -1, filter ) ) {
				return true;
			}
			const children = toChildren( node );
			if( children != null && 0 < children.length && this.hasFiltered( parent, children, filter ) ) {
				return true;
			}
		}
		return false;
	}

	protected addAllToFiltered(
		parent: DTableDataTreeFilterParent<NODE>,
		nodes: NODE[],
		filtered: number[],
		cursor: [ number ]
	): void {
		const toChildren = this._parent.accessor.toChildren;
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			const node = nodes[ i ];
			filtered.push( cursor[ 0 ] );
			cursor[ 0 ] += 1;
			const children = toChildren( node );
			if( children != null && 0 < children.length && parent.isOpened( node ) ) {
				this.addAllToFiltered( parent, children, filtered, cursor );
			}
		}
	}

	protected newFilteredSub(
		parent: DTableDataTreeFilterParent<NODE>,
		nodes: NODE[],
		filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE>,
		filtered: number[],
		cursor: [ number ]
	): boolean {
		let result = false;
		const toChildren = this._parent.accessor.toChildren;
		for( let i = 0, imax = nodes.length; i < imax; ++i ) {
			const node = nodes[ i ];
			const index = cursor[ 0 ];
			cursor[ 0 ] += 1;
			const isFiltered = this.isFiltered( node, index, filter );
			const children = toChildren( node );
			if( children != null && 0 < children.length ) {
				if( parent.isOpened( node ) ) {
					if( isFiltered ) {
						filtered.push( index );
						result = true;
						this.addAllToFiltered( parent, children, filtered, cursor );
					} else {
						const position = filtered.length;
						if( this.newFilteredSub( parent, children, filter, filtered, cursor ) ) {
							filtered.splice( position, 0, index );
							result = true;
						}
					}
				} else if( isFiltered || this.hasFiltered( parent, children, filter ) ) {
					filtered.push( index );
					result = true;
				}
			} else if( isFiltered ) {
				filtered.push( index );
				result = true;
			}
		}
		return result;
	}

	protected newFiltered(): number[] | null {
		const filter = this._filter;
		if( filter != null ) {
			const filtered: number[] = [];
			const parent = this._parent;
			const nodes = parent.nodes;
			if( nodes ) {
				const cursor: [ number ] = [ 0 ];
				this.newFilteredSub( parent, nodes, filter, filtered, cursor );
			}
			return filtered;
		}
		return null;
	}

	get(): DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE> | null {
		return this._filter;
	}

	set( filter: DTableDataFilterFunction<NODE> | DTableDataFilterObject<NODE> | null ): void {
		if( this._filter !== filter ) {
			this._filter = filter;
		}
	}

	toDirty(): void {
		this._id += 1;
	}

	update(): void {
		if( this._id !== this._idUpdated ) {
			this._idUpdated = this._id;
			if( this._isApplied ) {
				this._filtered = this.newFiltered();
				this.emit( "change", this );
			} else if( this._filtered != null ) {
				this._filtered = null;
				this.emit( "change", this );
			}
		}
	}

	get indices(): number[] | null {
		this.update();
		return this._filtered;
	}

	map( sortedIndex: number ): number | null {
		let result = sortedIndex;

		const indices = this.indices;
		if( indices ) {
			const index = indices.indexOf( result );
			if( 0 <= index ) {
				result = index;
			} else {
				return null;
			}
		}

		return result;
	}

	unmap( index: number ): number {
		let result = index;

		const indices = this.indices;
		if( indices ) {
			result = indices[ result ];
		}

		return result;
	}
}
