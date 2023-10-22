/**
 * An update region when table cells get edited.
 *
 * * CELL: Edited cells (Default).
 * * ROW: Rows that edited cells belongs to.
 * * ALL: All the rows.
 */
export const DTableColumnUpdate = {
	CELL: 0,
	ROW: 1,
	ALL: 2
} as const;

export type DTableColumnUpdate = typeof DTableColumnUpdate[keyof typeof DTableColumnUpdate];
