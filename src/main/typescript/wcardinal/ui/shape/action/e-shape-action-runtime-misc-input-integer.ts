/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
import { EShapeActionRuntimeMiscInputDataInteger } from "./e-shape-action-runtime-misc-input-data-integer";

export class EShapeActionRuntimeMiscInputInteger extends EShapeActionRuntimeMiscInput {
	protected static DATA?: EShapeActionRuntimeMiscInputData;

	protected getData(): EShapeActionRuntimeMiscInputData {
		if( EShapeActionRuntimeMiscInputInteger.DATA == null ) {
			EShapeActionRuntimeMiscInputInteger.DATA = new EShapeActionRuntimeMiscInputDataInteger();
		}
		return EShapeActionRuntimeMiscInputInteger.DATA;
	}

	protected fromValue( value: string ): number {
		try {
			const result = parseInt( value, 10 );
			if( result === result ) {
				return result;
			} else {
				return 0;
			}
		} catch( e ) {
			return 0;
		}
	}

	protected toValue( value: string ): string {
		return String(this.fromValue( value ));
	}
}
