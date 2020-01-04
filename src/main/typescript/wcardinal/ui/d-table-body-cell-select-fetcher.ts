/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectFetcherOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectFetcher = DThemeTableBodyCellSelectFetcher
> extends DButtonOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {

}

export interface DThemeTableBodyCellSelectFetcher extends DThemeButton {

}

export class DTableBodyCellSelectFetcher<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectFetcher = DThemeTableBodyCellSelectFetcher,
	OPTIONS extends DTableBodyCellSelectFetcherOptions<ROW, VALUE, THEME> =
		DTableBodyCellSelectFetcherOptions<ROW, VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> implements DTableBodyCell {
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
		const fetcher = selecting.fetcher;
		if( fetcher != null ) {
			const getter = selecting.getter;
			const onSelectBound = ( selected: unknown ): void => {
				const newValue = getter( selected );
				const oldValue = this.text;
				if( newValue !== oldValue ) {
					this.text = newValue as VALUE;
					this.emit( "cellchange", newValue, oldValue, this._columnIndex, this._columnData );
				}
			};
			this.on( "active", (): void => {
				fetcher().then( onSelectBound );
			});
		}
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	get value(): VALUE {
		return this._textValueComputed;
	}

	set value( value: VALUE ) {
		this.text = value;
	}

	set( value: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean ): void {
		if( forcibly ) {
			this._textValue = value as VALUE;
			this._textValueComputed = value as VALUE;
			this.onTextChange();
			this.createOrUpdateText();
		} else {
			this.text = value as VALUE;
		}
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellSelectFetcher";
	}
}
