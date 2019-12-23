/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectOptions } from "../ui/d-dialog-select";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DDialogSelect } from "./d-dialog-select";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBody, DTableBodyOptions, DThemeTableBody } from "./d-table-body";
import {
	DTableColumn, DTableColumnEditing, DTableColumnEditingOptions, DTableColumnOptions,
	DTableColumnSelecting, DTableColumnSelectingOptions, DTableColumnType, DTableEditingUnformatter,
	DTableGetter, DTableSelectingGetter, DTableSetter
} from "./d-table-column";
import { DTableData, DTableDataOptions } from "./d-table-data";
import { DTableDataList } from "./d-table-data-list";
import { DTableHeader, DTableHeaderOptions, DThemeTableHeader } from "./d-table-header";
import { utilIsArray } from "./util/util-is-array";
import { utilIsString } from "./util/util-is-string";
import { utilToString } from "./util/util-to-string";

export interface DTableOptions<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTable = DThemeTable
> extends DLayoutVerticalOptions<THEME> {
	columns: Array<DTableColumnOptions<ROW>>;
	header?: DTableHeaderOptions<ROW>;
	body?: DTableBodyOptions<ROW, DATA>;
	data?: ROW[] | DTableDataOptions<ROW> | DATA;
}

export interface DThemeTable extends DThemeLayoutVertical {

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
		if( utilIsString( options.align ) ) {
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

const toColumnEditing = ( options: DTableColumnEditingOptions | undefined ): DTableColumnEditing => {
	if( options ) {
		return {
			formatter: options.formatter || utilToString,
			unformatter: options.unformatter || defaultEditingUnformatter,
			validator: options.validator
		};
	}
	return {
		formatter: utilToString,
		unformatter: defaultEditingUnformatter
	};
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

const toColumn = <ROW>( options: DTableColumnOptions<ROW> ): DTableColumn<ROW> => {
	const weight = ( options.weight != null ? options.weight :
		( options.width != null ? undefined : +1 )
	);
	const width = ( weight != null ? undefined :
		( options.width != null ? options.width : 100 )
	);
	const type = ( options.type != null ?
		( utilIsString( options.type ) ? DTableColumnType[ options.type ] : options.type ) :
		DTableColumnType.TEXT
	);
	const align = toColumnAlign( options, type );
	const editable = ( options.editable === true );
	return {
		weight,
		width,
		type,
		label: options.label || "",
		getter: options.getter || defaultGetter,
		setter: options.setter || defaultSetter,
		formatter: options.formatter,
		align,

		editable,
		editing: toColumnEditing( options.editing ),

		header: options.header,
		body: options.body,

		selecting: toColumnSelecting( options.selecting )
	};
};

const toColumns = <ROW>( options: Array<DTableColumnOptions<ROW>> ): Array<DTableColumn<ROW>> => {
	const result = [];
	for( let i = 0, imax = options.length; i < imax; ++i ) {
		result.push( toColumn( options[ i ] ) );
	}
	return result;
};

const toHeaderOptions = <ROW, THEME extends DThemeTableHeader>(
	options: DTableHeaderOptions<ROW, THEME> | undefined,
	columns: Array<DTableColumn<ROW>>
): DTableHeaderOptions<ROW, THEME> => {
	if( options != null ) {
		if( options.columns === undefined ) {
			options.columns = columns;
		}
		return options as DTableHeaderOptions<ROW, THEME>;
	}
	return {
		columns
	};
};

const toBodyOptions = <ROW, DATA extends DTableData<ROW>, THEME extends DThemeTableBody>(
	options: DTableBodyOptions<ROW, DATA, THEME> | undefined,
	columns: Array<DTableColumn<ROW>>,
	data: ROW[] | DTableDataOptions<ROW> | DATA | undefined
): DTableBodyOptions<ROW, DATA, THEME> => {
	if( options != null ) {
		if( options.data === undefined && data !== undefined ) {
			if( utilIsArray( data ) ) {
				options.data = {
					rows: data
				};
			} else {
				options.data = data;
			}
		}
		if( options.columns === undefined ) {
			options.columns = columns;
		}
		if( options.height === undefined && options.weight === undefined ) {
			options.weight = 1;
		}
		return options as DTableBodyOptions<ROW, DATA, THEME>;
	}
	if( utilIsArray( data ) ) {
		return {
			columns,
			data: {
				rows: data
			},
			weight: 1
		};
	} else {
		return {
			columns,
			data,
			weight: 1
		};
	}
};

export class DTable<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTable = DThemeTable,
	OPTIONS extends DTableOptions<ROW, DATA, THEME> = DTableOptions<ROW, DATA, THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected _header!: DTableHeader<ROW>;
	protected _body!: DTableBody<ROW, DATA>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );

		const columns = toColumns( options.columns );

		const header = this.newHeader( options, columns );
		this._header = header;
		this.addChild( header );

		const body = this.newBody( options, columns );
		this._body = body;
		this.addChild( body );
	}

	protected newHeader( options: OPTIONS, columns: Array<DTableColumn<ROW>> ): DTableHeader<ROW> {
		return new DTableHeader( toHeaderOptions( options.header, columns ) );
	}

	protected newBody( options: OPTIONS, columns: Array<DTableColumn<ROW>> ): DTableBody<ROW, DATA> {
		return new DTableBody<ROW, DATA>( toBodyOptions( options.body, columns, options.data ) );
	}

	protected getType(): string {
		return "DTable";
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
