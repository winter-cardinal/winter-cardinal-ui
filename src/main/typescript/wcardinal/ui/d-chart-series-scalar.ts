/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isArray } from "./util/is-array";
import { isFunction } from "./util/is-function";

export type DChartSeriesScalar<T> = ( index: number ) => T;

export class DChartSeriesScalars {
	static from<T>(
		value: T | T[] | DChartSeriesScalar<T> | undefined,
		def: T | T[] | DChartSeriesScalar<T>
	): DChartSeriesScalar<T> {
		if( isArray( value ) ) {
			return ( index: number ) => value[ index % value.length ];
		} else if( isFunction( value ) ) {
			return value;
		} else if( value != null ) {
			return () => value;
		} else if( isArray( def ) ) {
			return ( index: number ) => def[ index % def.length ];
		} else if( isFunction( def ) ) {
			return def;
		} else {
			return () => def;
		}
	}
}
