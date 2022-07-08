/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

/**
 * {@link EShape} action expression with one parameter.
 *
 * In action expressions, all the properties in {@link EShape}, {@link EShapeState} and {@link EShapeActionEnvironment} can be accessed directly.
 * For instance, the string `isClicked` is a valid expression as {@link EShapeState} has {@link EShapeState#isClicked} and is equivalent to `shape.state.isClicked`.
 * In addition to that, the parameter passed to this function can be used in action expressions.
 * The name of the variable containing that parameter depends on actions.
 */
export type EShapeActionExpressionWithParameter<T, P> = (
	shape: EShape,
	time: number,
	environment: Record<string, unknown>,
	parameter: P
) => T;
