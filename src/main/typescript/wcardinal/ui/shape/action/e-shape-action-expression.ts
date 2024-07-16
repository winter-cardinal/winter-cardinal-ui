/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionEnvironment } from "./e-shape-action-environment";

/**
 * {@link EShape} action expression.
 *
 * In action expressions, all the properties in {@link EShape}, {@link EShapeState} and {@link EShapeActionEnvironment} can be accessed directly.
 * For instance, the string `isClicked` is a valid expression as {@link EShapeState} has {@link EShapeStateSet.isClicked} and is equivalent to `shape.state.isClicked`.
 */
export type EShapeActionExpression<T> = (
	shape: EShape,
	time: number,
	environment: EShapeActionEnvironment
) => T;
