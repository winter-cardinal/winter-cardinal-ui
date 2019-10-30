/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScalar } from "./d-scalar";
import { DScalarFunction } from "./d-scalar-function";

/**
 * A coordinate value, a coordinate keywords, a coordinate expression,
 * a function returning a coordinate value, or an object returning a coordinate value.
 */
export type DCoordinate = number | string | DScalarFunction | DScalar;
