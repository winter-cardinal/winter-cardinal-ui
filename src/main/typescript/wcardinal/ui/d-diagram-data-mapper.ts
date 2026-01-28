/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./shape/e-shape";
import { EShapeDataValue } from "./shape/e-shape-data-value";

/**
 * A data mapper.
 *
 * @param value a data value
 * @param shape a shape
 */
export type DDiagramDataMapper = (value: EShapeDataValue, shape: EShape) => void;
