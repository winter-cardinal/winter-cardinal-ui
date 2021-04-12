/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DOnFunction = (...args: any[]) => any;

export interface DOnOptions {
	[key: string]: DOnFunction | undefined;
}
