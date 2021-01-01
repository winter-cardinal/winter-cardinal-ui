/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction, Texture } from "pixi.js";
import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DThemeTreeItem, DTreeItem, DTreeItemOptions } from "./d-tree-item";
import { DTreeSelection } from "./d-tree-selection";
import { DThemes } from "./theme/d-themes";

export enum DTreeAddedItemPosition {
	BEFORE,
	AFTER
}

export interface DTreeOptions<
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions <THEME, CONTENT_OPTIONS> {
	value: DTreeItemRawData[];
}

export interface DThemeTree extends DThemePane {

}

export interface DTreeItemRawData {
	text: string;
	image?: DisplayObject | Texture | null;
	children: DTreeItemRawData[];
}

export interface DTreeAddedItemOptions {
	item: DTreeItemRawData;
	sibling: DTreeItemRawData;
	positon: DTreeAddedItemPosition;
}

export class DTree<
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions <THEME, CONTENT_OPTIONS> = DTreeOptions <THEME, CONTENT_OPTIONS>
> extends DPane <THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _itemOptions!: WeakMap<DTreeItemRawData, DTreeItemOptions>;
	protected _itemOptionsShowable!: DTreeItemOptions[];
	protected _selection!: DTreeSelection;
	protected _value!: DTreeItemRawData[];
	protected _itemIndexMappedStart!: number;
	protected _itemIndexMappedEnd!: number;
	private _itemY!: number;
	private _itemHeight!: number;
	private _removeItem!: DTreeItemRawData | null;
	private _addItemOptions!: DTreeAddedItemOptions | null;

	protected init( options ?: OPTIONS ) {
		super.init( options );
		this._itemOptions = new WeakMap();
		this._selection = new DTreeSelection();
		this._itemOptionsShowable = [];
		this._itemIndexMappedStart = 0;
		this._itemIndexMappedEnd = 0;
		this._itemY = 0;

		const itemTheme: DThemeTreeItem = DThemes.getInstance().get( "DTreeItem" );
		this._itemHeight = Number( itemTheme.getHeight() );

		this._value = options && options.value ? options.value : [];
		this.updateData( null, this._value, 0 );

		this._content.on( "move", (): void => {
			this.update();
		});

		this._content.on( "resize", (): void => {
			this._content.removeChildren();
			this.update();
		});

		this.update();
	}

	protected update() {
		const content = this._content;
		const items = content.children as DTreeItem[] ;
		// calculate content height
		content.height = this._itemOptionsShowable.length * this._itemHeight;
		const contentY = content.position.y;
		const height = this.height;
		const itemIndexMappedStart = ( 0 - contentY ) / this._itemHeight - 2 < 0 ?
			0 :
			Math.floor( ( 0 - contentY ) / this._itemHeight ) - 2;

		const itemIndexMappedEnd = ( height - contentY ) / this._itemHeight + 2 < this._itemOptionsShowable.length - 1 ?
			Math.floor( ( height - contentY ) / this._itemHeight ) + 2 :
			this._itemOptionsShowable.length;

		// get items options are shown in Dpane content frame
		const itemOptionsShown = this._itemOptionsShowable.slice( itemIndexMappedStart, itemIndexMappedEnd );

		if ( items.length < itemOptionsShown.length ) {
			for ( let i = items.length; i < itemOptionsShown.length; i++ ) {
				const itemOptions = itemOptionsShown[ i ];
				const treeItem = new DTreeItem( itemOptions );
				content.addChild( treeItem );
				// listen select item event
				treeItem.on( "select", ( e: interaction.InteractionEvent ): void => {
					if( this.state.inEnabled ) {
						this.onSelect( treeItem.getRawData(), e );
					}
				});
				// listen toggle item event
				treeItem.on( "toggle", (): void => {
					if( treeItem.isParent() ) {
						if( this.state.inEnabled ) {
							this.toggle( treeItem.getRawData() );
						}
					}
				});
			}

		} else if ( items.length > itemOptionsShown.length ) {
			for ( let i = itemOptionsShown.length; i < items.length; i++ ) {
				items[ i ].hide();
			}
		}

		const selection = this._selection;
		for ( let i = 0; i < itemOptionsShown.length; i++ ) {
			const item = items[ i ];
			const itemOptions = itemOptionsShown[ i ];
			item.update( itemOptions, selection.contains( itemOptions.rawData ) );
			if( item.isHidden() ) {
				item.show();
			}
		}
	}

	protected reload( expandAll?: boolean ) {
		// reset data of tree widget
		this._itemOptionsShowable.length = 0;
		this._itemY = 0;
		// re-render tree
		this.updateData( null, this._value, 0, expandAll );
		this.update();
	}

	/**
	 * Getter method to access raw data.
	 *
	 * @returns raw data.
	 */
	get value() {
		return this._value;
	}

	/**
	 * Toggle an tree parent item,
	 * Expand an collapsed tree item or collapse an expanded item.
	 *
	 * @param item Reference data of item want to toggle in “value” array.
	 */
	public toggle( item: DTreeItemRawData ) {
		const itemOptions = this._itemOptions.get( item );
		if( itemOptions ) {
			itemOptions.expanded = !itemOptions.expanded;
			this.reload();
		}
	}

	/**
	 * Expand a collapsed tree item.
	 *
	 * @param item Reference data of item want to expand in “value” array.
	 */
	public expand( item: DTreeItemRawData ) {
		const itemOptions = this._itemOptions.get( item );
		if( itemOptions ) {
			itemOptions.expanded = true;
			this.reload();
		}
	}

	/**
	 * Collapse an expanded tree item.
	 *
	 * @param item Reference data of item want to collapse in “value” array.
	 */
	public collapse( item: DTreeItemRawData ) {
		const itemOptions = this._itemOptions.get( item );
		if( itemOptions ) {
			itemOptions.expanded = false;
			this.reload();
		}
	}

	/**
	 * Expand all tree item.
	 */
	public expandAll() {
		this.reload( true );
	}

	/**
	 * Collapse all tree item.
	 */
	public collapseAll() {
		this.reload( false );
	}

	/**
	 * Check if an item is collapsed.
	 *
	 * @param item Reference data of item want to check in “value” array.
	 *
	 * @returns collapse status of the item.
	 */
	public isCollapsed( item: DTreeItemRawData ) {
		const itemOptions = this._itemOptions.get( item );
		return itemOptions && !itemOptions.expanded;
	}

	/**
	 * Check if an item is expanded.
	 *
	 * @param item Reference data of item want to check in “value” array.
	 *
	 * @returns expand status of the item.
	 */
	public isExpanded( item: DTreeItemRawData ) {
		const itemOptions = this._itemOptions.get( item );
		return itemOptions && itemOptions.expanded;
	}

	/**
	 * Clear all tree item.
	 */
	public clear() {
		this._value = [];
		this.reload();
	}

	/**
	 * Remove a tree item
	 *
	 * @param item Reference data of item want to remove in “value” array.
	 */
	public remove( item: DTreeItemRawData ) {
		this._removeItem = item;
		this.reload();
	}

	/**
	 * Add a tree item
	 *
	 * @param item data of new item want to add to tree.
	 * @param parent Reference data of parent item will contain the adding item.
	 * If the parent is undefined, the item will be added at the top level.
	 * If the parent is not undefined, the item will be inserted as a child of the given parent item.
	 */
	public add( item: DTreeItemRawData, parent?: DTreeItemRawData ) {
		if( parent ) {
			if( parent.children ) {
				parent.children.push( item );
			} else {
				parent.children = [ item ];
			}
		} else {
			this._value.push( item );
		}
		this.reload();
	}

	/**
	 * Add the given item will be inserted before the given sibling item.
	 *
	 * @param item data of new item want to add to tree.
	 * @param sibling Reference data of parent item will be using like anchor to add new item.
	 */
	public addBefore( item: DTreeItemRawData, sibling: DTreeItemRawData ) {
		this._addItemOptions = {
			item,
			sibling,
			positon: DTreeAddedItemPosition.BEFORE
		};
		this.reload();
	}

	/**
	 * Add the given item will be inserted after the given sibling item.
	 *
	 * @param item data of new item want to add to tree.
	 * @param sibling Reference data of parent item will be using like anchor to add new item.
	 */
	public addAfter( item: DTreeItemRawData, sibling: DTreeItemRawData ) {
		this._addItemOptions = {
			item,
			sibling,
			positon: DTreeAddedItemPosition.AFTER
		};
		this.reload();
	}

	/**
	 * Iterate over all the items.
	 *
	 * @param iteratee  boolean function. If the iteratee explicitly returns false, an iteration stops.
	 * @param item data of browsed item.
	 */
	public each( iteratee: (item: DTreeItemRawData) => boolean ): void {
		this.inOrder(this._value, iteratee);
	}

	/**
	 * The recursive function performs item browsing in the tree.
	 */
	private inOrder(items: DTreeItemRawData[], iteratee: (item: DTreeItemRawData) => boolean) {
		for (const item of items) {
			if(!iteratee (item)) {
				return;
			} else if( item.children ) {
				this.inOrder(item.children, iteratee);
			}
		}
	}

	/**
	 * Get selection object.
	 * @returns selection.
	 */
	get selection() {
		return this._selection;
	}

	private updateData(
		parentItemOptions: DTreeItemOptions | null,
		items: DTreeItemRawData[],
		level: number,
		expandAll?: boolean
	) {
		for ( let i = 0; i < items.length; i++ ) {
			const item = items[ i ];
			// handle remove item
			if( item === this._removeItem ) {
				// remove item from this._value.
				items.splice( i, 1 );
				this._removeItem = null;
				i--;
				if ( parentItemOptions && items.length === 0 ) {
					parentItemOptions.isParent  = false;
				}
				continue;
			}
			// handle add item
			if( this._addItemOptions && item === this._addItemOptions.sibling ) {
				if( this._addItemOptions.positon === DTreeAddedItemPosition.AFTER ) {
					items.splice( i + 1, 0, this._addItemOptions.item );
					this._addItemOptions = null;
				} else if ( this._addItemOptions.positon === DTreeAddedItemPosition.BEFORE ) {
					items.splice( i, 0, this._addItemOptions.item );
					i--;
					this._addItemOptions = null;
					continue;
				}
			}

			const isParent: boolean = item.children && ( item.children.length > 0 );
			const text = item.text ? item.text : "";

			const itemImage = item.image ? item.image : null;
			let isItemExisted = false;
			let itemOptions = this._itemOptions.get( item );
			let expanded = false; // set default expand status of item is false
			if( expandAll != null ) {
				expanded = expandAll;
			} else if ( itemOptions ) {
				expanded = itemOptions.expanded;
			}

			if( itemOptions != null ) {
				itemOptions.rawData = item;
				itemOptions.text = text;
				itemOptions.y = this._itemY;
				itemOptions.isParent = isParent;
				itemOptions.expanded = expanded;
				itemOptions.image = itemImage;
				isItemExisted = true;
			} else {
				itemOptions = {
					rawData: item,
					text,
					level,
					y: this._itemY,
					isParent,
					expanded,
					image: itemImage
				};
			}

			/* displayed items need to satisfy 1 of the 2 conditions:
			1. is root item
			2. the parent item is show and expand
			*/
			if ( parentItemOptions == null ||
				( parentItemOptions &&
					parentItemOptions.expanded &&
					parentItemOptions.showable ) ) {
				itemOptions.showable = true;
				this._itemOptionsShowable.push( itemOptions );
				this._itemY += this._itemHeight;
			} else {
				itemOptions.showable = false;
			}
			if ( !isItemExisted ) {
				this._itemOptions.set( item, itemOptions );
			}
			if ( item && item.children ) {
				this.updateData( itemOptions, item.children, level + 1, expandAll );
			}
		}
	}

	protected onSelect( item: DTreeItemRawData, e: interaction.InteractionEvent ) {
		// multi select by "ctr" key + click
		if( e.data.originalEvent.ctrlKey ) {
			this._selection.toggle( item );
		// multi select by "shift" key + click
		} else if ( e.data.originalEvent.shiftKey ) {
			const lastSelection = this._selection.get( this._selection.size() - 1 );
			if( lastSelection ) {
				this._selection.clear();
				const selectionY = Number( this._itemOptions.get( item )?.y );
				const lastSelectionY = Number( this._itemOptions.get ( lastSelection )?.y );
				const maxY = selectionY < lastSelectionY ?
					lastSelectionY - this._itemHeight :
					selectionY;
				const minY = selectionY < lastSelectionY ?
					selectionY :
					lastSelectionY + this._itemHeight;

				this._itemOptionsShowable.every( ( itemOptions ) => {
					if( itemOptions.y >= minY && itemOptions.y <= maxY && itemOptions.showable) {
						this._selection.add( itemOptions.rawData );
					}
					return itemOptions.y < maxY;
				} );
				this._selection.add( lastSelection );

			}
		// single select
		} else {
			this._selection.clear();
			this._selection.add( item );
		}
		this.updateActiveState();
	}

	/* update active state of all shown item.
	*
	**/
	public updateActiveState() {
		const items = this._content.children as DTreeItem[];
		for( let i = 0, imax = items.length; i < imax; ++i ) {
			const item = items[ i ];
			item.state.isActive = this._selection.contains( item.getRawData() );
		}
	}

	protected getType(): string {
		return "DTree";
	}
}
