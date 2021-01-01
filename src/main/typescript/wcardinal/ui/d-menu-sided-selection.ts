/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, utils } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DListItem, DListItemSelection } from "./d-list-item";
import { DMenu } from "./d-menu";
import { isString } from "./util/is-string";

export enum DMenuSidedSelectionMode {
	NONE,
	SINGLE,
	SINGLE_ONCE,
	DEFAULT = SINGLE_ONCE
}

/**
 * {@link DMenuSidedSelection} events.
 */
export interface DMenuSidedSelectionEvents<EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change( emitter: EMITTER ): void;
}

/**
 * {@link DMenuSidedSelection} "on" options.
 */
export interface DMenuSidedSelectionOnOptions<EMITTER> extends Partial<DMenuSidedSelectionEvents<EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DMenuSidedSelection} options.
 */
export interface DMenuSidedSelectionOptions<EMITTER = any> {
	mode?: (keyof typeof DMenuSidedSelectionMode) | DMenuSidedSelectionMode;
	on?: DMenuSidedSelectionOnOptions<EMITTER>;
	filter?: ( item: DBase | null ) => boolean;
}

const defaultFilter = () => true;

export class DMenuSidedSelection extends utils.EventEmitter implements DListItemSelection {
	protected _content: Container;
	protected _item: DBase | null;
	protected _isDirty: boolean;
	protected _mode: DMenuSidedSelectionMode;
	protected _filter: ( item: DBase | null ) => boolean;

	constructor( content: Container, options?: DMenuSidedSelectionOptions ) {
		super();

		this._content = content;
		this._item = null;
		this._isDirty = true;
		this._mode = ( options && options.mode != null ?
			(isString( options.mode ) ? DMenuSidedSelectionMode[ options.mode ] : options.mode) :
			DMenuSidedSelectionMode.DEFAULT
		);
		this._filter = ( options && options.filter ) || this.getFilterDefault();

		// Events
		const on = options && options.on;
		if( on ) {
			for( const name in on ) {
				const handler = on[ name ];
				if( handler ) {
					this.on( name, handler );
				}
			}
		}
	}

	toDirty() {
		this._isDirty = true;
	}

	update() {
		if( this._isDirty ) {
			this._isDirty = false;
			this.update_( this._content );
		}
	}

	protected hasMenu( child: any ): child is { menu: DMenu<any> } {
		return child && child.menu instanceof DMenu;
	}

	protected update_( root: Container ): void {
		const children = root.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DListItem ) {
				if( child.state.isActive ) {
					this.set_( child, false );
				}
			}

			if( child instanceof Container ) {
				this.update_( child );
			}

			if( this.hasMenu( child ) ) {
				this.update_( child.menu );
			}
		}
	}

	add( item: DBase ): void {
		this.update();
		this.set_( item, true );
	}

	set( item: DBase ): void {
		this.update();
		this.set_( item, true );
	}

	get(): DBase | null {
		this.update();
		return this._item;
	}

	size(): number {
		return ( this._item ? 1 : 0 );
	}

	isEmpty(): boolean {
		return this._item == null;
	}

	remove( item: DBase ): void {
		this.update();
		if( this._item === item ) {
			this.set_( null, true );
		}
	}

	clear(): void {
		this.update();
		this.set_( null, true );
	}

	protected getFilterDefault(): ( item: DBase | null ) => boolean {
		return defaultFilter;
	}

	protected set_( item: DBase | null, emit: boolean ): void {
		const oldItem = this._item;
		const mode = this._mode;
		if( mode !== DMenuSidedSelectionMode.NONE && this._filter( item ) && oldItem !== item ) {
			this.setState( oldItem, mode, false );
			this._item = item;
			this.setState( item, mode, true );
			if( emit ) {
				this.emit( "change", this );
			}
		}
	}

	protected setState( item: DBase | null, mode: DMenuSidedSelectionMode, isOn: boolean ): void {
		if( item ) {
			if( mode === DMenuSidedSelectionMode.SINGLE ) {
				item.state.isActive = isOn;
			} else {
				if( isOn ) {
					item.state.addAll( DBaseState.ACTIVE, DBaseState.READ_ONLY );
				} else {
					item.state.removeAll( DBaseState.ACTIVE, DBaseState.READ_ONLY );
				}
			}
		}
	}
}
