/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventBus } from 'event-bus-station';
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
		protected _treeItems: DTreeItem[] = []
		protected _selected?: VALUE | null
		protected _value?: any
		protected _bus?: EventBus

		protected init(options ? : OPTIONS) {
			super.init(options);

			this._itemMap = {};
			this._bus = new EventBus();
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

	}
