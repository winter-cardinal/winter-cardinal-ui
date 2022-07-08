/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link EShape} action environment.
 *
 * In action expressions, all the properties in this object can be accessed without `EShapeActionEnvironment.`.
 * For instance, if this object has a property of the name `apple`, the string `apple` is a valid expression
 * and is equivalent to `EShapeActionEnvironment.apple`.
 */
export interface EShapeActionEnvironment {
	[key: string]: unknown;

	/**
	 * True if evaluating actions for the first time and false otherwise.
	 * This property is intended to be used to execute actions up to once.
	 */
	isInitializing: boolean;
}

export const EShapeActionEnvironment: EShapeActionEnvironment = {
	isInitializing: false
};
