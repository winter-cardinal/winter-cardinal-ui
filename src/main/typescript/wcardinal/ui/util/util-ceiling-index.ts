/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Returns a ceiling index of the given value.
 * The array must be sorted in an ascending order.
 *
 * @param array an array sorted in an ascending order
 * @param value a value to be searched
 * @returns a ceiling index of the given value
 */
export const utilCeilingIndex = <V>( array: V[], value: V, size: number, offset: number ): number => {
	let i0 = 0;
	let i1 = Math.floor( array.length / size ) - 1;

	while( i0 <= i1 ) {
		const i2 = i0 + ((i1 - i0) >> 1);
		const v2 = array[ i2 * size + offset ];
		if( value < v2 ) {
			i1 = i2 - 1;
		} else if( v2 < value ) {
			i0 = i2 + 1;
		} else {
			return i2;
		}
	}

	return Math.max( i0, i1 );
};
