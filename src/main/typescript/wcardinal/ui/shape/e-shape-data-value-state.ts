/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeDataValueState = {
	/**
	 * The data status is not known.
	 * This is the default state.
	 */
	UNKOWN: -1,

	/**
	 * The request succeeded.
	 */
	FOUND: 0,

	/**
	 * The server can not find the requested data.
	 */
	NOT_FOUND: 1,

	/**
	 * The settings or something provided by clients are considered incorrect.
	 */
	BAD_REQUEST: 2,

	/**
	 * The server has encountered unknown errors.
	 */
	SERVER_ERROR: 3,

	/**
	 * The server is not ready to handle the request.
	 */
	SERVICE_UNAVAILABLE: 4,

	/**
	 * A client is not allowed to access this data.
	 */
	FORBIDDEN: 5
} as const;

export type EShapeDataValueState = number;
