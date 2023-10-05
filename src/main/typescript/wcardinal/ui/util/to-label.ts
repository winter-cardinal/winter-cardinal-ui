/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toLabelWith } from "./to-label-with";

export const toLabel = (target: any): string => {
	return toLabelWith(target, "");
};
