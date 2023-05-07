/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapePointsFormatted } from "./e-shape-points-formatted";
import { EShapePointsFormatter } from "./e-shape-points-formatter";
import { EShapePointsMarkerContainer } from "./e-shape-points-marker-container";
import { EShapePointsStyle } from "./e-shape-points-style";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapePoints {
	readonly length: number;
	readonly id: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;
	marker: EShapePointsMarkerContainer;

	/**
	 * This method is more appropriate than the `marker` property in some situations
	 * where the EShapePointsMarkerContainer instance do not need to be created.
	 */
	getMarker(): EShapePointsMarkerContainer | undefined;

	formatter: EShapePointsFormatter | null;
	readonly formatted: Readonly<EShapePointsFormatted>;
	onSizeChange(): void;

	set(values?: number[], segments?: number[], style?: EShapePointsStyle): this;
	copy(source: EShapePoints): this;
	clone(parent: EShape): EShapePoints;
	toPoints(transform: Matrix): Point[];
	serialize(manager: EShapeResourceManagerSerialization): number;
}
