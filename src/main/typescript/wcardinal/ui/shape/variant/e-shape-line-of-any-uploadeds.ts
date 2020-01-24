/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";

export interface EShapeLineOfAnyUploaded {
	init( shape: EShape ): this;
}

export type EShapeLineOfAnyUploadedConstructor<T extends EShapeLineOfAnyUploaded> = new (
	buffer: EShapeBuffer,
	voffset: number, ioffset: number,
	tvcount: number, ticount: number,
	vcount: number, icount: number,
	antialiasWeight: number,
	pointCount: number
) => T;

export class EShapeLineOfAnyUploadeds {
	static create<T extends EShapeLineOfAnyUploaded>(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number,
		vcountPerPoint: number,
		ioffset: number,
		icountPerPoint: number,
		antialiasWeight: number,
		constructor: EShapeLineOfAnyUploadedConstructor<T>
	): T | EShapeLineOfNullsUploaded | null {
		const tcount = toTextBufferCount( shape );
		const tvcount = tcount * TEXT_VERTEX_COUNT;
		const ticount = tcount * TEXT_INDEX_COUNT;
		const points = shape.points;
		const pointCount = ( points ? points.length : 0 );
		const vcount = pointCount * vcountPerPoint + tvcount;
		const icount = pointCount * icountPerPoint + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			if( 0 < pointCount ) {
				return new constructor(
					buffer,
					voffset, ioffset,
					tvcount, ticount,
					vcount, icount,
					antialiasWeight,
					pointCount
				).init( shape );
			} else {
				return new EShapeLineOfNullsUploaded(
					buffer,
					voffset, ioffset,
					tvcount, ticount,
					tvcount, ticount,
					antialiasWeight
				).init( shape );
			}
		}
		return null;
	}
}
