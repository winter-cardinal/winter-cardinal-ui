/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdown, DDropdownOptions, DThemeDropdown } from "./d-dropdown";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellActionMenuOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu
> extends DDropdownOptions<unknown, THEME> {

}

export interface DThemeTableBodyCellActionMenu extends DThemeDropdown {

}

export class DTableBodyCellActionMenu<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu,
	OPTIONS extends DTableBodyCellActionMenuOptions<ROW, THEME> = DTableBodyCellActionMenuOptions<ROW, THEME>
> extends DDropdown<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW>;
	protected _onSelectedBound: ( selected: unknown ) => void;
	protected _onClosedBound: () => void;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;

		this._onSelectedBound = ( selected: unknown ): void => {
			this.onSelected( selected );
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};
	}

	protected onSelected( selected: unknown ): void {
		const column = this._column;
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			column.setter( row, columnIndex, selected );
			this.emit( "cellchange", selected, null, row, rowIndex, columnIndex, this );
		}
	}

	protected onClosed(): void {
		const menu = this.menu;
		menu.off( "select", this._onSelectedBound );
		menu.off( "close", this._onClosedBound );
	}

	start(): void {
		const menu = this.menu;
		menu.on( "select", this._onSelectedBound );
		menu.on( "close", this._onClosedBound );
		super.start();
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

	get column(): DTableColumn<ROW> {
		return this._column;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = value as any;

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellActionMenu";
	}
}
