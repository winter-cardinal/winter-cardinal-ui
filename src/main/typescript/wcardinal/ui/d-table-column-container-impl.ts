import { DTableColumn, DTableColumnOptions } from "./d-table-column";
import { DTableColumnContainer, DTableColumnIteratee } from "./d-table-column-container";
import { DTableColumnImpl } from "./d-table-column-impl";
import { DTableColumnSelectingDialog } from "./d-table-column-selecting";

export class DTableColumnContainerImpl<
	ROW_VALUE,
	CELL_VALUE = unknown,
	DIALOG_VALUE = CELL_VALUE,
	DIALOG extends
		DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
> implements DTableColumnContainer<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
{
	readonly frozen: number;
	readonly items: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[];

	constructor(options?: DTableColumnOptions<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[]) {
		const columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[] = [];
		if (options != null) {
			for (let i = 0, imax = options.length; i < imax; ++i) {
				columns.push(
					new DTableColumnImpl<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>(i, options[i])
				);
			}
		}
		this.items = columns;

		let frozen = 0;
		for (let i = columns.length - 1; 0 <= i; --i) {
			if (columns[i].frozen === true) {
				frozen = i + 1;
				break;
			}
		}
		this.frozen = frozen;
	}

	get(index: number): DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG> | null {
		const columns = this.items;
		if (0 <= index && index < columns.length) {
			return columns[index];
		}
		return null;
	}

	each(iteratee: DTableColumnIteratee<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>): this {
		const columns = this.items;
		for (let i = 0, imax = columns.length; i < imax; ++i) {
			if (iteratee(columns[i], i) === false) {
				break;
			}
		}
		return this;
	}

	size(): number {
		return this.items.length;
	}
}
