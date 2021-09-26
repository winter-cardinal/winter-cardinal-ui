/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const SELF = 1;
const CHILDREN = 2;

/**
 * DBase interactivity.
 * Mouse / touch events are triggered only on interactive objects.
 */
export const DBaseInteractive = {
	/**
	 * Not interactive.
	 */
	NONE: 0,

	/**
	 * Interactive.
	 */
	SELF,

	/**
	 * Children are interactive.
	 */
	CHILDREN,

	/**
	 * Interactive.
	 * And also children are interactive.
	 */
	BOTH: SELF | CHILDREN
} as const;

export type DBaseInteractive = number;
