/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectSearhImpl } from "./d-dialog-select-search-impl";
import { DInputSearch } from "./d-input-search";
import { UtilTransition } from "./util/util-transition";
import { DDialogSelectSearch } from "./d-dialog-select-search";
import { DDialogSelectSearhDismissableImpl } from "./d-dialog-select-search-dismissable-impl";
import { DDialogSelectBase, DDialogSelectBaseOptions, DThemeDialogSelectBase } from "./d-dialog-select-base";

/**
 * {@link DDialogSelect} search function.
 */
export type DDialogSelectSearchFunction<VALUE> = (word: string) => Promise<VALUE[]>;

/**
 * {@link DDialogSelect} controller.
 */
export interface DDialogSelectController<VALUE> {
	search: DDialogSelectSearch<VALUE> | DDialogSelectSearchFunction<VALUE>;
}

/**
 * {@link DDialogSelect} options.
 */
export interface DDialogSelectOptions<
	VALUE,
	THEME extends DThemeDialogSelectBase<VALUE> = DThemeDialogSelectBase<VALUE>
> extends DDialogSelectBaseOptions<VALUE, THEME> {
	controller?: DDialogSelectController<VALUE>;
}

export class DDialogSelect<
	VALUE = unknown,
	THEME extends DThemeDialogSelectBase<VALUE> = DThemeDialogSelectBase<VALUE>,
	OPTIONS extends DDialogSelectOptions<VALUE, THEME> = DDialogSelectOptions<VALUE, THEME>
> extends DDialogSelectBase<VALUE, THEME, OPTIONS> {
	protected _search?: DDialogSelectSearch<VALUE>;

	constructor(options?: OPTIONS) {
		super(options);

		// Controller binding
		const transition = new UtilTransition();
		const search = this.search;
		search.on("success", (e: unknown, results: VALUE[]): void => {
			if (0 < results.length) {
				transition.hide();
			} else {
				transition.show(this.noteNoItemsFound);
			}
			this.onSearched(results);
		});
		search.on("fail", (): void => {
			transition.show(this.noteError);
			this.onSearched([]);
		});
		search.on("change", (): void => {
			if (!search.isDone()) {
				const noteSearching = this.noteSearching;
				if (noteSearching) {
					transition.show(noteSearching);
				}
			}
		});
	}

	protected override newInput(): DInputSearch {
		const result = new DInputSearch(this.toInputOptions(this.theme, this._options));
		result.on("input", (value: string): void => {
			this.search.create([value]);
		});
		return result;
	}

	protected get search(): DDialogSelectSearch<VALUE> {
		let result = this._search;
		if (result == null) {
			result = this.newSearch();
			this._search = result;
		}
		return result;
	}

	protected newSearch(): DDialogSelectSearch<VALUE> {
		const options = this._options;
		if (options) {
			const controller = options.controller;
			if (controller) {
				const dismiss = options.dismiss;
				const search = controller.search;
				if ("create" in search) {
					if (dismiss != null) {
						return new DDialogSelectSearhDismissableImpl(search, dismiss);
					} else {
						return search;
					}
				} else {
					if (dismiss != null) {
						return new DDialogSelectSearhDismissableImpl(
							new DDialogSelectSearhImpl(search),
							dismiss
						);
					} else {
						return new DDialogSelectSearhImpl(search);
					}
				}
			}
		}
		return new DDialogSelectSearhImpl();
	}

	protected override onOpen(): void {
		super.onOpen();
		this.list.selection.clear();
		this.search.create([this.input.value]);
	}
}
