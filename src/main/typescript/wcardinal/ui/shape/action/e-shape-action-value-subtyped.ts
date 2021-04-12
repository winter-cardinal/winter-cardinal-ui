/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueBase } from "./e-shape-action-value-base";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export abstract class EShapeActionValueSubtyped<
	SUBTYPE extends number
> extends EShapeActionValueBase {
	readonly subtype: SUBTYPE;

	constructor(type: EShapeActionValueType, condition: string, subtype: SUBTYPE) {
		super(type, condition);
		this.subtype = subtype;
	}

	isEquals(value: EShapeActionValue): boolean {
		return (
			super.isEquals(value) &&
			value instanceof EShapeActionValueSubtyped &&
			this.subtype === value.subtype
		);
	}
}
