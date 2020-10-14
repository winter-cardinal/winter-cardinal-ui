/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTableBodyCellInputTextOptions } from "./d-table-body-cell-input-text";
import { DTableBodyCellInputTreeInput } from "./d-table-body-cell-input-tree-input";
import { DTableBodyCellInputTreeMarker } from "./d-table-body-cell-input-tree-marker";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";

export interface DThemeTableBodyCellInputTree extends DThemeLayoutHorizontal {
	getLevelPadding( level: number ): number;
}

export class DTableBodyCellInputTree<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputTree = DThemeTableBodyCellInputTree
> extends DLayoutHorizontal<THEME> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _columnData: DTableColumn<ROW>;

	protected _marker: DTableBodyCellInputTreeMarker;
	protected _input: DTableBodyCellInputTreeInput;

	constructor( columnIndex: number, columnData: DTableColumn<ROW>, options: DTableBodyCellInputTextOptions<ROW> ) {
		super({
			weight: options.weight,
			width: options.width
		});

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._columnData = columnData;

		// Marker
		const marker = new DTableBodyCellInputTreeMarker({
			visible: false,
			on: {
				active: () => {
					this.onMarkerActive();
				}
			}
		});
		this._marker = marker;
		this.addChild( marker );

		// Input
		const input = new DTableBodyCellInputTreeInput({
			weight: 1,
			text: options.text,
			editing: options.editing
		});
		this._input = input;
		input.on( "change", ( newValue: unknown, oldValue: unknown ): void => {
			const row = this._row;
			if( row !== undefined ) {
				const rowIndex = this._rowIndex;
				this._columnData.setter( row, columnIndex, newValue );
				this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
			}
		});
		this.addChild( input );
	}

	protected onMarkerActive(): void {
		if( this._marker.state.is( DTableCellState.HAS_CHILDREN ) ) {
			const row = this.parent;
			if( row ) {
				const body = row.parent as any;
				if( body ) {
					const data = body.data;
					if( data && data.toggle ) {
						data.toggle( this._row );
						this.emit( "cellchange", null, null, this._row, this._rowIndex, this._columnIndex, this );
					}
				}
			}
		}
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
		this._input.visible = true;
		this._input.text = String( value );

		const marker = this._marker;
		if( isNumber( supplimental ) ) {
			const isOpened = !! (supplimental & 0x1);
			const hasChildren = !! (supplimental & 0x2);
			const level = (supplimental >> 2);
			if( hasChildren ) {
				if( isOpened ) {
					marker.state.set( DTableCellState.HAS_CHILDREN | DTableCellState.OPENED, DBaseState.DISABLED );
				} else {
					marker.state.set( DTableCellState.HAS_CHILDREN, DBaseState.DISABLED | DTableCellState.OPENED );
				}
			} else {
				if( isOpened ) {
					marker.state.set( DBaseState.DISABLED | DTableCellState.OPENED, DTableCellState.HAS_CHILDREN );
				} else {
					marker.state.remove( DTableCellState.HAS_CHILDREN | DTableCellState.OPENED );
				}
			}
			marker.show();
			marker.width = this.theme.getLevelPadding( level );
		} else {
			marker.state.remove( DTableCellState.OPENED | DTableCellState.HAS_CHILDREN );
			marker.hide();
		}

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this._input, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
		this._input.visible = false;
		this._marker.hide();
	}

	protected getType(): string {
		return "DTableBodyCellInputTree";
	}
}
