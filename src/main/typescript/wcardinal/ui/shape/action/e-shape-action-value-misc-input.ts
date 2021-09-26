/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";

export class EShapeActionValueMiscInput extends EShapeActionValueMisc {
	constructor(
		subtype:
			| typeof EShapeActionValueMiscType.INPUT_TEXT
			| typeof EShapeActionValueMiscType.INPUT_REAL
			| typeof EShapeActionValueMiscType.INPUT_INTEGER,
		when: string,
		target: string,
		onInputAction: EShapeActionValueOnInputAction
	) {
		super(subtype, when, target, onInputAction, "");
	}
}
