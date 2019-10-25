/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilAlpha {
	static blend( alphaA: number, alphaB: number, t: number ): number {
		const w = Math.max( 0, Math.min( 1, t ) );
		return Math.max( 0, Math.min( 1, alphaA * (1 - w) + alphaB * w ) );
	}
}
