/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const isString = ( target: unknown ): target is string => {
	return ( typeof target === "string" ) ||
		( Object.prototype.toString.call( target ) === "[object String]" );
};
