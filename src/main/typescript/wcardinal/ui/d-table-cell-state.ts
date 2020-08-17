import { DBaseState } from "./d-base-state";

/**
 * Cell states.
 *
 * Please not that the bit shift operation returns signed 32-bit integer.
 * Thus, x << y may results in an unexpected value when variables x and y are large.
 * This is why bit shift operations are not used here.
 */
export const DTableCellState = {
	/**
	 * Start cells in rows.
	 */
	START: DBaseState.CUSTOM,

	/**
	 * End cells in rows.
	 */
	END: DBaseState.CUSTOM * 2,

	/**
	 * Cells of frozen columns.
	 */
	FROZEN: DBaseState.CUSTOM * 4,

	/**
	 * Cells of a right-most frozen column.
	 */
	FROZEN_END: DBaseState.CUSTOM * 8,

	/**
	 * Header cells of columns sorted in the ascending order.
	 */
	SORTED_ASCENDING: DBaseState.CUSTOM * 16,

	/**
	 * Header cells of columns sorted in the descending order.
	 */
	SORTED_DESCENDING: DBaseState.CUSTOM * 32,

	/**
	 * Cells with a link which is opened in a new window.
	 */
	NEW_WINDOW: DBaseState.CUSTOM * 64,

	/**
	 * Cells with child cells.
	 */
	HAS_CHILDREN: DBaseState.CUSTOM * 128,

	/**
	 * Cells opened.
	 */
	OPENED: DBaseState.CUSTOM * 256,

	/**
	 * Cells checkable
	 */
	CHECKABLE: DBaseState.CUSTOM * 512,

	/**
	 * Custom cell events.
	 */
	CUSTOM: DBaseState.CUSTOM * 1024
};
