/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toString = (value: unknown): string => {
	return value != null ? String(value) : "";
};
