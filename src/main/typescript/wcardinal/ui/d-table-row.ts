/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rectangle } from "pixi.js";
import { DBase } from "./d-base";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTableCellState } from "./d-table-cell-state";

export interface DTableRowOptions<
	ROW,
	COLUMN,
	THEME extends DThemeTableRow = DThemeTableRow
> extends DLayoutHorizontalOptions<THEME> {
	columns?: COLUMN[];
	frozen?: number;
	even?: boolean;
}

export interface DThemeTableRow extends DThemeLayoutHorizontal {

}

export interface DTableRowColumn {
	weight?: number;
	frozen?: boolean;
	offset: number;
}

export abstract class DTableRow<
	ROW,
	COLUMN extends DTableRowColumn,
	THEME extends DThemeTableRow = DThemeTableRow,
	OPTIONS extends DTableRowOptions<ROW, COLUMN, THEME> = DTableRowOptions<ROW, COLUMN, THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _columns!: COLUMN[];
	protected _frozen!: number;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ): void {
		super.init( options );

		// State
		if( !! options.even ) {
			this.state.isAlternated = true;
		}
		this.state.isFocusReverse = true;
		this._reverse = true;

		// Frozen
		const frozen = this._frozen = options.frozen ?? 0;

		// Cells
		const columns = this._columns = options.columns || [];
		const iend = this.toIndexEnd( columns );
		for( let i = columns.length - 1; 0 <= i; --i ) {
			const cell = this.newCell( i, columns[ i ], columns, options );
			const cellState = cell.state;
			cellState.lock( false );
			if( i === 0 ) {
				cellState.add( DTableCellState.START );
			}
			if( i === iend ) {
				cellState.add( DTableCellState.END );
			}
			if( i < frozen ) {
				cellState.add( DTableCellState.FROZEN );
			}
			if( i === frozen - 1 ) {
				cellState.add( DTableCellState.FROZEN_END );
			}
			cellState.unlock();
			this.addChild( cell );
		}
	}

	protected toIndexEnd( columns: COLUMN[] ): number {
		const imax = columns.length;
		for( let i = 0; i < imax; ++i ) {
			const column = columns[ i ];
			if( column.weight !== undefined ) {
				return imax - 1;
			}
		}
		return imax;
	}

	protected onRefit(): void {
		super.onRefit();
		this.resetFrozenCellPosition();
	}

	getFocusedChildClippingPositionX( focused: DBase ): number {
		const frozen = this._frozen;
		if( 0 < frozen ) {
			const cells = this.children as DBase[];
			const cellIndex = cells.indexOf( focused );
			if( 0 <= cellIndex ) {
				const cellsLength = cells.length;
				const columnIndex = cellsLength - 1 - cellIndex;
				if( frozen <= columnIndex ) {
					const cell = cells[ cellsLength - frozen ];
					return cell.position.x + cell.width;
				}
			}
		}
		return 0;
	}

	updateFrozenCellPosition( x: number ): void {
		const columns = this._columns;
		const cells = this.children;
		const cellsLength = cells.length;
		const frozen = this._frozen;
		for( let i = 0; i < frozen; ++i ) {
			const column = columns[ i ];
			const cell = cells[ cellsLength - 1 - i ];
			cell.position.x = -x + column.offset;
		}
	}

	protected resetFrozenCellPosition(): void {
		const columns = this._columns;
		const cells = this.children;
		const cellsLength = cells.length;
		const frozen = this._frozen;
		const x = this.getContentPositionX();
		for( let i = 0; i < frozen; ++i ) {
			const column = columns[ i ];
			const cell = cells[ cellsLength - 1 - i ];
			column.offset = cell.position.x;
			cell.position.x = -x + column.offset;
		}
	}

	protected abstract getContentPositionX(): number;

	getClippingRect( target: DBase, result: Rectangle ): void {
		super.getClippingRect( target, result );

		const frozen = this._frozen;
		if( 0 < frozen && target.parent === this ) {
			const cells = this.children as DBase[];
			const cellIndex = cells.indexOf( target );
			if( 0 <= cellIndex ) {
				const columnIndex = cells.length - 1 - cellIndex;
				if( frozen <= columnIndex ) {
					const previous = cells[ cellIndex + 1 ];
					const shiftX = previous.position.x + previous.width;
					result.x += shiftX;
					result.width -= shiftX;
				}
			}
		}
	}

	protected abstract newCell(
		columnIndex: number,
		columnData: COLUMN,
		columnDataList: COLUMN[],
		options: OPTIONS
	): DBase;

	protected getType(): string {
		return "DTableRow";
	}
}
