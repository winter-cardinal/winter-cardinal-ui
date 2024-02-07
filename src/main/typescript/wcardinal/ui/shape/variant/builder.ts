/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";

export const BuilderFlag = {
	NONE: 0,
	VERTEX: 1,
	CLIPPING: 2,
	STEP: 4,
	COLOR_FILL: 8,
	COLOR_STROKE: 16,
	UV: 32,
	INDEX: 64,

	VERTEX_AND_STEP: 5,
	VERTEX_STEP_AND_UV: 37,
	VERTEX_STEP_AND_COLOR_FILL: 13,
	VERTEX_CLIPPING_STEP_AND_UV: 39,

	CLIPPING_AND_INDEX: 66,

	ALL: 127
} as const;

export type BuilderFlag = number;

export interface BuilderBuffer {
	readonly vertices: Float32Array;
	readonly clippings: Float32Array;
	readonly steps: Float32Array;
	readonly colorFills: Float32Array;
	readonly colorStrokes: Float32Array;
	readonly uvs: Float32Array;
	readonly indices: Uint16Array | Uint32Array;

	check(vindex: number, ioffset: number, vcount: number, icount: number): boolean;

	updateVertices(): void;
	updateClippings(): void;
	updateSteps(): void;
	updateColorFills(): void;
	updateColorStrokes(): void;
	updateUvs(): void;
	updateIndices(): void;
}

export interface Builder {
	readonly buffer: BuilderBuffer;
	readonly vertexOffset: number;
	readonly indexOffset: number;
	readonly vertexCount: number;
	readonly indexCount: number;

	init(): void;
	reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean;
	isCompatible(shape: EShape): boolean;
	update(shape: EShape): void;
	buildUnit(builder: EShapeBufferUnitBuilder): void;
}
