/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeAcceptorEdge } from "./e-shape-acceptor-edge";

export interface EShapeAcceptor {
	get(shape: EShape, id: string): EShapeAcceptorEdge | null;
	each(shape: EShape, iteratee: (edge: EShapeAcceptorEdge, id: string) => void): this;
}
