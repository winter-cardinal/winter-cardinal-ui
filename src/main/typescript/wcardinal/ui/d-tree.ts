/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeItemOptions, DTreeItem, DThemeTreeItem } from "./d-tree-item";
import { DPaneOptions, DThemePane, DPane } from './d-pane';
import { DBaseOptions } from './d-base';
import { DContentOptions } from './d-content';
import { DThemes, DThemeDarkTreeItem } from './theme';

export interface DTreeOptions <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions > extends DPaneOptions < THEME, CONTENT_OPTIONS > {
		value: Array<DTreeItemJsonData>
		check?: boolean | null
	}

export interface DThemeTree extends DThemePane {

}

interface MapDTreeItemOptions {
	[key: string]: DTreeItemOptions
}

interface DTreeItemJsonData {
	text: string,
	expanded?: boolean,
	check?: boolean | null
	children: Array <DTreeItemJsonData>
}

export class DTree <
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTreeOptions < THEME, CONTENT_OPTIONS > = DTreeOptions < THEME, CONTENT_OPTIONS >
	>
	extends DPane < THEME, CONTENT_OPTIONS, OPTIONS > {

		protected _itemOptions!: MapDTreeItemOptions
		protected _itemPositions !: Array<number[]>
		protected _itemOptionsShowable!: Array <DTreeItemOptions>
		protected _value!: Array<DTreeItemJsonData>
		protected _check!: boolean | null
		protected _itemIndexMappedStart!: number
		protected _itemIndexMappedEnd!: number
		protected _selectedPosition !: number[]
		private _itemY!: number
		private _itemHeight!: number
		private SEPARATOR = "-";
		protected init(options ? : OPTIONS) {
			super.init(options)

			this._itemOptions = {}
			this._itemPositions = []
			this._itemOptionsShowable = []
			this._itemIndexMappedStart = 0
			this._itemIndexMappedEnd = 0
			this._itemY = 0
			this._check = null

			const dTreeItemTheme: DThemeTreeItem = DThemes.getInstance().get("DTreeItem");
			this._itemHeight = Number(dTreeItemTheme.getHeight())

			if(options && options.check != null && options.check != undefined) {
				this._check = options.check
			}

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
			//calculate content height
			content.height = this._itemOptionsShowable.length * this._itemHeight
			const contentY = content.position.y
			const height = this.height
			const itemIndexMappedStart = (0 - contentY) / this._itemHeight - 2 < 0 ?
				0 :
				Math.floor((0 - contentY) / this._itemHeight) - 2

			const itemIndexMappedEnd = (height - contentY) / this._itemHeight + 2 < this._itemOptionsShowable.length - 1 ?
				Math.floor((height - contentY) / this._itemHeight) + 2 :
				this._itemOptionsShowable.length

			//get items options are shown in Dpane content frame
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
							this.onToggle(treeItem.getItemPosition())
						}
					});
					//listen check event
					treeItem.on("check", (checked: boolean): void => {
						this.onCheck(treeItem.getItemPosition(), checked)
					})
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

		protected getTreeItemJsonData(itemPosition: number[]) {
			let items = this._value
			//access to data of selected item in this.value to update expanded attribute
			for (let i = 0; i < itemPosition.length - 1; i++) {
				items = items[itemPosition[i]].children
			}
			return items[itemPosition[itemPosition.length - 1]]
		}

		protected reload() {
			//reset data of tree widget
			this._itemPositions.length = 0
			this._itemOptionsShowable.length = 0
			this._itemY = 0
			this._content.removeChildren()
			//re-render tree
			this.registerSelectEvent()
			this.mapped([], this._value, true)
			this.update()
		}

		protected onToggle(itemPosition: number[]) {
			const item = this.getTreeItemJsonData(itemPosition)
			item.expanded = !item.expanded
			this.reload()
		}

		protected onCheck(checkedItemPosition: number[], checked :boolean) {
			//clear "_itemOptionsShowable"
			this._itemOptionsShowable.length = 0
			const checkedItemPositionStr = checkedItemPosition.join(this.SEPARATOR)

			this._itemPositions.forEach(itemPosition => {
				const itemPositionStr = itemPosition.join(this.SEPARATOR)
				// check iterator item is children of selected item or not by item position
				if((itemPositionStr + this.SEPARATOR).indexOf(checkedItemPositionStr + this.SEPARATOR) == 0) {
					//update checked state of children item
					this._itemOptions[itemPositionStr].check = checked
					this.getTreeItemJsonData(itemPosition).check = checked
				}
				//push showable item into "_itemOptionsShowable"
				if(this._itemOptions[itemPosition.join(this.SEPARATOR)].showable) {
					this._itemOptionsShowable.push(this._itemOptions[itemPosition.join(this.SEPARATOR)])
				}
			});
			this.update()
		}

		private mapped(parentPosition: number[], items: Array<DTreeItemJsonData>, forcibly?: boolean) {
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

						const parentItemOptions = this._itemOptions[parentPosition.join(this.SEPARATOR)]

						//update checked status of children item follow parent item
						if(item.check != undefined && item.check != null) {
							item.check = this._check == null ? null : item.check
						}
						else if (parentItemOptions && !forcibly) {
							item.check = parentItemOptions.check
						} else {
							item.check = this._check
						}

						let itemOptions : DTreeItemOptions= {
							itemPosition: itemPosition,
							text: text,
							y: this._itemY,
							isParent: isParent,
							expanded: item.expanded,
							check: item.check,
							paddingLeft: paddingValue
						}

						/* displayed items need to satisfy 1 of the 2 conditions:
						1. is root item
						2. the parent item is show and expand
						*/
						if (parentPosition.length == 0 ||
							(parentItemOptions &&
								parentItemOptions.expanded &&
								this._itemOptionsShowable.includes(parentItemOptions))) {
							itemOptions.showable = true
							this._itemOptionsShowable.push(itemOptions)
							this._itemY += this._itemHeight
						} else {
							itemOptions.showable = false
						}

						this._itemOptions[itemPosition.join(this.SEPARATOR)] = itemOptions
						this._itemPositions.push(itemPosition)
						if (item && item.children) {
							if(forcibly) {
								this.mapped(itemPosition, item.children, forcibly)
							} else {
								this.mapped(itemPosition, item.children)
							}
						}
					}
				}
		}
	}
