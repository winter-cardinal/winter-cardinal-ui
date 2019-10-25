/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const utilIsString = ( target: unknown ): target is string => {
	return ( typeof target === "string" ) ||
		( Object.prototype.toString.call( target ) === "[object String]" );
};
