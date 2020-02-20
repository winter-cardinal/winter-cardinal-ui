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

export interface DListItemOptions<
	VALUE = unknown,
	THEME extends DThemeListItem = DThemeListItem
> extends DImageOptions<string, THEME> {
	value?: VALUE;
}

export interface DThemeListItem extends DThemeImage {
	getTextValue( state: DBaseState ): string;
	newTextValue(): DStateAwareOrValueMightBe<string>;
}

// Option parser
const toValue = <VALUE, THEME extends DThemeListItem>( options?: DListItemOptions<VALUE, THEME> ): VALUE | null => {
	return ( options != null && options.value != null ?
		options.value : null );
};

export interface DListItemSelection {
	add( item: DBase ): void;
}

export class DListItem<
	VALUE = unknown,
	THEME extends DThemeListItem = DThemeListItem,
	OPTIONS extends DListItemOptions<VALUE, THEME> = DListItemOptions<VALUE, THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected _value!: VALUE | null;

	protected init( options?: OPTIONS ) {
		super.init( options );
		this.buttonMode = true;
		this._value = toValue( options );
	}

	get value(): VALUE | null {
		return this._value;
	}

	set value( value: VALUE | null ) {
		this._value = value;
	}

	protected hasSelection( target: any ): target is { selection: DListItemSelection } {
		return ( target && target.selection && target.selection.add );
	}

	protected getSelection(): DListItemSelection | null {
		let parent = this.parent as any;
		while( parent ) {
			if( this.hasSelection( parent ) ) {
				return parent.selection;
			}
			parent = parent.parent;
		}
		return null;
	}

	protected onSelect( e: KeyboardEvent | interaction.InteractionEvent ): void {
		this.emit( "select", this );
		const selection = this.getSelection();
		if( selection ) {
			selection.add( this );
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( this.isActionable() && this.isFocused() && UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onSelect( e );
		}

		return super.onKeyDown( e );
	}

	protected onStateChange( newState: number, oldState: number ) {
		super.onStateChange( newState, oldState );
		this.buttonMode = DBaseStates.isActionable( newState );
	}

	protected getType(): string {
		return "DListItem";
	}
}
