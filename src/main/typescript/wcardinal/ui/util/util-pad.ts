/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const utilPad = ( str: string, length: number, c: string ): string => {
	const strLength = str.length;
	if( length < strLength ) {
		return str;
	}
	let padding = "";
	for( let i = 0, imax = length - strLength; i < imax; ++i ) {
		padding += c;
	}
	return padding + str;
};
