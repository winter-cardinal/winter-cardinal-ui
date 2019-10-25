/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class DAnimationTimings {
	static LINEAR( t: number ): number {
		return t;
	}

	static ELASTIC( t: number ): number {
		return t * ( 3 * (1 - t) * (1 - t) + t * ( 3 * (1 - t) + t ) );
	}

	static QUAD_IN_OUT( t: number ): number {
		return t < 0.5 ? 2 * t * t : -1 + ( 4 - 2 * t ) * t;
	}
}
