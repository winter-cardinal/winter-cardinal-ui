/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCircleUploaded } from "./e-shape-circle-uploaded";

export class EShapeLineOfCirclesUploaded extends EShapeCircleUploaded {
	protected pointCount: number;
	protected pointId: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number,
		pointCount: number
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointId = NaN;
		this.pointCount = pointCount;
	}

	protected onInitCircle( buffer: EShapeBuffer, shape: EShape ): void {
		super.onInitCircle( buffer, shape );

		const pointCount = this.pointCount;
		const div = EShapeCircleUploaded.VERTEX_COUNT;
		const dii = EShapeCircleUploaded.INDEX_COUNT;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const clippings = buffer.clippings;
		const indices = buffer.indices;
		for( let i = 1, iv = voffset + i * div, idiv = i * div, ii = ioffset + i * dii;
			i < pointCount; i += 1, iv += div, idiv += div, ii += dii ) {
			for( let j = 0, icd = iv * 3, ics = voffset * 3; j < div; j += 1, icd += 3, ics += 3 ) {
				clippings[ icd + 0 ] = clippings[ ics + 0 ];
				clippings[ icd + 1 ] = clippings[ ics + 1 ];
				clippings[ icd + 2 ] = clippings[ ics + 2 ];
			}

			for( let j = 0, iid = ii * 3, iis = ioffset * 3; j < dii; j += 1, iid += 3, iis += 3 ) {
				indices[ iid + 0 ] = indices[ iis + 0 ] + idiv;
				indices[ iid + 1 ] = indices[ iis + 1 ] + idiv;
				indices[ iid + 2 ] = indices[ iis + 2 ] + idiv;
			}
		}
	}

	protected onUpdateCircle( buffer: EShapeBuffer, shape: EShape ): void {
		super.onUpdateCircle( buffer, shape );

		const points = shape.points;
		if( points ) {
			const pointId = points.id;
			const isPointChanged = ( pointId !== this.pointId );
			if( isPointChanged ) {
				this.pointId = pointId;

				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;

				// Invalidate the transform ID to update the vertices
				this.transformLocalId = NaN;
			}
		}
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			return this.pointCount === ( points ? points.length : 0 );
		}
		return false;
	}

	protected onUpdateCircleVertex( buffer: EShapeBuffer, shape: EShape ): void {
		super.onUpdateCircleVertex( buffer, shape );

		const points = shape.points;
		const pointCount = this.pointCount;
		if( points ) {
			const vertices = buffer.vertices;
			const voffset = this.vertexOffset;
			const div = EShapeCircleUploaded.VERTEX_COUNT;
			const pointsValues = points.values;
			const internalTransform = shape.transform.internalTransform;
			const a = internalTransform.a;
			const b = internalTransform.b;
			const c = internalTransform.c;
			const d = internalTransform.d;
			for( let i = pointCount - 1, ip = i << 1, iv = voffset + i * div; 0 <= i; i -= 1, ip -= 2, iv -= div ) {
				const px = pointsValues[ ip + 0 ];
				const py = pointsValues[ ip + 1 ];
				const dx = a * px + c * py;
				const dy = b * px + d * py;
				for( let j = 0, ivd = iv << 1, ivs = voffset << 1; j < div; j += 1, ivd += 2, ivs += 2 ) {
					vertices[ ivd + 0 ] = vertices[ ivs + 0 ] + dx;
					vertices[ ivd + 1 ] = vertices[ ivs + 1 ] + dy;
				}
			}
		}
	}

	protected onUpdateCircleStep( buffer: EShapeBuffer, shape: EShape ): void {
		super.onUpdateCircleStep( buffer, shape );

		const pointCount = this.pointCount;
		const steps = buffer.steps;
		const antialiases = buffer.antialiases;
		const voffset = this.vertexOffset;
		const div = EShapeCircleUploaded.VERTEX_COUNT;
		for( let i = 1, iv = voffset + div; i < pointCount; i += 1, iv += div ) {
			for( let j = 0, isd = iv * 2, iss = voffset * 2, iad = iv * 4, ias = voffset * 4;
				j < div; j += 1, isd += 2, iss += 2, iad += 4, ias += 4 ) {
				steps[ isd + 0 ] = steps[ iss + 0 ];
				steps[ isd + 1 ] = steps[ iss + 1 ];
				antialiases[ iad + 0 ] = antialiases[ ias + 0 ];
				antialiases[ iad + 1 ] = antialiases[ ias + 1 ];
				antialiases[ iad + 2 ] = antialiases[ ias + 2 ];
				antialiases[ iad + 3 ] = antialiases[ ias + 3 ];
			}
		}
	}

	protected onUpdateCircleUv( buffer: EShapeBuffer, shape: EShape ): void {
		super.onUpdateCircleUv( buffer, shape );

		const pointCount = this.pointCount;
		const uvs = buffer.uvs;
		const voffset = this.vertexOffset;
		const div = EShapeCircleUploaded.VERTEX_COUNT;
		for( let i = 1, iv = voffset + div; i < pointCount; i += 1, iv += div ) {
			for( let j = 0, iuvd = iv * 2, iuvs = voffset * 2; j < div; j += 1, iuvd += 2, iuvs += 2 ) {
				uvs[ iuvd + 0 ] = uvs[ iuvs + 0 ];
				uvs[ iuvd + 1 ] = uvs[ iuvs + 1 ];
			}
		}
	}
}
