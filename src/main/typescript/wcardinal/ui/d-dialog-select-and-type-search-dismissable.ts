/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectAndTypeSearch } from "./d-dialog-select-and-type-search";

export type DDialogSelectSearhDismissableFilter<VALUE> = (value: VALUE, word?: string) => boolean;

export interface DDialogSelectAndTypeSearhDismissableOptions<VALUE> {
	value: VALUE;
	filter?: DDialogSelectSearhDismissableFilter<VALUE>;
}

/**
 * {@link DDialogSelectAndType} dismissable search object.
 */
export interface DDialogSelectAndTypeSearchDismissable<VALUE> extends DDialogSelectAndTypeSearch<VALUE> {}
