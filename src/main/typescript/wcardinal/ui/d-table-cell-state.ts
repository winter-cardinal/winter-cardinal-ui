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
	FROZEN_END: DBaseState.CUSTOM << 4
};
