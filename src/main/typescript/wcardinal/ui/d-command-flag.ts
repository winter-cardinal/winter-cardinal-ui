/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export enum DCommandFlag {
	NONE = 0,

	/**
	 * Commands with a `UNSTORABLE` flag will not be queued to the `done` queue.
	 */
	UNSTORABLE = 1,

	/**
	 * Commands with a `CLEAR` flag clears the command queue.
	 */
	CLEAR = 2
}
