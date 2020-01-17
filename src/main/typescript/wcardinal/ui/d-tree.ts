/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventBus } from 'event-bus-station';
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { UtilPointerEvent } from './util';

import { DTreeItem } from "./d-tree-item";

interface TreeItemData {
	position: Array < number >,
	item: DTreeItem
}

export interface DTreeOptions < THEME extends DThemeTree > extends DLayoutVerticalOptions<THEME> {
	value: Array < Object >
}

export interface DThemeTree extends DThemeLayoutVertical {

}


export class DTree <
	THEME extends DThemeTree = DThemeTree,
	OPTIONS extends DTreeOptions < THEME > = DTreeOptions < THEME >
	>
	extends DLayoutVertical<THEME, OPTIONS> {

		protected _itemMap?: any
		protected _value?: any
		protected _bus?: EventBus

		protected init(options ? : OPTIONS) {
			super.init(options);
			this._bus = new EventBus();
			if (options && options.value) {
				this._value = options.value
				const parentPosition: number[] = []
				this.addItem(parentPosition, this._value)
			}

		}

		protected addItem(parentPosition: number[] , items: Array < any > ) {
			for (let index = 0; index < items.length; index++) {
				const item = items[index];
				if (item && item.id && item.name) {
					const itemPosition: number[] = parentPosition.concat([index])

					let paddingValue : number = itemPosition.length * 25
					const isParent: boolean = item.items && (item.items.length > 0)
					paddingValue = isParent ? paddingValue - 20 : paddingValue

					const treeItem = new DTreeItem({
						bus: this._bus,
						itemPosition: itemPosition,
						text: {
							value: item.name
						},
						isParent: isParent,
						isExpand: true,
						padding: {
							left: paddingValue
						}
					});

					const itemData: TreeItemData = {
						position: itemPosition,
						item: treeItem
					}
					this._itemMap[item.id] = itemData

					treeItem.on(UtilPointerEvent.down, (): void => {
						this.emit("select", item.id, item.name, item.items)
					});

					this.addChild(treeItem)

					if(item && item.items) {
						this.addItem(itemPosition, item.items)
					}
				}
			}
		}

		/**
		 * toggle
		 */
		public toggle(id : string) {
			if(this._itemMap && this._itemMap[id] && this._itemMap[id].item) {
				const item = this._itemMap[id].item
				if(item.isParent()) {
					item.toggle()
				}
			}
		}
	}
