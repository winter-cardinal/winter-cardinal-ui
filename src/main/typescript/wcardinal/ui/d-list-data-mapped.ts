/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DItemUpdaterDataMapped } from "./d-item-updater";

export interface DListDataMapped<ITEM> extends DItemUpdaterDataMapped<ITEM> {
	each(iteratee: (item: ITEM, index: number) => void | boolean, from?: number, to?: number): void;
}
