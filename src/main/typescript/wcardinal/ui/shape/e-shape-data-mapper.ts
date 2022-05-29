/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataValue } from "./e-shape-data-value";

/**
 * An EShape data mapper.
 */
export interface EShapeDataMapper {
	map(target: EShapeDataValue, destination: string[] | null, initial: string): void;
}
