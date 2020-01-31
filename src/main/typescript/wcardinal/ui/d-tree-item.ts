/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { UtilPointerEvent } from './util';
import { EventBus } from 'event-bus-station';
import { DTreeItemState } from './d-tree-item-state';
import { DBasePadding } from './d-base-padding';

export interface DTreeItemOptions <
	VALUE = unknown,
	THEME extends DThemeTreeItem = DThemeTreeItem >
	extends DImageOptions < string, THEME > {
		isParent ? : boolean
		isExpand ? : boolean,
		bus ? : EventBus,
		itemPosition ? : number[]
	}

export interface DThemeTreeItem extends DThemeImage {
	getTextValue(state: DBaseState): string;
	newTextValue(): DStateAwareOrValueMightBe < string > ;
}

export interface DTreeItemSelection {
	add(item: DBase): void;
}

export class DTreeItem <
	VALUE = unknown,
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions < VALUE, THEME > = DTreeItemOptions < VALUE, THEME >
	>
	extends DImage < string, THEME, OPTIONS > {
		protected _isParent!: boolean;
		protected _isExpand!: boolean | null;
		protected _bus!: EventBus;
		protected _itemPosition!: number[]

		protected init(options ? : OPTIONS) {
			super.init(options);

			// get isParent option
			this._isParent = !! (options && options.isParent);
			//get isExpand option
			this._isExpand = !! ( options && options.isExpand );
			//get event bus
			if (options && options.bus) {
				this._bus = options.bus
				this._bus.on("toggle-tree", (parentPosition, isParentExpand, isParentShown): void => {

					// this.onToggle(parentPosition, isParentExpand, isParentShown)
				})

				this._bus.on("selected-tree-item", (selectedItemPosition): void => {

					if (!this._isParent) {
						this.setState(DBaseState.ACTIVE, this._itemPosition.join('-') == selectedItemPosition.join('-'))

					}

				})
			}
			//get position of item
			if (options && options.itemPosition) {
				this._itemPosition = options.itemPosition
			}

			this.updateTreeParentState()

			this.on(UtilPointerEvent.down, (): void => {
				this.onSelect()
			});
		}

		protected onToggle(parentPosition: number[], isParentExpand: boolean, isParentShown: boolean) {
			this.updateTreeParentState()
			if (this._itemPosition.length == parentPosition.length + 1 &&
				this._itemPosition.join('-').indexOf(parentPosition.join('-')) == 0) {
				if (this.isShown()) {
					this.hide()
				} else if (isParentExpand && isParentShown) {
					this.show()
				}
				if (this._isParent) {
					this._bus.emit("toggle-tree", this._itemPosition, this._isExpand, this.isShown())
				}
			}

		}

		protected onSelect(): void {
			if (this._isParent) {
				this.toggle()
			} else {
				this._bus.emit("selected-tree-item", this._itemPosition)
			}
		}

		public isExpand(): boolean {
			if (this._isExpand != null) {
				return this._isExpand
			}
			return false
		}

		public isParent(): boolean {
			if (this._isParent != null) {
				return this._isParent
			}
			return false
		}

		public toggle(): void {
			if (this._isParent) {
				if (this._isExpand != null) {
					this._isExpand = !this._isExpand
				}
				this._bus.emit("toggle-tree", this._itemPosition, this._isExpand, this.isShown())
			}
		}

		public updateItem(options : OPTIONS | null) {
			if(options) {
				if(options.text) {
					this.text = options.text.value
				}
				if(options.itemPosition) {
					this._itemPosition = options.itemPosition
				}
				if(options.padding) {
					this._padding = new DBasePadding(this.theme, options)
				}
				this._isParent = !! (options.isParent)
				this._isExpand = !! (options.isExpand)

				this.updateTreeParentState()
			}
			return this
		}

		protected updateTreeParentState(): void {
			if (!this._isParent) {
				this.setState(DTreeItemState.COLLAPSE, false)
				this.setState(DTreeItemState.EXPAND, false)
				return
			}
			if (this._isExpand) {
				this.setState(DTreeItemState.COLLAPSE, false)
				this.setState(DTreeItemState.EXPAND, true)
			} else {
				this.setState(DTreeItemState.EXPAND, false)
				this.setState(DTreeItemState.COLLAPSE, true)
			}
		}

		protected getType(): string {
			return "DTreeItem";
		}
	}
