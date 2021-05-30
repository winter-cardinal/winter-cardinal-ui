/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListData } from "./d-list-data";
import { DListDataMapped } from "./d-list-data-mapped";
import { DListItem } from "./d-list-item";
import { DItemUpdater, DItemUpdaterOptions } from "./d-item-updater";

export interface DListItemUpdaterOptions<VALUE>
	extends DItemUpdaterOptions<VALUE, DListData<VALUE>, DListItem<VALUE>> {}

export class DListItemUpdater<VALUE = unknown> extends DItemUpdater<
	VALUE,
	DListData<VALUE>,
	DListDataMapped<VALUE>,
	DListItem<VALUE>,
	DListItemUpdaterOptions<VALUE>
> {
	protected toMapped(data: DListData<VALUE>): DListDataMapped<VALUE> {
		return data.mapped;
	}

	protected newItem(this: undefined, data: DListData<VALUE>): DListItem<VALUE> {
		return new DListItem<VALUE>(data);
	}
}
