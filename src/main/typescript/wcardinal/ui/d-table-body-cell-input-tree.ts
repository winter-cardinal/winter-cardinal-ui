/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTableBodyCellInputTextOptions } from "./d-table-body-cell-input-text";
import { DTableBodyCellInputTreeInput, DTableBodyCellInputTreeInputOptions } from "./d-table-body-cell-input-tree-input";
import { DTableBodyCellInputTreeMarker } from "./d-table-body-cell-input-tree-marker";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";

export interface DThemeTableBodyCellInputTree extends DThemeLayoutHorizontal {
	getLevelPadding( level: number ): number;
}

const toLayoutOptions = ( options?: DTableBodyCellInputTextOptions<unknown> ) => {
	if( options != null ) {
		return {
			weight: options.weight,
			width: options.width
		};
	}
	return undefined;
}

export class DTableBodyCellInputTree<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputTree = DThemeTableBodyCellInputTree,
	OPTIONS extends DTableBodyCellInputTextOptions<ROW> = DTableBodyCellInputTextOptions<ROW>
> extends DLayoutHorizontal<THEME> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW>;

	protected _marker: DTableBodyCellInputTreeMarker;
	protected _input: DTableBodyCellInputTreeInput;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options?: OPTIONS ) {
		super( toLayoutOptions( options ) );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;

		// Marker
		const marker = this.newMarker( options );
		this._marker = marker;
		this.addChild( marker );

		// Input
		const input = this.newInput( options );
		this._input = input;
		this.addChild( input );
	}

	protected newInput( options?: OPTIONS ): DTableBodyCellInputTreeInput {
		return new DTableBodyCellInputTreeInput( this.toInputOptions( options ) );
	}

	protected toInputOptions( options?: OPTIONS ): DTableBodyCellInputTreeInputOptions {
		return {
			weight: 1,
			text: options?.text,
			editing: options?.editing,
			on: {
				change: ( newValue: unknown, oldValue: unknown ): void => {
					this.onInputChange( newValue, oldValue );
				}
			}
		};
	}

	protected onInputChange( newValue: unknown, oldValue: unknown ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter( row, columnIndex, newValue );
			this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
		}
	}

	protected newMarker( options?: OPTIONS ) {
		return new DTableBodyCellInputTreeMarker({
			visible: false,
			on: {
				active: () => {
					this.onMarkerActive();
				}
			}
		});
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

	get column(): DTableColumn<ROW> {
		return this._column;
	}

	onClick?( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this._input.focus();
	}

	onRowSelect( e: interaction.InteractionEvent, x: number, y: number ): boolean {
		const marker = this._marker;
		if( x <= marker.position.x + marker.width ) {
			marker.onClick( e );
			return true;
		}
		return false;
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
			const markerState = marker.state;
			markerState.lock();
			markerState.set( DTableCellState.HAS_CHILDREN, hasChildren );
			markerState.set( DBaseState.DISABLED, ! hasChildren );
			markerState.set( DTableCellState.OPENED, isOpened );
			markerState.unlock();
			marker.show();
			marker.width = this.theme.getLevelPadding( level );
		} else {
			marker.state.removeAll( DTableCellState.OPENED, DTableCellState.HAS_CHILDREN );
			marker.hide();
		}

		const column = this._column;
		DTableBodyCells.setReadOnly( this._input, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
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
