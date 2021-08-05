/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";

export interface EShapeUuidMapping {
	find(uuid: number): EShape | undefined;
}
