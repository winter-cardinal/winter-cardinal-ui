/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { toLineOfAnyPointCount } from "./build-line-of-any";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";

interface Initializable {
	init( shape: EShape ): this;
}

export type EShapeLineOfAnyUploadedConstructor<T extends Initializable> = new (
	buffer: EShapeBuffer,
	voffset: number, ioffset: number,
	tvcount: number, ticount: number,
	vcount: number, icount: number,
	antialiasWeight: number,
	pointCount: number
) => T;

export const createLineOfAnyUploaded = <T extends Initializable>(
	buffer: EShapeBuffer, shape: EShape,
	voffset: number,
	vcountPerPoint: number,
	ioffset: number,
	icountPerPoint: number,
	antialiasWeight: number,
	constructor: EShapeLineOfAnyUploadedConstructor<T>
): T | null => {
	const tcount = toTextBufferCount( shape );
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const points = shape.points;
	const pointCount = toLineOfAnyPointCount( points ? points.length : 0 );
	const vcount = pointCount * vcountPerPoint + tvcount;
	const icount = pointCount * icountPerPoint + ticount;
	if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
		return new constructor(
			buffer,
			voffset, ioffset,
			tvcount, ticount,
			vcount, icount,
			antialiasWeight,
			pointCount
		).init( shape );
	}
	return null;
};
