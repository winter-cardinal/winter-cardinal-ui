/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectListItem } from "./d-dialog-select-list-item";
import { DListData } from "./d-list-data";
import { DListItemUpdater } from "./d-list-item-updater";

export class DDialogSelectListItemUpdater<VALUE = unknown> extends DListItemUpdater<VALUE> {
	protected create(
		data: DListData<VALUE>,
		mapped: DListData<VALUE>,
		isEven: boolean
	): DDialogSelectListItem<VALUE> {
		const result = new DDialogSelectListItem<VALUE>(data);
		result.state.isAlternated = isEven;
		return result;
	}
}
