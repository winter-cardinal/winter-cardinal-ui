/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";

export interface Owner {
	focus(): void;
}

export interface Parent {
	parent: unknown;
}

export interface Closeable extends DisplayObject {
	close(): void;
}

export class DMenuContext {
	protected _owner: Owner;
	protected _closeables: Closeable[];

	constructor( owner: Owner ) {
		this._owner = owner;
		this._closeables = [];
	}

	protected indexOf( target: unknown ): number {
		return this._closeables.indexOf( target as any );
	}

	protected close( index: number ): void {
		const closeables = this._closeables;
		const imin = Math.max( 0, index );
		for( let i = closeables.length - 1; imin <= i; --i ) {
			closeables[ i ].close();
		}
	}

	add( closeable: Closeable ): void {
		this._closeables.push( closeable );
	}

	trim( closeable: Closeable | null ): void {
		this.close( this.indexOf( closeable ) + 1 );
	}

	remove( closeable: Closeable ): void {
		const index = this.indexOf( closeable );
		if( 0 <= index ) {
			this.close( index + 1 );
			this._closeables.splice( index, 1 );
		}
	}
}
