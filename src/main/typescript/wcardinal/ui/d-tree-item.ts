/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { UtilPointerEvent } from './util';
import { DTreeItemState } from './d-tree-item-state';
import { DLayoutHorizontalOptions, DThemeLayoutHorizontal, DLayoutHorizontal } from './d-layout-horizontal';
import { DTreeItemText } from './d-Tree-item-text';
import { DTreeItemToggleIcon} from './d-tree-item-toggle-icon';

export interface DTreeItemOptions <
	THEME extends DThemeTreeItem = DThemeTreeItem >
	extends DLayoutHorizontalOptions < THEME > {
		text: string
		isParent : boolean
		expanded : boolean
		itemPosition : number[]
		y: number,
		paddingLeft: number
	}

export interface DThemeTreeItem extends DThemeLayoutHorizontal {
}


export class DTreeItem <
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions < THEME > = DTreeItemOptions < THEME >
	>
	extends DLayoutHorizontal < THEME, OPTIONS > {
		protected _textValue!: string
		protected _isParent!: boolean
		protected _isExpanded!: boolean | null
		protected _itemPosition!: number[]
		protected _treeItemText!: DTreeItemText
		protected _treeItemToggleIcon !: DTreeItemToggleIcon

		protected init(options ? : OPTIONS) {
			super.init(options);
			//get text
			if (options && options.text) {
				this._textValue = options.text
			}
			// get isParent option
			this._isParent = !! (options && options.isParent);
			//get isExpand option
			this._isExpanded = !! ( options && options.expanded );
			//get position of item
			if (options && options.itemPosition) {
				this._itemPosition = options.itemPosition
			}

			this._treeItemToggleIcon = new DTreeItemToggleIcon()
			this._treeItemToggleIcon.on(UtilPointerEvent.down, (): void => {
				this.onSelect()
			});
			this.updateStates(false)

			this._treeItemText = new DTreeItemText({
				text: {
					value: this._textValue
				}
			})
			this._treeItemText.on(UtilPointerEvent.down, (): void => {
				this.onSelect()
			});

			this.addChild(this._treeItemToggleIcon)
			this.addChild(this._treeItemText)
		}

		protected onSelect(): void {
			this.emit("selected")
			if (this._isParent) {
				this.toggle()
			} else {
				this.parent.emit("select", this._itemPosition)
			}
		}

		public isExpanded(): boolean {
			return !! this._isExpanded
		}

		public isParent(): boolean {
			if (this._isParent != null) {
				return this._isParent
			}
			return false
		}

		public toggle(): void {
			if (this._isParent && this._isExpanded != null) {
				this._isExpanded = !this._isExpanded
				this.updateStates(false)
			}
		}

		public update(options : OPTIONS | null, selectedPosition: number[]) {
			if(options) {
				if(options.text) {
					this._treeItemText.text = options.text
				}
				if(options.itemPosition) {
					this._itemPosition = options.itemPosition
				}
				if(options.paddingLeft) {
					this._padding.set(this._padding.getTop(),
									  this._padding.getRight(),
									  this._padding.getBottom(),
									  options.paddingLeft)
				}
				if(options.y != null) {
					this.position.y = options.y
				}
				this._isParent = !! (options.isParent)
				this._isExpanded = !! (options.expanded)
				const isActive = JSON.stringify(this._itemPosition) == JSON.stringify(selectedPosition)
				this.updateStates(isActive)
			}
			return this
		}

		public updateActiveState(selectedPosition: number[]) {
			const isActive = JSON.stringify(this._itemPosition) == JSON.stringify(selectedPosition)
			this.setActive(isActive)
		}

		protected updateStates(isActive: boolean): void {
			this.setActive(isActive)
			if (!this._isParent) {
				this._treeItemToggleIcon.setState(DTreeItemState.COLLAPSE, false)
				this._treeItemToggleIcon.setState(DTreeItemState.EXPAND, false)
				return
			}
			this._treeItemToggleIcon.setState(DTreeItemState.COLLAPSE, !this._isExpanded)
			this._treeItemToggleIcon.setState(DTreeItemState.EXPAND, !!this._isExpanded)
		}

		protected getType(): string {
			return "DTreeItem";
		}
	}
