/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionValueMisc } from "./e-shape-action-value-misc";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";

export class EShapeActionValueMiscHtmlElement extends EShapeActionValueMisc {
	constructor(
		subtype: EShapeActionValueMiscType.HTML_ELEMENT | EShapeActionValueMiscType.HTML_ELEMENT_WITHOUT_POINTER_EVENTS,
		when: string,
		initializer: string
	) {
		super( subtype, when, "", EShapeActionValueOnInputAction.EMIT_EVENT, initializer );
	}
}
