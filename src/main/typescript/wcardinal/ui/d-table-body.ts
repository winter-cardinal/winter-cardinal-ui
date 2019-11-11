/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBase, DBaseOptions } from "./d-base";
import { DButtonBase } from "./d-button-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import {
	DTableBodyFilter, DTableBodyFilterFunction, DTableBodyFilterImpl, DTableBodyFilterObject
} from "./d-table-body-filter";
import { DTableBodyRow, DTableBodyRowOptions } from "./d-table-body-row";
import { DTableBodyRowEven } from "./d-table-body-row-even";
import { DTableBodyRowOdd } from "./d-table-body-row-odd";
import { DTableColumn } from "./d-table-column";
import { DTableSelection, DTableSelectionType } from "./d-table-selection";
import { utilIsString } from "./util/util-is-string";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableBodyOptions<
	ROW,
	THEME extends DThemeTableBody = DThemeTableBody,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	columns?: Array<DTableColumn<ROW>>;
	data?: ROW[];
	selection?: {
		type?: (keyof typeof DTableSelectionType) | DTableSelectionType;
	};
	row?: DTableBodyRowOptions<ROW>;
	filter?: DTableBodyFilterFunction<ROW> | DTableBodyFilterObject<ROW>;
}

export interface DThemeTableBody extends DThemePane {
	getRowHeight(): number;
}

const toData = <ROW>( data: ROW[] | undefined ): ROW[] => {
	const result: ROW[] = [];
	if( data != null ) {
		for( let i = 0, imax = data.length; i < imax; ++i ) {
			result.push( data[ i ] );
		}
	}
	return result;
};

const toSelectionType = ( options: DTableBodyOptions<any> ): DTableSelectionType => {
	return ( options.selection && options.selection.type != null ?
		( utilIsString( options.selection.type ) ? DTableSelectionType[ options.selection.type ] : options.selection.type ) :
		DTableSelectionType.NONE
	);
};

const toRowOptions = <ROW>(
	theme: DThemeTableBody,
	options: DTableBodyOptions<ROW>,
	selectionType: DTableSelectionType
): DTableBodyRowOptions<ROW> => {
	const columns = options.columns || [];
	let result = options.row;
	if( result != null ) {
		if( result.height == null ) {
			result.height = theme.getRowHeight();
		}
		if( result.columns === undefined ) {
			result.columns = columns;
		}
		if( selectionType !== DTableSelectionType.NONE && result.interactive == null ) {
			result.interactive = "SELF";
		}
	} else {
		result = {
			columns,
			height: theme.getRowHeight(),
			interactive: ( selectionType !== DTableSelectionType.NONE ? "SELF" : undefined )
		};
	}
	return result as DTableBodyRowOptions<ROW>;
};

export class DTableBody<
	ROW,
	THEME extends DThemeTableBody = DThemeTableBody,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTableBodyOptions<ROW, THEME, CONTENT_OPTIONS> = DTableBodyOptions<ROW, THEME, CONTENT_OPTIONS>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected static WORK_ON_CLICK = new Point();
	protected _columns!: Array<DTableColumn<ROW>>;
	protected _rowHeight!: number;
	protected _rowIndexStart!: number;
	protected _rowIndexEnd!: number;
	protected _data!: ROW[];
	protected _rowOptions!: DTableBodyRowOptions<ROW>;
	protected _selection!: DTableSelection<ROW>;
	protected _updateRowsCount!: number;
	protected _isUpdateRowsCalled!: boolean;
	protected _isUpdateRowsCalledForcibly!: boolean;
	protected _filter!: DTableBodyFilterImpl<ROW>;
	protected _workRows!: Array<DTableBodyRow<ROW>>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );

		const theme = this.theme;
		const selectionType = toSelectionType( options );
		const rowOptions = toRowOptions( theme, options, selectionType );
		this._rowOptions = rowOptions;
		this._rowHeight = ( rowOptions.height != null ? rowOptions.height : theme.getRowHeight() );
		this._columns = rowOptions.columns || [];
		this._rowIndexStart = 0;
		this._rowIndexEnd = 0;
		this._data = toData( options.data );
		this._updateRowsCount = 0;
		this._isUpdateRowsCalled = false;
		this._isUpdateRowsCalledForcibly = false;
		this._workRows = [];
		const selection = this._selection = new DTableSelection( selectionType, this._data, (): void => {
			this.onSelectionChange();
		});

		this._filter = new DTableBodyFilterImpl<ROW>( this, (): void => {
			this.onFilterChange();
		});
		if( options && options.filter ) {
			this._filter.set( options.filter );
		}

		const content = this.content;
		content.on( "move", (): void => {
			this.update();
		});
		content.on( "resize", (): void => {
			this.update();
		});
		this.update();

		if( selection.type !== DTableSelectionType.NONE ) {
			UtilPointerEvent.onClick( this, ( e: InteractionEvent ): void => {
				if( this.isActionable() ) {
					const local = DTableBody.WORK_ON_CLICK;
					local.copyFrom( e.data.global );
					content.toLocal( local, undefined, local, false );
					const rowIndex = Math.floor( local.y / this._rowHeight );
					const indices = this._filter.indices;
					const data = this._data;
					const dataLength = ( indices != null ? indices.length : data.length );
					if( 0 <= rowIndex && rowIndex < dataLength ) {
						const isSingle = ( selection.type === DTableSelectionType.SINGLE );
						const isNotSingle = ! isSingle;
						const originalEvent = e.data.originalEvent;
						const ctrlKey = originalEvent.ctrlKey;
						const shiftKey = originalEvent.shiftKey;
						const realRowIndex = ( indices ? indices[ rowIndex ] : rowIndex );
						if( isSingle || selection.isEmpty() || ! ( isNotSingle && ( ctrlKey || shiftKey ) ) ) {
							selection.clearAndAdd( realRowIndex );
						} else if( ctrlKey ) {
							selection.toggle( realRowIndex );
						} else if( shiftKey ) {
							selection.addTo( realRowIndex );
						}
					}
				}
			});
		}
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
		this.update();
	}

	get selection(): DTableSelection<ROW> {
		return this._selection;
	}

	lock(): void {
		this._updateRowsCount += 1;
		if( this._updateRowsCount === 1 ) {
			this._isUpdateRowsCalled = false;
			this._isUpdateRowsCalledForcibly = false;
		}
	}

	unlock( callIfNeeded: boolean ): void {
		this._updateRowsCount -= 1;
		if( this._updateRowsCount === 0 ) {
			if( callIfNeeded && this._isUpdateRowsCalled ) {
				this.update( this._isUpdateRowsCalledForcibly );
			}
			this._isUpdateRowsCalled = false;
			this._isUpdateRowsCalledForcibly = false;
		}
	}

	protected onSelectionChange(): void {
		this.update();
	}

	protected onFilterChange(): void {
		this.update();
	}

	/**
	 * Updates rows. If the `forcibly` is true, some dirty checkings for
	 * avoiding unnecessary state changes are skipped.
	 *
	 * @param forcibly true to update forcibly
	 */
	update( forcibly?: boolean ): void {
		if( 0 < this._updateRowsCount ) {
			this._isUpdateRowsCalled = true;
			if( forcibly ) {
				this._isUpdateRowsCalledForcibly = true;
			}
			return;
		}

		const content = this.content;
		const rows = content.children as Array<DTableBodyRow<ROW>>;
		const height = this.height;
		const rowHeight = this._rowHeight;

		const indices = this._filter.indices;
		const data = this._data;
		const dataLength = ( indices != null ? indices.length : data.length );

		const oldRowIndexStart = this._rowIndexStart;
		let oldRowIndexEnd = this._rowIndexEnd;
		let oldRowCount = oldRowIndexEnd - oldRowIndexStart;

		const newContentHeight = Math.max( height, dataLength * rowHeight );
		const newContentY = Math.max( height - newContentHeight, content.position.y );
		content.position.y = newContentY;
		content.height = newContentHeight;

		const newRowIndexLowerBound = Math.floor( (0 - newContentY) / rowHeight );
		const newRowIndexUpperBound = Math.floor( (height - newContentY) / rowHeight );
		const newRowIndexStart = newRowIndexLowerBound - ( newRowIndexLowerBound % 2 === 0 ? 2 : 1 );
		let newRowIndexEnd = newRowIndexUpperBound + ((newRowIndexUpperBound - newRowIndexStart + 1) % 2 === 0 ? 3 : 2);
		let newRowCount = newRowIndexEnd - newRowIndexStart;
		if( newRowCount < oldRowCount && oldRowCount - 2 <= newRowCount ) {
			newRowCount = oldRowCount;
			newRowIndexEnd = newRowIndexStart + newRowCount;
		}

		if( oldRowCount < newRowCount ) {
			for( let i = oldRowCount; i < newRowCount; ++i ) {
				const oldRowIndex = oldRowIndexStart + i;
				const newRow = this.newRow( (oldRowIndex % 2) === 0 );
				content.addChild( newRow );
			}
			oldRowCount = newRowCount;
			oldRowIndexEnd = oldRowIndexStart + oldRowCount;
		} else if( newRowCount < oldRowCount ) {
			for( let i = oldRowCount - 1; newRowCount <= i; --i ) {
				content.removeChild( rows[ i ] );
			}
			oldRowCount = newRowCount;
			oldRowIndexEnd = oldRowIndexStart + oldRowCount;
		}

		this._rowIndexStart = newRowIndexStart;
		this._rowIndexEnd = newRowIndexEnd;

		const rowIndexStartDelta = newRowIndexStart - oldRowIndexStart;
		const absRowIndexStartDelta = Math.abs(rowIndexStartDelta);
		const rowsLength = rows.length;
		if( 0 < absRowIndexStartDelta && absRowIndexStartDelta < rowsLength ) {
			const work = this._workRows;
			if( 0 < rowIndexStartDelta ) {
				for( let i = 0; i < absRowIndexStartDelta; ++i ) {
					work.push( this.resetRow( rows[ i ] ) );
				}
				for( let i = absRowIndexStartDelta; i < rowsLength; ++i ) {
					rows[ i - absRowIndexStartDelta ] = rows[ i ];
				}
				for( let i = 0; i < absRowIndexStartDelta; ++i ) {
					rows[ rowsLength - absRowIndexStartDelta + i ] = work[ i ];
				}
			} else {
				for( let i = 0; i < absRowIndexStartDelta; ++i ) {
					work.push( this.resetRow( rows[ rowsLength - absRowIndexStartDelta + i ] ) );
				}
				for( let i = rowsLength - absRowIndexStartDelta - 1; 0 <= i; --i ) {
					rows[ i + absRowIndexStartDelta ] = rows[ i ];
				}
				for( let i = 0; i < absRowIndexStartDelta; ++i ) {
					rows[ i ] = work[ i ];
				}
			}
			work.length = 0;
		}

		const selection = this._selection;
		if( indices != null ) {
			for( let i = 0; i < rowsLength; ++i ) {
				const row = rows[ i ];
				const rowIndex = newRowIndexStart + i;
				const realRowIndex = indices[ rowIndex ];
				row.position.y = rowIndex * rowHeight;
				row.setDisabled( rowIndex < 0 || dataLength <= rowIndex );
				row.setActive( selection.contains( realRowIndex ) );
				if( 0 <= rowIndex && rowIndex < dataLength ) {
					row.set( data[ realRowIndex ], realRowIndex, forcibly );
				} else {
					row.unset();
				}
			}
		} else {
			for( let i = 0; i < rowsLength; ++i ) {
				const row = rows[ i ];
				const rowIndex = newRowIndexStart + i;
				row.position.y = rowIndex * rowHeight;
				row.setDisabled( rowIndex < 0 || dataLength <= rowIndex );
				row.setActive( selection.contains( rowIndex ) );
				if( 0 <= rowIndex && rowIndex < dataLength ) {
					row.set( data[ rowIndex ], rowIndex, forcibly );
				} else {
					row.unset();
				}
			}
		}
	}

	protected resetRow( row: DTableBodyRow<ROW> ): DTableBodyRow<ROW> {
		row.blur( true );
		const cells = row.children;
		for( let i = 0, imax = cells.length; i < imax; ++i ) {
			const cell = cells[ i ];
			if( cell instanceof DBase ) {
				cell.setPressed( false );
			}
		}
		return row;
	}

	protected newRow( isEven: boolean ): DTableBodyRow<ROW> {
		const options = this._rowOptions;
		const result = ( isEven ?
			new DTableBodyRowEven<ROW>( options ) : new DTableBodyRowOdd<ROW>( options )
		);
		result.on( "change", ( newCellValue: unknown, oldCellValue: unknown, columnIndex: number ): void => {
			const index = this.content.getChildIndex( result );
			if( 0 <= index ) {
				const rowIndex = this._rowIndexStart + index;
				this.emit( "change", newCellValue, oldCellValue, rowIndex, columnIndex, this );
			}
		});
		return result;
	}

	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean {
		let result = false;
		if( this.isActionable() && this._selection.type !== DTableSelectionType.NONE ) {
			const local = UtilPointerEvent.toGlobal( e, interactionManager, DTableBody.WORK_ON_CLICK );
			const content = this.content;
			content.toLocal( local, undefined, local, false );
			const x = local.x;
			const y = local.y;
			const rowIndex = Math.floor( y / this._rowHeight );
			const indices = this._filter.indices;
			const data = this._data;
			const dataLength = ( indices != null ? indices.length : data.length );
			if( 0 <= rowIndex && rowIndex < dataLength ) {
				const index = rowIndex - this._rowIndexStart;
				const rows = content.children as Array<DTableBodyRow<ROW>>;
				if( 0 <= index && index < rows.length ) {
					const row = rows[ index ];
					const cells = row.children as DBase[];
					const cellsLength = cells.length;
					const columns = this._columns;
					const columnsLength = columns.length;
					for( let i = 0, imax = Math.min( cellsLength, columnsLength ); i < imax; ++i ) {
						const column = columns[ columnsLength - i - 1 ];
						if( column.editable ) {
							const cell = cells[ cellsLength - i - 1 ];
							const dx = x - cell.position.x;
							if( 0 <= dx && dx <= cell.width ) {
								cell.focus();
								if( cell instanceof DButtonBase ) {
									cell.onClick();
								}
								result = true;
							}
						}
					}
				}
			}
		}
		result = super.onDblClick( e, interactionManager ) || result;
		return result;
	}

	protected getType(): string {
		return "DTableBody";
	}

	/**
	 * Returns an array of row data.
	 * If you need to modify the returned array,
	 * call the `#update(boolean)` to apply your changes.
	 */
	get rows(): ROW[] {
		return this._data;
	}

	set rows( rows: ROW[] ) {
		if( this._data !== rows ) {
			this._data = rows;
			this.lock();
			this._selection.clear();
			this._filter.clear();
			this.unlock( false );
			this.update();
		}
	}

	clear(): void {
		const data = this._data;
		if( 0 < data.length ) {
			data.length = 0;
			this.lock();
			this._selection.clear();
			this._filter.clear();
			this.unlock( false );
			this.update();
		}
	}

	clearAndAdd( row: ROW ): void {
		const data = this._data;
		data.length = 0;
		data.push( row );
		this.lock();
		this._selection.clear();
		this._filter.clear();
		this.unlock( false );
		this.update();
	}

	clearAndAddAll( rows: ROW[] ): void {
		const data = this._data;
		data.length = 0;
		for( let i = 0, imax = rows.length; i < imax; ++i ) {
			data.push( rows[ i ] );
		}
		this.lock();
		this._selection.clear();
		this._filter.clear();
		this.unlock( false );
		this.update();
	}

	add( row: ROW, index?: number ): void {
		const data = this._data;
		const filter = this._filter;
		const selection = this._selection;
		if( index == null ) {
			data.push( row );
			this.lock();
			filter.add( data.length - 1, 1 );
			this.unlock( false );
			this.update();
		} else if( 0 <= index && index < data.length ) {
			data.splice( index, 0, row );
			this.lock();
			selection.shift( index, 1 );
			filter.shift( index, 1, true );
			this.unlock( false );
			this.update();
		}
	}

	addAll( rows: ROW[], index?: number ): void {
		const data = this._data;
		const dataLength = data.length;
		const filter = this._filter;
		const selection = this._selection;
		if( index == null ) {
			const rowsLength = rows.length;
			for( let i = 0, imax = rowsLength; i < imax; ++i ) {
				data.push( rows[ i ] );
			}
			this.lock();
			filter.add( dataLength - 1, rowsLength );
			this.unlock( false );
			this.update();
		} else if( 0 <= index && index < dataLength ) {
			const rowsLength = rows.length;
			for( let i = 0; i < rowsLength; ++i ) {
				data.splice( index + i, 0, rows[ i ] );
			}
			this.lock();
			selection.shift( index, rowsLength );
			filter.shift( index, rowsLength, true );
			this.unlock( false );
			this.update();
		}
	}

	get( index: number ): ROW | null {
		const data = this._data;
		if( 0 <= index && index < data.length ) {
			return data[ index ];
		}
		return null;
	}

	set( index: number, row: ROW ): ROW | null {
		const data = this._data;
		if( 0 <= index && index < data.length ) {
			const result = data[ index ];
			data[ index ] = row;
			this.update();
			return result;
		}
		return null;
	}

	remove( index: number ): ROW | null {
		const data = this._data;
		if( 0 <= index && index < data.length ) {
			const result = data.splice( index, 1 )[ 0 ];
			this.lock();
			this._selection.remove( index );
			this._filter.remove( index );
			this.unlock( false );
			this.update();
			return result;
		}
		return null;
	}

	size(): number {
		return this._data.length;
	}

	get filter(): DTableBodyFilter<ROW> {
		return this._filter;
	}
}
