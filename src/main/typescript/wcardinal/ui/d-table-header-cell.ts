/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DTableState } from "./d-table-state";
import { DTableColumn } from "./d-table-column";
import {
	DTableDataComparatorFunction, DTableDataComparatorObject,
	DTableDataOrder, DTableDataSorter
} from "./d-table-data-sorter";
import { DTableHeaderTable } from "./d-table-header";
import { DTableHeaderCellCheck, DTableHeaderCellCheckOptions } from "./d-table-header-cell-check";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableHeaderCellHeader<ROW> {
	readonly table: DTableHeaderTable<ROW> | null;
}

export interface DTableHeaderCellOptions<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell
> extends DImageOptions<string | null, THEME> {
	header?: DTableHeaderCellHeader<ROW>;
	column?: DTableColumn<ROW, unknown>;
	columnIndex?: number;
	check?: DTableHeaderCellCheckOptions;
}

export interface DThemeTableHeaderCell extends DThemeImage<string | null> {

}

export class DTableHeaderCell<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell,
	OPTIONS extends DTableHeaderCellOptions<ROW, THEME> = DTableHeaderCellOptions<ROW, THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _sorter?: DTableDataSorter<ROW>;
	protected _onSorterChangeBound?: () => void;
	protected _header?: DTableHeaderCellHeader<ROW>;
	protected _column?: DTableColumn<ROW, unknown>;
	protected _columnIndex?: number;
	protected _check!: DTableHeaderCellCheck<ROW>;
	protected _checkWork?: Point;

	protected init( options?: OPTIONS ): void {
		if( options != null ) {
			this._header = options.header;
			this._column = options.column;
			this._columnIndex = options.columnIndex;
			this._check = new DTableHeaderCellCheck<ROW>( this, options.check );
		} else {
			this._check = new DTableHeaderCellCheck<ROW>( this );
		}
		super.init( options );
		this.initOnClick( options );
	}

	get column(): DTableColumn<ROW, unknown> | undefined {
		return this._column;
	}

	get columnIndex(): number | undefined {
		return this._columnIndex;
	}

	get header(): DTableHeaderCellHeader<ROW> | undefined {
		return this._header;
	}

	get check(): DTableHeaderCellCheck<ROW> {
		return this._check;
	}

	protected initOnClick( options?: OPTIONS ): void {
		const column = this._column;
		if( column ) {
			const sortable = column.sorting.enable;
			const checkable = this._check.isEnabled;
			if( checkable || sortable ) {
				UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
					this.onClick( e );
				});
				const state = this.state;
				state.lock();
				state.set( DTableState.SORTABLE, sortable );
				state.set( DTableState.CHECKABLE, checkable );
				state.unlock();
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
				const SORTED_ASCENDING = DTableState.SORTED_ASCENDING;
				const SORTED_DESCENDING = DTableState.SORTED_DESCENDING;
				if( sorter.isApplied() && sorter.get() === comparator ) {
					if( sorter.order === DTableDataOrder.ASCENDING ) {
						this.state.set( SORTED_ASCENDING, SORTED_DESCENDING );
					} else {
						this.state.set( SORTED_DESCENDING, SORTED_ASCENDING );
					}
				} else {
					this.state.removeAll( SORTED_ASCENDING, SORTED_DESCENDING );
				}
			}
		}
	}

	protected toClickPosition( e: interaction.InteractionEvent ): number {
		const checkWork = ( this._checkWork || new Point() );
		this._checkWork = checkWork;
		return e.data.getLocalPosition( this, checkWork ).x;
	}

	protected isCheckClicked( e: interaction.InteractionEvent ): boolean {
		if( this._check.isEnabled ) {
			if( this.isSortable ) {
				const image = this._images[ 1 ];
				if( image && image.image != null ) {
					const position = this.toClickPosition( e );
					const bound = image.bound;
					const margin = image.margin.horizontal;
					return ( bound.left - margin <= position && position <= bound.right + margin );
				}
			} else {
				return true;
			}
		}
		return false;
	}

	onClick( e: interaction.InteractionEvent ): void {
		if( this.state.isActionable ) {
			if( this.isCheckClicked( e ) ) {
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
		if( this.isSortable ) {
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

	get isSortable(): boolean {
		const column = this._column;
		if( column ) {
			return column.sorting.enable;
		}
		return false;
	}

	get isToggle(): boolean {
		return this._check.isEnabled;
	}

	toggle(): void {
		if( this.state.isActionable ) {
			if( this.isToggle ) {
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
			this._check.execute( true );
			this.emit( "active", this );
		} else {
			this._check.execute( false );
			this.emit( "inactive", this );
		}
	}

	protected onActivateKeyDown( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle ) {
				this.onToggleStart();
			} else {
				this.state.isPressed = true;
			}
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle ) {
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
