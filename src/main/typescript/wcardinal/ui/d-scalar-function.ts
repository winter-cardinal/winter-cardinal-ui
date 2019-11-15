/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A function returns a scalar value.
 *
 * @param parent a parent value
 * @param self a self value
 * @param padding a padding value
 * @param current a current value
 * @return a scalar value
 */
export type DScalarFunction = ( parent: number, self: number, padding: number, current: number ) => number;
