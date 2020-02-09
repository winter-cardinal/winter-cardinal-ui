/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseStates } from "./d-base-states";
import { DTableBodyCellText, DTableBodyCellTextOptions, DThemeTableBodyCellText } from "./d-table-body-cell-text";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableBodyCellButtonOptions<ROW, THEME extends DThemeTableBodyCellButton = DThemeTableBodyCellButton>
	extends DTableBodyCellTextOptions<ROW, THEME> {
}

export interface DThemeTableBodyCellButton extends DThemeTableBodyCellText {

}

export class DTableBodyCellButton<
	ROW,
	THEME extends DThemeTableBodyCellButton = DThemeTableBodyCellButton,
	OPTIONS extends DTableBodyCellButtonOptions<ROW, THEME> = DTableBodyCellButtonOptions<ROW, THEME>
> extends DTableBodyCellText<ROW, THEME, OPTIONS> {
	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ): void {
		super.init( options );
		this.buttonMode = true;
		this.initOnClick( options );
	}

	protected initOnClick( options: OPTIONS ): void {
		UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
			if( this.isActionable() ) {
				this.onActive( e );
			}
		});
	}

	protected onActive( e: KeyboardEvent | interaction.InteractionEvent ): void {
		this.emit( "active", this );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._columnData.setter( row, columnIndex, null );
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );
		}
	}

	protected onActivateKeyDown( e: KeyboardEvent ): void {
		if( this.isActionable() ) {
			this.setPressed( true );
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.isActionable() ) {
			if( this.isPressed() ) {
				this.onActive( e );
			}
			this.setPressed( false );
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyDown( e );
		}

		return super.onKeyDown( e );
	}

	onKeyUp( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyUp( e );
		}

		return super.onKeyUp( e );
	}

	protected onStateChange( newState: number, oldState: number ): void {
		super.onStateChange( newState, oldState );
		this.buttonMode = DBaseStates.isActionable( newState );
	}

	protected getType(): string {
		return "DTableBodyCellButton";
	}
}
