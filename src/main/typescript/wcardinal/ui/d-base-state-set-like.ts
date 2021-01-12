/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSetDataLike } from "./d-base-state-set-data-like";

export interface DBaseStateSetLike {
	local: string[];
	data: DBaseStateSetDataLike;
}
