/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellIndexOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex
> extends DImageBaseOptions<number, THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellIndex extends DThemeImageBase {
	getTextFormatter(): ( value: number, caller: DTableBodyCellIndex ) => string;
	getTextValue( state: DBaseState ): number;
	newTextValue(): number;
}

export class DTableBodyCellIndex<
	ROW = unknown,
	THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex,
	OPTIONS extends DTableBodyCellIndexOptions<ROW, THEME> = DTableBodyCellIndexOptions<ROW, THEME>
> extends DImageBase<number, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;
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
		this.text = rowIndex;
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellIndex";
	}
}
