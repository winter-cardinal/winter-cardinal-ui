/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DDiagramSerializedSnapGrid } from "../d-diagram-serialized";
import { ESnapperResult } from "./e-snapper-result";

export class ESnapperGrid extends utils.EventEmitter {
	protected _isEnabled: boolean;
	protected _size: number;

	constructor() {
		super();
		this._isEnabled = true;
		this._size = 10;
	}

	toggle(): boolean {
		this._isEnabled = ! this._isEnabled;
		this.emit( "change", this );
		return this._isEnabled;
	}

	enable(): void {
		if( this._isEnabled !== true ) {
			this._isEnabled = true;
			this.emit( "change", this );
		}
	}

	disable(): void {
		if( this._isEnabled !== false ) {
			this._isEnabled = false;
			this.emit( "change", this );
		}
	}

	isEnabled(): boolean {
		return this._isEnabled;
	}

	get size(): number {
		return this._size;
	}

	set size( size: number ) {
		if( this._size !== size ) {
			this._size = size;
			this.emit( "change", size, this );
		}
	}

	snap( value: number, result: ESnapperResult ): void {
		if( this._isEnabled ) {
			const size = this._size;
			result.set( value, Math.round( value / size ) * size );
		}
	}

	reset(): void {
		this._isEnabled = true;
		this._size = 10;
		this.emit( "change", this );
	}

	serialize(): DDiagramSerializedSnapGrid {
		return [
			(this._isEnabled ? 1 : 0),
			this._size
		];
	}

	deserialize( serialized: DDiagramSerializedSnapGrid ): void {
		if( serialized[ 0 ] !== 0 ) {
			this.enable();
		} else {
			this.disable();
		}

		this.size = serialized[ 1 ];
	}
}
