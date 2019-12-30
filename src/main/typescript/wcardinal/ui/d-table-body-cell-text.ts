/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellTextOptions<ROW, THEME extends DThemeTableBodyCellText = DThemeTableBodyCellText>
	extends DImageBaseOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellText extends DThemeImageBase {
	getTextValue( state: DBaseState ): unknown;
	newTextValue(): unknown;
}

export class DTableBodyCellText<
	ROW,
	THEME extends DThemeTableBodyCellText = DThemeTableBodyCellText,
	OPTIONS extends DTableBodyCellTextOptions<ROW, THEME> = DTableBodyCellTextOptions<ROW, THEME>
> extends DImageBase<unknown, THEME, OPTIONS> implements DTableBodyCell {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ): void {
		super.init( options );
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;
	}

	set( value: unknown ): void {
		this.text = value;
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellText";
	}
}
