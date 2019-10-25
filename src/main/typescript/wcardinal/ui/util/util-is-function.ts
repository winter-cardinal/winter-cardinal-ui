/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const utilIsFunction = ( target: unknown ): target is Function => {
	return (typeof target) === "function";
};
