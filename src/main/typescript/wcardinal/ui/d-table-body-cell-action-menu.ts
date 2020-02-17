/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DDropdown, DDropdownOptions, DThemeDropdown } from "./d-dropdown";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellActionMenuOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu
> extends DDropdownOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {

}

export interface DThemeTableBodyCellActionMenu extends DThemeDropdown {

}

export class DTableBodyCellActionMenu<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu,
	OPTIONS extends DTableBodyCellActionMenuOptions<ROW, THEME> = DTableBodyCellActionMenuOptions<ROW, THEME>
> extends DDropdown<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;
	protected _onSelectedBound!: ( selected: unknown ) => void;
	protected _onClosedBound!: () => void;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		const column = options.column;
		this._rowIndex = 0;
		this._columnIndex = column.index;
		this._columnData = column.data;
		this._onSelectedBound = ( selected: unknown ): void => {
			this.onSelected( selected );
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};
	}

	protected onSelected( selected: unknown ): void {
		const columnData = this._columnData;
		const value = columnData.selecting.getter( selected );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			columnData.setter( row, columnIndex, value );
			this.emit( "cellchange", value, null, row, rowIndex, columnIndex, this );
		}
	}

	protected onClosed(): void {
		const menu = this._menu;
		menu.off( "select", this._onSelectedBound );
		menu.off( "close", this._onClosedBound );
	}

	start(): void {
		const menu = this._menu;
		menu.on( "select", this._onSelectedBound );
		menu.on( "close", this._onClosedBound );
		super.start();
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = value as any;

		const enable = this._columnData.editing.enable;
		if( enable !== false ) {
			this.setReadOnly( enable !== true && ! enable( row, columnIndex ) );
		}
	}

	unset(): void {
		this._row = undefined;
	}

	protected getType(): string {
		return "DTableBodyCellActionMenu";
	}
}
