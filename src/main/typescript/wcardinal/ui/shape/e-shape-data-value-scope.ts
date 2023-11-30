/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const EShapeDataValueScope = {
	/**
	 * A private data is accessible only from inside the graphic that this data belongs to.
	 * The data is not accessible from anywhere outside the graphic.
	 */
	PRIVATE: 0,

	/**
	 * A public data is accessible from anywhere outside graphics.
	 */
	PUBLIC: 1,

	/**
	 * A protected data is accessible only from inside graphics.
	 * Unlike the private data, the protected data is also accessible from parent graphics
	 * containing the graphic that this data belongs to.
	 */
	PROTECTED: 2
} as const;

export type EShapeDataValueScope = (typeof EShapeDataValueScope)[keyof typeof EShapeDataValueScope];
