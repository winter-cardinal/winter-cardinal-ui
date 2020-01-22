/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const isFunction = ( target: unknown ): target is Function => {
	return (typeof target) === "function";
};
