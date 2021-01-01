/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DTableBodyCellText, DTableBodyCellTextOptions, DThemeTableBodyCellText } from "./d-table-body-cell-text";
import { DTableColumn } from "./d-table-column";
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
	constructor( columnIndex: number, columnData: DTableColumn<ROW>, options?: OPTIONS ) {
		super( columnIndex, columnData, options );

		this.buttonMode = true;
		this.initOnClick( options );
	}

	protected initOnClick( options?: OPTIONS ): void {
		UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
			if( this.state.isActionable ) {
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
		if( this.state.isActionable ) {
			this.state.isPressed = true;
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.state.isPressed ) {
				this.onActive( e );
			}
			this.state.isPressed = false;
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

	protected onStateChange( newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		super.onStateChange( newState, oldState );
		this.buttonMode = newState.isActionable;
	}

	protected getType(): string {
		return "DTableBodyCellButton";
	}
}
