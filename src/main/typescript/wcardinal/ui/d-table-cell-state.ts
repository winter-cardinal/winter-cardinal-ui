import { DBaseState } from "./d-base-state";

/**
 * Cell states.
 */
export const DTableCellState = {
	/**
	 * Cells of even rows.
	 */
	EVEN: DBaseState.CUSTOM << 0,

	/**
	 * Start cells in rows.
	 */
	START: DBaseState.CUSTOM << 1,

	/**
	 * End cells in rows.
	 */
	END: DBaseState.CUSTOM << 2,

	/**
	 * Cells of frozen columns.
	 */
	FROZEN: DBaseState.CUSTOM << 3,

	/**
	 * Cells of a right-most frozen column.
	 */
	FROZEN_END: DBaseState.CUSTOM << 4,

	/**
	 * Header cells of columns sorted in the ascending order.
	 */
	SORTED_ASCENDING: DBaseState.CUSTOM << 5,

	/**
	 * Header cells of columns sorted in the descending order.
	 */
	SORTED_DESCENDING: DBaseState.CUSTOM << 6,

	/**
	 * Cells with a link which is opened in a new window.
	 */
	NEW_WINDOW: DBaseState.CUSTOM << 7,

	/**
	 * Cells with child cells.
	 */
	HAS_CHILDREN: DBaseState.CUSTOM << 8,

	/**
	 * Cells opened.
	 */
	OPENED: DBaseState.CUSTOM << 9
};
