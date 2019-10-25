/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DDiagramSerializedSnapTarget, DDiagramSerializedSnapTargetValue } from "../d-diagram-serialized";
import { ESnapperResult } from "./e-snapper-result";
import { ESnapperTargetValue, ESnapperTargetValueType } from "./e-snapper-target-value";

export class ESnapperTarget extends utils.EventEmitter {
	values: ESnapperTargetValue[];
	protected _isVisible: boolean;
	protected _isEnabled: boolean;

	constructor() {
		super();
		this.values = [];
		this._isVisible = true;
		this._isEnabled = true;
	}

	isEnabled(): boolean {
		return this._isEnabled;
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

	add( target: ESnapperTargetValue, index?: number ): void {
		if( index != null ) {
			this.values.splice( index, 0, target );
		} else {
			this.values.push( target );
		}
		this.emit( "change", this );
	}

	remove( index: number ): void {
		const values = this.values;
		if( 0 <= index && index < values.length ) {
			values.splice( index, 1 );
			this.emit( "change", this );
		}
	}

	size(): number {
		return this.values.length;
	}

	replace( index: number, value: ESnapperTargetValue ): ESnapperTargetValue | null {
		const values = this.values;
		if( 0 <= index && index < values.length ) {
			const result = values[ index ];
			values[ index ] = value;
			this.emit( "change", this );
			return result;
		}
		return null;
	}

	swap( indexA: number, indexB: number ): void {
		if( indexA !== indexB ) {
			const values = this.values;
			const valueA = values[ indexA ];
			values[ indexA ] = values[ indexB ];
			values[ indexB ] = valueA;
		}
	}

	get visible(): boolean {
		return this._isVisible;
	}

	set visible( visible: boolean ) {
		if( this._isVisible !== visible ) {
			this._isVisible = visible;
			this.emit( "change", this );
		}
	}

	snap( px: number, py: number, x: ESnapperResult, y: ESnapperResult ): void {
		if( this._isEnabled ) {
			const values = this.values;
			for( let i = 0, imax = values.length; i < imax; ++i ) {
				const value = values[ i ];
				if( value.type === ESnapperTargetValueType.VERTICAL ) {
					x.set( px, value.position );
				} else {
					y.set( py, value.position );
				}
			}
		}
	}

	reset(): void {
		this._isEnabled = true;
		this._isVisible = true;
		this.values.length = 0;
		this.emit( "change", this );
	}

	serialize(): DDiagramSerializedSnapTarget {
		const targets: DDiagramSerializedSnapTargetValue[] = [];
		const values = this.values;
		for( let i = 0, imax = values.length; i < imax; ++i ) {
			targets.push( values[ i ].serialize() );
		}
		return [
			(this._isEnabled ? 1 : 0),
			(this._isVisible ? 1 : 0),
			targets
		];
	}

	deserialize( serialized: DDiagramSerializedSnapTarget ): void {
		// Availability
		this._isEnabled = ( serialized[ 0 ] !== 0 );

		// Visibility
		this._isVisible = ( serialized[ 1 ] !== 0 );

		// Values
		const sources = serialized[ 2 ];
		const values = this.values;
		values.length = 0;
		for( let i = 0, imax = sources.length; i < imax; ++i ) {
			const source = sources[ i ];
			values.push( new ESnapperTargetValue( source[ 0 ], source[ 1 ] ) );
		}
		this.emit( "change", this );
	}
}
