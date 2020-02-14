/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DThemeTreeItem, DTreeItem, DTreeItemOptions } from "./d-tree-item";
import { DThemes } from "./theme";

export interface DTreeOptions <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions > extends DPaneOptions < THEME, CONTENT_OPTIONS > {
		value: DTreeItemRawData[];
		check?: boolean | null;
	}

export interface DThemeTree extends DThemePane {
}

interface MapDTreeItemOptions {
	[key: string]: DTreeItemOptions;
}

interface DTreeItemRawData {
	text: string;
	expanded?: boolean;
	check?: boolean | null;
	children: DTreeItemRawData[];
}

export class DTree <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions < THEME, CONTENT_OPTIONS > = DTreeOptions < THEME, CONTENT_OPTIONS >
	>
	extends DPane < THEME, CONTENT_OPTIONS, OPTIONS > {

		protected _itemOptions!: MapDTreeItemOptions;
		protected _itemPositions !: number[][];
		protected _itemOptionsShowable!: DTreeItemOptions[];
		protected _value!: DTreeItemRawData[];
		protected _check!: boolean | null;
		protected _itemIndexMappedStart!: number;
		protected _itemIndexMappedEnd!: number;
		protected _selectedPosition !: number[];
		private _itemY!: number;
		private _itemHeight!: number;
		private SEPARATOR = "-";

		protected init(options ?: OPTIONS) {
			super.init(options);

			this._itemOptions = {};
			this._itemPositions = [];
			this._itemOptionsShowable = [];
			this._itemIndexMappedStart = 0;
			this._itemIndexMappedEnd = 0;
			this._itemY = 0;
			this._check = null;

			const dTreeItemTheme: DThemeTreeItem = DThemes.getInstance().get("DTreeItem");
			this._itemHeight = Number(dTreeItemTheme.getHeight());
			if(options && options.check != null) {
				this._check = options.check;
			}
			this._value = options && options.value ? options.value : [];
			this.updateData(null, this._value);

			this._content.on("move", (): void => {
				this.update();
			});

			this._content.on("resize", (): void => {
				this._content.removeChildren();
				this.update();
			});

			this.registerSelectEvent();

			this.update();
		}

		private registerSelectEvent() {
			// remove select event
			this._content.removeListener("select");
			// update active state of all shown item when a child item is clicked
			this._content.on("select", (selectedPosition: number[]): void => {
				this._selectedPosition = selectedPosition;
				const items = this._content.children as DTreeItem[];
				items.forEach((item) => {
					item.updateActiveState(selectedPosition);
				});
			});
		}

		protected update() {
			const content = this._content;
			const	items = content.children as DTreeItem[] ;
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
					treeItem.on("selected", (): void => {
						this.emit("select", treeItem);
						if (treeItem.isParent()) {
							this.onToggle(treeItem.getPosition());
						}
					});
					// listen check event
					treeItem.on("check", (checked: boolean): void => {
						this.onCheck(treeItem.getPosition(), checked);
					});
				}
			} else if (items.length > itemOptionsShown.length) {
				for (let i = itemOptionsShown.length; i < items.length; i++) {
					content.removeChild(items[i]);
					items.length = itemOptionsShown.length;
				}
			}
			for (let i = 0; i < items.length; i++) {
				items[i] = items[i].update(itemOptionsShown[i], this._selectedPosition);
			}
		}

		protected getTreeItemRawData(itemPosition: number[]) {
			let items = this._value;
			// access to data of selected item in this.value to update expanded attribute
			for (let i = 0; i < itemPosition.length - 1; i++) {
				items = items[itemPosition[i]].children;
			}
			return items[itemPosition[itemPosition.length - 1]];
		}

		protected onToggle(itemPosition: number[] | null) {
			if (itemPosition != null) {
				const item = this.getTreeItemRawData(itemPosition);
				item.expanded = !item.expanded;
				this.reload();
			}
		}

		protected reload() {
			// reset data of tree widget
			this._itemPositions.length = 0;
			this._itemOptionsShowable.length = 0;
			this._itemY = 0;
			this._content.removeChildren();
			// re-render tree
			this.registerSelectEvent();
			this.updateData(null, this._value, true);
			this.update();
		}

		protected onCheck(checkedItemPosition: number[] | null, checked: boolean) {
			if (checkedItemPosition != null) {
				// clear "_itemOptionsShowable"
				this._itemOptionsShowable.length = 0;
				const checkedItemPositionStr = checkedItemPosition.join(this.SEPARATOR);

				this._itemPositions.forEach((itemPosition) => {
					const itemPositionStr = itemPosition.join(this.SEPARATOR);
					// check iterator item is children of selected item or not by item position
					if((itemPositionStr + this.SEPARATOR).indexOf(checkedItemPositionStr + this.SEPARATOR) === 0) {
						// update checked state of children item
						this._itemOptions[itemPositionStr].check = checked;
						this.getTreeItemRawData(itemPosition).check = checked;
					}
					// push showable item into "_itemOptionsShowable"
					if(this._itemOptions[itemPosition.join(this.SEPARATOR)].showable) {
						this._itemOptionsShowable.push(this._itemOptions[itemPosition.join(this.SEPARATOR)]);
					}
				});
				this.update();
			}
		}

		private updateData(parentItemOptions: DTreeItemOptions | null , items: DTreeItemRawData[], forcibly?: boolean) {
				for (let i = 0; i < items.length; i++) {
					const item = items[i];
					if (item) {
						// position of item in this._value
						const itemPosition = parentItemOptions ? parentItemOptions.position.concat(i) : [i];
						const itemPositionStr = itemPosition.join(this.SEPARATOR);

						const isParent: boolean = item.children && (item.children.length > 0);
						const text = item.text ? item.text : "";

						// set default expand status of item is false
						if (item.expanded == null) {
							item.expanded = false;
						}

						// update checked status of children item follow parent item
						if(item.check !== undefined && item.check != null) {
							item.check = this._check == null ? null : item.check;
						} else if (parentItemOptions && !forcibly) {
							item.check = parentItemOptions.check;
						} else {
							item.check = this._check;
						}

						let itemOptions = this._itemOptions[itemPositionStr];
						let isItemExisted = false;

						if(itemOptions != null) {
							itemOptions.position = itemPosition;
							itemOptions.text = text;
							itemOptions.y = this._itemY;
							itemOptions.isParent = isParent;
							itemOptions.expanded = item.expanded;
							itemOptions.check = item.check;
							isItemExisted = true;
						} else {
							itemOptions = {
								position: itemPosition,
								text,
								y: this._itemY,
								isParent,
								expanded: item.expanded,
								check: item.check
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
						// add "itemOptions" to "_itemOptions" if it not exist in "_itemOptions"
						if(!isItemExisted) {
							this._itemOptions[itemPositionStr] = itemOptions;
						}
						this._itemPositions.push(itemPosition);

						if (item && item.children) {
							this.updateData(itemOptions, item.children, forcibly);
						}
					}
				}
		}
	}
