/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import {
	DDialogCommand,
	DDialogCommandEvents,
	DDialogCommandOptions,
	DThemeDialogCommand
} from "./d-dialog-command";
import { DDialogSelectList, DDialogSelectListOptions } from "./d-dialog-select-list";
import { DDialogSelectSearh } from "./d-dialog-select-search";
import { DInputSearch, DInputSearchOptions } from "./d-input-search";
import { DLayoutHorizontal, DLayoutHorizontalOptions } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";
import { DListOptions } from "./d-list";
import { DListDataSelection } from "./d-list-data-selection";
import { DNote, DNoteOptions } from "./d-note";
import { DNoteSmallError } from "./d-note-small-error";
import { DNoteSmallNoItemsFound } from "./d-note-small-no-items-found";
import { DNoteSmallSearching } from "./d-note-small-searching";
import { DOnOptions } from "./d-on-options";
import { isNumber } from "./util/is-number";
import { UtilTransition } from "./util/util-transition";

export interface DDialogSelectInputMargin {
	horizontal: number;
	vertical: number;
}

export interface DDialogSelectInputMarginOptions extends Partial<DDialogSelectInputMargin> {}

export interface DDialogSelectInputOpitons extends DInputSearchOptions {
	margin?: DDialogSelectInputMarginOptions;
}

/**
 * {@link DDialogSelect} search object.
 */
export interface DDialogSelectSearch<VALUE> {
	create(args: [string]): void;
	on(event: "success", handler: (e: unknown, searchResults: VALUE[]) => void): void;
	on(event: "fail", handler: () => void): void;
	on(event: "change", handler: () => void): void;
	isDone(): boolean;
	getResult(): VALUE[] | null;
}

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
export interface DDialogSelectEvents<VALUE, EMITTER> extends DDialogCommandEvents<VALUE, EMITTER> {
	select(value: VALUE, self: EMITTER): void;
}

/**
 * {@link DDialogSelect} "on" options.
 */
export interface DDialogSelectOnOptions<VALUE, EMITTER>
	extends Partial<DDialogSelectEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDialogSelect} options.
 */
export interface DDialogSelectOptions<
	VALUE,
	THEME extends DThemeDialogSelect<VALUE> = DThemeDialogSelect<VALUE>,
	EMITTER = any
> extends DDialogCommandOptions<VALUE, THEME> {
	controller?: DDialogSelectController<VALUE>;
	input?: DDialogSelectInputOpitons;
	list?: DListOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogSelect} theme.
 */
export interface DThemeDialogSelect<VALUE = unknown> extends DThemeDialogCommand {
	getInputMarginVertical(): number;
	getInputMarginHorizontal(): number;
}

export class DDialogSelect<
	VALUE = unknown,
	THEME extends DThemeDialogSelect<VALUE> = DThemeDialogSelect<VALUE>,
	OPTIONS extends DDialogSelectOptions<VALUE, THEME> = DDialogSelectOptions<VALUE, THEME>
> extends DDialogCommand<VALUE | null, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _input!: DInputSearch;
	protected _list!: DDialogSelectList<VALUE>;
	protected _search!: DDialogSelectSearch<VALUE>;
	protected _noteError?: DNote | null;
	protected _noteNoItemsFound?: DNote | null;
	protected _noteSearching?: DNote | null;

	protected onInit(layout: DLayoutVertical, options?: OPTIONS): void {
		this._value = null;
		const theme = this.theme;

		// Search box
		const input = this.newInput(theme, options);
		this._input = input;
		layout.addChild(this.newInputLayout(layout, input, theme, options));

		// List
		const list = this.newList(theme, options);
		this._list = list;
		layout.addChild(list);

		// Error note
		const noteOptions = options?.note;
		const noteError = this.newNoteError(list, noteOptions);
		this._noteError = noteError;

		// No items found note
		const noteNoItemsFound = this.newNoteNoItemsFound(list, noteOptions);
		this._noteNoItemsFound = noteNoItemsFound;

		// Searching note
		const noteSearching = this.newNoteSearching(list, noteOptions);
		this._noteSearching = noteSearching;

		// Controller binding
		const search = this.toSearch(options?.controller);
		this._search = search;
		input.on("input", (value: string): void => {
			search.create([value]);
		});

		search.on("success", (e: unknown, results: VALUE[]): void => {
			this.onSearched(results);
		});
		search.on("fail", (): void => {
			this.onSearched([]);
		});

		// Visibility
		const transition = new UtilTransition();
		search.on("change", (): void => {
			if (search.isDone()) {
				const result = search.getResult();
				if (result != null) {
					if (0 < result.length) {
						transition.hide();
					} else {
						transition.show(noteNoItemsFound);
					}
				} else {
					transition.show(noteError);
				}
			} else {
				if (noteSearching) {
					transition.show(noteSearching);
				}
			}
		});
	}

	protected newInput(theme: THEME, options?: OPTIONS): DInputSearch {
		return new DInputSearch(this.toInputOptions(theme, options));
	}

	protected toInputOptions(theme: THEME, options?: OPTIONS): DInputSearchOptions {
		const result = options?.input || {};
		if (result.width === undefined && result.weight === undefined) {
			result.weight = 1;
		}
		return result;
	}

	protected newInputLayout(
		layout: DLayoutHorizontal | DLayoutVertical,
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontal {
		return new DLayoutHorizontal(this.toInputLayoutOptions(layout, input, theme, options));
	}

	protected toInputLayoutOptions(
		layout: DLayoutHorizontal | DLayoutVertical,
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontalOptions {
		const margin = this.toInputMargin(theme, options);
		const marginHorizontal = margin.horizontal;
		const marginVertical = margin.vertical + this.padding.getTop() - layout.margin.vertical;
		return {
			width: "padding",
			height: "auto",
			padding: {
				bottom: Math.max(0, marginVertical)
			},
			children: [
				new DLayoutSpace({ width: marginHorizontal }),
				input,
				new DLayoutSpace({ width: marginHorizontal })
			]
		};
	}

	protected toInputMargin(theme: THEME, options?: OPTIONS): DDialogSelectInputMargin {
		const margin = options?.input?.margin;
		if (margin != null) {
			if (isNumber(margin)) {
				return {
					horizontal: margin,
					vertical: margin
				};
			} else {
				const horizontal = margin.horizontal;
				const vertical = margin.vertical;
				return {
					horizontal: horizontal ?? theme.getInputMarginHorizontal(),
					vertical: vertical ?? theme.getInputMarginVertical()
				};
			}
		}
		return {
			horizontal: theme.getInputMarginHorizontal(),
			vertical: theme.getInputMarginVertical()
		};
	}

	protected toListOptions(theme: THEME, options?: OPTIONS): DDialogSelectListOptions<VALUE> {
		const result = options?.list || {};
		if (result.width === undefined) {
			result.width = "padding";
		}
		return result;
	}

	protected newList(theme: THEME, options?: OPTIONS): DDialogSelectList<VALUE> {
		const result = new DDialogSelectList<VALUE>(this.toListOptions(theme, options));
		result.selection.on("change", (selection: DListDataSelection<VALUE>): void => {
			const first = selection.first;
			if (first != null) {
				this._value = first;
				this.onOk(first);
			}
		});
		return result;
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

	protected newNoteError(
		list: DDialogSelectList<VALUE>,
		options?: DDialogSelectNoteOptions
	): DNote | null | undefined {
		const error = options?.error;
		if (error !== null) {
			return new DNoteSmallError(this.toNoteOptions(list, error));
		}
		return null;
	}

	protected newNoteNoItemsFound(
		list: DDialogSelectList<VALUE>,
		options?: DDialogSelectNoteOptions
	): DNote | null | undefined {
		const noItemsFound = options?.noItemsFound;
		if (noItemsFound !== null) {
			return new DNoteSmallNoItemsFound(this.toNoteOptions(list, noItemsFound));
		}
		return null;
	}

	protected newNoteSearching(
		list: DDialogSelectList<VALUE>,
		options?: DDialogSelectNoteOptions
	): DNote | null | undefined {
		const searching = options?.searching;
		// Because the `searcing` note is disabled by default,
		// if options.searching is missing, i.e., if its value is undefined,
		// this method returns null. This is why `!=` is used here instead of `!==`.
		if (searching != null) {
			return new DNoteSmallSearching(this.toNoteOptions(list, searching));
		}
		return null;
	}

	protected toSearch(controller?: DDialogSelectController<VALUE>): DDialogSelectSearch<VALUE> {
		if (controller) {
			const search = controller.search;
			if ("create" in search) {
				return search;
			} else {
				return new DDialogSelectSearh(search);
			}
		} else {
			return new DDialogSelectSearh();
		}
	}

	get input(): DInputSearch {
		return this._input;
	}

	get list(): DDialogSelectList<VALUE> {
		return this._list;
	}

	get value(): VALUE | null {
		return this._value;
	}

	protected onSearched(results: VALUE[]): void {
		this._list.data.items = results;
	}

	protected getResolvedValue(): VALUE | null | PromiseLike<VALUE | null> {
		return this._value;
	}

	protected getType(): string {
		return "DDialogSelect";
	}

	protected onOpen(): void {
		super.onOpen();
		this._list.selection.clear();
		this._search.create([this._input.value]);
	}

	protected onOk(value: VALUE | null | PromiseLike<VALUE | null>): void {
		this.emit("select", value, this);
		super.onOk(value);
	}

	destroy(): void {
		this._input.destroy();
		this._noteError?.destroy();
		this._noteNoItemsFound?.destroy();
		this._noteSearching?.destroy();
		this._list.destroy();
		super.destroy();
	}
}
