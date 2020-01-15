/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DListItem } from './d-list-item'
import { DMenuBar } from './d-menu-bar'
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { UtilPointerEvent } from './util';

import { DTreeItem } from "./d-tree-item";

interface TreeItemData {
	name: String,
	position: Array < number >
}

export interface DTreeOptions < THEME extends DThemeTree > extends DLayoutVerticalOptions<THEME> {
	value: Array < Object >
}

export interface DThemeTree extends DThemeLayoutVertical {

}


export class DTree <
	VALUE = unknown,
	THEME extends DThemeTree = DThemeTree,
	OPTIONS extends DTreeOptions < THEME > = DTreeOptions < THEME >
	>
	extends DLayoutVertical<THEME, OPTIONS> {

		protected _itemMap?: any = {}
		protected _treeItems: DTreeItem[] = [];
		protected _selected?: VALUE | null
		protected _value?: any
		protected init(options ? : OPTIONS) {
			super.init(options);

			this._itemMap = {};

			if (options && options.value) {
				this._value = options.value
				let parentPosition: number[] = []
				this.addItem(parentPosition, this._value)
			}

		}

		protected addItem(parentPosition: number[] , items: Array < any > ) {
			for (let index = 0; index < items.length; index++) {
				const item = items[index];
				if (item && item.id && item.name) {
					const itemPosition: number[] = parentPosition.concat([index])
					const itemData: TreeItemData = {
						name: item.name,
						position: itemPosition
					}
					const itemId = item.id
					this._itemMap[itemId] = itemData

					let paddingValue : number = itemPosition.length * 30
					const isParent: boolean = item.items && (item.items.length > 0)
					paddingValue = isParent ? paddingValue - 20 : paddingValue


					const treeItem = new DTreeItem({
						width: 500,
						text: {
							value: item.name
						},
						isParent: isParent,
						isExpand: false,
						padding: {
							left: paddingValue
						}
					});
					const self = this;
					treeItem.on( UtilPointerEvent.down, (): void => {
						console.log("Send event");
						self.emit("clicked-tree-parent-item")
					})

					this.addChild(treeItem)
					// this._treeItems.push(treeItem);

					if(item && item.items) {
						this.addItem(itemPosition, item.items)
					}
				}
			}
		}

	}
