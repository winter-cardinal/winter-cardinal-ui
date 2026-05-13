/*
 * Copyright (C) 2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

export class EShapeActionRuntimeOpenDropped {
	shape: string;
	type: number;
	target: unknown;

	constructor(shape: EShape, type: number, target: unknown) {
		this.shape = shape.id;
		this.type = type;
		this.target = target;
	}
}
