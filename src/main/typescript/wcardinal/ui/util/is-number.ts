/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const isNumber = (target: unknown): target is number => {
	return (
		typeof target === "number" || Object.prototype.toString.call(target) === "[object Number]"
	);
};
