/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";

export class EShapeNull extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.NULL) {
		super(type);
	}

	clone(): EShapeNull {
		return new EShapeNull().copy(this);
	}
}
