import { DTableColumn } from "./d-table-column";
import { DTableColumnSelectingDialog } from "./d-table-column-selecting";

export type DTableColumnIteratee<
	ROW_VALUE,
	CELL_VALUE,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> = (
	column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>,
	index: number
) => boolean | void;

export interface DTableColumnContainer<
	ROW_VALUE,
	CELL_VALUE = unknown,
	DIALOG_VALUE = CELL_VALUE,
	DIALOG extends
		DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	readonly frozen: number;
	readonly items: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[];

	get(index: number): DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG> | null;
	each(iteratee: DTableColumnIteratee<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>): this;
	size(): number;
}
