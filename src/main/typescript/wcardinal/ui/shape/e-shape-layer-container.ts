/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationTarget } from "../d-application-like";
import { EShape } from "./e-shape";
import { EShapeLayer } from "./e-shape-layer";

export interface EShapeLayerContainer extends DApplicationTarget {
	children: EShapeLayer[];
	create(name: string): EShape;
}
