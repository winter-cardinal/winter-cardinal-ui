/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectSearch } from "./d-dialog-select-search";

export type DDialogSelectSearhDismissableFilter<VALUE> = (value: VALUE, word?: string) => boolean;

export interface DDialogSelectSearhDismissableOptions<VALUE> {
	value: VALUE;
	filter?: DDialogSelectSearhDismissableFilter<VALUE>;
}

/**
 * {@link DDialogSelect} dismissable search object.
 */
export interface DDialogSelectSearchDismissable<VALUE> extends DDialogSelectSearch<VALUE> {}
