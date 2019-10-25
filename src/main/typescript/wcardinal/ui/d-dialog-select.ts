/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DDialog, DDialogOptions, DThemeDialog } from "./d-dialog";
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectListItem } from "./d-dialog-select-list-item";
import { DInputText } from "./d-input-text";
import { DLayoutVertical } from "./d-layout-vertical";
import { DListItem } from "./d-list-item";
import { DListSelection } from "./d-list-selection";
import { DNote, DNoteOptions } from "./d-note";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";
import { UtilTransition } from "./util/util-transition";

export interface Search<SEARCH_RESULT> {
	create( args: [ string ] ): void;
	on( event: "success", handler: ( e: unknown, searchResults: SEARCH_RESULT[] ) => void ): void;
	on( event: "change", handler: () => void ): void;
	isDone(): boolean;
	getResult(): SEARCH_RESULT[] | null;
}

export interface Controller<SEARCH_RESULT> {
	search: Search<SEARCH_RESULT>;
}

export interface DDialogSelectOptions<
	SEARCH_RESULT,
	THEME extends DThemeDialogSelect = DThemeDialogSelect
> extends DDialogOptions<THEME> {
	controller: Controller<SEARCH_RESULT>;
	converter?: {
		toLabel?: ( searchResult: SEARCH_RESULT ) => string;
	};
	note?: {
		noItems?: DNoteOptions;
		searching?: DNoteOptions;
	};
}

export interface DThemeDialogSelect extends DThemeDialog {
	getNoteNoItemsText(): string;
	getNoteSearchingText(): string;
}

// Helper
const defaultConverter = {
	toLabel: ( target: any ): string => {
		if( utilIsString( target ) ) {
			return target;
		} else if( utilIsNumber( target ) ) {
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

const toToLabel = <SEARCH_RESULT>( options: DDialogSelectOptions<SEARCH_RESULT, any> ) => {
	return ( options.converter != null ? options.converter.toLabel : null ) || defaultConverter.toLabel;
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
	theme: DThemeDialogSelect, options: DDialogSelectOptions<any>, parent: DBase
): DNoteOptions => {
	return toNoteOptions(
		options.note && options.note.noItems,
		parent,
		theme.getNoteNoItemsText()
	);
};

const toNoteSearchingOptions = (
	theme: DThemeDialogSelect, options: DDialogSelectOptions<any>, parent: DBase
): DNoteOptions => {
	return toNoteOptions(
		options.note && options.note.searching,
		parent,
		theme.getNoteSearchingText()
	);
};

export class DDialogSelect<
	SEARCH_RESULT,
	THEME extends DThemeDialogSelect = DThemeDialogSelect,
	OPTIONS extends DDialogSelectOptions<SEARCH_RESULT, THEME> = DDialogSelectOptions<SEARCH_RESULT, THEME>
> extends DDialog<THEME, OPTIONS> {
	protected _value: SEARCH_RESULT | null;
	protected _input: DInputText;
	protected _list: DDialogSelectList;
	protected _noteNoItems: DNote;
	protected _noteSearching: DNote;
	protected _controller: Controller<SEARCH_RESULT>;

	constructor( options: OPTIONS ) {
		super( options );

		this._value = null;
		const theme = this.theme;
		const controller = this._controller = options.controller;
		const toLabel = toToLabel( options );

		const layout = new DLayoutVertical({
			parent: this,
			x: "padding", y: "padding",
			width: "padding", height: "auto"
		});

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
							const value = this._value = item.value;
							this.emit( "select", value, this );
							this.close();
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
		this._input.on( "input", ( value: string ): void => {
			controller.search.create([ value ]);
		});

		controller.search.on( "success", ( e: unknown, searchResults: SEARCH_RESULT[] ): void => {
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
		});

		// Visibility
		const transition = new UtilTransition();
		controller.search.on( "change", (): void => {
			if( controller.search.isDone() ) {
				const result = controller.search.getResult();
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
		this._controller.search.create([ this._input.value ]);
	}

	protected onClose() {
		super.onClose();
	}

	destroy() {
		this._input.destroy();
		this._noteNoItems.destroy();
		this._noteSearching.destroy();
		this._list.destroy();
		super.destroy();
	}
}
