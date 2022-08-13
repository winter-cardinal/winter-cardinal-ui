/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeAcceptorType } from "./e-shape-acceptor-type";

export interface EShapeAcceptorEdgeNormal {
	x: number;
	y: number;
}

export interface EShapeAcceptorEdge {
	type: EShapeAcceptorType;
	x: number;
	y: number;
	normal: EShapeAcceptorEdgeNormal;
}

export interface EShapeAcceptor {
	get(shape: EShape, id: string): EShapeAcceptorEdge | null;
	each(shape: EShape, iteratee: (edge: EShapeAcceptorEdge, id: string) => void): this;
}
