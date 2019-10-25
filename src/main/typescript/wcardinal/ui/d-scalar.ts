/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DScalar {
	calculate( parent: number, self: number, padding: number, current: number ): number;
}
