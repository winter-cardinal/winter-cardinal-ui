/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isNumber } from "./is-number";
import { isString } from "./is-string";

export const toId = (target: any): unknown => {
	if (target != null) {
		if (isString(target)) {
			return target;
		} else if (isNumber(target)) {
			return target;
		} else if ("id" in target) {
			return target.id;
		} else if ("name" in target) {
			return target.name;
		} else if ("label" in target) {
			return target.label;
		}
	}
	return 0;
};
