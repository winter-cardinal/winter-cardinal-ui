/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";

export interface EShapeConnectorEdgeAcceptor {
	shape: EShape | null;
	edge: string | null;

	copy(source: EShapeConnectorEdgeAcceptor): this;
	set(shape?: EShape | null, edge?: string | null): this;
}
