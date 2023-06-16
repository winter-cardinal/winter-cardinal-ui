/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptorEdgeNormal } from "./e-shape-acceptor-edge-normal";
import { EShapeAcceptorEdgeSide } from "./e-shape-acceptor-edge-side";
import { EShapeAcceptorEdgeSize } from "./e-shape-acceptor-edge-size";
import { EShapeAcceptorEdgeType } from "./e-shape-acceptor-edge-type";

export interface EShapeAcceptorEdge {
	type: EShapeAcceptorEdgeType;
	x: number;
	y: number;
	normal: EShapeAcceptorEdgeNormal;
	size: EShapeAcceptorEdgeSize;
	side: EShapeAcceptorEdgeSide;
}
