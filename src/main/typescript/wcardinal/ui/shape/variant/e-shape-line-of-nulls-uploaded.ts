/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeLabelUploaded } from "./e-shape-label-uploaded";

export class EShapeLineOfNullsUploaded extends EShapeLabelUploaded {
	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			return ( points == null || points.length === 0 );
		}
		return false;
	}
}
