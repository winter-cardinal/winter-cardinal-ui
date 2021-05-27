/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItemUpdaterBaseDataMapped } from "./d-list-item-updater-base";

export interface DListDataMapped<ITEM> extends DListItemUpdaterBaseDataMapped<ITEM> {
	each(iteratee: (item: ITEM, index: number) => void | boolean, from?: number, to?: number): void;
}
