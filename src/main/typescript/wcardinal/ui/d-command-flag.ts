/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DCommandFlag = {
	NONE: 0,

	/**
	 * Commands with a `UNSTORABLE` flag will not be queued to the `done` queue.
	 */
	UNSTORABLE: 1,

	/**
	 * Commands with a `CLEAR` flag clear the command queue.
	 */
	CLEAR: 2,

	/**
	 * Commands with a `CLEAN` flag are not considered as modifications to documents
	 */
	CLEAN: 4
} as const;

export type DCommandFlag = number;
