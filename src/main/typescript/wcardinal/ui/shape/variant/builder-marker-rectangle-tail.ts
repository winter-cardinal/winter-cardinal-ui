/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsMarker } from "../e-shape-points-marker";
import { EShapePointsMarkerContainer } from "../e-shape-points-marker-container";
import { BuilderMarkerRectangle } from "./builder-marker-rectangle";

export class BuilderMarkerRectangleTail extends BuilderMarkerRectangle {
	protected toMarker(container: EShapePointsMarkerContainer): EShapePointsMarker {
		return container.tail;
	}
}
