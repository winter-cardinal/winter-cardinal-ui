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
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectSearh } from "./d-dialog-select-search";
import { DInputText, DInputTextOptions } from "./d-input-text";
import { DLayoutVertical } from "./d-layout-vertical";
import { DListOptions } from "./d-list";
import { DListDataSelection } from "./d-list-data-selection";
import { DNote, DNoteOptions } from "./d-note";
import { DOnOptions } from "./d-on-options";
import { UtilTransition } from "./util/util-transition";

/**
 * {@link DDialogSelect} search object.
 */
export interface DDialogSelectSearch<VALUE> {
	create(args: [string]): void;
	on(event: "success", handler: (e: unknown, searchResults: VALUE[]) => void): void;
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
	noItems?: DNoteOptions;
	searching?: DNoteOptions;
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
	input?: DInputTextOptions;
	list?: DListOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogSelect} theme.
 */
export interface DThemeDialogSelect<VALUE = unknown> extends DThemeDialogCommand {
	getNoteNoItemsText(): string;
	getNoteSearchingText(): string;
}

// Helper
const toNoteOptions = (parent: DBase, text: string, options?: DNoteOptions): DNoteOptions => {
	if (options != null) {
		if (options.parent == null) {
			options.parent = parent;
		}
		if (options.text == null) {
			options.text = {
				value: text
			};
		} else if (options.text.value == null) {
			options.text.value = text;
		}
		return options;
	}
	return {
		parent,
		text: {
			value: text
		}
	};
};

const toSearch = <VALUE>(
	controller?: DDialogSelectController<VALUE>
): DDialogSelectSearch<VALUE> => {
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
};

export class DDialogSelect<
	VALUE = unknown,
	THEME extends DThemeDialogSelect<VALUE> = DThemeDialogSelect<VALUE>,
	OPTIONS extends DDialogSelectOptions<VALUE, THEME> = DDialogSelectOptions<VALUE, THEME>
> extends DDialogCommand<VALUE | null, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _input!: DInputText;
	protected _list!: DDialogSelectList<VALUE>;
	protected _search!: DDialogSelectSearch<VALUE>;
	protected _noteNoItems!: DNote;
	protected _noteSearching!: DNote;

	protected onInit(layout: DLayoutVertical, options?: OPTIONS): void {
		this._value = null;
		const theme = this.theme;

		// Search box
		const inputOptions = options?.input || {};
		if (inputOptions.width === undefined) {
			inputOptions.width = "padding";
		}
		const input = new DInputText(inputOptions);
		this._input = input;
		layout.addChild(input);

		// List
		const listOptions = options?.list || {};
		if (listOptions.width === undefined) {
			listOptions.width = "padding";
		}
		const list = new DDialogSelectList<VALUE>(listOptions);
		list.selection.on("change", (selection: DListDataSelection<VALUE>): void => {
			const first = selection.first;
			if (first != null) {
				this._value = first;
				this.onOk(first);
			}
		});
		this._list = list;
		layout.addChild(list);

		// Text No Items
		const noteNoItems = new DNote(
			toNoteOptions(list, theme.getNoteNoItemsText(), options?.note?.noItems)
		);
		this._noteNoItems = noteNoItems;

		// Text Searching
		const noteSearching = new DNote(
			toNoteOptions(list, theme.getNoteSearchingText(), options?.note?.searching)
		);
		this._noteSearching = noteSearching;

		// Controller binding
		const search = toSearch(options?.controller);
		this._search = search;
		this._input.on("input", (value: string): void => {
			search.create([value]);
		});

		search.on("success", (e: unknown, results: VALUE[]): void => {
			this.onSearched(results);
		});

		// Visibility
		const transition = new UtilTransition();
		search.on("change", (): void => {
			if (search.isDone()) {
				const result = search.getResult();
				if (result != null && 0 < result.length) {
					transition.hide();
				} else {
					transition.show(noteNoItems);
				}
			} else {
				transition.show(noteSearching);
			}
		});
	}

	get input(): DInputText {
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
		this._noteNoItems.destroy();
		this._noteSearching.destroy();
		this._list.destroy();
		super.destroy();
	}
}
