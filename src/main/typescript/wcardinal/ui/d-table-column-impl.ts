import { utils } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DDialogSelect, DDialogSelectOptions } from "./d-dialog-select";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBodyCellLinkLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCellOptions } from "./d-table-body-cell-options";
import { DTableColumn, DTableColumnOptions } from "./d-table-column";
import { DTableColumnEditable, DTableColumnEditing } from "./d-table-column-editing";
import { DTableColumnFormatter } from "./d-table-column-formatter";
import { DTableColumnGetter } from "./d-table-column-getter";
import { DTableColumnRenderable } from "./d-table-column-renderable";
import {
	DTableColumnSelecting,
	DTableColumnSelectingDialog,
	DTableColumnSelectingOptions
} from "./d-table-column-selecting";
import { DTableColumnSetter } from "./d-table-column-setter";
import { DTableColumnSorting } from "./d-table-column-sorting";
import { DTableColumnState } from "./d-table-column-state";
import { DTableColumnType } from "./d-table-column-type";
import { DTableColumnUpdate } from "./d-table-column-update";
import { DTableDataComparatorFunction } from "./d-table-data-sorter";
import { DTableHeaderCellOptions, DThemeTableHeaderCell } from "./d-table-header-cell";
import { isArray } from "./util/is-array";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";

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

const toAlign = <ROW, CELL>(
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
		case DTableColumnType.TEXT_AREA:
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

const toDataChecker = <ROW>(path: string[] | null): DTableColumnEditable<ROW> => {
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

const toEditingEnable = <ROW>(
	enable: boolean | DTableColumnEditable<ROW> | "auto" | "AUTO" | undefined,
	path: string[] | null
): boolean | DTableColumnEditable<ROW> => {
	if (isString(enable)) {
		return toDataChecker(path);
	} else if (enable != null) {
		return enable;
	} else {
		return false;
	}
};

const toEditing = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	path: string[] | null
): DTableColumnEditing<ROW, CELL> => {
	const editing = options.editing;
	const editable = options.editable;
	if (editing) {
		return {
			enable: toEditingEnable(editing.enable ?? editable, path),
			formatter: editing.formatter,
			unformatter: editing.unformatter,
			validator: editing.validator
		};
	}
	return {
		enable: toEditingEnable(editable, path)
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

const toSorting = <ROW, CELL>(
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

const toMenu = (options?: DMenuOptions<unknown> | DMenu<unknown>): DMenu<unknown> | undefined => {
	if (options == null) {
		return undefined;
	} else if (options instanceof DMenu) {
		return options;
	} else {
		return new DMenu(options);
	}
};

const toDialog = (
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

const toSelecting = (
	options: DTableColumnSelectingOptions<any, any, any> | undefined
): DTableColumnSelecting<any, any, any> => {
	if (options) {
		return {
			getter: options.getter || defaultSelectingGetter,
			setter: options.setter || defaultSelectingSetter,
			menu: toMenu(options.menu),
			multiple: toMenu(options.multiple),
			dialog: toDialog(options.dialog),
			promise: options.promise
		};
	}
	return {
		getter: defaultSelectingGetter,
		setter: defaultSelectingSetter
	};
};

const toGetter = <ROW, CELL>(
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

const toSetter = <ROW, CELL>(
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

const toState = <ROW, CELL>(options: DTableColumnOptions<ROW, CELL>): DTableColumnState<ROW> => {
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

const toPath = <ROW, CELL>(options: DTableColumnOptions<ROW, CELL>): string[] | null => {
	return options.path != null ? options.path.split(".") : null;
};

const toRenderable = <ROW, CELL>(
	options: DTableColumnOptions<ROW, CELL>,
	path: string[] | null
): boolean | DTableColumnRenderable<ROW> => {
	const renderable = options.renderable;
	if (isString(renderable)) {
		return toDataChecker(path);
	} else if (renderable != null) {
		return renderable;
	}
	return true;
};

export class DTableColumnImpl<
		ROW_VALUE,
		CELL_VALUE,
		DIALOG_VALUE = CELL_VALUE,
		DIALOG extends
			DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
	>
	extends utils.EventEmitter
	implements DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
{
	protected _weight?: number;
	protected _width?: number;
	readonly resizable: boolean;

	readonly type: DTableColumnType;
	readonly label: string;
	readonly getter: DTableColumnGetter<ROW_VALUE, CELL_VALUE>;
	readonly setter: DTableColumnSetter<ROW_VALUE, CELL_VALUE>;
	readonly formatter?: DTableColumnFormatter<CELL_VALUE>;
	readonly align: DAlignHorizontal;
	readonly state: DTableColumnState<ROW_VALUE>;
	readonly renderable: boolean | DTableColumnRenderable<ROW_VALUE>;

	readonly editing: DTableColumnEditing<ROW_VALUE, CELL_VALUE>;
	readonly sorting: DTableColumnSorting<ROW_VALUE>;

	readonly header?: DTableHeaderCellOptions<ROW_VALUE, DThemeTableHeaderCell>;
	readonly body?: DTableBodyCellOptions<ROW_VALUE>;

	readonly selecting: DTableColumnSelecting<CELL_VALUE, DIALOG_VALUE, DIALOG>;

	readonly category?: string | string[];
	readonly frozen?: boolean | undefined;
	offset: number;

	readonly link?: DTableBodyCellLinkLinkOptions<ROW_VALUE, CELL_VALUE>;

	readonly update: DTableColumnUpdate;

	constructor(index: number, options: DTableColumnOptions<ROW_VALUE, CELL_VALUE>) {
		super();
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
		const align = toAlign(options, type);
		const label = options.label || "";
		const path = toPath(options);
		const getter = toGetter(options, type, path);
		const setter = toSetter(options, type, path);

		this._weight = weight;
		this._width = width;
		this.resizable = options.resizable ?? false;
		this.type = type;
		this.label = label;
		this.getter = getter;
		this.setter = setter;
		this.formatter = options.formatter;
		this.renderable = toRenderable(options, path);
		this.align = align;
		this.state = toState(options);

		this.editing = toEditing(options, path);
		this.sorting = toSorting(getter, index, options);

		this.header = options.header;
		this.body = options.body;

		this.selecting = toSelecting(options.selecting);

		this.category = options.category;
		this.frozen = options.frozen;
		this.offset = 0.0;

		this.link = options.link;

		this.update = toEnum(options.update ?? DTableColumnUpdate.CELL, DTableColumnUpdate);
	}

	get weight(): number | undefined {
		return this._weight;
	}

	set weight(weight: number) {
		if (this._weight != null && this._weight !== weight) {
			this._weight = weight;
			this.emit("resize", this);
		}
	}

	get width(): number | undefined {
		return this._width;
	}

	set width(width: number) {
		if (this._width != null && this._width !== width) {
			this._width = width;
			this.emit("resize", this);
		}
	}
}
