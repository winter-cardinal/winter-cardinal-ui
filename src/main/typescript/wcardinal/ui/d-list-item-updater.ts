/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListData } from "./d-list-data";
import { DListDataMapped } from "./d-list-data-mapped";
import { DListItem } from "./d-list-item";
import { DListItemUpdaterBase } from "./d-list-item-updater-base";

export class DListItemUpdater<VALUE = unknown> extends DListItemUpdaterBase<
	VALUE,
	DListData<VALUE>,
	DListDataMapped<VALUE>,
	DListItem<VALUE>
> {
	protected toMapped(data: DListData<VALUE>): DListDataMapped<VALUE> {
		return data.mapped;
	}

	protected set(
		value: VALUE,
		data: DListData<VALUE>,
		mapped: DListDataMapped<VALUE>,
		itemHeight: number,
		isSelected: boolean,
		item: DListItem<VALUE>,
		index: number,
		forcibly?: boolean
	): void {
		super.set(value, data, mapped, itemHeight, isSelected, item, index, forcibly);
		item.set(value, index, forcibly);
	}

	protected unset(itemHeight: number, item: DListItem<VALUE>, index: number): void {
		super.unset(itemHeight, item, index);
		item.unset();
	}

	protected create(
		data: DListData<VALUE>,
		mapped: DListDataMapped<VALUE>,
		isEven: boolean
	): DListItem<VALUE> {
		const result = new DListItem<VALUE>(data);
		result.state.isAlternated = isEven;
		return result;
	}
}
