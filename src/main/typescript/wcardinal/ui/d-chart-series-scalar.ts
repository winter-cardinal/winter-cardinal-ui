/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utilIsArray } from "./util/util-is-array";
import { utilIsFunction } from "./util/util-is-function";

export type DChartSeriesScalar<T> = ( index: number ) => T;

export class DChartSeriesScalars {
	static from<T>(
		value: T | T[] | DChartSeriesScalar<T> | undefined,
		def: T | T[] | DChartSeriesScalar<T>
	): DChartSeriesScalar<T> {
		if( utilIsArray( value ) ) {
			return ( index: number ) => value[ index % value.length ];
		} else if( utilIsFunction( value ) ) {
			return value;
		} else if( value != null ) {
			return () => value;
		} else if( utilIsArray( def ) ) {
			return ( index: number ) => def[ index % def.length ];
		} else if( utilIsFunction( def ) ) {
			return def;
		} else {
			return () => def;
		}
	}
}
