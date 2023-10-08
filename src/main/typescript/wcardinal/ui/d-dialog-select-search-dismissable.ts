/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectSearch } from "./d-dialog-select-search";

export type DDialogSelectSearhDismissableFilter<VALUE, CATEGORY_ID> = (
	value: VALUE,
	word?: string,
	categoryId?: CATEGORY_ID | null
) => boolean;

export interface DDialogSelectSearhDismissableOptions<VALUE, CATEGORY_ID> {
	value: VALUE;
	filter?: DDialogSelectSearhDismissableFilter<VALUE, CATEGORY_ID>;
}

/**
 * {@link DDialogSelect} dismissable search object.
 */
export interface DDialogSelectSearchDismissable<VALUE, CATEGORY_ID>
	extends DDialogSelectSearch<VALUE, CATEGORY_ID> {}
