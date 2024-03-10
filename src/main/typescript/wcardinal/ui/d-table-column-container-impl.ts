import { utils } from "pixi.js";
import { DBase } from "./d-base";
import { DTableColumn, DTableColumnOptions } from "./d-table-column";
import { DTableColumnContainer, DTableColumnIteratee } from "./d-table-column-container";
import { DTableColumnImpl } from "./d-table-column-impl";
import { DTableColumnSelectingDialog } from "./d-table-column-selecting";
import { DTableRow } from "./d-table-row";

export interface DTableColumnContainerImplParent {
	readonly header: DBase | null;
	readonly body: DBase;
}

export class DTableColumnContainerImpl<
		ROW_VALUE,
		CELL_VALUE = unknown,
		DIALOG_VALUE = CELL_VALUE,
		DIALOG extends
			DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
	>
	extends utils.EventEmitter
	implements DTableColumnContainer<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
{
	readonly parent: DTableColumnContainerImplParent;
	readonly frozen: number;
	readonly items: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[];

	constructor(
		parent: DTableColumnContainerImplParent,
		options?: DTableColumnOptions<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[]
	) {
		super();

		this.parent = parent;

		const columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[] = [];
		if (options != null) {
			for (let i = 0, imax = options.length; i < imax; ++i) {
				const column = new DTableColumnImpl<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>(
					i,
					options[i]
				);
				columns.push(column);
				column.on("resize", this.newOnColumnResize(i, column));
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

	protected newOnColumnResize(
		index: number,
		column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
	): () => void {
		return (): void => {
			this.onColumnResize(index, column);
		};
	}

	protected onColumnResize(
		index: number,
		column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
	): void {
		this.onColumnResizeHeader(index, column);
		this.onColumnResizeBody(index, column);
		this.emit("resize", index, column, this);
	}

	protected onColumnResizeHeader(
		index: number,
		column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
	): void {
		const header = this.parent.header;
		if (header != null) {
			const columnWeight = column.weight;
			if (columnWeight != null) {
				this.onColumnResizeWeight(header, index, columnWeight);
			} else {
				const columnWidth = column.width;
				if (columnWidth != null) {
					this.onColumnResizeWidth(header, index, columnWidth);
				}
			}
		}
	}

	protected onColumnResizeBody(
		index: number,
		column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
	): void {
		const rows = this.parent.body.children as DTableRow<
			ROW_VALUE,
			DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
		>[];
		const columnWeight = column.weight;
		if (columnWeight != null) {
			for (let i = 0, imax = rows.length; i < imax; ++i) {
				this.onColumnResizeWeight(rows[i], index, columnWeight);
			}
		} else {
			const columnWidth = column.width;
			if (columnWidth != null) {
				for (let i = 0, imax = rows.length; i < imax; ++i) {
					this.onColumnResizeWidth(rows[i], index, columnWidth);
				}
			}
		}
	}

	protected onColumnResizeWeight(row: DBase, index: number, columnWeight: number): void {
		const cells = row.children as DBase[];
		const cellsLength = cells.length;
		const cellsIndex = cellsLength - index - 1;
		if (0 <= cellsIndex && cellsIndex < cellsLength) {
			cells[cellsIndex].weight = columnWeight;
		}
	}

	protected onColumnResizeWidth(row: DBase, index: number, columnWidth: number): void {
		const cells = row.children as DBase[];
		const cellsLength = cells.length;
		const cellsIndex = cellsLength - index - 1;
		if (0 <= cellsIndex && cellsIndex < cellsLength) {
			cells[cellsIndex].width = columnWidth;
		}
	}

	get width(): number {
		let result = 0;
		const items = this.items;
		const length = items.length;
		for (let i = 0; i < length; ++i) {
			const item = items[i];
			const itemWidth = item.width;
			if (itemWidth != null) {
				result += itemWidth;
			}
		}
		return result;
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
