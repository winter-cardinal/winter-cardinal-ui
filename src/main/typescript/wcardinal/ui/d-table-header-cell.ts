/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTableCellState } from "./d-table-cell-state";
import { DTableColumn } from "./d-table-column";
import { DTableData } from "./d-table-data";
import {
	DTableDataComparatorFunction, DTableDataComparatorObject,
	DTableDataOrder, DTableDataSorter
} from "./d-table-data-sorter";
import { DTableHeaderTable } from "./d-table-header";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableHeaderCellHeader<ROW> {
	readonly table: DTableHeaderTable<ROW> | null;
}

export interface DTableHeaderCellCheckOptions {
	enable?: boolean;
}

export interface DTableHeaderCellOptions<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell
> extends DImageOptions<string | null, THEME> {
	header?: DTableHeaderCellHeader<ROW>;
	column?: DTableColumn<ROW>;
	columnIndex?: number;
	check?: DTableHeaderCellCheckOptions;
}

export interface DThemeTableHeaderCell extends DThemeImage {
	getTextFormatter(): ( value: string | null, caller: DTableHeaderCell<unknown> ) => string;
	getTextValue( state: DBaseStateSet ): string | null;
	newTextValue(): DStateAwareOrValueMightBe<string | null>;
}

export class DTableHeaderCell<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell,
	OPTIONS extends DTableHeaderCellOptions<ROW, THEME> = DTableHeaderCellOptions<ROW, THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _sorter?: DTableDataSorter<ROW>;
	protected _onSorterChangeBound?: () => void;
	protected _header?: DTableHeaderCellHeader<ROW>;
	protected _column?: DTableColumn<ROW>;
	protected _columnIndex?: number;
	protected _checkable?: boolean;

	protected init( options?: OPTIONS ) {
		if( options != null ) {
			this._header = options.header;
			this._column = options.column;
			this._columnIndex = options.columnIndex;
			const check = options.check;
			if( check ) {
				this._checkable = check.enable;
			}
		}
		super.init( options );
		this.initOnClick( options );
	}

	protected initOnClick( options?: OPTIONS ): void {
		const column = this._column;
		if( column ) {
			const sorting = column.sorting;
			const checkable = this._checkable;
			if( checkable || sorting.enable ) {
				this.buttonMode = this.state.isActionable;
				UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
					this.onClick( e );
				});
				if( checkable ) {
					this.state.add( DTableCellState.CHECKABLE );
				}
			}
		}
	}

	get sorter(): DTableDataSorter<ROW> | null {
		let sorter = this._sorter;
		if( sorter == null ) {
			const header = this._header;
			if( header ) {
				const table = header.table;
				if( table ) {
					sorter = table.data.sorter;
					this._sorter = sorter;
					this._onSorterChangeBound = this._onSorterChangeBound || (() => {
						this.onSorterChange();
					});
					sorter.on( "change", this._onSorterChangeBound );
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
		return sorter;
	}

	get comparator(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null {
		const column = this._column;
		if( column ) {
			return column.sorting.comparator || null;
		}
		return null;
	}

	protected onSorterChange(): void {
		const comparator = this.comparator;
		if( comparator ) {
			const sorter = this._sorter;
			if( sorter ) {
				const SORTED_ASCENDING = DTableCellState.SORTED_ASCENDING;
				const SORTED_DESCENDING = DTableCellState.SORTED_DESCENDING;
				if( sorter.isApplied() && sorter.get() === comparator ) {
					if( sorter.order === DTableDataOrder.ASCENDING ) {
						this.state.set( SORTED_ASCENDING, SORTED_DESCENDING );
					} else {
						this.state.set( SORTED_DESCENDING, SORTED_ASCENDING );
					}
				} else {
					this.state.remove( SORTED_ASCENDING | SORTED_DESCENDING );
				}
			}
		}
	}

	onClick( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			} else {
				this.onActivate( e );
			}
		}
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.doSort( e );
		this.emit( "active", this );
	}

	protected doSort( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		if( this.isSortable() ) {
			const comparator = this.comparator;
			if( comparator ) {
				const sorter = this.sorter;
				if( sorter ) {
					if( sorter.get() === comparator ) {
						if( sorter.order === DTableDataOrder.ASCENDING ) {
							sorter.order = DTableDataOrder.DESCENDING;
							sorter.apply();
						} else {
							sorter.set( null );
							sorter.apply();
						}
					} else {
						sorter.set( comparator );
						sorter.order = DTableDataOrder.ASCENDING;
						sorter.apply();
					}
				}
			}
		}
	}

	isCheckable(): boolean {
		return !! this._checkable;
	}

	isSortable(): boolean {
		const column = this._column;
		if( column ) {
			return column.sorting.enable;
		}
		return false;
	}

	isButton(): boolean {
		return this.isCheckable() || this.isSortable();
	}

	isToggle(): boolean {
		return this.isCheckable();
	}

	toggle(): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			}
		}
	}

	protected onToggleStart(): void {
		this.state.isActive = ! this.state.isActive;
	}

	protected onToggleEnd(): void {
		if( this.state.isActive ) {
			this.onCheckChange( true );
			this.emit( "active", this );
		} else {
			this.onCheckChange( false );
			this.emit( "inactive", this );
		}
	}

	protected onCheckChange( isChecked: boolean ) {
		const header = this.parent as any;
		if( header ) {
			const table = header.table;
			if( table ) {
				const column = this._column;
				const columnIndex = this._columnIndex;
				if( column && columnIndex != null ) {
					let isChanged = false;
					const getter = column.getter;
					const setter = column.setter;
					const data = table.data as DTableData<ROW>;
					data.each(( row: ROW, index: number ): boolean => {
						if( getter( row, columnIndex ) !== isChecked ) {
							setter( row, columnIndex, isChecked );
							isChanged = true;
							this.emit( "cellchange", ! isChecked, isChecked, row, index, columnIndex, this );
						}
						return true;
					});
					if( isChanged ) {
						table.body.update( true );
					}
				}
			}
		}
	}

	protected onActivateKeyDown( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart();
			} else {
				this.state.isPressed = true;
			}
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleEnd();
			} else {
				if( this.state.isPressed ) {
					this.onActivate( e );
				}
				this.state.isPressed = false;
			}
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyDown( e );
		}

		return super.onKeyDown( e );
	}

	onKeyUp( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyUp( e );
		}

		return super.onKeyUp( e );
	}

	protected onStateChange( newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		super.onStateChange( newState, oldState );
		if( this.isButton() ) {
			this.buttonMode = newState.isActionable;
		}
	}

	protected getType(): string {
		return "DTableHeaderCell";
	}

	destroy(): void {
		const sorter = this._sorter;
		const onSorterChangeBound = this._onSorterChangeBound;
		if( sorter && onSorterChangeBound ) {
			sorter.off( "change", onSorterChangeBound );
		}
		this._sorter = undefined;
		this._onSorterChangeBound = undefined;

		super.destroy();
	}
}
