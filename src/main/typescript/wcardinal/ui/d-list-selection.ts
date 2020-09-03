/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, utils } from "pixi.js";
import { DBase } from "./d-base";

export enum DListSelectionMode {
	NONE,
	SINGLE,
	MULTIPLE
}

/**
 * {@link DListSelection} events.
 */
export interface DListSelectionEvents<EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change( emitter: EMITTER ): void;
}

/**
 * {@link DListSelection} "on" options.
 */
export interface DListSelectionOnOptions<EMITTER>
	extends Partial<DListSelectionEvents<EMITTER> & Record<string, Function>> {

}

/**
 * {@link DListSelection} options.
 */
export interface DListSelectionOptions<EMITTER = any> {
	mode?: DListSelectionMode;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DListSelectionOnOptions<EMITTER>;
}

export class DListSelection extends utils.EventEmitter {
	protected _content: Container;
	protected _isDirty: boolean;
	protected _indices: number[];
	protected _mode: DListSelectionMode;

	constructor( content: Container, options?: DListSelectionOptions ) {
		super();

		this._content = content;
		this._isDirty = false;
		this._indices = [];
		this._mode = ( options && options.mode != null ? options.mode : DListSelectionMode.SINGLE );

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
			const indices = this._indices;
			indices.length = 0;
			const content = this._content;
			const children = content.children;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					if( child.state.isActive ) {
						indices.push( i );
					}
				}
			}
		}
	}

	size() {
		this.update();
		return this._indices.length;
	}

	isEmpty(): boolean {
		return this.size() <= 0;
	}

	first<T>(): T | null {
		return this.get( 0 );
	}

	get<T>( index: number ): T | null {
		this.update();
		const indices = this._indices;
		if( 0 <= index && index < indices.length ) {
			const content = this._content;
			const child = content.children[ indices[ index ] ];
			if( child != null ) {
				return child as any;
			}
		}
		return null;
	}

	getIndex( index: number ): number | null {
		this.update();
		const indices = this._indices;
		if( 0 <= index && index < indices.length ) {
			return indices[ index ];
		}
		return null;
	}

	clear(): void {
		this.update();
		const indices = this._indices;
		if( 0 < indices.length ) {
			const content = this._content;
			const children = content.children;
			for( let i = 0, imax = indices.length; i < imax; ++i ) {
				const child = children[ indices[ i ] ];
				if( child instanceof DBase ) {
					child.state.isActive = false;
				}
			}
			indices.length = 0;
			this.emit( "change", this );
		}
	}

	add<T extends DBase<any, any>>( target: T ) {
		const mode = this._mode;
		const content = this._content;
		if( mode === DListSelectionMode.SINGLE ) {
			if( ! target.state.isActive ) {
				this.update();

				// Remove the existing
				const indices = this._indices;
				const children = content.children;
				for( let i = 0, imax = indices.length; i < imax; ++i ) {
					const child = children[ indices[ i ] ];
					if( child instanceof DBase ) {
						child.state.isActive = false;
					}
				}
				indices.length = 0;

				// Add a new child
				indices.push( content.getChildIndex( target ) );
				target.state.isActive = true;

				// Event
				this.emit( "change", this );
			}
		} else if( mode === DListSelectionMode.MULTIPLE ) {
			if( ! target.state.isActive ) {
				if( this._isDirty ) {
					target.state.isActive = true;
					this.emit( "change", this );
				} else {
					// Find an insertion position
					const indices = this._indices;
					const targetIndex = content.getChildIndex( target );
					for( let i = 0, imax = indices.length; i < imax; ++i ) {
						const index = indices[ i ];
						if( targetIndex === index ) {
							target.state.isActive = true;
							return;
						} else if( targetIndex < index ) {
							indices.splice( i, 0, targetIndex );
							target.state.isActive = true;
							this.emit( "change", this );
							return;
						}
					}

					// Push
					indices.push( targetIndex );
					target.state.isActive = true;
					this.emit( "change", this );
				}
			}
		}
	}

	remove<T extends DBase<any, any>>( target: T ) {
		if( ! target.state.isActive ) {
			if( this._isDirty ) {
				target.state.isActive = false;
				this.emit( "change", this );
			} else {
				const indices = this._indices;
				const content = this._content;
				const targetIndex = content.getChildIndex( target );
				for( let i = 0, imax = indices.length; i < imax; ++i ) {
					const index = indices[ i ];
					if( targetIndex === index ) {
						indices.splice( i, 1 );
						target.state.isActive = false;
						this.emit( "change", this );
						return;
					}
				}
			}
		}
	}
}
