/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};
