/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DBaseStates } from "./d-base-states";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from './util';
import { EventBus } from 'event-bus-station';

export interface DTreeItemOptions<
	VALUE = unknown,
	THEME extends DThemeTreeItem = DThemeTreeItem
> extends DImageOptions<string, THEME> {
	isParent?: boolean
	isExpand?: boolean,
	bus?: EventBus,
	itemPosition?: number[]
}

export interface DThemeTreeItem extends DThemeImage {
	getTextValue( state: DBaseState ): string;
	newTextValue(): DStateAwareOrValueMightBe<string>;
}

export interface DTreeItemSelection {
	add( item: DBase ): void;
}

export class DTreeItem<
	VALUE = unknown,
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions<VALUE, THEME> = DTreeItemOptions<VALUE, THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected _isParent!: boolean;
	protected _isExpand!: boolean | null;
	protected _bus!: EventBus;
	protected _itemPosition!: number[]

	protected init( options?: OPTIONS ) {
		super.init( options );

		// get isParent option
		if (options && options.isParent) {
			this._isParent = options.isParent
		} else {
			this._isParent = false
		}
		//get isExpand option
		if (options && options.isExpand != undefined) {
			this._isExpand = options.isExpand
		} else {
			this._isExpand = null
		}
		//get event bus
		if(options && options.bus) {
			this._bus = options.bus
		}

		//get position of item
		if(options && options.itemPosition) {
			this._itemPosition = options.itemPosition
		}

		this.updateTreeItemState(false)

		this.on( UtilPointerEvent.down, (): void => {
			this.onSelect()
		});

		this._bus.on("clicked-tree-parent-item", (parentPosition, isParentExpand, isParentShown): void => {
			if( this._itemPosition.length == parentPosition.length + 1 &&
				this._itemPosition.join('-').indexOf(parentPosition.join('-')) == 0 ) {
					this.toggle(isParentExpand, isParentShown)
				}
		})

	}

	protected toggle(isParentExpand: boolean, isParentShown: boolean) {
		if(this.isShown()) {
			this.hide()
		} else if(isParentExpand && isParentShown) {
			this.show()
		}
		this._bus.emit("clicked-tree-parent-item", this._itemPosition, this._isExpand, this.isShown())

	}

	public isExpand(): boolean {
		if(this._isExpand != null) {
			return this._isExpand
		}
		return false
	}

	protected onSelect(): void {
		if(this._isExpand != null) {
			this._isExpand = !this._isExpand
		}
		this._bus.emit("clicked-tree-parent-item", this._itemPosition, this._isExpand, this.isShown())
		this.updateTreeItemState(true)
	}

	protected updateTreeItemState(selected: boolean): void {
		const primaryState: DBaseState = (selected) ? DBaseState.ACTIVE : DBaseState.NONE
		if (!this._isParent) {
			this.setState(primaryState, true)
		} else if (this._isExpand) {
			this.setState(DBaseState.COLLAPSE, false)
			this.setState(DBaseState.EXPAND, true)
		} else {
			this.setState(DBaseState.EXPAND, false)
			this.setState(DBaseState.COLLAPSE, true)
		}
	}

	protected getType(): string {
		return "DTreeItem";
	}
}
