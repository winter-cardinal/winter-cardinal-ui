/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DDialogSelect} search function.
 */
export type DDialogSelectSearchFunction<VALUE, CATEGORY_ID> = (
	word: string,
	categoryId?: CATEGORY_ID | null
) => Promise<VALUE[]>;
