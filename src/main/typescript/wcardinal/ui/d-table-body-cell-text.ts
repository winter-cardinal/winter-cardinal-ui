/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
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
> extends DImageBase<unknown | null, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ): void {
		super.init( options );
		this._rowIndex = -1;
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
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
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = value;

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellText";
	}
}
