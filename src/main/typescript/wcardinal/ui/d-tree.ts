/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DThemeTreeItem, DTreeItem, DTreeItemOptions } from "./d-tree-item";
import { DTreeSelection } from "./d-tree-selection";
import { DThemes } from "./theme";

export interface DTreeOptions <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions > extends DPaneOptions < THEME, CONTENT_OPTIONS > {
		value: DTreeItemRawData[];
	}

export interface DThemeTree extends DThemePane {
}

export interface DTreeItemRawData {
	text: string;
	expanded?: boolean;
	image?: DisplayObject | Texture | null;
	children: DTreeItemRawData[];
}

export class DTree <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions < THEME, CONTENT_OPTIONS > = DTreeOptions < THEME, CONTENT_OPTIONS >
	>
	extends DPane < THEME, CONTENT_OPTIONS, OPTIONS > {

		protected _itemOptions!: WeakMap<DTreeItemRawData, DTreeItemOptions>;
		protected _itemOptionsShowable!: DTreeItemOptions[];
		protected _selection!: DTreeSelection;
		protected _value!: DTreeItemRawData[];
		protected _itemIndexMappedStart!: number;
		protected _itemIndexMappedEnd!: number;
		private _itemY!: number;
		private _itemHeight!: number;

		protected init(options ?: OPTIONS) {
			super.init(options);

			this._itemOptions = new WeakMap();
			this._selection = new DTreeSelection();
			this._itemOptionsShowable = [];
			this._itemIndexMappedStart = 0;
			this._itemIndexMappedEnd = 0;
			this._itemY = 0;

			const dTreeItemTheme: DThemeTreeItem = DThemes.getInstance().get("DTreeItem");
			this._itemHeight = Number(dTreeItemTheme.getHeight());

			this._value = options && options.value ? options.value : [];
			this.updateData(null, this._value, 0);

			this._content.on("move", (): void => {
				this.update();
			});

			this._content.on("resize", (): void => {
				this._content.removeChildren();
				this.update();
			});

			this.onSelectionChangeListener();

			this.update();
		}

		private onSelectionChangeListener() {
			this._content.removeListener("selection-change");
			// update active state of all shown item when a child item is clicked
			this._content.on("selection-change", () => {
				const items = this._content.children as DTreeItem[];
				items.forEach((item) => {
					item.updateActiveState(this._selection.get().includes(item.getRawData()));
				});
			});
		}

		protected update() {
			const content = this._content;
			const items = content.children as DTreeItem[] ;
			// calculate content height
			content.height = this._itemOptionsShowable.length * this._itemHeight;
			const contentY = content.position.y;
			const height = this.height;
			const itemIndexMappedStart = (0 - contentY) / this._itemHeight - 2 < 0 ?
				0 :
				Math.floor((0 - contentY) / this._itemHeight) - 2;

			const itemIndexMappedEnd = (height - contentY) / this._itemHeight + 2 < this._itemOptionsShowable.length - 1 ?
				Math.floor((height - contentY) / this._itemHeight) + 2 :
				this._itemOptionsShowable.length;

			// get items options are shown in Dpane content frame
			const itemOptionsShown = this._itemOptionsShowable.slice(itemIndexMappedStart, itemIndexMappedEnd);

			if (items.length < itemOptionsShown.length) {
				for (let i = items.length; i < itemOptionsShown.length; i++) {
					const itemOptions = itemOptionsShown[i];
					const treeItem = new DTreeItem(itemOptions);
					content.addChild(treeItem);
					// listen select item event
					treeItem.on("select", (): void => {
						this._selection.clear();
						this._selection.add(treeItem.getRawData());
					});
					// listen toggle item event
					treeItem.on("toggle", (): void => {
						if(treeItem.isParent()) {
							this.toggle(treeItem.getRawData());
						}
					});
				}
			} else if (items.length > itemOptionsShown.length) {
				for (let i = itemOptionsShown.length; i < items.length; i++) {
					content.removeChild(items[i]);
					items.length = itemOptionsShown.length;
				}
			}
			for (let i = 0; i < items.length; i++) {
				items[i] = items[i].update(itemOptionsShown[i], this._selection.get().includes(itemOptionsShown[i].rawData));
			}
		}

		protected reload(expandAll?: boolean) {
			// reset data of tree widget
			this._itemOptionsShowable.length = 0;
			this._itemY = 0;
			this._content.removeChildren();
			// re-render tree
			this.onSelectionChangeListener();
			this.updateData(null, this._value, 0, expandAll);
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
		 * @param itemPosition Position of data item in "value" array (in tree input data).
		 */
		public toggle(itemRawData: DTreeItemRawData) {
			if(itemRawData) {
				itemRawData.expanded = !itemRawData.expanded;
				this.reload();
			}
		}

		/**
		 * Expand an tree parent item,
		 * Expand an collapsed tree item.
		 *
		 * @param itemPosition Position of data item in "value" array (in tree input data).
		 */
		public expand(itemRawData: DTreeItemRawData) {
			if(itemRawData) {
				itemRawData.expanded = true;
				this.reload();
			}
		}

		/**
		 * Collapse an tree parent item,
		 * Collapse an expanded tree item.
		 *
		 * @param itemPosition Position of data item in "value" array (in tree input data).
		 */
		public collapse(itemRawData: DTreeItemRawData) {
			if(itemRawData) {
				itemRawData.expanded = false;
				this.reload();
			}
		}

		/**
		 * Expand all tree item.
		 */
		public expandAll() {
			this.reload(true);
		}

		/**
		 * Collapse all tree item.
		 */
		public collapseAll() {
			this.reload(false);
		}

		/**
		 * Check if an item is collapsed.
		 *
		 * @returns collapse status of the item.
		 */
		public isCollapsed(itemRawData: DTreeItemRawData) {
			return !itemRawData.expanded;
		}

		private updateData(
			parentItemOptions: DTreeItemOptions | null,
			items: DTreeItemRawData[],
			level: number,
			expandAll?: boolean
			) {
			items.forEach((item) => {
				if (item) {
					const isParent: boolean = item.children && (item.children.length > 0);
					const text = item.text ? item.text : "";

					if(expandAll != null) {
						item.expanded = expandAll;
					} else if (item.expanded == null) {
						item.expanded = false; // set default expand status of item is false
					}

					const itemImage = item.image ? item.image : null;

					let isItemExisted = false;
					let itemOptions = this._itemOptions.get(item);

					if(itemOptions != null) {
						itemOptions.rawData = item;
						itemOptions.text = text;
						itemOptions.y = this._itemY;
						itemOptions.isParent = isParent;
						itemOptions.expanded = item.expanded;
						itemOptions.image = itemImage;
						isItemExisted = true;
					} else {
						itemOptions = {
							rawData: item,
							text,
							level,
							y: this._itemY,
							isParent,
							expanded: item.expanded,
							image: itemImage
						};
					}

					/* displayed items need to satisfy 1 of the 2 conditions:
					1. is root item
					2. the parent item is show and expand
					*/
					if (parentItemOptions == null ||
						(parentItemOptions &&
							parentItemOptions.expanded &&
							parentItemOptions.showable)) {
						itemOptions.showable = true;
						this._itemOptionsShowable.push(itemOptions);
						this._itemY += this._itemHeight;
					} else {
						itemOptions.showable = false;
					}
					if (!isItemExisted) {
						this._itemOptions.set(item, itemOptions);

					}
					if (item && item.children) {
						this.updateData(itemOptions, item.children, level + 1, expandAll);
					}
				}
			});
		}
	}
