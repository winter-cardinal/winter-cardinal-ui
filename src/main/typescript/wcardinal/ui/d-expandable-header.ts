/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DExpandableHeaderOptions<
	VALUE = unknown,
	THEME extends DThemeExpandableHeader<VALUE> = DThemeExpandableHeader<VALUE>
> extends DImageOptions<VALUE, THEME> {

}

export interface DThemeExpandableHeader<VALUE = unknown> extends DThemeImage<VALUE> {

}

export class DExpandableHeader<
	VALUE = unknown,
	THEME extends DThemeExpandableHeader<VALUE> = DThemeExpandableHeader<VALUE>,
	OPTIONS extends DExpandableHeaderOptions<VALUE, THEME> = DExpandableHeaderOptions<VALUE, THEME>
> extends DImage<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );

		this.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			if( this.state.isActionable ) {
				this.onSelect( e );
			}
		});
	}

	protected onSelect( e: KeyboardEvent | interaction.InteractionEvent ): void {
		this.emit( "select", this );
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onKeyDownActivate( e );
		}
		return super.onKeyDown( e );
	}

	protected onKeyDownActivate( e: KeyboardEvent ): boolean {
		if( this.state.isActionable && this.state.isFocused ) {
			this.onSelect( e );
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DExpandableHeader";
	}
}
