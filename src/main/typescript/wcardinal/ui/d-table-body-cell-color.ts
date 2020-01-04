/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonColor, DButtonColorOptions, DThemeButtonColor } from "./d-button-color";
import { DColorAndAlpha } from "./d-color";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";

export interface DTableBodyCellColorOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor
> extends DButtonColorOptions<THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellColor extends DThemeButtonColor {

}

const clone = ( value: DColorAndAlpha ): DColorAndAlpha => {
	return {
		color: value.color,
		alpha: value.alpha
	};
};

const hasColor = ( value: any ): value is { color: unknown } => {
	return ( "color" in value );
};

const hasAlpha = ( value: any ): value is { alpha: unknown } => {
	return ( "alpha" in value );
};

export class DTableBodyCellColor<
	ROW = unknown,
	THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor,
	OPTIONS extends DTableBodyCellColorOptions<ROW, THEME> = DTableBodyCellColorOptions<ROW, THEME>
> extends DButtonColor<THEME, OPTIONS> implements DTableBodyCell {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;

		this.on( "select", ( newValue: DColorAndAlpha, oldValue: DColorAndAlpha ): void => {
			this.emit( "cellchange", clone( newValue ), clone( oldValue ), this._columnIndex, this._columnData );
		});
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	set( newValue: unknown ): void {
		const value = this._value;
		if( utilIsNumber( newValue ) ) {
			value.color = newValue;
			value.alpha = 1;
		} else if( utilIsString( newValue ) ) {
			const parsed = Number( newValue );
			if( parsed === parsed ) {
				value.color = parsed;
			} else {
				value.color = 0xffffff;
			}
			value.alpha = 1;
		} else if( newValue != null ) {
			if( hasColor( newValue ) ) {
				value.color = Number( newValue.color );
			} else {
				value.color = 0xffffff;
			}
			if( hasAlpha( newValue ) ) {
				value.alpha = Number( newValue.alpha );
			} else {
				value.alpha = 1;
			}
		} else {
			value.color = 0xffffff;
			value.alpha = 1;
		}
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellColor";
	}
}
