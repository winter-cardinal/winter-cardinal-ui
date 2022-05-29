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
	PUBLIC: 1
} as const;

export type EShapeDataValueScope = typeof EShapeDataValueScope[keyof typeof EShapeDataValueScope];
