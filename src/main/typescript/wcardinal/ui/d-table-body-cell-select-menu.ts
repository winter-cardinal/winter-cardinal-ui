/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelect, DSelectOptions, DThemeSelect } from "./d-select";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectMenuOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMenu = DThemeTableBodyCellSelectMenu
> extends DSelectOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {

}

export interface DThemeTableBodyCellSelectMenu extends DThemeSelect {

}

export class DTableBodyCellSelectMenu<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMenu = DThemeTableBodyCellSelectMenu,
	OPTIONS extends DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME> = DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME>
> extends DSelect<VALUE, THEME, OPTIONS> implements DTableBodyCell {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		const column = options.column;
		this._columnIndex = column.index;
		this._columnData = column.data;
		const selecting = column.data.selecting;
		const getter = selecting.getter;
		this.on( "change", ( newSelected: VALUE | null, oldSelected: VALUE | null ): void => {
			const newValue = getter( newSelected );
			const oldValue = getter( oldSelected );
			this.emit( "cellchange", newValue, oldValue, this._columnIndex, this._columnData );
		});
	}

	set( value: unknown ): void {
		this.value = value as VALUE;
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellSelectMenu";
	}
}
