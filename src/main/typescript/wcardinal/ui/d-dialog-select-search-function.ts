/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DDialogSelect} uncategorized search function.
 */
export type DDialogSelectSearchFunctionUncategorized<VALUE> = (word: string) => Promise<VALUE[]>;

/**
 * {@link DDialogSelect} categorized search function.
 */
export type DDialogSelectSearchFunctionCategorized<VALUE, CATEGORY, CATEGORY_ID> = (
	word: string,
	categoryId: CATEGORY_ID | null
) => Promise<VALUE[]>;

/**
 * {@link DDialogSelect} search function.
 */
export type DDialogSelectSearchFunction<VALUE, CATEGORY, CATEGORY_ID> =
	| DDialogSelectSearchFunctionUncategorized<VALUE>
	| DDialogSelectSearchFunctionCategorized<VALUE, CATEGORY, CATEGORY_ID>;

export const DDialogSelectSearchFunctions = {
	isCategorized<VALUE, CATEGORY, CATEGORY_ID>(
		search: DDialogSelectSearchFunction<VALUE, CATEGORY, CATEGORY_ID>
	): search is DDialogSelectSearchFunctionUncategorized<VALUE> {
		return search.length <= 1;
	},

	toCategorized<VALUE, CATEGORY, CATEGORY_ID>(
		search?: DDialogSelectSearchFunction<VALUE, CATEGORY, CATEGORY_ID>
	): DDialogSelectSearchFunctionCategorized<VALUE, CATEGORY, CATEGORY_ID> {
		if (search == null) {
			return (word: string, categoryId: CATEGORY_ID | null) => Promise.resolve([]);
		} else if (this.isCategorized(search)) {
			return (word: string, categoryId: CATEGORY_ID | null) => {
				return search(word);
			};
		} else {
			return search;
		}
	}
};