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
	DTableColumnSelecting, DTableColumnSelectingDialog, DTableColumnSelectingOptions, DTableColumnSorting,
	DTableColumnType, DTableEditable, DTableGetter, DTableRenderable, DTableSetter
} from "./d-table-column";
import { DTableData, DTableDataOptions } from "./d-table-data";
import { DTableDataList, DTableDataListOptions } from "./d-table-data-list";
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
	data?: ROW[] | DTableDataListOptions<ROW> | DATA;
}

export interface DThemeTable extends DThemePane {

}

const defaultGetter = <ROW, CELL>( row: ROW, columnIndex: number ): CELL => {
	return (row as any)[ columnIndex ];
};

const defaultSetter = <ROW, CELL>( row: ROW, columnIndex: number, cell: CELL ): void => {
	(row as any)[ columnIndex ] = cell;
};

const defaultGetterEmpty = <CELL>(): CELL => "" as any;

const defaultSetterEmpty = (): void => {
	// DO NOTHING
};

const toPathGetter = <ROW, CELL>( path: string[], def?: CELL ): DTableGetter<ROW, CELL> => {
	if( path.length <= 1 ) {
		const key = path[ 0 ];
		if( def === undefined ) {
			return ( row: ROW ): CELL => {
				return (row as any)[ key ];
			};
		} else {
			return ( row: ROW ): CELL => {
				return key in row ? (row as any)[ key ] : def;
			};
		}
	} else {
		if( def === undefined ) {
			return ( row: ROW ): CELL => {
				for( let i = 0, imax = path.length - 1; i < imax; ++i ) {
					row = (row as any)[ path[ i ] ];
				}
				return (row as any)[ path[ path.length - 1 ] ];
			};
		} else {
			return ( row: ROW ): CELL => {
				for( let i = 0, imax = path.length - 1; i < imax; ++i ) {
					row = (row as any)[ path[ i ] ];
				}
				const key = path[ path.length - 1 ];
				return key in row ? (row as any)[ key ] : def;
			};
		}
	}
};

const toPathSetter = <ROW, CELL>( path: string[] ): DTableSetter<ROW, CELL> => {
	if( path.length <= 1 ) {
		const key = path[ 0 ];
		return ( row: ROW, columnIndex: number, cell: CELL ): void => {
			(row as any)[ key ] = cell;
		};
	} else {
		return ( row: ROW, columnIndex: number, cell: CELL ): void => {
			for( let i = 0, imax = path.length - 1; i < imax; ++i ) {
				row = (row as any)[ path[ i ] ] || {};
			}
			(row as any)[ path[ path.length - 1 ] ] = cell;
		};
	}
};

const defaultEditingUnformatter = <CELL>( formatted: string ): CELL => {
	return formatted as any;
};

const toColumnAlign = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	type: DTableColumnType
): DAlignHorizontal => {
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
	case DTableColumnType.BUTTON:
	case DTableColumnType.INDEX:
	case DTableColumnType.SELECT:
	case DTableColumnType.ACTION:
	case DTableColumnType.LINK:
		return DAlignHorizontal.CENTER;
	default:
		return DAlignHorizontal.LEFT;
	}
};

const toColumnDataChecker = <ROW>( path: string[] | null ): DTableEditable<ROW> => {
	if( path != null ) {
		if( path.length <= 1 ) {
			const key = path[ 0 ];
			return ( row: ROW ): boolean => {
				return key in row;
			};
		} else {
			return ( row: any ): boolean => {
				for( let i = 0, imax = path.length; i < imax; ++i ) {
					const part = path[ i ];
					if( part in row ) {
						row = row[ part ];
					} else {
						return false;
					}
				}
				return true;
			};
		}
	}
	return ( row: any, columnIndex: number ): boolean => {
		return columnIndex < row.length;
	};
};

const toColumnEditingEnable = <ROW>(
	enable: boolean | DTableEditable<ROW> | "auto" | "AUTO" | undefined,
	path: string[] | null
): boolean | DTableEditable<ROW> => {
	if( isString( enable ) ) {
		return toColumnDataChecker( path );
	} else if( enable != null ) {
		return enable;
	} else {
		return false;
	}
};

const toColumnEditing = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	path: string[] | null
): DTableColumnEditing<ROW, CELL> => {
	const editing = options.editing;
	if( editing ) {
		return {
			enable: toColumnEditingEnable( editing.enable != null ? editing.enable : options.editable, path ),
			formatter: editing.formatter || toString,
			unformatter: editing.unformatter || defaultEditingUnformatter,
			validator: editing.validator
		};
	}
	return {
		enable: toColumnEditingEnable( options.editable, path ),
		formatter: toString,
		unformatter: defaultEditingUnformatter
	};
};

const toComparator = <ROW, CELL>(
	getter: DTableGetter<ROW, CELL>,
	index: number
): DTableDataComparatorFunction<ROW> => {
	return ( rowA: ROW, rowB: ROW ): number => {
		const valueA = getter( rowA, index ) as any;
		const valueB = getter( rowB, index ) as any;
		return ( valueA < valueB ? -1 : ( valueB < valueA ? +1 : 0 ) );
	};
};

const toColumnSorting = <ROW, CELL>(
	getter: DTableGetter<ROW, CELL>,
	index: number,
	options: DTableColumnOptions<ROW, CELL>
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
	options?: DDialogSelectOptions<unknown> | DTableColumnSelectingDialog<unknown>
): DTableColumnSelectingDialog<unknown> | undefined => {
	if( options == null ) {
		return undefined;
	} else if( "open" in options ) {
		return options;
	} else {
		return new DDialogSelect( options );
	}
};

const defaultSelectingGetter = ( dialog: DTableColumnSelectingDialog<unknown> ): unknown => {
	return dialog.value;
};

const defaultSelectingSetter = (): void => {
	// DO NOTHING
};

const toColumnSelecting = (
	options: DTableColumnSelectingOptions<any, any, any> | undefined
): DTableColumnSelecting<any, any, any> => {
	if( options ) {
		return {
			getter: options.getter || defaultSelectingGetter,
			setter: options.setter || defaultSelectingSetter,
			menu: toColumnMenu( options.menu ),
			multiple: toColumnMenu( options.multiple ),
			dialog: toColumnDialog( options.dialog ),
			promise: options.promise
		};
	}
	return {
		getter: defaultSelectingGetter,
		setter: defaultSelectingSetter
	};
};

const toColumnGetter = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	type: DTableColumnType,
	parts: string[] | null
): DTableGetter<ROW, CELL> => {
	const getter = options.getter;
	if( getter ) {
		return getter;
	}
	switch( type ) {
	case DTableColumnType.ACTION:
	case DTableColumnType.LINK:
		return defaultGetterEmpty;
	default:
		if( parts == null ) {
			return defaultGetter;
		} else {
			return toPathGetter( parts, options.default );
		}
	}
};

const toColumnSetter = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	type: DTableColumnType,
	path: string[] | null
): DTableSetter<ROW, CELL> => {
	const setter = options.setter;
	if( setter ) {
		return setter;
	}
	switch( type ) {
	case DTableColumnType.BUTTON:
	case DTableColumnType.ACTION:
	case DTableColumnType.LINK:
		return defaultSetterEmpty;
	default:
		if( path == null ) {
			return defaultSetter;
		} else {
			return toPathSetter( path );
		}
	}
};

const toColumnPath = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>
): string[] | null => {
	return options.path != null ? options.path.split( "." ) : null;
};

const toColumnRenderable = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	path: string[] | null
): boolean | DTableRenderable<ROW> => {
	const renderable = options.renderable;
	if( isString( renderable ) ) {
		return toColumnDataChecker( path );
	} else if( renderable != null ) {
		return renderable;
	}
	return true;
};

const toColumn = <ROW, CELL>(
	index: number,
	options: DTableColumnOptions<ROW, CELL>
): DTableColumn<ROW, CELL> => {
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
	const path = toColumnPath( options );
	const getter = toColumnGetter( options, type, path );
	const setter = toColumnSetter( options, type, path );
	return {
		weight,
		width,
		type,
		label,
		getter,
		setter,
		formatter: options.formatter,
		renderable: toColumnRenderable( options, path ),
		align,

		editing: toColumnEditing( options, path ),
		sorting: toColumnSorting( getter, index, options ),

		header: options.header,
		body: options.body,

		selecting: toColumnSelecting( options.selecting ),

		category: options.category,
		frozen: options.frozen,
		offset: 0.0,

		link: options.link
	};
};

const toColumns = <ROW, CELL>(
	options: Array<DTableColumnOptions<ROW, CELL>>
): Array<DTableColumn<ROW, CELL>> => {
	const result = [];
	for( let i = 0, imax = options.length; i < imax; ++i ) {
		result.push( toColumn( i, options[ i ] ) );
	}
	return result;
};

const toFrozen = <ROW, CELL>(
	columns: Array<DTableColumn<ROW, CELL>>
): number => {
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
	protected _categories!: DTableCategory[];
	protected _header!: DTableHeader<ROW> | null;
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
		const categories = this.newCategories( options, columns, frozen );
		this._categories = categories;

		// Header
		let headerOffset = 0;
		for( let i = 0, imax = categories.length; i < imax; ++i ) {
			headerOffset += categories[ i ].height;
		}
		const header = this.newHeader( options, columns, frozen, headerOffset );
		this._header = header;

		// Body
		const bodyOffset = headerOffset + ((header && header.height) || 0);
		const body = this.newBody( options, columns, frozen, bodyOffset );
		this._body = body;

		// Super
		super.init( options );

		// Content
		const content = this._content;
		content.setWidth( this.toContentWidth( options ) );
		content.addChild( body );
		if( header ) {
			content.addChild( header );
		}
		for( let i = categories.length - 1; 0 <= i; --i ) {
			content.addChild( categories[ i ] );
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
		content.state.isFocusReverse = true;
		body.update();
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		const body = this._body;
		body.lock();
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
		body.update();
		body.unlock( true );
	}

	protected getCategoryCount( columns: Array<DTableColumn<ROW>> ): number {
		let result = 0;
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			const category = columns[ i ].category;
			if( category != null ) {
				const count = isString( category ) ? 1 : category.length;
				result = Math.max( result, count );
			}
		}
		return result;
	}

	protected toCategoryLabel( index: number, category: string | string[] | undefined ): string | undefined {
		if( category ) {
			if( isString( category ) ) {
				if( index === 0 ) {
					return category;
				}
			} else {
				if( index < category.length ) {
					return category[ index ];
				}
			}
		}
		return undefined;
	}

	protected isSameCategory(
		index: number,
		a: string | string[] | undefined,
		b: string | string[] | undefined
	): boolean {
		if( a != null ) {
			if( b != null ) {
				if( isString( a ) ) {
					if( isString( b ) ) {
						if( 0 < index ) {
							return true;
						} else {
							return a === b;
						}
					} else {
						if( 0 < index ) {
							return b.length <= index;
						} else {
							return b.length === 1 && a === b[ 0 ];
						}
					}
				} else {
					if( isString( b ) ) {
						if( 0 < index ) {
							return a.length <= index;
						} else {
							return a.length === 1 && a[ 0 ] === b;
						}
					} else {
						if( a.length <= index && b.length <= index ) {
							return true;
						} else if( b.length === a.length ) {
							for( let i = index, imax = a.length; i < imax; ++i ) {
								if( a[ i ] !== b[ i ] ) {
									return false;
								}
							}
							return true;
						}
						return false;
					}
				}
			} else {
				if( isString( a ) ) {
					if( 0 < index ) {
						return true;
					} else {
						return false;
					}
				} else {
					if( a.length <= index ) {
						return true;
					} else {
						return false;
					}
				}
			}
		} else {
			if( b != null ) {
				if( isString( b ) ) {
					if( 0 < index ) {
						return true;
					} else {
						return false;
					}
				} else {
					if( b.length <= index ) {
						return true;
					} else {
						return false;
					}
				}
			} else {
				return true;
			}
		}
	}

	protected toCategoryColumns(
		index: number,
		columns: Array<DTableColumn<ROW>>,
		frozen: number
	): DTableCategoryColumn[] {
		const result: DTableCategoryColumn[] = [];
		let tcolumn: DTableColumn<ROW> | null = null;
		let ccolumn: DTableCategoryColumn | null = null;
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			const column = columns[ i ];
			if( i !== frozen && ccolumn && tcolumn && this.isSameCategory( index, tcolumn.category, column.category ) ) {
				if( ccolumn.weight != null && column.weight != null ) {
					ccolumn.weight += column.weight;
				} else if( ccolumn.width != null && column.width != null ) {
					ccolumn.width += column.width;
				} else {
					tcolumn = column;
					ccolumn = {
						label: this.toCategoryLabel( index, column.category ),
						weight: column.weight,
						width: column.width,
						offset: 0.0
					};
					result.push( ccolumn );
				}
			} else {
				tcolumn = column;
				ccolumn = {
					label: this.toCategoryLabel( index, column.category ),
					weight: column.weight,
					width: column.width,
					offset: 0.0
				};
				result.push( ccolumn );
			}
		}
		return result;
	}

	protected toCategoryOptions(
		index: number,
		options: DTableCategoryOptions | undefined,
		columns: Array<DTableColumn<ROW>>,
		frozen: number,
		offset: number
	): DTableCategoryOptions {
		if( options ) {
			if( options.columns === undefined ) {
				options.columns = this.toCategoryColumns( index, columns, frozen );
			}
			if( options.frozen == null ) {
				options.frozen = frozen;
			}
			if( options.offset == null ) {
				options.offset = offset;
			}
			return options;
		}
		return {
			columns: this.toCategoryColumns( index, columns, frozen ),
			frozen,
			offset
		};
	}

	protected newCategories( options: OPTIONS, columns: Array<DTableColumn<ROW>>, frozen: number ): DTableCategory[] {
		const count = this.getCategoryCount( columns );
		const result: DTableCategory[] = [];
		let offset: number = 0;
		for( let i = count - 1; 0 <= i; --i ) {
			const category = new DTableCategory( this.toCategoryOptions( i, options.category, columns, frozen, offset ) );
			result.push( category );
			offset += category.height;
		}
		return result;
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

	protected hasHeader( options: OPTIONS ): boolean {
		const columns = options.columns;
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			if( columns[ i ].label != null ) {
				return true;
			}
		}
		return false;
	}

	protected newHeader(
		options: OPTIONS,
		columns: Array<DTableColumn<ROW>>,
		frozen: number,
		offset: number
	): DTableHeader<ROW> | null {
		if( this.hasHeader( options ) ) {
			return new DTableHeader( this.toHeaderOptions( options.header, columns, frozen, offset ) );
		}
		return null;
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

	get categories(): DTableCategory[] {
		return this._categories;
	}

	get header(): DTableHeader<ROW> | null {
		return this._header;
	}

	get body(): DTableBody<ROW, DATA> {
		return this._body;
	}

	get data(): DATA {
		return this._body.data;
	}
}
