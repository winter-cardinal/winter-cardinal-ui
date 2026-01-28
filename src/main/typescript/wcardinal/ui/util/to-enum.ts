/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isString } from "./is-string";

export const toEnum = <T, TE>(target: T, te: TE): Exclude<T, keyof TE> => {
	return isString(target) ? (te as any)[target] : (target as Exclude<T, keyof TE>);
};
