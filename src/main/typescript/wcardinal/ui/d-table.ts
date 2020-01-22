/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DDialogSelectOptions } from "../ui/d-dialog-select";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DCoordinateSize } from "./d-coordinate";
import { DDialogSelect } from "./d-dialog-select";
import { DMenu, DMenuOptions } from "./d-menu";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTableBody, DTableBodyOptions } from "./d-table-body";
import { DTableCategory, DTableCategoryColumn, DTableCategoryOptions } from "./d-table-category";
import {
	DTableColumn, DTableColumnEditing, DTableColumnOptions,
	DTableColumnSelecting, DTableColumnSelectingOptions, DTableColumnSorting, DTableColumnType,
	DTableEditingUnformatter, DTableGetter, DTableSelectingGetter, DTableSetter
} from "./d-table-column";
import { DTableData, DTableDataOptions } from "./d-table-data";
import { DTableDataList } from "./d-table-data-list";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { DTableDataComparatorFunction } from "./d-table-data-sorter";
import { DTableHeader, DTableHeaderOptions } from "./d-table-header";
import { isArray } from "./util/is-array";
import { isString } from "./util/is-string";
import { toString } from "./util/to-string";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableOptions<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTable = DThemeTable,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	columns: Array<DTableColumnOptions<ROW>>;
	category?: DTableCategoryOptions;
	header?: DTableHeaderOptions<ROW>;
	body?: DTableBodyOptions<ROW, DATA>;
	data?: ROW[] | DTableDataOptions<ROW> | DATA;
}

export interface DThemeTable extends DThemePane {

}

const defaultGetter: DTableGetter<any> = ( row: any, index: number ): unknown => {
	return row[ index ];
};

const defaultSetter: DTableSetter<any> = ( row: any, index: number, cell: unknown ): void => {
	row[ index ] = cell;
};

const defaultEditingUnformatter: DTableEditingUnformatter = ( cell: string ): unknown => {
	return cell;
};

const toColumnAlign = <ROW>( options: DTableColumnOptions<ROW>, type: DTableColumnType ): DAlignHorizontal => {
	if( options.align != null ) {
		if( isString( options.align ) ) {
			return DAlignHorizontal[ options.align ];
		} else {
			return options.align;
		}
	}
	switch( type ) {
	case DTableColumnType.TEXT:
		return DAlignHorizontal.LEFT;
	case DTableColumnType.REAL:
	case DTableColumnType.INTEGER:
		return DAlignHorizontal.RIGHT;
	case DTableColumnType.INDEX:
	case DTableColumnType.SELECT:
		return DAlignHorizontal.CENTER;
	default:
		return DAlignHorizontal.LEFT;
	}
};

const toColumnEditing = <ROW>( options: DTableColumnOptions<ROW> ): DTableColumnEditing => {
	const editing = options.editing;
	if( editing ) {
		return {
			enable: editing.enable === true || options.editable === true,
			formatter: editing.formatter || toString,
			unformatter: editing.unformatter || defaultEditingUnformatter,
			validator: editing.validator
		};
	}
	return {
		enable: options.editable === true,
		formatter: toString,
		unformatter: defaultEditingUnformatter
	};
};

const toComparator = <ROW>( getter: DTableGetter<ROW>, index: number ): DTableDataComparatorFunction<ROW> => {
	return ( rowA: ROW, rowB: ROW ): number => {
		const valueA = getter( rowA, index ) as any;
		const valueB = getter( rowB, index ) as any;
		return ( valueA < valueB ? -1 : ( valueB < valueA ? +1 : 0 ) );
	};
};

const toColumnSorting = <ROW>(
	getter: DTableGetter<ROW>,
	index: number,
	options: DTableColumnOptions<ROW>
): DTableColumnSorting<ROW> => {
	const sorting = options.sorting;
	if( sorting ) {
		const enable = sorting.enable === true || options.sortable === true;
		if( enable ) {
			return {
				enable,
				comparator: sorting.comparator || toComparator( getter, index )
			};
		} else {
			return {
				enable
			};
		}
	}
	if( options.sortable === true ) {
		return {
			enable: true,
			comparator: toComparator( getter, index )
		};
	} else {
		return {
			enable: false
		};
	}
};

const toColumnMenu = ( options?: DMenuOptions<unknown> | DMenu<unknown> ): DMenu<unknown> | undefined => {
	if( options == null ) {
		return undefined;
	} else if( options instanceof DMenu ) {
		return options;
	} else {
		return new DMenu( options );
	}
};

const toColumnDialog = (
	options?: DDialogSelectOptions<unknown> | DDialogSelect<unknown>
): DDialogSelect<unknown> | undefined => {
	if( options == null ) {
		return undefined;
	} else if( options instanceof DDialogSelect ) {
		return options;
	} else {
		return new DDialogSelect( options );
	}
};

const defaultSelectingGetter: DTableSelectingGetter = ( selected: unknown ): unknown => {
	return selected;
};

const toColumnSelecting = ( options: DTableColumnSelectingOptions | undefined ): DTableColumnSelecting => {
	if( options ) {
		return {
			getter: options.getter || defaultSelectingGetter,
			menu: toColumnMenu( options.menu ),
			dialog: toColumnDialog( options.dialog ),
			fetcher: options.fetcher
		};
	}
	return {
		getter: defaultSelectingGetter
	};
};

const toColumn = <ROW>( index: number, options: DTableColumnOptions<ROW> ): DTableColumn<ROW> => {
	const weight = ( options.weight != null ? options.weight :
		( options.width != null ? undefined : +1 )
	);
	const width = ( weight != null ? undefined :
		( options.width != null ? options.width : 100 )
	);
	const type = ( options.type != null ?
		( isString( options.type ) ? DTableColumnType[ options.type ] : options.type ) :
		DTableColumnType.TEXT
	);
	const align = toColumnAlign( options, type );
	const label = options.label || "";
	const getter = options.getter || defaultGetter;
	const setter = options.setter || defaultSetter;
	return {
		weight,
		width,
		type,
		label,
		getter,
		setter,
		formatter: options.formatter,
		align,

		editing: toColumnEditing( options ),
		sorting: toColumnSorting( getter, index, options ),

		header: options.header,
		body: options.body,

		selecting: toColumnSelecting( options.selecting ),

		category: options.category,
		frozen: options.frozen,
		offset: 0.0
	};
};

const toColumns = <ROW>( options: Array<DTableColumnOptions<ROW>> ): Array<DTableColumn<ROW>> => {
	const result = [];
	for( let i = 0, imax = options.length; i < imax; ++i ) {
		result.push( toColumn( i, options[ i ] ) );
	}
	return result;
};

const toFrozen = <ROW>( columns: Array<DTableColumn<ROW>> ): number => {
	for( let i = columns.length - 1; 0 <= i; --i ) {
		if( columns[ i ].frozen === true ) {
			return i + 1;
		}
	}
	return 0;
};

export class DTable<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTable = DThemeTable,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTableOptions<ROW, DATA, THEME, CONTENT_OPTIONS> = DTableOptions<ROW, DATA, THEME, CONTENT_OPTIONS>
>  extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _category!: DTableCategory | null;
	protected _header!: DTableHeader<ROW>;
	protected _body!: DTableBody<ROW, DATA>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		// Column
		const columns = toColumns( options.columns );

		// Frozen
		const frozen = toFrozen( columns );

		// Categories
		const category = this.newCategory( options, columns, frozen );
		this._category = category;

		// Header
		const headerOffset = (category && category.height) || 0;
		const header = this.newHeader( options, columns, frozen, headerOffset );
		this._header = header;

		// Body
		const bodyOffset = headerOffset + header.height;
		const body = this.newBody( options, columns, frozen, bodyOffset );
		this._body = body;

		// Super
		super.init( options );

		// Content
		const content = this._content;
		content.setWidth( this.toContentWidth( options ) );
		content.addChild( body );
		content.addChild( header );
		if( category ) {
			content.addChild( category );
		}
		content.on( "move", (): void => {
			body.update();
		});
		content.on( "resize", (): void => {
			body.update();
		});
		if( body.data.selection.type !== DTableDataSelectionType.NONE ) {
			UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
				body.onRowClicked( e );
			});
		}
		body.update();
	}

	protected hasCategories( columns: Array<DTableColumn<ROW>> ): boolean {
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			if( columns[ i ].category != null ) {
				return true;
			}
		}
		return false;
	}

	protected toCategoryColumns( columns: Array<DTableColumn<ROW>>, frozen: number ): DTableCategoryColumn[] {
		const result: DTableCategoryColumn[] = [];
		let current: DTableCategoryColumn | null = null;
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			const column = columns[ i ];
			if( i !== frozen && current && current.label === column.category ) {
				if( current.weight != null && column.weight != null ) {
					current.weight += column.weight;
				} else if( current.width != null && column.width != null ) {
					current.width += column.width;
				} else {
					current = {
						label: column.category,
						weight: column.weight,
						width: column.width,
						offset: 0.0
					};
					result.push( current );
				}
			} else {
				current = {
					label: column.category,
					weight: column.weight,
					width: column.width,
					offset: 0.0
				};
				result.push( current );
			}
		}
		return result;
	}

	protected newCategory( options: OPTIONS, columns: Array<DTableColumn<ROW>>, frozen: number ): DTableCategory | null {
		if( this.hasCategories( columns ) ) {
			return new DTableCategory( this.toCategoryOptions( options.category, columns, frozen ) );
		}
		return null;
	}

	protected toCategoryOptions(
		options: DTableCategoryOptions | undefined,
		columns: Array<DTableColumn<ROW>>,
		frozen: number
	): DTableCategoryOptions {
		if( options ) {
			if( options.columns === undefined ) {
				options.columns = this.toCategoryColumns( columns, frozen );
			}
			if( options.frozen == null ) {
				options.frozen = frozen;
			}
			return options;
		}
		return {
			columns: this.toCategoryColumns( columns, frozen ),
			frozen
		};
	}

	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean {
		const result = this._body.onDblClick( e, interactionManager );
		return super.onDblClick( e, interactionManager ) || result;
	}

	protected getScrollBarOffsetVerticalStart( size: number ): number {
		return size * 0.5 + this._body.position.y;
	}

	protected toContentWidth( options: OPTIONS ): DCoordinateSize {
		let columnWidthTotal = 0;
		const columns = options.columns;
		if( columns ) {
			for( let i = 0, imax = columns.length; i < imax; ++i ) {
				const column = columns[ i ];
				const columnWidth = column.width;
				if( columnWidth != null ) {
					columnWidthTotal += columnWidth;
				}
			}
		}
		if( 0 < columnWidthTotal ) {
			return ( p: number ): number => {
				return Math.max( p, columnWidthTotal );
			};
		}
		return "100%";
	}

	protected newHeader(
		options: OPTIONS,
		columns: Array<DTableColumn<ROW>>,
		frozen: number,
		offset: number
	): DTableHeader<ROW> {
		return new DTableHeader( this.toHeaderOptions( options.header, columns, frozen, offset ) );
	}

	protected toHeaderOptions(
		options: DTableHeaderOptions<ROW> | undefined,
		columns: Array<DTableColumn<ROW>>,
		frozen: number,
		offset: number
	): DTableHeaderOptions<ROW> {
		if( options ) {
			if( options.columns === undefined ) {
				options.columns = columns;
			}
			if( options.frozen == null ) {
				options.frozen = frozen;
			}
			if( options.offset === undefined ) {
				options.offset = offset;
			}
			if( options.table === undefined ) {
				options.table = this;
			}
			return options;
		}
		return {
			columns,
			frozen,
			offset,
			table: this
		};
	}

	protected newBody(
		options: OPTIONS,
		columns: Array<DTableColumn<ROW>>,
		frozen: number,
		offset: number
	): DTableBody<ROW, DATA> {
		return new DTableBody<ROW, DATA>(
			this.toBodyOptions( options.body, columns, frozen, offset, options.data )
		);
	}

	protected toBodyOptions(
		options: DTableBodyOptions<ROW, DATA> | undefined,
		columns: Array<DTableColumn<ROW>>,
		frozen: number,
		offset: number,
		data: ROW[] | DTableDataOptions<ROW> | DATA | undefined
	): DTableBodyOptions<ROW, DATA> {
		if( options != null ) {
			if( options.columns === undefined ) {
				options.columns = columns;
			}
			if( options.frozen == null ) {
				options.frozen = frozen;
			}
			if( options.offset === undefined ) {
				options.offset = offset;
			}
			if( options.data === undefined && data !== undefined ) {
				if( isArray( data ) ) {
					options.data = {
						rows: data
					};
				} else {
					options.data = data;
				}
			}
			if( options.height === undefined && options.weight === undefined ) {
				options.weight = 1;
			}
			return options;
		}
		if( isArray( data ) ) {
			return {
				columns,
				frozen,
				offset,
				data: {
					rows: data
				},
				weight: 1
			};
		} else {
			return {
				columns,
				frozen,
				offset,
				data,
				weight: 1
			};
		}
	}

	protected getType(): string {
		return "DTable";
	}

	get category(): DTableCategory | null {
		return this._category;
	}

	get header(): DTableHeader<ROW> {
		return this._header;
	}

	get body(): DTableBody<ROW, DATA> {
		return this._body;
	}

	get data(): DATA {
		return this._body.data;
	}
}
