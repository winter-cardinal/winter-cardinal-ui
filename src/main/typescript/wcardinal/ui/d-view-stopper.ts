/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DViewStopper {
	stop(): void;
	toNormalizedScale( scale: number ): number;
}
