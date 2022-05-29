/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./shape/e-shape";
import { EShapeDataValue } from "./shape/e-shape-data-value";

/**
 * A data mapper.
 *
 * @param dataValue a data value
 */
export type DDiagramDataMapper = (value: EShapeDataValue, shape: EShape) => void;
