/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

 /**
  * DBase interactivity.
  * Mouse / touch events are triggered only on interactive objects.
  */
export enum DBaseInteractive {
	/**
	 * Not interactive.
	 */
	NONE = 0,

	/**
	 * Interactive.
	 * However children are not interactive.
	 */
	SELF = 1,

	/**
	 * Not interactive.
	 * However children are interactive.
	 */
	CHILDREN = 2,

	/**
	 * Interactive.
	 * Children are also interactive.
	 */
	BOTH = SELF | CHILDREN
}
