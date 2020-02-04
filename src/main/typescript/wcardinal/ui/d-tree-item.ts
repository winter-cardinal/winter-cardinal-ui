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
	THEME extends DThemeTreeItem = DThemeTreeItem >
	extends DImageOptions < string, THEME > {
		isParent : boolean
		expanded : boolean,
		bus : EventBus,
		itemPosition : number[],
		y: number
	}

export interface DThemeTreeItem extends DThemeImage {
	getTextValue(state: DBaseState): string;
	newTextValue(): DStateAwareOrValueMightBe < string > ;
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
		protected _bus!: EventBus;
		protected _itemPosition!: number[]

		protected init(options ? : OPTIONS) {
			super.init(options);

			// get isParent option
			this._isParent = !! (options && options.isParent);
			//get isExpand option
			this._isExpanded = !! ( options && options.expanded );

			//get event bus
			if (options && options.bus) {
				this._bus = options.bus
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
		protected onSelect(): void {
			if (this._isParent) {
				this.toggle()
			} else {
				this._bus.emit("selected-tree-item", this._itemPosition)
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
				this.updateTreeParentState()
			}
		}

		public updateItem(options : OPTIONS | null) {
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
			if (this._isExpanded) {
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
