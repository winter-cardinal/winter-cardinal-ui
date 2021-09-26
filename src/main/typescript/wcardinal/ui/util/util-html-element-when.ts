/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DHtmlElement} option when to show a HTML element
 */
export const UtilHtmlElementWhen = {
	/**
	 * Shows a HTML element when clicked.
	 */
	CLICKED: 0,

	/**
	 * Shows a HTML element when double clicked.
	 */
	DOUBLE_CLICKED: 1,

	/**
	 * Shows a HTML element when focused.
	 * And also shows when clicked if focused.
	 */
	FOCUSED: 2,

	/**
	 * Always shows a HTML element.
	 */
	ALWAYS: 3
} as const;

export type UtilHtmlElementWhen = typeof UtilHtmlElementWhen[keyof typeof UtilHtmlElementWhen];
