/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isObject } from "./is-object";
import { toCloned } from "./to-cloned";

export const toMerged = <T, U>(one: T, other: U): Exclude<T & U, null | undefined> => {
	if (one != null) {
		const o = toCloned(one) as any;
		if (other != null) {
			for (const key in other) {
				if (Object.prototype.hasOwnProperty.call(other, key)) {
					const otherValue = other[key];
					if (isObject(otherValue)) {
						if (Object.prototype.hasOwnProperty.call(o, key)) {
							const oneValue = o[key];
							if (isObject(oneValue)) {
								toMerged(oneValue, otherValue);
							} else {
								// DO NOTHING
							}
						} else {
							o[key] = toCloned(otherValue);
						}
					} else {
						if (!Object.prototype.hasOwnProperty.call(o, key)) {
							o[key] = otherValue;
						}
					}
				}
			}
		}
		return o;
	} else if (other != null) {
		return toCloned(other) as any;
	} else {
		return {} as any;
	}
};
