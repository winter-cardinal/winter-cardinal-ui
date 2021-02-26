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

	add( value: EShapeActionValue, index?: number ): this {
		const values = this.values;
		if( index != null ) {
			values.splice( index, 0, value );
		} else {
			values.push( value );
		}
		return this;
	}

	addAll( values: EShapeActionValue[] ): this {
		const destination = this.values;
		for( let i = 0, imax = values.length; i < imax; ++i) {
			destination.push( values[i] );
		}
		return this;
	}

	clearAndAdd( value: EShapeActionValue ): this {
		this.clear();
		this.add( value );
		return this;
	}

	clearAndAddAll( values: EShapeActionValue[] ): this {
		this.clear();
		this.addAll( values );
		return this;
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
		const values = this.values;
		if( 0 <= index || index < values.length ) {
			return values[ index ];
		}
		return null;
	}

	set( index: number, value: EShapeActionValue ): EShapeActionValue | null {
		const values = this.values;
		if( 0 <= index || index < values.length ) {
			const result = values[ index ];
			values[ index ] = value;
			return result;
		}
		return null;
	}

	remove( index: number ): EShapeActionValue | null {
		const values = this.values;
		if( 0 <= index || index < values.length ) {
			return values.splice( index, 1 )[ 0 ];
		}
		return null;
	}

	clear(): this {
		this.values.length = 0;
		return this;
	}

	size(): number {
		return this.values.length;
	}

	swap( indexA: number, indexB: number ): this {
		const values = this.values;
		const tmp = values[ indexB ];
		values[ indexB ] = values[ indexA ];
		values[ indexA ] = tmp;
		return this;
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
