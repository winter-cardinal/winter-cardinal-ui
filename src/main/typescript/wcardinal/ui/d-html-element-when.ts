/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DHtmlElement} option when to show a HTML element
 */
export enum DHtmlElementWhen {
	/**
	 * Shows a HTML element when clicked.
	 */
	CLICKED,

	/**
	 * Shows a HTML element when double clicked.
	 */
	DOUBLE_CLICKED,

	/**
	 * Shows a HTML element when focused.
	 * And also shows when clicked if focused.
	 */
	FOCUSED,

	/**
	 * Always shows a HTML element.
	 */
	ALWAYS
}
