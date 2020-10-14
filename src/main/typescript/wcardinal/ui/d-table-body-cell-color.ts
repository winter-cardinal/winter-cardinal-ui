/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonColor, DButtonColorOptions, DThemeButtonColor } from "./d-button-color";
import { DColorAndAlpha } from "./d-color-and-alpha";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";

export interface DTableBodyCellColorOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor
> extends DButtonColorOptions<THEME> {
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
> extends DButtonColor<THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _columnData: DTableColumn<ROW>;

	constructor( columnIndex: number, columnData: DTableColumn<ROW>, options: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._columnData = columnData;

		this.on( "change", ( newValue: DColorAndAlpha, oldValue: DColorAndAlpha ): void => {
			const row = this._row;
			if( row !== undefined ) {
				const newValueCloned = clone( newValue );
				const oldValueCloned = clone( oldValue );
				const rowIndex = this._rowIndex;
				this._columnData.setter( row, columnIndex, newValueCloned );
				this.emit( "cellchange", newValueCloned, oldValueCloned, row, rowIndex, columnIndex, this );
			}
		});
	}

	get row(): ROW | undefined {
		return this._row;
	}

	get rowIndex(): number {
		return this._rowIndex;
	}

	get columnIndex(): number {
		return this._columnIndex;
	}

	set(
		newValue: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		const value = this._value;
		if( isNumber( newValue ) ) {
			value.color = newValue;
			value.alpha = 1;
		} else if( isString( newValue ) ) {
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

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellColor";
	}
}
