/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";

const NONE = 0;
const VERTEX = 1;
const STEP = 2;
const COLOR = 4;
const UV = 8;
const INDEX = 16;

const VERTEX_AND_STEP = VERTEX | STEP;
const VERTEX_STEP_AND_UV = VERTEX_AND_STEP | UV;

const ALL = VERTEX | STEP | COLOR | UV | INDEX;

export const BuilderFlag = {
	NONE,
	VERTEX,
	STEP,
	COLOR,
	UV,
	INDEX,

	VERTEX_AND_STEP,
	VERTEX_STEP_AND_UV,

	ALL
} as const;

export type BuilderFlag = number;

export interface BuilderBuffer {
	readonly vertices: Float32Array;
	readonly steps: Float32Array;
	readonly colors: Float32Array;
	readonly uvs: Float32Array;
	readonly indices: Uint16Array | Uint32Array;

	check(vindex: number, ioffset: number, vcount: number, icount: number): boolean;

	updateVertices(): void;
	updateSteps(): void;
	updateColors(): void;
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
