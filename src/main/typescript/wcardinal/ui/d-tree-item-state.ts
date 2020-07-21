import { DBaseState } from "./d-base-state";

/**
 * Tree item states.
 */
export const DTreeItemState = {
	/**
	 * the parent item is expanded
	 */
	EXPANDED: DBaseState.CUSTOM,

	/**
	 * the parent item is collapsed
	 */
	COLLAPSED: DBaseState.CUSTOM * 2,

	/**
	 * the child item is selected
	 */
	SELECTED: DBaseState.CUSTOM * 4
};
