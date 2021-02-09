/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

export type EShapeActionExpression<T> = ( shape: EShape, time: number ) => T;

export type EShapeActionExpressionWithParameter<T, P> = ( shape: EShape, time: number, parameter: P ) => T;
