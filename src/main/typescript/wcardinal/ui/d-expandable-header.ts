/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DExpandableHeaderOptions<
	VALUE = unknown,
	THEME extends DThemeExpandableHeader = DThemeExpandableHeader
> extends DImageOptions<VALUE, THEME> {

}

export interface DThemeExpandableHeader extends DThemeImage {

}

export class DExpandableHeader<
	VALUE = unknown,
	THEME extends DThemeExpandableHeader = DThemeExpandableHeader,
	OPTIONS extends DExpandableHeaderOptions<VALUE, THEME> = DExpandableHeaderOptions<VALUE, THEME>
> extends DImage<VALUE, THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );

		this.on( UtilPointerEvent.down, (): void => {
			if( this.state.isActionable ) {
				this.onSelect();
			}
		});
	}

	protected onSelect() {
		this.emit( "select", this );
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( this.state.isActionable && this.state.isFocused && UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onSelect();
		}

		return super.onKeyDown( e );
	}

	protected getType(): string {
		return "DExpandableHeader";
	}
}
