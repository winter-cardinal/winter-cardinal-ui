import { DTableCategory, DTableCategoryOptions } from "./d-table-category";
import { DTableCategoryColumn } from "./d-table-category-column";
import { DTableCategoryColumnImpl } from "./d-table-category-column-impl";
import { DTableCategoryContainer } from "./d-table-category-container";
import { DTableColumn } from "./d-table-column";
import { DTableColumnSelectingDialog } from "./d-table-column-selecting";
import { isString } from "./util/is-string";

export class DTableCategoryContainerImpl<
	ROW_VALUE,
	CELL_VALUE,
	DIALOG_VALUE = CELL_VALUE,
	DIALOG extends
		DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
> implements DTableCategoryContainer
{
	readonly items: DTableCategory[];

	constructor(
		columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[],
		frozen: number,
		options?: DTableCategoryOptions
	) {
		const count = this.toCount(columns);
		const items: DTableCategory[] = [];
		let offset: number = 0;
		for (let i = count - 1; 0 <= i; --i) {
			const item = new DTableCategory(
				this.toColumns(i, columns, frozen),
				frozen,
				offset,
				options
			);
			items.push(item);
			offset += item.height;
		}
		this.items = items;
	}

	protected toCount(
		columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[]
	): number {
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

	protected isCategory(
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

	protected toColumns(
		index: number,
		columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[],
		frozen: number
	): DTableCategoryColumn[] {
		const result: DTableCategoryColumn[] = [];
		let tcolumn: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG> | null = null;
		let ccolumn: DTableCategoryColumnImpl<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG> | null =
			null;
		for (let i = 0, imax = columns.length; i < imax; ++i) {
			const column = columns[i];
			if (
				i !== frozen &&
				ccolumn &&
				tcolumn &&
				this.isCategory(index, tcolumn.category, column.category)
			) {
				if (ccolumn.weight != null && column.weight != null) {
					ccolumn.add(column);
				} else if (ccolumn.width != null && column.width != null) {
					ccolumn.add(column);
				} else {
					tcolumn = column;
					ccolumn = new DTableCategoryColumnImpl(index, column);
					result.push(ccolumn);
				}
			} else {
				tcolumn = column;
				ccolumn = new DTableCategoryColumnImpl(index, column);
				result.push(ccolumn);
			}
		}
		return result;
	}
}
