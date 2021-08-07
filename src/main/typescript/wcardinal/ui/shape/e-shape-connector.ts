/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnectorEdgeContainer } from "./e-shape-connector-edge-container";

export interface EShapeConnector extends EShape {
	readonly edge: EShapeConnectorEdgeContainer;
}
