/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectListItem } from "./d-dialog-select-list-item";
import { DDialogSelectSearh } from "./d-dialog-select-search";
import { DInputText } from "./d-input-text";
import { DLayoutVertical } from "./d-layout-vertical";
import { DListItem } from "./d-list-item";
import { DListSelection } from "./d-list-selection";
import { DNote, DNoteOptions } from "./d-note";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
import { UtilTransition } from "./util/util-transition";

export interface DDialogSelectSearch<SEARCH_RESULT> {
	create( args: [ string ] ): void;
	on( event: "success", handler: ( e: unknown, searchResults: SEARCH_RESULT[] ) => void ): void;
	on( event: "change", handler: () => void ): void;
	isDone(): boolean;
	getResult(): SEARCH_RESULT[] | null;
}

export type DDialogSelectSearchFunction<SEARCH_RESULT> = ( word: string ) => Promise<SEARCH_RESULT[]>;

export interface DDialogSelectController<SEARCH_RESULT> {
	search: DDialogSelectSearch<SEARCH_RESULT> | DDialogSelectSearchFunction<SEARCH_RESULT>;
}

export interface DDialogSelectOptions<
	SEARCH_RESULT,
	THEME extends DThemeDialogSelect = DThemeDialogSelect
> extends DDialogCommandOptions<THEME> {
	controller?: DDialogSelectController<SEARCH_RESULT>;
	converter?: {
		toLabel?: ( searchResult: SEARCH_RESULT ) => string;
	};
	note?: {
		noItems?: DNoteOptions;
		searching?: DNoteOptions;
	};
}

export interface DThemeDialogSelect extends DThemeDialogCommand {
	getNoteNoItemsText(): string;
	getNoteSearchingText(): string;
}

// Helper
const defaultConverter = {
	toLabel: ( target: any ): string => {
		if( isString( target ) ) {
			return target;
		} else if( isNumber( target ) ) {
			return String( target );
		} else if( "name" in target ) {
			return target.name;
		} else if( "label" in target ) {
			return target.label;
		} else if( "id" in target ) {
			return target.id;
		} else {
			return "";
		}
	}
};

const toToLabel = <SEARCH_RESULT>( options?: DDialogSelectOptions<SEARCH_RESULT, any> ) => {
	const converter = options && options.converter;
	const toLabel = converter && converter.toLabel;
	return toLabel || defaultConverter.toLabel;
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

const toSearch = <SEARCH_RESULT>(
	controller?: DDialogSelectController<SEARCH_RESULT>
): DDialogSelectSearch<SEARCH_RESULT> => {
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
	SEARCH_RESULT,
	THEME extends DThemeDialogSelect = DThemeDialogSelect,
	OPTIONS extends DDialogSelectOptions<SEARCH_RESULT, THEME> = DDialogSelectOptions<SEARCH_RESULT, THEME>
> extends DDialogCommand<THEME, OPTIONS> {
	protected _value!: SEARCH_RESULT | null;
	protected _input!: DInputText;
	protected _list!: DDialogSelectList;
	protected _noteNoItems!: DNote;
	protected _noteSearching!: DNote;
	protected _toLabel!: ( target: any ) => string;
	protected _search!: DDialogSelectSearch<SEARCH_RESULT>;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		this._value = null;
		const theme = this.theme;
		this._toLabel = toToLabel( options );

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
						const item: DListItem<SEARCH_RESULT> | null = selection.first();
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

		search.on( "success", ( e: unknown, searchResults: SEARCH_RESULT[] ): void => {
			this.onSearched( searchResults );
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

	protected onSearched( searchResults: SEARCH_RESULT[] ): void {
		const list = this._list;
		const toLabel = this._toLabel;
		const content = list.content;
		const children = content.children;

		// Update the existing children
		const childrenLength = children.length;
		const searchResultsLength = searchResults.length;
		const minLength = Math.min( childrenLength, searchResultsLength );
		for( let i = 0, imax = minLength; i < imax; ++i ) {
			const child = children[ i ];
			const searchResult = searchResults[ i ];
			if( child instanceof DListItem ) {
				child.text = toLabel( searchResult );
				child.value = searchResult;
			} else {
				content.removeChildAt( i );
				child.destroy();
				const newChild = this.newItem( searchResult, toLabel( searchResult ) );
				content.addChildAt( newChild, i );
			}
		}

		// Insert new children
		for( let i = minLength, imax = searchResultsLength; i < imax; ++i ) {
			const searchResult = searchResults[ i ];
			const newChild = this.newItem( searchResult, toLabel( searchResult ) );
			content.addChild( newChild );
		}

		// Remove unused children
		for( let i = childrenLength - 1; minLength <= i; --i ) {
			children[ i ].destroy();
		}
	}

	protected newItem( searchResult: SEARCH_RESULT, label: string ): DDialogSelectListItem<SEARCH_RESULT> {
		return new DDialogSelectListItem<SEARCH_RESULT>({
			value: searchResult,
			text: {
				value: label
			}
		});
	}

	get value() {
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
