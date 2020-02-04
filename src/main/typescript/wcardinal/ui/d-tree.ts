/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	EventBus
} from 'event-bus-station';
import {
	DTreeItemOptions, DTreeItem, DThemeTreeItem
} from "./d-tree-item";
import { DPaneOptions, DThemePane, DPane } from './d-pane';
import { DBaseOptions } from './d-base';
import { DContentOptions } from './d-content';
import { UtilPointerEvent } from './util';
import { DThemes } from './theme';

export interface DTreeOptions <
VALUE = unknown,
THEME extends DThemeTree = DThemeTree,
CONTENT_OPTIONS extends DBaseOptions = DContentOptions > extends DPaneOptions < THEME, CONTENT_OPTIONS> {
	value: VALUE | null
}

export interface DThemeTree extends DThemePane {

}
interface MapDTreeItemOptions {
	[key : string] : DTreeItemOptions
}


export class DTree <
	VALUE = unknown,
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions < VALUE, THEME, CONTENT_OPTIONS > = DTreeOptions <VALUE, THEME, CONTENT_OPTIONS>
	>
	extends DPane < THEME,CONTENT_OPTIONS, OPTIONS > {

		protected _itemOptions!: MapDTreeItemOptions
		protected _itemOptionsShowable!: Array <DTreeItemOptions>
		protected _value!: VALUE | null
		protected _bus!: EventBus
		protected _itemIndexMappedStart!: number
		protected _itemIndexMappedEnd!: number
		private _itemY!: number
		private _itemHeight!: number

		protected init(options ? : OPTIONS) {
			super.init(options)

			this._bus = new EventBus()
			this._itemOptions = {}
			this._itemOptionsShowable = []
			this._itemIndexMappedStart = 0
			this._itemIndexMappedEnd = 0
			this._itemY = 0

			const dTreeItemTheme: DThemeTreeItem = DThemes.getInstance().get("DTreeItem");
			this._itemHeight = Number(dTreeItemTheme.getHeight())

			if (options && options.value) {
				this._value = options.value
				this.mapped([], this._value)
			}
			this._content.on( "move", (): void => {
				this.update()
			});
			this._content.on( "resize", (): void => {
				this.update(true);
			});
			this.update()
		}
		protected update (forcibly?: boolean) {
			const content = this._content
			let items : Array<DTreeItem> = []
			if(forcibly) {
				content.removeChildren()
			}
			else {
				items = content.children as Array<DTreeItem>;
			}
			content.height = this._itemOptionsShowable.length * this._itemHeight
			const contentY = content.position.y
			const height = this.height
			const itemIndexMappedStart = (0 - contentY) / this._itemHeight - 2 < 0
			? 0
			: Math.floor((0 - contentY) / this._itemHeight) - 2

			const itemIndexMappedEnd = (height - contentY) / this._itemHeight + 2 < this._itemOptionsShowable.length - 1
			? Math.floor((height - contentY) / this._itemHeight) + 2
			: this._itemOptionsShowable.length

			const itemOptionsShown = this._itemOptionsShowable.slice(itemIndexMappedStart, itemIndexMappedEnd)

			if(items.length < itemOptionsShown.length) {
				for (let i = items.length; i < itemOptionsShown.length; i++) {
					const treeItem = new DTreeItem(itemOptionsShown[i])
					treeItem.on(UtilPointerEvent.down, (): void => {
						this.onToggle(itemOptionsShown[i].itemPosition)
					});
					content.addChild(treeItem)
				}
			} else if(items.length > itemOptionsShown.length) {
				for (let i = itemOptionsShown.length; i < items.length; i++) {
					content.removeChild(items[i])
					items.length = itemOptionsShown.length
				}
			}
			for (let i = 0; i < items.length; i++) {
				items[i] = items[i].updateItem(itemOptionsShown[i])
			}
		}
		private onToggle(itemPosition: number[]) {
			if(this._value instanceof Array) {
				let items = this._value

				//access to data of selected item in this.value to update expanded attribute
				for (let i = 0; i < itemPosition.length - 1; i++) {
					items = items[itemPosition[i]].items
				}
				const item = items[itemPosition[itemPosition.length - 1]]
				item.expanded = !item.expanded

				//reset data of tree widget
				this._itemOptions = {}
				this._itemOptionsShowable.length = 0
				this._itemY = 0

				//re-render tree
				this.mapped([], this._value)
				this.update(true)
			}
		}
		private mapped(parentPosition: number[], items: VALUE | null) {
			if(items instanceof Array ) {
				for (let i = 0; i < items.length; i++) {
					const item = items[i];
					if (item) {
						//position of item in this._value
						const itemPosition: number[] = parentPosition.concat([i])

						//calculate padding value of item
						let paddingValue: number = itemPosition.length * 25
						const isParent: boolean = item.items && (item.items.length > 0)
						paddingValue = isParent ? paddingValue - 20 : paddingValue
						const itemName = item.name ? item.name : null

						//set default expand status of item is false
						if(!item.expanded) {
							item.expanded = false
						}

						let itemOptions = {
							itemPosition: itemPosition,
							bus: this._bus,
							text: {
								value: itemName
							},
							y: this._itemY,
							isParent: isParent,
							expanded: item.expanded,
							padding: {
								left: paddingValue
							}
						}

						const parentItemOptions = this._itemOptions[parentPosition.join('-')]

						/* displayed items need to satisfy 1 of the 2 conditions:
						1. is root item
						2. the parent item is show and expand
						*/
						if(parentPosition.length == 0
							|| (parentItemOptions
								&& parentItemOptions.expanded
								&& this._itemOptionsShowable.includes(parentItemOptions))) {
							this._itemOptionsShowable.push(itemOptions)
							this._itemY += this._itemHeight
						}

						this._itemOptions[itemPosition.join('-')] = itemOptions
						if (item && item.items) {
							this.mapped(itemPosition, item.items)
						}
					}
				}
			}
		}
	}
