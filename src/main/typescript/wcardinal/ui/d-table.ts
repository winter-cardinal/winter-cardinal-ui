/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Rectangle } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
import { DDialogSelectOptions } from "../ui/d-dialog-select";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DFocusable, DFocusableContainer } from "./d-controller-focus";
import { DCoordinateSize } from "./d-coordinate";
import { DDialogSelect } from "./d-dialog-select";
import { DMenu, DMenuOptions } from "./d-menu";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTableBody, DTableBodyOptions } from "./d-table-body";
import { DTableCategory, DTableCategoryColumn, DTableCategoryOptions } from "./d-table-category";
import { DTableColumn, DTableColumnOptions } from "./d-table-column";
import { DTableData, DTableDataOptions } from "./d-table-data";
import { DTableDataList, DTableDataListOptions } from "./d-table-data-list";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { DTableDataComparatorFunction } from "./d-table-data-sorter";
import { DTableHeader, DTableHeaderOptions } from "./d-table-header";
import { DTableRow } from "./d-table-row";
import { isArray } from "./util/is-array";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DTableScrollBar } from "./d-table-scrollbar";
import { DPaneScrollBarOptions } from "./d-pane-scrollbar";
import { DTableColumnType } from "./d-table-column-type";
import { DTableColumnEditing, DTableColumnEditable } from "./d-table-column-editing";
import { DTableColumnSorting } from "./d-table-column-sorting";
import {
	DTableColumnSelecting,
	DTableColumnSelectingDialog,
	DTableColumnSelectingOptions
} from "./d-table-column-selecting";
import { DTableColumnGetter } from "./d-table-column-getter";
import { DTableColumnSetter } from "./d-table-column-setter";
import { DTableColumnRenderable } from "./d-table-column-renderable";
import { DTableColumnState } from "./d-table-column-state";
import { DTableColumnUpdate } from "./d-table-column-update";

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

export interface DThemeTable extends DThemePane {}

const defaultGetter = <ROW, CELL>(row: ROW, columnIndex: number): CELL => {
	return (row as any)[columnIndex];
};

const defaultSetter = <ROW, CELL>(row: ROW, columnIndex: number, cell: CELL): void => {
	(row as any)[columnIndex] = cell;
};

const defaultGetterEmpty = <CELL>(): CELL => "" as any;

const defaultSetterEmpty = (): void => {
	// DO NOTHING
};

const toPathGetter = <ROW, CELL>(path: string[], def?: CELL): DTableColumnGetter<ROW, CELL> => {
	if (path.length <= 1) {
		const key = path[0];
		if (def === undefined) {
			return (row: ROW): CELL => {
				return (row as any)[key];
			};
		} else {
			return (row: ROW): CELL => {
				return Object.prototype.hasOwnProperty.call(row, key) ? (row as any)[key] : def;
			};
		}
	} else {
		if (def === undefined) {
			return (row: ROW): CELL => {
				for (let i = 0, imax = path.length - 1; i < imax; ++i) {
					row = (row as any)[path[i]];
				}
				return (row as any)[path[path.length - 1]];
			};
		} else {
			return (row: ROW): CELL => {
				for (let i = 0, imax = path.length - 1; i < imax; ++i) {
					row = (row as any)[path[i]];
				}
				const key = path[path.length - 1];
				return Object.prototype.hasOwnProperty.call(row, key) ? (row as any)[key] : def;
			};
		}
	}
};

const toPathSetter = <ROW, CELL>(path: string[]): DTableColumnSetter<ROW, CELL> => {
	if (path.length <= 1) {
		const key = path[0];
		return (row: ROW, columnIndex: number, cell: CELL): void => {
			(row as any)[key] = cell;
		};
	} else {
		return (row: ROW, columnIndex: number, cell: CELL): void => {
			for (let i = 0, imax = path.length - 1; i < imax; ++i) {
				row = (row as any)[path[i]] || {};
			}
			(row as any)[path[path.length - 1]] = cell;
		};
	}
};

const toColumnAlign = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	type: DTableColumnType
): DAlignHorizontal => {
	const align = options.align;
	if (align != null) {
		if (isString(align)) {
			return DAlignHorizontal[align];
		} else {
			return align;
		}
	}
	switch (type) {
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
		case DTableColumnType.CHECK:
		case DTableColumnType.CHECK_SINGLE:
		case DTableColumnType.COLOR:
			return DAlignHorizontal.CENTER;
		default:
			return DAlignHorizontal.LEFT;
	}
};

const toColumnDataChecker = <ROW>(path: string[] | null): DTableColumnEditable<ROW> => {
	if (path != null) {
		const pathLength = path.length;
		if (pathLength <= 1) {
			const key = path[0];
			return (row: ROW): boolean => {
				return Object.prototype.hasOwnProperty.call(row, key);
			};
		} else {
			return (row: any): boolean => {
				for (let i = 0; i < pathLength; ++i) {
					const part: string = path[i];
					if (part in row) {
						row = row[part];
					} else {
						return false;
					}
				}
				return true;
			};
		}
	}
	return (row: any, columnIndex: number): boolean => {
		return columnIndex < row.length;
	};
};

const toColumnEditingEnable = <ROW>(
	enable: boolean | DTableColumnEditable<ROW> | "auto" | "AUTO" | undefined,
	path: string[] | null
): boolean | DTableColumnEditable<ROW> => {
	if (isString(enable)) {
		return toColumnDataChecker(path);
	} else if (enable != null) {
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
	const editable = options.editable;
	if (editing) {
		return {
			enable: toColumnEditingEnable(editing.enable ?? editable, path),
			formatter: editing.formatter,
			unformatter: editing.unformatter,
			validator: editing.validator
		};
	}
	return {
		enable: toColumnEditingEnable(editable, path)
	};
};

const toComparator = <ROW, CELL>(
	getter: DTableColumnGetter<ROW, CELL>,
	index: number
): DTableDataComparatorFunction<ROW> => {
	return (rowA: ROW, rowB: ROW): number => {
		const valueA = getter(rowA, index) as any;
		const valueB = getter(rowB, index) as any;
		return valueA < valueB ? -1 : valueB < valueA ? +1 : 0;
	};
};

const toColumnSorting = <ROW, CELL>(
	getter: DTableColumnGetter<ROW, CELL>,
	index: number,
	options: DTableColumnOptions<ROW, CELL>
): DTableColumnSorting<ROW> => {
	const sorting = options.sorting;
	const sortable = options.sortable;
	if (sorting) {
		if (sorting.enable || sortable) {
			return {
				enable: true,
				comparator: sorting.comparator || toComparator(getter, index)
			};
		}
		return {
			enable: false
		};
	}
	if (sortable) {
		return {
			enable: true,
			comparator: toComparator(getter, index)
		};
	}
	return {
		enable: false
	};
};

const toColumnMenu = (
	options?: DMenuOptions<unknown> | DMenu<unknown>
): DMenu<unknown> | undefined => {
	if (options == null) {
		return undefined;
	} else if (options instanceof DMenu) {
		return options;
	} else {
		return new DMenu(options);
	}
};

const toColumnDialog = (
	options?: DDialogSelectOptions<unknown> | DTableColumnSelectingDialog<unknown>
): DTableColumnSelectingDialog<unknown> | undefined => {
	if (options == null) {
		return undefined;
	} else if ("open" in options) {
		return options;
	} else {
		return new DDialogSelect(options);
	}
};

const defaultSelectingGetter = (dialog: DTableColumnSelectingDialog<unknown>): unknown => {
	return dialog.value;
};

const defaultSelectingSetter = (): void => {
	// DO NOTHING
};

const toColumnSelecting = (
	options: DTableColumnSelectingOptions<any, any, any> | undefined
): DTableColumnSelecting<any, any, any> => {
	if (options) {
		return {
			getter: options.getter || defaultSelectingGetter,
			setter: options.setter || defaultSelectingSetter,
			menu: toColumnMenu(options.menu),
			multiple: toColumnMenu(options.multiple),
			dialog: toColumnDialog(options.dialog),
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
): DTableColumnGetter<ROW, CELL> => {
	const getter = options.getter;
	if (getter) {
		return getter;
	}
	switch (type) {
		case DTableColumnType.ACTION:
		case DTableColumnType.LINK:
			return defaultGetterEmpty;
		default:
			if (parts == null) {
				return defaultGetter;
			} else {
				return toPathGetter(parts, options.default);
			}
	}
};

const toColumnSetter = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	type: DTableColumnType,
	path: string[] | null
): DTableColumnSetter<ROW, CELL> => {
	const setter = options.setter;
	if (setter) {
		return setter;
	}
	switch (type) {
		case DTableColumnType.BUTTON:
		case DTableColumnType.ACTION:
		case DTableColumnType.LINK:
			return defaultSetterEmpty;
		default:
			if (path == null) {
				return defaultSetter;
			} else {
				return toPathSetter(path);
			}
	}
};

const toColumnState = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>
): DTableColumnState<ROW> => {
	const state = options.state;
	if (state != null) {
		if (isString(state) || isArray(state)) {
			return {
				initial: state,
				modifier: undefined
			};
		} else {
			return {
				initial: undefined,
				modifier: state
			};
		}
	}
	return {
		initial: undefined,
		modifier: undefined
	};
};

const toColumnPath = <ROW, CELL>(options: DTableColumnOptions<ROW, CELL>): string[] | null => {
	return options.path != null ? options.path.split(".") : null;
};

const toColumnRenderable = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	path: string[] | null
): boolean | DTableColumnRenderable<ROW> => {
	const renderable = options.renderable;
	if (isString(renderable)) {
		return toColumnDataChecker(path);
	} else if (renderable != null) {
		return renderable;
	}
	return true;
};

const toColumn = <ROW, CELL>(
	index: number,
	options: DTableColumnOptions<ROW, CELL>
): DTableColumn<ROW, CELL> => {
	let weight = options.weight;
	let width = options.width;
	if (weight != null) {
		if (width != null) {
			width = undefined;
		}
	} else if (width == null) {
		weight = 1;
	}
	const type = toEnum(options.type ?? DTableColumnType.TEXT, DTableColumnType);
	const align = toColumnAlign(options, type);
	const label = options.label || "";
	const path = toColumnPath(options);
	const getter = toColumnGetter(options, type, path);
	const setter = toColumnSetter(options, type, path);
	return {
		weight,
		width,
		type,
		label,
		getter,
		setter,
		formatter: options.formatter,
		renderable: toColumnRenderable(options, path),
		align,
		state: toColumnState(options),

		editing: toColumnEditing(options, path),
		sorting: toColumnSorting(getter, index, options),

		header: options.header,
		body: options.body,

		selecting: toColumnSelecting(options.selecting),

		category: options.category,
		frozen: options.frozen,
		offset: 0.0,

		link: options.link,

		update: toEnum(options.update ?? DTableColumnUpdate.CELL, DTableColumnUpdate)
	};
};

const toColumns = <ROW, CELL>(
	options: Array<DTableColumnOptions<ROW, CELL>>
): Array<DTableColumn<ROW, CELL>> => {
	const result = [];
	for (let i = 0, imax = options.length; i < imax; ++i) {
		result.push(toColumn(i, options[i]));
	}
	return result;
};

const toFrozen = <ROW, CELL>(columns: Array<DTableColumn<ROW, CELL>>): number => {
	for (let i = columns.length - 1; 0 <= i; --i) {
		if (columns[i].frozen === true) {
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
	OPTIONS extends DTableOptions<ROW, DATA, THEME, CONTENT_OPTIONS> = DTableOptions<
		ROW,
		DATA,
		THEME,
		CONTENT_OPTIONS
	>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _columns?: Array<DTableColumn<ROW, unknown>>;
	protected _frozen?: number;
	protected _categories?: DTableCategory[];
	protected _headerOffset?: number;
	protected _header?: DTableHeader<ROW> | null;
	protected _bodyOffset?: number;
	protected _body?: DTableBody<ROW, DATA>;

	constructor(options?: OPTIONS) {
		super(options);

		const content = this.content;
		content.setWidth(this.toContentWidth(options));

		const body = this.body;
		content.addChild(body);
		if (body.data.selection.type !== DTableDataSelectionType.NONE) {
			this.on(UtilPointerEvent.tap, (e: InteractionEvent): void => {
				body.onRowClick(e);
			});
		}

		const header = this.header;
		if (header) {
			content.addChild(header);
		}

		const categories = this.categories;
		for (let i = categories.length - 1; 0 <= i; --i) {
			content.addChild(categories[i]);
		}

		body.update();
	}

	get columns(): Array<DTableColumn<ROW, unknown>> {
		let result = this._columns;
		if (result == null) {
			const options = this._options;
			result = options ? toColumns(options.columns) : [];
			this._columns = result;
		}
		return result;
	}

	get frozen(): number {
		let result = this._frozen;
		if (result == null) {
			result = toFrozen(this.columns);
			this._frozen = result;
		}
		return result;
	}

	get categories(): DTableCategory[] {
		let result = this._categories;
		if (result == null) {
			result = this.newCategories(this._options, this.columns, this.frozen);
			this._categories = result;
		}
		return result;
	}

	protected initContent(content: DBase): void {
		super.initContent(content);
		content.state.isFocusReverse = true;
	}

	protected onContentChange(): void {
		super.onContentChange();
		this.body.update();
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		const scrollbar = this.scrollbar;
		scrollbar.lock();

		const body = this.body;
		body.lock();
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		body.update();
		body.unlock(true);

		scrollbar.unlock(true);
	}

	protected getCategoryCount(columns: Array<DTableColumn<ROW, unknown>>): number {
		let result = 0;
		for (let i = 0, imax = columns.length; i < imax; ++i) {
			const category = columns[i].category;
			if (category != null) {
				const count = isString(category) ? 1 : category.length;
				result = Math.max(result, count);
			}
		}
		return result;
	}

	protected toCategoryLabel(
		index: number,
		category: string | string[] | undefined
	): string | undefined {
		if (category) {
			if (isString(category)) {
				if (index === 0) {
					return category;
				}
			} else {
				if (index < category.length) {
					return category[index];
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
		if (a != null) {
			if (b != null) {
				if (isString(a)) {
					if (isString(b)) {
						if (0 < index) {
							return true;
						} else {
							return a === b;
						}
					} else {
						if (0 < index) {
							return b.length <= index;
						} else {
							return b.length === 1 && a === b[0];
						}
					}
				} else {
					if (isString(b)) {
						if (0 < index) {
							return a.length <= index;
						} else {
							return a.length === 1 && a[0] === b;
						}
					} else {
						if (a.length <= index && b.length <= index) {
							return true;
						} else if (b.length === a.length) {
							for (let i = index, imax = a.length; i < imax; ++i) {
								if (a[i] !== b[i]) {
									return false;
								}
							}
							return true;
						}
						return false;
					}
				}
			} else {
				if (isString(a)) {
					if (0 < index) {
						return true;
					} else {
						return false;
					}
				} else {
					if (a.length <= index) {
						return true;
					} else {
						return false;
					}
				}
			}
		} else {
			if (b != null) {
				if (isString(b)) {
					if (0 < index) {
						return true;
					} else {
						return false;
					}
				} else {
					if (b.length <= index) {
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
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number
	): DTableCategoryColumn[] {
		const result: DTableCategoryColumn[] = [];
		let tcolumn: DTableColumn<ROW, unknown> | null = null;
		let ccolumn: DTableCategoryColumn | null = null;
		for (let i = 0, imax = columns.length; i < imax; ++i) {
			const column = columns[i];
			if (
				i !== frozen &&
				ccolumn &&
				tcolumn &&
				this.isSameCategory(index, tcolumn.category, column.category)
			) {
				if (ccolumn.weight != null && column.weight != null) {
					ccolumn.weight += column.weight;
				} else if (ccolumn.width != null && column.width != null) {
					ccolumn.width += column.width;
				} else {
					tcolumn = column;
					ccolumn = {
						label: this.toCategoryLabel(index, column.category),
						weight: column.weight,
						width: column.width,
						offset: 0.0
					};
					result.push(ccolumn);
				}
			} else {
				tcolumn = column;
				ccolumn = {
					label: this.toCategoryLabel(index, column.category),
					weight: column.weight,
					width: column.width,
					offset: 0.0
				};
				result.push(ccolumn);
			}
		}
		return result;
	}

	protected toCategoryOptions(
		index: number,
		options: DTableCategoryOptions | undefined,
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number,
		offset: number
	): DTableCategoryOptions {
		if (options) {
			if (options.columns === undefined) {
				options.columns = this.toCategoryColumns(index, columns, frozen);
			}
			if (options.frozen == null) {
				options.frozen = frozen;
			}
			if (options.offset == null) {
				options.offset = offset;
			}
			return options;
		}
		return {
			columns: this.toCategoryColumns(index, columns, frozen),
			frozen,
			offset
		};
	}

	protected newCategories(
		options: OPTIONS | undefined,
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number
	): DTableCategory[] {
		const count = this.getCategoryCount(columns);
		const result: DTableCategory[] = [];
		let offset: number = 0;
		for (let i = count - 1; 0 <= i; --i) {
			const category = new DTableCategory(
				this.toCategoryOptions(i, options?.category, columns, frozen, offset)
			);
			result.push(category);
			offset += category.height;
		}
		return result;
	}

	protected onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean {
		const result = this.body.onDblClick(e, interactionManager);
		return super.onDblClick(e, interactionManager) || result;
	}

	protected newScrollBar(options?: DPaneScrollBarOptions): DTableScrollBar {
		return new DTableScrollBar(this, options, (isRegionVisible: boolean): void => {
			this.onScrollBarUpdate(isRegionVisible);
		});
	}

	protected toContentWidth(options?: OPTIONS): DCoordinateSize {
		let columnWidthTotal = 0;
		const columns = options?.columns;
		if (columns) {
			for (let i = 0, imax = columns.length; i < imax; ++i) {
				const column = columns[i];
				const columnWidth = column.width;
				if (columnWidth != null) {
					columnWidthTotal += columnWidth;
				}
			}
		}
		if (0 < columnWidthTotal) {
			return (p: number): number => {
				return Math.max(p, columnWidthTotal);
			};
		}
		return "100%";
	}

	protected getHeaderOffset(): number {
		let result = this._headerOffset;
		if (result == null) {
			result = this.newHeaderOffset();
			this._headerOffset = result;
		}
		return result;
	}

	protected newHeaderOffset(): number {
		let result = 0;
		const categories = this.categories;
		for (let i = 0, imax = categories.length; i < imax; ++i) {
			result += categories[i].height;
		}
		return result;
	}

	get header(): DTableHeader<ROW> | null {
		let result = this._header;
		if (result === undefined) {
			result = this.newHeader(
				this._options,
				this.columns,
				this.frozen,
				this.getHeaderOffset()
			);
			this._header = result;
		}
		return result;
	}

	protected hasHeader(options?: OPTIONS): boolean {
		if (options) {
			const columns = options.columns;
			for (let i = 0, imax = columns.length; i < imax; ++i) {
				if (columns[i].label != null) {
					return true;
				}
			}
		}
		return false;
	}

	protected newHeader(
		options: OPTIONS | undefined,
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number,
		offset: number
	): DTableHeader<ROW> | null {
		if (this.hasHeader(options)) {
			return new DTableHeader<ROW>(
				this.toHeaderOptions(options?.header, columns, frozen, offset)
			);
		}
		return null;
	}

	protected toHeaderOptions(
		options: DTableHeaderOptions<ROW> | undefined,
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number,
		offset: number
	): DTableHeaderOptions<ROW> {
		if (options) {
			if (options.columns === undefined) {
				options.columns = columns;
			}
			if (options.frozen == null) {
				options.frozen = frozen;
			}
			if (options.offset === undefined) {
				options.offset = offset;
			}
			if (options.table === undefined) {
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

	protected getBodyOffset(): number {
		let result = this._bodyOffset;
		if (result == null) {
			result = this.newBodyOffset();
			this._bodyOffset = result;
		}
		return result;
	}

	protected newBodyOffset(): number {
		return this.getHeaderOffset() + (this.header?.height ?? 0);
	}

	get body(): DTableBody<ROW, DATA> {
		let result = this._body;
		if (result == null) {
			result = this.newBody(this._options, this.columns, this.frozen, this.getBodyOffset());
			this._body = result;
		}
		return result;
	}

	protected newBody(
		options: OPTIONS | undefined,
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number,
		offset: number
	): DTableBody<ROW, DATA> {
		return new DTableBody<ROW, DATA>(
			this.toBodyOptions(options?.body, columns, frozen, offset, options?.data)
		);
	}

	protected toBodyOptions(
		options: DTableBodyOptions<ROW, DATA> | undefined,
		columns: Array<DTableColumn<ROW, unknown>>,
		frozen: number,
		offset: number,
		data: ROW[] | DTableDataOptions<ROW> | DATA | undefined
	): DTableBodyOptions<ROW, DATA> {
		if (options != null) {
			if (options.columns === undefined) {
				options.columns = columns;
			}
			if (options.frozen == null) {
				options.frozen = frozen;
			}
			if (options.offset === undefined) {
				options.offset = offset;
			}
			if (options.data === undefined && data !== undefined) {
				if (isArray(data)) {
					options.data = {
						rows: data
					};
				} else {
					options.data = data;
				}
			}
			if (options.height === undefined && options.weight === undefined) {
				options.weight = 1;
			}
			return options;
		}
		if (isArray(data)) {
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

	get data(): DATA {
		return this.body.data;
	}

	protected getFocusedChildClippingRect(
		focused: DBase,
		contentX: number,
		contentY: number,
		contentWidth: number,
		contentHeight: number,
		width: number,
		height: number,
		result: Rectangle
	): Rectangle {
		super.getFocusedChildClippingRect(
			focused,
			contentX,
			contentY,
			contentWidth,
			contentHeight,
			width,
			height,
			result
		);

		const cell = this.toCell(focused);
		if (cell) {
			// X
			const dx = contentX + this.toFrozenCellX(cell) - result.x;
			if (0 < dx) {
				result.x += dx;
				result.width -= dx;
			}

			// Y
			if (cell.parent.parent === this.body) {
				const dy = this.getBodyOffset();
				result.y += dy;
				result.height -= dy;
			}
		}

		// Done
		return result;
	}

	protected toFrozenCellX(cell: DBase): number {
		const frozen = this.frozen;
		if (0 < frozen) {
			const cells = cell.parent.children as DBase[];
			const cellIndex = cells.indexOf(cell);
			if (0 <= cellIndex) {
				const cellsLength = cells.length;
				const columnIndex = cellsLength - 1 - cellIndex;
				if (frozen <= columnIndex) {
					const cellFrozen = cells[cellsLength - frozen];
					return cellFrozen.position.x + cellFrozen.width;
				}
			}
		}
		return 0;
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		UtilKeyboardEvent.moveFocusHorizontally(e, this);
		const isArrowUpKey = UtilKeyboardEvent.isArrowUpKey(e);
		const isArrowDownKey = UtilKeyboardEvent.isArrowDownKey(e);
		if (isArrowUpKey || isArrowDownKey) {
			this.onKeyDownArrowUpOrDown(e, isArrowDownKey);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownArrowUpOrDown(e: KeyboardEvent, isDown: boolean): boolean {
		const layer = DApplications.getLayer(this);
		if (layer == null) {
			return false;
		}

		const focusController = layer.getFocusController();
		const oldFocusable = focusController.get();
		if (oldFocusable == null) {
			return false;
		}

		const oldCell = this.toCell(oldFocusable);
		if (oldCell == null) {
			return false;
		}

		const oldRow = oldCell.parent;
		if (oldRow == null) {
			return false;
		}

		const newRowChild = focusController.find(oldRow, false, false, isDown, this);
		if (newRowChild == null) {
			return false;
		}

		const newCellSibling = this.toCell(newRowChild);
		if (newCellSibling == null) {
			return false;
		}

		const newRow = newCellSibling.parent;
		if (newRow == null) {
			return false;
		}

		const oldCellIndex = oldRow.children.indexOf(oldCell);
		if (oldCellIndex < 0) {
			return false;
		}

		const newCell = newRow.children[oldCellIndex];
		if (newCell == null || newCell === oldCell || !("state" in newCell)) {
			return false;
		}

		const newFocusable = focusController.find(newCell, true, true, isDown, this);
		if (newFocusable == null) {
			return false;
		}

		focusController.focus(newFocusable);
		return true;
	}

	protected toCell(focused: DFocusable): DBase | null {
		let current: DFocusable | DFocusableContainer | null = focused;
		while (current != null) {
			const parent: DFocusableContainer | null = current.parent;
			if (parent instanceof DTableRow) {
				if (current instanceof DBase) {
					return current;
				}
				return null;
			}
			current = parent;
		}
		return null;
	}

	protected getType(): string {
		return "DTable";
	}
}
