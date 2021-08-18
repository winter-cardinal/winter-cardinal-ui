/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";

export interface Builder {
	readonly vertexOffset: number;
	readonly indexOffset: number;
	readonly vertexCount: number;
	readonly indexCount: number;

	init(buffer: EShapeBuffer): void;
	isCompatible(shape: EShape): boolean;
	update(buffer: EShapeBuffer, shape: EShape): void;
	buildUnit(builder: EShapeBufferUnitBuilder): void;
}
