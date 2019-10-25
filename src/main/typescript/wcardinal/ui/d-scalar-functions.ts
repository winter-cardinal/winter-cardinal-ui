/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DScalarFunctions = {
	POSITION: {
		PADDING: ( p: number, s: number, d: number ) => d,
		CENTER: ( p: number, s: number ) => ( p - s ) * 0.5
	},
	SIZE: {
		MAXIMIZED: ( p: number ) => p,
		PADDING: ( p: number, s: number, d: number ) => p - d
	}
};
