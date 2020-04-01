/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import {
	DDialogCommand, DDialogCommandOnOptions, DDialogCommandOptions, DThemeDialogCommand
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

export interface DDialogSelectSearch<VALUE> {
	create( args: [ string ] ): void;
	on( event: "success", handler: ( e: unknown, searchResults: VALUE[] ) => void ): void;
	on( event: "change", handler: () => void ): void;
	isDone(): boolean;
	getResult(): VALUE[] | null;
}

export type DDialogSelectSearchFunction<VALUE> = ( word: string ) => Promise<VALUE[]>;

export interface DDialogSelectController<VALUE> {
	search: DDialogSelectSearch<VALUE> | DDialogSelectSearchFunction<VALUE>;
}

export interface DDialogSelectNoteOptions {
	noItems?: DNoteOptions;
	searching?: DNoteOptions;
}

export type DDialogSelectItemTextFormatter<VALUE> = ( result: VALUE, caller: any ) => string;

export interface DDialogSelectItemTextOptions<VALUE> {
	formatter?: DDialogSelectItemTextFormatter<VALUE>;
}

export interface DDialogSelectItemOptions<VALUE> {
	text?: DDialogSelectItemTextOptions<VALUE>;
}

export interface DDialogSelectOnOptions<VALUE, SELF> extends DDialogCommandOnOptions<SELF> {
	select?: ( value: VALUE, self: SELF ) => void;
}

export interface DDialogSelectOptions<
	VALUE,
	THEME extends DThemeDialogSelect = DThemeDialogSelect,
	SELF = any
> extends DDialogCommandOptions<THEME> {
	controller?: DDialogSelectController<VALUE>;
	item?: DDialogSelectItemOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, SELF>;
}

export interface DThemeDialogSelect extends DThemeDialogCommand {
	getItemTextFormatter(): DDialogSelectItemTextFormatter<any>;
	getNoteNoItemsText(): string;
	getNoteSearchingText(): string;
}

// Helper
const toItemTextFormatter = <VALUE>(
	theme: DThemeDialogSelect, options?: DDialogSelectOptions<VALUE, any>
): DDialogSelectItemTextFormatter<VALUE> => {
	if( options ) {
		const item = options.item;
		if( item ) {
			const text = item.text;
			if( text ) {
				return text.formatter || theme.getItemTextFormatter();
			}
		}
	}
	return theme.getItemTextFormatter();
};

const toNoteOptions = ( options: DNoteOptions | undefined, parent: DBase, text: string ): DNoteOptions => {
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

const toNoteNoItemsOptions = (
	theme: DThemeDialogSelect, options: DDialogSelectOptions<any> | undefined, parent: DBase
): DNoteOptions => {
	const note = options && options.note;
	return toNoteOptions(
		note && note.noItems,
		parent,
		theme.getNoteNoItemsText()
	);
};

const toNoteSearchingOptions = (
	theme: DThemeDialogSelect, options: DDialogSelectOptions<any> | undefined, parent: DBase
): DNoteOptions => {
	const note = options && options.note;
	return toNoteOptions(
		note && note.noItems,
		parent,
		theme.getNoteSearchingText()
	);
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
	VALUE extends unknown = unknown,
	THEME extends DThemeDialogSelect = DThemeDialogSelect,
	OPTIONS extends DDialogSelectOptions<VALUE, THEME> = DDialogSelectOptions<VALUE, THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _input!: DInputText;
	protected _list!: DDialogSelectList;
	protected _noteNoItems!: DNote;
	protected _noteSearching!: DNote;
	protected _itemTextFormatter!: DDialogSelectItemTextFormatter<VALUE>;
	protected _search!: DDialogSelectSearch<VALUE>;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		this._value = null;
		const theme = this.theme;
		this._itemTextFormatter = toItemTextFormatter( theme, options );

		// Search box
		this._input = new DInputText({
			parent: layout,
			width: "padding"
		});

		// List
		const list = this._list = new DDialogSelectList({
			parent: layout,
			width: "padding",
			selection: {
				on: {
					change: ( selection: DListSelection ): void => {
						const item: DListItem<VALUE> | null = selection.first();
						if( item != null ) {
							this._value = item.value;
							this.onOk();
						}
					}
				}
			}
		});

		// Text No Items
		const noteNoItems = new DNote( toNoteNoItemsOptions( theme, options, list ) );
		this._noteNoItems = noteNoItems;

		// Text Searching
		const noteSearching = new DNote( toNoteSearchingOptions( theme, options, list ) );
		this._noteSearching = noteSearching;

		// Controller binding
		const search = toSearch( options && options.controller );
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
		const itemTextFormatter = this._itemTextFormatter;
		const content = list.content;
		const children = content.children;

		// Update the existing children
		const childrenLength = children.length;
		const searchResultsLength = results.length;
		const minLength = Math.min( childrenLength, searchResultsLength );
		for( let i = 0, imax = minLength; i < imax; ++i ) {
			const child = children[ i ];
			const result = results[ i ];
			if( child instanceof DListItem ) {
				child.text = itemTextFormatter( result, this );
				child.value = result;
			} else {
				content.removeChildAt( i );
				child.destroy();
				const newChild = this.newItem( result, itemTextFormatter( result, this ) );
				content.addChildAt( newChild, i );
			}
		}

		// Insert new children
		for( let i = minLength, imax = searchResultsLength; i < imax; ++i ) {
			const result = results[ i ];
			const newChild = this.newItem( result, itemTextFormatter( result, this ) );
			content.addChild( newChild );
		}

		// Remove unused children
		for( let i = childrenLength - 1; minLength <= i; --i ) {
			children[ i ].destroy();
		}
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

	protected getType(): string {
		return "DDialogSelect";
	}

	protected onOpen() {
		super.onOpen();
		this._list.selection.clear();
		this._search.create([ this._input.value ]);
	}
	protected onOk() {
		this.emit( "select", this._value, this );
		super.onOk();
	}

	destroy() {
		this._input.destroy();
		this._noteNoItems.destroy();
		this._noteSearching.destroy();
		this._list.destroy();
		super.destroy();
	}
}
