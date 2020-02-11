/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeItemOptions, DTreeItem, DThemeTreeItem } from "./d-tree-item";
import { DPaneOptions, DThemePane, DPane } from './d-pane';
import { DBaseOptions } from './d-base';
import { DContentOptions } from './d-content';
import { DThemes } from './theme';

export interface DTreeOptions <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions > extends DPaneOptions < THEME, CONTENT_OPTIONS > {
		value: Array<DTreeItemJsonData>
	}

export interface DThemeTree extends DThemePane {

}

interface MapDTreeItemOptions {
	[key: string]: DTreeItemOptions
}

interface DTreeItemJsonData {
	text: string,
	expanded ?: boolean,
	children: Array <DTreeItemJsonData>
}

export class DTree <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions < THEME, CONTENT_OPTIONS > = DTreeOptions < THEME, CONTENT_OPTIONS >
	>
	extends DPane < THEME, CONTENT_OPTIONS, OPTIONS > {

		protected _itemOptions!: MapDTreeItemOptions
		protected _itemOptionsShowable!: Array < DTreeItemOptions >
		protected _value!: Array<DTreeItemJsonData>
		protected _itemIndexMappedStart!: number
		protected _itemIndexMappedEnd!: number
		protected _selectedPosition !: number[]
		private _itemY!: number
		private _itemHeight!: number

		protected init(options ? : OPTIONS) {
			super.init(options)

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

			this._content.on("move", (): void => {
				this.update()
			});

			this._content.on("resize", (): void => {
				this._content.removeChildren()
				this.update();
			});

			this.registerSelectEvent()

			this.update()
		}

		private registerSelectEvent () {
			//remove select event
			this._content.removeListener("select")
			//update active state of all shown item when a child item is clicked
			this._content.on("select", (selectedPosition: number[]): void => {
				this._selectedPosition = selectedPosition
				let items = this._content.children as Array < DTreeItem >
				items.forEach(item => {
					item.updateActiveState(selectedPosition)
				});
			})
		}

		protected update() {
			const content = this._content
			let	items = content.children as Array < DTreeItem > ;
			content.height = this._itemOptionsShowable.length * this._itemHeight
			const contentY = content.position.y
			const height = this.height
			const itemIndexMappedStart = (0 - contentY) / this._itemHeight - 2 < 0 ?
				0 :
				Math.floor((0 - contentY) / this._itemHeight) - 2

			const itemIndexMappedEnd = (height - contentY) / this._itemHeight + 2 < this._itemOptionsShowable.length - 1 ?
				Math.floor((height - contentY) / this._itemHeight) + 2 :
				this._itemOptionsShowable.length

			//get items options are shown in Dpane content
			const itemOptionsShown = this._itemOptionsShowable.slice(itemIndexMappedStart, itemIndexMappedEnd)

			if (items.length < itemOptionsShown.length) {
				for (let i = items.length; i < itemOptionsShown.length; i++) {
					const itemOptions = itemOptionsShown[i]
					const treeItem = new DTreeItem(itemOptions)
					content.addChild(treeItem)
					//listen select item event
					treeItem.on("selected", (): void => {
						this.emit("select", treeItem)
						if (treeItem.isParent()) {
							this.onToggle(itemOptions.itemPosition)
						}
					});
				}
			} else if (items.length > itemOptionsShown.length) {
				for (let i = itemOptionsShown.length; i < items.length; i++) {
					content.removeChild(items[i])
					items.length = itemOptionsShown.length
				}
			}
			for (let i = 0; i < items.length; i++) {
				items[i] = items[i].update(itemOptionsShown[i], this._selectedPosition)
			}
		}

		protected onToggle(itemPosition: number[]) {
			if (this._value instanceof Array) {
				let items = this._value
				//access to data of selected item in this.value to update expanded attribute
				for (let i = 0; i < itemPosition.length - 1; i++) {
					items = items[itemPosition[i]].children
				}
				const item = items[itemPosition[itemPosition.length - 1]]
				item.expanded = !item.expanded

				//reset data of tree widget
				this._itemOptions = {}
				this._itemOptionsShowable.length = 0
				this._itemY = 0
				this._content.removeChildren()
				//re-render tree
				this.registerSelectEvent()
				this.mapped([], this._value)
				this.update()
			}
		}

		private mapped(parentPosition: number[], items: Array<DTreeItemJsonData>) {
				for (let i = 0; i < items.length; i++) {
					const item = items[i];
					if (item) {
						//position of item in this._value
						const itemPosition: number[] = parentPosition.concat([i])

						//calculate padding value of item
						let paddingValue: number = itemPosition.length * 15
						const isParent: boolean = item.children && (item.children.length > 0)
						const text = item.text ? item.text : ""

						//set default expand status of item is false
						if (item.expanded == undefined || item.expanded == null) {
							item.expanded = false
						}
						let itemOptions : DTreeItemOptions= {
							itemPosition: itemPosition,
							text: text,
							y: this._itemY,
							isParent: isParent,
							expanded: item.expanded,
							paddingLeft: paddingValue
						}

						const parentItemOptions = this._itemOptions[parentPosition.join('-')]

						/* displayed items need to satisfy 1 of the 2 conditions:
						1. is root item
						2. the parent item is show and expand
						*/
						if (parentPosition.length == 0 ||
							(parentItemOptions &&
								parentItemOptions.expanded &&
								this._itemOptionsShowable.includes(parentItemOptions))) {
							this._itemOptionsShowable.push(itemOptions)
							this._itemY += this._itemHeight
						}

						this._itemOptions[itemPosition.join('-')] = itemOptions
						if (item && item.children) {
							this.mapped(itemPosition, item.children)
						}
					}
				}
		}
	}
