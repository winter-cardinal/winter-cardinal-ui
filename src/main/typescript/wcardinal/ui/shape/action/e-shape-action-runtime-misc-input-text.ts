/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
import { EShapeActionRuntimeMiscInputDataText } from "./e-shape-action-runtime-misc-input-data-text";

export class EShapeActionRuntimeMiscInputText extends EShapeActionRuntimeMiscInput {
	protected static DATA?: EShapeActionRuntimeMiscInputData;

	protected getData(): EShapeActionRuntimeMiscInputData {
		if( EShapeActionRuntimeMiscInputText.DATA == null ) {
			EShapeActionRuntimeMiscInputText.DATA = new EShapeActionRuntimeMiscInputDataText();
		}
		return EShapeActionRuntimeMiscInputText.DATA;
	}

	protected fromValue( value: string ): unknown {
		return value;
	}

	protected toValue( value: string ): string {
		return value;
	}
}
