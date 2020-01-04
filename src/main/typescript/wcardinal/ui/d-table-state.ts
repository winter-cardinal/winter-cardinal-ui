import { DBaseState } from "./d-base-state";

export const DTableState = {
	EVEN					: DBaseState.EXTENSION_0,
	CELL_START				: DBaseState.EXTENSION_1,
	CELL_END				: DBaseState.EXTENSION_2,
	CELL_SORTED_ASCENDING	: DBaseState.EXTENSION_3,
	CELL_SORTED_DESCENDING	: DBaseState.EXTENSION_4,
	CELL_SORTED				: DBaseState.EXTENSION_3 | DBaseState.EXTENSION_4,
	CELL_FROZEN				: DBaseState.EXTENSION_5
};
