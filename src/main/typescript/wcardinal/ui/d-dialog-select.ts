/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import {
	DDialogLayered,
	DDialogLayeredEvents,
	DDialogLayeredOptions,
	DThemeDialogLayered
} from "./d-dialog-layered";
import { DDialogSelectList, DDialogSelectListOptions } from "./d-dialog-select-list";
import { DDialogSelectSearhImpl } from "./d-dialog-select-search-impl";
import { DInputSearch, DInputSearchOptions } from "./d-input-search";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DListOptions } from "./d-list";
import { DListDataSelection } from "./d-list-data-selection";
import { DNote, DNoteOptions } from "./d-note";
import { DNoteSmallError } from "./d-note-small-error";
import { DNoteSmallNoItemsFound } from "./d-note-small-no-items-found";
import { DNoteSmallSearching } from "./d-note-small-searching";
import { DOnOptions } from "./d-on-options";
import { UtilTransition } from "./util/util-transition";
import { DDialogSelectSearch } from "./d-dialog-select-search";
import { DSelect, DSelectOptions } from "./d-select";
import { DMenu } from "./d-menu";
import { DDialogSelectSearchFunction } from "./d-dialog-select-search-function";
import { DButton, DButtonOptions } from "./d-button";

export interface DDialogSelectInputOpitons extends DInputSearchOptions {
	margin?: number;
}

/**
 * {@link DDialogSelect} controller.
 */
export interface DDialogSelectController<VALUE, CATEGORY_ID = unknown> {
	search:
		| DDialogSelectSearch<VALUE, CATEGORY_ID>
		| DDialogSelectSearchFunction<VALUE, CATEGORY_ID>;
}

/**
 * {@link DDialogSelect} note options.
 */
export interface DDialogSelectNoteOptions {
	error?: DNoteOptions | null;
	noItemsFound?: DNoteOptions | null;
	searching?: DNoteOptions | null;
}

export type DDialogSelectItemToLabel<VALUE> = (result: VALUE, caller: any) => string;

export type DDialogSelectItemIsEqual<VALUE> = (a: VALUE, b: VALUE, caller: any) => boolean;

/**
 * {@link DDialogSelect} events.
 */
export interface DDialogSelectEvents<VALUE, EMITTER> extends DDialogLayeredEvents<VALUE, EMITTER> {
	select(value: VALUE, self: EMITTER): void;
}

/**
 * {@link DDialogSelect} category dismiss options.
 */
export interface DDialogSelectCategoryDismissOptions {
	enable?: boolean;
	label?: string;
}

export interface DDialogSelectCategory<CATEGORY_ID> {
	id: CATEGORY_ID;
	label: string;
}

/**
 * {@link DDialogSelect} category options.
 */
export interface DDialogSelectCategoryOptions<VALUE, CATEGORY_ID>
	extends DSelectOptions<CATEGORY_ID | null> {
	dismiss?: DDialogSelectCategoryDismissOptions;
	items?: DDialogSelectCategory<CATEGORY_ID>[];
}

/**
 * {@link DDialogSelect} "on" options.
 */
export interface DDialogSelectOnOptions<VALUE, EMITTER>
	extends Partial<DDialogSelectEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDialogSelect} "dismiss" options.
 */
export interface DDialogSelectDismissableOptions extends DButtonOptions<string> {
	enabled?: boolean;
}

/**
 * {@link DDialogSelect} options.
 */
export interface DDialogSelectOptions<
	VALUE,
	CATEGORY_ID = unknown,
	THEME extends DThemeDialogSelect<VALUE, CATEGORY_ID> = DThemeDialogSelect<VALUE, CATEGORY_ID>,
	EMITTER = any
> extends DDialogLayeredOptions<VALUE, THEME> {
	controller?: DDialogSelectController<VALUE, CATEGORY_ID>;
	category?: DDialogSelectCategoryOptions<VALUE, CATEGORY_ID>;
	dismiss?: DDialogSelectDismissableOptions;
	input?: DDialogSelectInputOpitons;
	list?: DListOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogSelect} theme.
 */
export interface DThemeDialogSelect<VALUE = unknown, CATEGORY_ID = unknown>
	extends DThemeDialogLayered {
	getInputMargin(): number;
	isDismissable(): boolean;
	getDismissLabel(): string;
	isCategoryDismissable(): boolean;
	getCategoryDismissLabel(): string;
}

export class DDialogSelect<
	VALUE = unknown,
	CATEGORY_ID = unknown,
	THEME extends DThemeDialogSelect<VALUE, CATEGORY_ID> = DThemeDialogSelect<VALUE, CATEGORY_ID>,
	OPTIONS extends DDialogSelectOptions<VALUE, CATEGORY_ID, THEME> = DDialogSelectOptions<
		VALUE,
		CATEGORY_ID,
		THEME
	>
> extends DDialogLayered<VALUE | null, THEME, OPTIONS> {
	protected _value: VALUE | null;
	protected _selectCategory?: DSelect<CATEGORY_ID | null>;
	protected _isCategoryFetched?: boolean;
	protected _categories: DDialogSelectCategory<CATEGORY_ID>[];
	protected _input?: DInputSearch;
	protected _inputLayout?: DLayoutHorizontal;
	protected _list?: DDialogSelectList<VALUE>;
	protected _search?: DDialogSelectSearch<VALUE, CATEGORY_ID>;
	protected _noteError?: DNote | null;
	protected _noteNoItemsFound?: DNote | null;
	protected _noteSearching?: DNote | null;
	protected _buttonDismiss?: DButton<string> | null;

	constructor(options?: OPTIONS) {
		super(options);

		// Value
		this._value = null;

		// Categories
		const categories = options?.category?.items ?? [];
		this._categories = categories;
		if (0 < categories.length) {
			this.onCategoriesChange(categories);
		}

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

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		const result = super.newContentChildren(theme, options);
		result.push(this.inputLayout, this.list, this.buttonDismiss);
		return result;
	}

	protected get inputLayout(): DLayoutHorizontal {
		return (this._inputLayout ??= this.newInputLayout());
	}

	protected newInputLayout(): DLayoutHorizontal {
		return new DLayoutHorizontal({
			width: "padding",
			height: "auto",
			children: [this.selectCategory, this.input]
		});
	}

	protected newSpace(): DLayoutSpace {
		return new DLayoutSpace({
			width: this.toInputMargin(this.theme, this._options)
		});
	}

	protected get selectCategory(): DSelect<CATEGORY_ID | null> {
		return (this._selectCategory ??= this.newSelectCategory());
	}

	protected newSelectCategory(): DSelect<CATEGORY_ID | null> {
		const result = new DSelect<CATEGORY_ID | null>(
			this.toSelectCategoryOptions(this.theme, this._options)
		);
		result.on("change", (value: CATEGORY_ID) => {
			this.onSelectCategoryChange(value);
		});
		return result;
	}

	protected toSelectCategoryOptions(
		theme: THEME,
		options?: OPTIONS
	): DSelectOptions<CATEGORY_ID | null> {
		const result = options?.category || {};
		if (result.width === undefined && result.weight === undefined) {
			result.width = 140;
		}
		if (result.visible === undefined) {
			result.visible = false;
		}
		return result;
	}

	protected onSelectCategoryChange(categoryId: CATEGORY_ID): void {
		this.search.create([this.input.value, categoryId]);
	}

	get input(): DInputSearch {
		return (this._input ??= this.newInput());
	}

	protected newInput(): DInputSearch {
		const result = new DInputSearch(this.toInputOptions(this.theme, this._options));
		result.on("input", (value: string): void => {
			this.onInputInput(value);
		});
		return result;
	}

	protected toInputOptions(theme: THEME, options?: OPTIONS): DInputSearchOptions {
		const result = options?.input || {};
		if (result.width === undefined && result.weight === undefined) {
			result.weight = 1;
		}
		return result;
	}

	protected toInputMargin(theme: THEME, options?: OPTIONS): number {
		return options?.input?.margin ?? theme.getInputMargin();
	}

	protected onInputInput(value: string): void {
		if (0 < this._categories.length) {
			this.search.create([value, this.selectCategory.value]);
		} else {
			this.search.create([value]);
		}
	}

	get list(): DDialogSelectList<VALUE> {
		return (this._list ??= this.newList());
	}

	protected newList(): DDialogSelectList<VALUE> {
		const result = new DDialogSelectList<VALUE>(this.toListOptions(this.theme, this._options));
		result.selection.on("change", (selection: DListDataSelection<VALUE>): void => {
			this.onListSelectionChange(selection);
		});
		return result;
	}

	protected onListSelectionChange(selection: DListDataSelection<VALUE>): void {
		const selected = selection.first;
		if (selected == null) {
			return;
		}
		this._value = selected;
		this.onOk(selected);
	}

	protected toListOptions(theme: THEME, options?: OPTIONS): DDialogSelectListOptions<VALUE> {
		const result = options?.list || {};
		if (result.width === undefined) {
			result.width = "padding";
		}
		return result;
	}

	protected get noteError(): DNote | null {
		return (this._noteError ??= this.newNoteError());
	}

	protected newNoteError(): DNote | null {
		const error = this._options?.note?.error;
		if (error !== null) {
			return new DNoteSmallError(this.toNoteOptions(this.list, error));
		}
		return null;
	}

	protected get noteNoItemsFound(): DNote | null {
		return (this._noteNoItemsFound ??= this.newNoteNoItemsFound());
	}

	protected newNoteNoItemsFound(): DNote | null {
		const noItemsFound = this._options?.note?.noItemsFound;
		if (noItemsFound !== null) {
			return new DNoteSmallNoItemsFound(this.toNoteOptions(this.list, noItemsFound));
		}
		return null;
	}

	protected get noteSearching(): DNote | null {
		return (this._noteSearching ??= this.newNoteSearching());
	}

	protected newNoteSearching(): DNote | null {
		const searching = this._options?.note?.searching;
		// Because the `searching` note is disabled by default,
		// if options.searching is missing, i.e., if its value is undefined,
		// this method returns null. This is why `!=` is used here instead of `!==`.
		if (searching != null) {
			return new DNoteSmallSearching(this.toNoteOptions(this.list, searching));
		}
		return null;
	}

	protected toNoteOptions(parent: DBase, options?: DNoteOptions): DNoteOptions {
		if (options != null) {
			if (options.parent == null) {
				options.parent = parent;
			}
			if (options.visible == null) {
				options.visible = false;
			}
			return options;
		}
		return {
			parent,
			visible: false
		};
	}

	protected get search(): DDialogSelectSearch<VALUE, CATEGORY_ID> {
		return (this._search ??= this.newSearch());
	}

	protected newSearch(): DDialogSelectSearch<VALUE, CATEGORY_ID> {
		const options = this._options;
		if (options) {
			const controller = options.controller;
			if (controller) {
				const search = controller.search;
				if ("create" in search) {
					return search;
				} else {
					return new DDialogSelectSearhImpl(search);
				}
			}
		}
		return new DDialogSelectSearhImpl();
	}

	protected get buttonDismiss(): DButton<string> | null {
		let result = this._buttonDismiss;
		if (result === undefined) {
			result = this.newButtonDismiss();
			this._buttonDismiss = result;
		}
		return result;
	}

	protected newButtonDismiss(): DButton<string> | null {
		const options = this.toButtonDismissOptions(this._options);
		if (options.enabled === true) {
			const result = new DButton<string>(options);
			result.on("active", () => {
				this._value = null;
				this.onOk(null);
			});
			return result;
		}
		return null;
	}

	protected toButtonDismissOptions(options?: OPTIONS): DDialogSelectDismissableOptions {
		const theme = this.theme;
		if (options != null) {
			const dismiss = options.dismiss;
			if (dismiss != null) {
				if (dismiss.enabled === undefined) {
					dismiss.enabled = theme.isDismissable();
				}
				if (dismiss.weight === undefined && dismiss.width === undefined) {
					dismiss.width = "padding";
				}
				const text = dismiss.text;
				if (text === undefined) {
					dismiss.text = {
						value: theme.getDismissLabel()
					};
				} else if (text.value === undefined) {
					text.value = theme.getDismissLabel();
				}
				return dismiss;
			}
		}
		return {
			width: "padding",
			enabled: theme.isDismissable(),
			text: {
				value: theme.getDismissLabel()
			}
		};
	}

	get value(): VALUE | null {
		return this._value;
	}

	protected onSearched(results: VALUE[]): void {
		this.list.data.items = results;
	}

	protected getResolvedValue(): VALUE | null | PromiseLike<VALUE | null> {
		return this._value;
	}

	protected getType(): string {
		return "DDialogSelect";
	}

	protected onOpen(): void {
		super.onOpen();
		this.list.selection.clear();
		if (0 < this._categories.length) {
			this.search.create([this.input.value, this.selectCategory.value]);
		} else {
			this.search.create([this.input.value]);
		}
	}

	get categories(): DDialogSelectCategory<CATEGORY_ID>[] {
		return this._categories;
	}

	set categories(categories: DDialogSelectCategory<CATEGORY_ID>[]) {
		this._categories = categories;
		this.onCategoriesChange(categories);
	}

	protected onCategoriesChange(categories: DDialogSelectCategory<CATEGORY_ID>[]): void {
		const selectCategory = this.selectCategory;
		if (0 < categories.length) {
			const items = [];
			const theme = this.theme;
			const options = this.options?.category?.dismiss ?? {};
			if (options.enable ?? theme.isCategoryDismissable()) {
				items.push({
					value: null,
					text: {
						value: options.label ?? theme.getCategoryDismissLabel()
					}
				});
			}
			for (let i = 0, imax = categories.length; i < imax; ++i) {
				const category = categories[i];
				items.push({
					value: category.id,
					text: {
						value: category.label
					}
				});
			}
			selectCategory.menu = new DMenu<CATEGORY_ID | null>({
				fit: true,
				items
			});
			selectCategory.show();
		} else {
			selectCategory.hide();
		}
	}

	protected onOk(value: VALUE | null | PromiseLike<VALUE | null>): void {
		this.emit("select", value, this);
		super.onOk(value);
	}

	destroy(): void {
		const input = this._input;
		if (input) {
			input.destroy();
		}
		const noteError = this._noteError;
		if (noteError) {
			noteError.destroy();
		}
		const noteNoItemsFound = this._noteNoItemsFound;
		if (noteNoItemsFound) {
			noteNoItemsFound?.destroy();
		}
		const noteSearching = this._noteSearching;
		if (noteSearching) {
			noteSearching?.destroy();
		}
		const list = this._list;
		if (list) {
			list.destroy();
		}
		super.destroy();
	}
}
