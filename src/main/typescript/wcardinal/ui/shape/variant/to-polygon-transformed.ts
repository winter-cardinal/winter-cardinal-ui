/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { PolygonDefinition, PolygonDefinitionTransformed } from "./build-polygon";

let WORK_TRANSFORMED: PolygonDefinitionTransformed | undefined;

export const toPolygonTransformed = (
	definition: PolygonDefinition,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	matrix: Matrix
): PolygonDefinitionTransformed => {
	let result = WORK_TRANSFORMED;
	if (result == null) {
		result = {
			definition,
			pointCount: 0,
			pointValues: [],
			boundary: [0, 0, 0, 0, 0, 0, 0, 0],
			center: [0, 0]
		};
		WORK_TRANSFORMED = result;
	}
	const a = matrix.a * sizeX;
	const b = matrix.b * sizeX;
	const c = matrix.c * sizeY;
	const d = matrix.d * sizeY;
	const tx = matrix.tx + originX;
	const ty = matrix.ty + originY;

	// Definition
	result.definition = definition;

	// Point count
	const pointCount = definition.pointCount;
	result.pointCount = pointCount;

	// Point values
	const pointValues = definition.pointValues;
	const transformedPointValues = result.pointValues;
	for (let i = 0; i < pointCount; ++i) {
		const index = i << 1;
		const x = pointValues[index];
		const y = pointValues[index + 1];
		transformedPointValues[index] = a * x + c * y + tx;
		transformedPointValues[index + 1] = b * x + d * y + ty;
	}

	// Center
	const center = definition.center;
	const centerx = center[0];
	const centery = center[1];
	const transformedCenter = result.center;
	transformedCenter[0] = a * centerx + c * centery + tx;
	transformedCenter[1] = b * centerx + d * centery + ty;

	// Boundary
	const boundary = definition.boundary;
	const transformedBoundary = result.boundary;
	transformedBoundary[0] = a * boundary[0] + c * boundary[1] + tx;
	transformedBoundary[1] = b * boundary[0] + d * boundary[1] + ty;
	transformedBoundary[2] = a * boundary[2] + c * boundary[3] + tx;
	transformedBoundary[3] = b * boundary[2] + d * boundary[3] + ty;
	transformedBoundary[4] = a * boundary[4] + c * boundary[5] + tx;
	transformedBoundary[5] = b * boundary[4] + d * boundary[5] + ty;
	transformedBoundary[6] = a * boundary[6] + c * boundary[7] + tx;
	transformedBoundary[7] = b * boundary[6] + d * boundary[7] + ty;
	return result;
};
