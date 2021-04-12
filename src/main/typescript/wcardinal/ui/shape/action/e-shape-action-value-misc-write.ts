/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";

export class EShapeActionValueMiscWrite extends EShapeActionValueMisc {
	constructor(
		subtype:
			| EShapeActionValueMiscType.WRITE_BOTH
			| EShapeActionValueMiscType.WRITE_LOCAL
			| EShapeActionValueMiscType.WRITE_REMOTE,
		condition: string,
		target: string,
		value: string
	) {
		super(subtype, condition, target, EShapeActionValueOnInputAction.EMIT_EVENT, value);
	}
}
