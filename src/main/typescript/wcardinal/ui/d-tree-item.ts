/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { UtilPointerEvent } from './util';
import { DTreeItemState } from './d-tree-item-state';
import { DBasePadding } from './d-base-padding';

export interface DTreeItemOptions <
	THEME extends DThemeTreeItem = DThemeTreeItem >
	extends DImageOptions < string, THEME > {
		isParent : boolean
		expanded : boolean,
		itemPosition : number[],
		y: number
	}

export interface DThemeTreeItem extends DThemeImage {
}

export interface DTreeItemSelection {
	add(item: DBase): void;
}

export class DTreeItem <
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions < THEME > = DTreeItemOptions < THEME >
	>
	extends DImage < string, THEME, OPTIONS > {
		protected _isParent!: boolean;
		protected _isExpanded!: boolean | null;
		protected _itemPosition!: number[]

		protected init(options ? : OPTIONS) {
			super.init(options);

			// get isParent option
			this._isParent = !! (options && options.isParent);
			//get isExpand option
			this._isExpanded = !! ( options && options.expanded );
			//get position of item
			if (options && options.itemPosition) {
				this._itemPosition = options.itemPosition
			}

			this.updateStates(false)

			this.on(UtilPointerEvent.down, (): void => {
				this.onSelect()
			});

		}

		protected onSelect(): void {

			if (this._isParent) {
				this.toggle()
			} else {
				this.parent.emit("select", this._itemPosition)
				this.setState(DBaseState.ACTIVE, true)
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

		public updateItem(options : OPTIONS | null, selectedPosition: number[]) {
			if(options) {
				if(options.text) {
					this.text = options.text.value
				} else {
					this.text = ""
				}
				if(options.itemPosition) {
					this._itemPosition = options.itemPosition
				}
				if(options.padding) {
					this._padding = new DBasePadding(this.theme, options)
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
			this.setFocused(false)
		}

		protected updateStates(isActive: boolean): void {
			this.setActive(isActive)
			this.setFocused(false)
			if (!this._isParent) {
				this.setState(DTreeItemState.COLLAPSE, false)
				this.setState(DTreeItemState.EXPAND, false)
				return
			}
			this.setState(DTreeItemState.COLLAPSE, !this._isExpanded)
			this.setState(DTreeItemState.EXPAND, !!this._isExpanded)
		}

		protected getType(): string {
			return "DTreeItem";
		}
	}
