import { DBaseState } from "./d-base-state";

/**
 * Header cell states.
 * Please note that header cell states must not overlap with states defined in DTableCellState.
 */
export const DTableHeaderCellState = {
	/**
	 * Header cells of columns sorted in the ascending order.
	 */
	SORTED_ASCENDING: DBaseState.CUSTOM << 5,

	/**
	 * Header cells of columns sorted in the descending order.
	 */
	SORTED_DESCENDING: DBaseState.CUSTOM << 6
};
