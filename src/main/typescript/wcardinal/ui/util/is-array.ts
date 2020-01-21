/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const isArray = Array.isArray || (( target: any ): target is unknown[] => {
	return Object.prototype.toString.call( target ) === "[object Array]";
});
