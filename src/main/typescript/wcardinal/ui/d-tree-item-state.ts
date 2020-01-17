import { DBaseState } from "./d-base-state";

/**
 * Tree item states.
 */
export const DTreeItemState = {
	/**
	 * the parent item is expanded
	 */
	EXPAND:	DBaseState.CUSTOM << 0,
	/**
	 * the parent item is collapsed
	 */
	COLLAPSE: DBaseState.CUSTOM << 1
};
