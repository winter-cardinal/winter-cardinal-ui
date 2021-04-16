/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapePointsStyle } from "./e-shape-points-style";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapePointsFormatted {
	readonly length: number;
	readonly values: number[];
	readonly segments: number[];
	readonly style: EShapePointsStyle;
}

export interface EShapePointsFormatterSource {
	readonly length: number;
	readonly values: number[];
	readonly segments: number[];
	readonly style: EShapePointsStyle;
}

export interface EShapePointsFormatterResult {
	length: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;
}

export type EShapePointsFormatter = (
	source: EShapePointsFormatterSource,
	result: EShapePointsFormatterResult
) => EShapePointsFormatterResult;

export interface EShapePoints {
	readonly length: number;
	readonly id: number;
	values: number[];
	segments: number[];
	style: EShapePointsStyle;

	formatter: EShapePointsFormatter | null;
	readonly formatted: EShapePointsFormatted;

	set(values?: number[], segments?: number[], style?: EShapePointsStyle): this;
	copy(source: EShapePoints): this;
	clone(parent: EShape): EShapePoints;
	toPoints(transform: Matrix): Point[];
	serialize(manager: EShapeResourceManagerSerialization): number;
}
