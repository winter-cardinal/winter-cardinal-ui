/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionValue } from "./e-shape-action-value";

export class EShapeAction {
	values: EShapeActionValue[];

	constructor() {
		this.values = [];
	}

	add( value: EShapeActionValue, index?: number ): void {
		const values = this.values;
		if( index != null ) {
			values.splice( index, 0, value );
		} else {
			values.push( value );
		}
	}

	addAll( values: EShapeActionValue[] ): void {
		const sources = values;
		const destinations = this.values;
		for( let i = 0, imax = sources.length; i < imax; ++i) {
			destinations.push( sources[i] );
		}
	}

	indexOf( target: EShapeActionValue ): number {
		const values = this.values;

		// Instance-based matching
		for( let i = 0, imax = values.length; i < imax; ++i ) {
			const value = values[ i ];
			if( value === target ) {
				return i;
			}
		}

		// Data-based matching
		for( let i = 0, imax = values.length; i < imax; ++i ) {
			const value = values[ i ];
			if( value.isEquals( target ) ) {
				return i;
			}
		}

		return -1;
	}

	get( index: number ): EShapeActionValue | null {
		const result = this.values[ index ];
		if( result != null ) {
			return result;
		}
		return null;
	}

	set( index: number, value: EShapeActionValue ): void {
		this.values[ index ] = value;
	}

	remove( index: number ): void {
		this.values.splice( index, 1 );
	}

	clear(): void {
		this.values.length = 0;
	}

	size(): number {
		return this.values.length;
	}

	swap( indexA: number, indexB: number ): void {
		const values = this.values;
		const tmp = values[ indexB ];
		values[ indexB ] = values[ indexA ];
		values[ indexA ] = tmp;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number[] {
		const result: number[] = [];
		const values = this.values;
		for( let i = 0, imax = values.length; i < imax; ++i ) {
			result.push( values[ i ].serialize( manager ) );
		}
		return result;
	}
}
