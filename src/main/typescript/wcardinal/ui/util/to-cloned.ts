/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isArray } from "./is-array";
import { isObject } from "./is-object";

const toClonedArray = <T extends unknown[]>(target: T): T => {
	const result: unknown[] = [];
	for (let i = 0, imax = target.length; i < imax; ++i) {
		result[i] = target[i];
	}
	return result as any;
};

const toClonedObject = <T>(target: T): T => {
	const result: Record<string, unknown> = {};
	for (const key in target) {
		if (Object.hasOwnProperty.call(target, key)) {
			result[key] = toCloned(target[key]);
		}
	}
	return result as any;
};

export const toCloned = <T>(target: T): T => {
	if (isArray(target)) {
		return toClonedArray(target);
	} else if (isObject(target)) {
		return toClonedObject(target);
	}
	return target;
};
