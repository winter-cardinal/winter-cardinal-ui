/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DTable} states.
 */
export const DTableState = {
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
	 * Header cells of sortable columns.
	 */
	SORTABLE: "SORTABLE",

	/**
	 * Header cells of columns sorted in the ascending order.
	 */
	SORTED_ASCENDING: "SORTED_ASCENDING",

	/**
	 * Header cells of columns sorted in the descending order.
	 */
	SORTED_DESCENDING: "SORTED_DESCENDING",

	/**
	 * Tree cells with child cells.
	 */
	HAS_CHILDREN: "HAS_CHILDREN",

	/**
	 * Tree cells opened.
	 */
	OPENED: "OPENED",

	/**
	 * Header cells of checkable columns.
	 */
	CHECKABLE: "CHECKABLE",

	/**
	 * Selectable row
	 */
	SELECTABLE: "SELECTABLE",

	/**
	 * Header or category cells hovered on their edges.
	 */
	HOVERED_ON_EDGE: "HOVERED_ON_EDGE",

	/**
	 * Header or category of being resized.
	 */
	RESIZING: "RESIZING"
};
