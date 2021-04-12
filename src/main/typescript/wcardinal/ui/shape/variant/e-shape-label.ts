/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";

export class EShapeLabel extends EShapePrimitive {
	constructor(type: EShapeType = EShapeType.LABEL) {
		super(type);
	}

	clone(): EShapeLabel {
		return new EShapeLabel().copy(this);
	}
}
