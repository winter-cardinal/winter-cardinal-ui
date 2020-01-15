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

export interface DTreeItemOptions<
	VALUE = unknown,
	THEME extends DThemeTreeItem = DThemeTreeItem
> extends DImageOptions<string, THEME> {
	value?: VALUE
	isParent?: boolean
	isExpand?: boolean
}

export interface DThemeTreeItem extends DThemeImage {
	getTextValue( state: DBaseState ): string;
	newTextValue(): DStateAwareOrValueMightBe<string>;
}

// Option parser
const toValue = <VALUE, THEME extends DThemeTreeItem>( options?: DTreeItemOptions<VALUE, THEME> ): VALUE | null => {
	return ( options != null && options.value != null ?
		options.value : null );
};

export interface DTreeItemSelection {
	add( item: DBase ): void;
}

export class DTreeItem<
	VALUE = unknown,
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions<VALUE, THEME> = DTreeItemOptions<VALUE, THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _isParent!: boolean;
	protected _isExpand!: boolean | null;

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.buttonMode = true;
		this._value = toValue( options );

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

		this.updateTreeItemState(false)

		this.on( UtilPointerEvent.down, (): void => {
			this.onSelect()
		});

		this.on("clicked-tree-parent-item", (): void => {
			console.log("recive")
		})
	}

	get value(): VALUE | null {
		return this._value;
	}

	set value( value: VALUE | null ) {
		this._value = value;
	}

	protected hasSelection( target: any ): target is { selection: DTreeItemSelection } {
		return ( target && target.selection && target.selection.add );
	}

	protected getSelection(): DTreeItemSelection | null {
		let parent = this.parent as any;
		while( parent ) {
			if( this.hasSelection( parent ) ) {
				return parent.selection;
			}
			parent = parent.parent;
		}
		return null;
	}

	protected onSelect(): void {
		if(this._isExpand != null) {
			this._isExpand = !this._isExpand
		}
		// this.emit("clicked-tree-parent-item")
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

	onKeyDown( e: KeyboardEvent ): boolean {
		if( this.isActionable() && this.isFocused() && UtilKeyboardEvent.isActivateKey( e ) ) {
		}

		return super.onKeyDown( e );
	}

	protected onStateChange( newState: number, oldState: number ) {
		super.onStateChange( newState, oldState );
		this.buttonMode = DBaseStates.isActionable( newState );
	}

	protected getType(): string {
		return "DTreeItem";
	}
}
