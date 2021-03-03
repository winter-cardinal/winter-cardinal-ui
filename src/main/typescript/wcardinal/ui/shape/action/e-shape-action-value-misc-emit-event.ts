/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";

export class EShapeActionValueMiscEmitEvent extends EShapeActionValueMisc {
	constructor( condition: string, target: string ) {
		super( EShapeActionValueMiscType.EMIT_EVENT, condition, target, EShapeActionValueOnInputAction.EMIT_EVENT, "" );
	}
}
