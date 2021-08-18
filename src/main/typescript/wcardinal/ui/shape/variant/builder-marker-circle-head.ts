/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsMarker } from "../e-shape-points-marker";
import { EShapePointsMarkerContainer } from "../e-shape-points-marker-container";
import { BuilderMarkerCircle } from "./builder-marker-circle";

export class BuilderMarkerCircleHead extends BuilderMarkerCircle {
	protected toMarker(container: EShapePointsMarkerContainer): EShapePointsMarker {
		return container.head;
	}
}
