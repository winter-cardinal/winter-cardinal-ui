/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const isObject = (target: any): target is Record<string, unknown> => {
	if (
		typeof target === "object" &&
		Object.prototype.toString.call(target) === "[object Object]"
	) {
		const prototype = Object.getPrototypeOf(target);
		return prototype == null || prototype === Object.prototype;
	}
	return false;
};
