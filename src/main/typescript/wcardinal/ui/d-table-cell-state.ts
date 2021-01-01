/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Cell states.
 */
export const DTableCellState = {
	/**
	 * Start cells in rows.
	 */
	START: "START",

	/**
	 * End cells in rows.
	 */
	END: "END",

	/**
	 * Cells of frozen columns.
	 */
	FROZEN: "FROZEN",

	/**
	 * Cells of a right-most frozen column.
	 */
	FROZEN_END: "FROZEN_END",

	/**
	 * Header cells of columns sorted in the ascending order.
	 */
	SORTED_ASCENDING: "SORTED_ASCENDING",

	/**
	 * Header cells of columns sorted in the descending order.
	 */
	SORTED_DESCENDING: "SORTED_DESCENDING",

	/**
	 * Cells with child cells.
	 */
	HAS_CHILDREN: "HAS_CHILDREN",

	/**
	 * Cells opened.
	 */
	OPENED: "OPENED",

	/**
	 * Cells checkable
	 */
	CHECKABLE: "CHECKABLE"
};
