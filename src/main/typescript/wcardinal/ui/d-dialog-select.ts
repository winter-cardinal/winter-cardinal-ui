/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import {
	DDialogCommand, DDialogCommandEvents, DDialogCommandOptions, DThemeDialogCommand
} from "./d-dialog-command";
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectListItem } from "./d-dialog-select-list-item";
import { DDialogSelectSearh } from "./d-dialog-select-search";
import { DInputText } from "./d-input-text";
import { DLayoutVertical } from "./d-layout-vertical";
import { DListItem } from "./d-list-item";
import { DListSelection } from "./d-list-selection";
import { DNote, DNoteOptions } from "./d-note";
import { UtilTransition } from "./util/util-transition";

/**
 * {@link DDialogSelect} search object.
 */
export interface DDialogSelectSearch<VALUE> {
	create( args: [ string ] ): void;
	on( event: "success", handler: ( e: unknown, searchResults: VALUE[] ) => void ): void;
	on( event: "change", handler: () => void ): void;
	isDone(): boolean;
	getResult(): VALUE[] | null;
}

/**
 * {@link DDialogSelect} search function.
 */
export type DDialogSelectSearchFunction<VALUE> = ( word: string ) => Promise<VALUE[]>;

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

export type DDialogSelectItemToLabel<VALUE> = ( result: VALUE, caller: any ) => string;

export type DDialogSelectItemIsEqual<VALUE> = ( a: VALUE, b: VALUE, caller: any ) => boolean;

/**
 * {@link DDialogSelect} item options.
 */
export interface DDialogSelectItemOptions<VALUE> {
	toLabel?: DDialogSelectItemToLabel<VALUE>;
	isEqual?: DDialogSelectItemIsEqual<VALUE>;
	predefineds?: VALUE[];
}

/**
 * {@link DDialogSelect} events.
 */
export interface DDialogSelectEvents<VALUE, EMITTER> extends DDialogCommandEvents<VALUE, EMITTER> {
	select( value: VALUE, self: EMITTER ): void;
}

/**
 * {@link DDialogSelect} "on" options.
 */
export interface DDialogSelectOnOptions<VALUE, EMITTER> extends Partial<DDialogSelectEvents<VALUE, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DDialogSelect} options.
 */
export interface DDialogSelectOptions<
	VALUE,
	THEME extends DThemeDialogSelect<VALUE> = DThemeDialogSelect<VALUE>,
	EMITTER = any
> extends DDialogCommandOptions<VALUE, THEME> {
	controller?: DDialogSelectController<VALUE>;
	item?: DDialogSelectItemOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogSelect} theme.
 */
export interface DThemeDialogSelect<VALUE = unknown> extends DThemeDialogCommand {
	getItemToLabel(): DDialogSelectItemToLabel<VALUE>;
	getItemIsEqual(): DDialogSelectItemIsEqual<VALUE>;
	getNoteNoItemsText(): string;
	getNoteSearchingText(): string;
}

// Helper
const toNoteOptions = ( parent: DBase, text: string, options?: DNoteOptions ): DNoteOptions => {
	if( options != null ) {
		if( options.parent == null ) {
			options.parent = parent;
		}
		if( options.text == null ) {
			options.text = {
				value: text
			};
		} else if( options.text.value == null ) {
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
	if( controller ) {
		const search = controller.search;
		if( "create" in search ) {
			return search;
		} else {
			return new DDialogSelectSearh( search );
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
	protected _itemToLabel!: DDialogSelectItemToLabel<VALUE>;
	protected _itemIsEqual!: DDialogSelectItemIsEqual<VALUE>;
	protected _itemPredefineds?: VALUE[];

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		this._value = null;
		const theme = this.theme;

		const item = options?.item;
		this._itemToLabel = item?.toLabel ?? theme.getItemToLabel();
		this._itemIsEqual = item?.isEqual ?? theme.getItemIsEqual();
		this._itemPredefineds = item?.predefineds;

		// Search box
		this._input = new DInputText({
			parent: layout,
			width: "padding"
		});

		// List
		const list = new DDialogSelectList<VALUE>({
			parent: layout,
			width: "padding",
			selection: {
				on: {
					change: ( selection: DListSelection<VALUE> ): void => {
						const first = selection.first();
						if( first ) {
							const value = first.value;
							this._value = value;
							this.onOk( value );
						}
					}
				}
			}
		});
		this._list = list;

		// Text No Items
		const noteNoItems = new DNote(toNoteOptions(
			list,
			theme.getNoteNoItemsText(),
			options?.note?.noItems
		));
		this._noteNoItems = noteNoItems;

		// Text Searching
		const noteSearching = new DNote(toNoteOptions(
			list,
			theme.getNoteSearchingText(),
			options?.note?.searching
		));
		this._noteSearching = noteSearching;

		// Controller binding
		const search = toSearch( options?.controller );
		this._search = search;
		this._input.on( "input", ( value: string ): void => {
			search.create([ value ]);
		});

		search.on( "success", ( e: unknown, results: VALUE[] ): void => {
			this.onSearched( results );
		});

		// Visibility
		const transition = new UtilTransition();
		search.on( "change", (): void => {
			if( search.isDone() ) {
				const result = search.getResult();
				if( result != null && 0 < result.length ) {
					transition.hide();
				} else {
					transition.show( noteNoItems );
				}
			} else {
				transition.show( noteSearching );
			}
		});
	}

	protected onSearched( results: VALUE[] ): void {
		const list = this._list;
		const content = list.content;
		const children = content.children as Array<DListItem<VALUE>>;
		const value = this._value;
		const toLabel = this._itemToLabel;
		const isEqual = this._itemIsEqual;
		const predefineds = this._itemPredefineds;

		// Update the existing children
		const childrenLength = children.length;
		const resultsLength = results.length;
		const predefinedsLength = predefineds ? predefineds.length : 0;
		const totalLength = predefinedsLength + resultsLength;
		const minLength = Math.min( childrenLength, totalLength );
		for( let i = 0; i < minLength; ++i ) {
			const child = children[ i ];
			const result = i < predefinedsLength ? predefineds![ i ] : results[ i - predefinedsLength ];
			child.text = toLabel( result, this );
			child.value = result;
			child.state.isActive = (value != null ? isEqual( result, value, this ) : false);
		}

		// Insert new children
		for( let i = minLength; i < totalLength; ++i ) {
			const result = i < predefinedsLength ? predefineds![ i ] : results[ i - predefinedsLength ];
			const newChild = this.newItem( result, toLabel( result, this ) );
			newChild.state.isActive = (value != null ? isEqual( result, value, this ) : false);
			content.addChild( newChild );
		}

		// Remove unused children
		for( let i = childrenLength - 1; minLength <= i; --i ) {
			children[ i ].destroy();
		}

		// Clear selection
		list.selection.toDirty();
	}

	protected newItem( result: VALUE, label: string ): DDialogSelectListItem<VALUE> {
		return new DDialogSelectListItem<VALUE>({
			value: result,
			text: {
				value: label
			}
		});
	}

	get value(): VALUE | null {
		return this._value;
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
		this._search.create([ this._input.value ]);
	}

	protected onOk( value: VALUE | null | PromiseLike<VALUE | null> ): void {
		this.emit( "select", value, this );
		super.onOk( value );
	}

	destroy(): void {
		this._input.destroy();
		this._noteNoItems.destroy();
		this._noteSearching.destroy();
		this._list.destroy();
		super.destroy();
	}
}
