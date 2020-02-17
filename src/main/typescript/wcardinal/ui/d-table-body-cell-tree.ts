/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DBaseState } from "./d-base-state";
import {
	DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
import { isNumber } from "./util/is-number";

export interface DTableBodyCellTreeOptions<
	ROW,
	THEME extends DThemeTableBodyCellTree = DThemeTableBodyCellTree
> extends DTableBodyCellButtonOptions<ROW, THEME> {

}

export interface DThemeTableBodyCellTree extends DThemeTableBodyCellButton {
	getLevelPadding( level: number ): number;
}

export class DTableBodyCellTree<
	ROW,
	THEME extends DThemeTableBodyCellTree = DThemeTableBodyCellTree,
	OPTIONS extends DTableBodyCellTreeOptions<ROW, THEME> = DTableBodyCellTreeOptions<ROW, THEME>
> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
	protected _padding!: DBasePaddingAdjustable;

	constructor( options: OPTIONS ) {
		super( options );
		this._padding = new DBasePaddingAdjustable( this._padding );
	}

	protected onActive( e: KeyboardEvent | interaction.InteractionEvent ): void {
		this.emit( "active", this );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );

			const parent = this.parent;
			if( parent ) {
				const body = parent.parent as any;
				if( body ) {
					const data = body.data;
					if( data && data.toggle ) {
						data.toggle( row );
					}
				}
			}
		}
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
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );

		const adjuster = this._padding.adjuster;
		if( isNumber( supplimental ) ) {
			const isOpened = !! (supplimental & 0x1);
			const hasChildren = !! (supplimental & 0x2);
			const level = (supplimental >> 2);
			if( hasChildren ) {
				if( isOpened ) {
					this.setStates( DTableCellState.HAS_CHILDREN | DTableCellState.OPENED, DBaseState.NONE );
				} else {
					this.setStates( DTableCellState.HAS_CHILDREN, DTableCellState.OPENED );
				}
			} else {
				if( isOpened ) {
					this.setStates( DTableCellState.OPENED, DTableCellState.HAS_CHILDREN );
				} else {
					this.setStates( DBaseState.NONE, DTableCellState.HAS_CHILDREN | DTableCellState.OPENED );
				}
			}
			adjuster.left = this.theme.getLevelPadding( level );
		} else {
			this.setStates( DBaseState.NONE, DTableCellState.OPENED | DTableCellState.HAS_CHILDREN );
			adjuster.left = 0;
		}
	}

	protected getType(): string {
		return "DTableBodyCellTree";
	}
}
