/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";
import { EShapeActionRuntimeMiscInputData } from "./e-shape-action-runtime-misc-input-data";
import { EShapeActionRuntimeMiscInputDataReal } from "./e-shape-action-runtime-misc-input-data-real";

export class EShapeActionRuntimeMiscInputReal extends EShapeActionRuntimeMiscInput {
	protected static DATA?: EShapeActionRuntimeMiscInputData;

	protected getData(): EShapeActionRuntimeMiscInputData {
		if( EShapeActionRuntimeMiscInputReal.DATA == null ) {
			EShapeActionRuntimeMiscInputReal.DATA = new EShapeActionRuntimeMiscInputDataReal();
		}
		return EShapeActionRuntimeMiscInputReal.DATA;
	}

	protected fromValue( value: string ): number {
		try {
			const result = parseFloat( value );
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
