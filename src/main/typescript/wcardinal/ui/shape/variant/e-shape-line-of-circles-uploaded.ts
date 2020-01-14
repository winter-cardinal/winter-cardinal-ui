/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCircleUploaded } from "./e-shape-circle-uploaded";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";

export class EShapeLineOfCirclesUploaded extends EShapeCircleUploaded {
	protected pointId: number;
	protected pointCount: number;
	protected pointSizeId: number;
	protected pointFillId: number;
	protected pointStrokeId: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number,
		pointCount: number
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointId = -1;
		this.pointCount = pointCount;
		this.pointSizeId = -1;
		this.pointFillId = -1;
		this.pointStrokeId = -1;
	}

	protected doInitCircle(
		clippings: Float32Array,
		indices: Uint16Array | Uint32Array,
		voffset: number,
		ioffset: number
	): void {
		super.doInitCircle( clippings, indices, voffset, ioffset );

		const pointCount = this.pointCount;
		const div = EShapeCircleUploaded.VERTEX_COUNT;
		const dii = EShapeCircleUploaded.INDEX_COUNT;
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

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			return this.pointCount === ( points ? points.length : 0 );
		}
		return false;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		const points = shape.points;
		if( points instanceof EShapeLineOfAnyPoints ) {
			this.updateLineOfCirclesVertexAndStep( buffer, shape, points );
			this.updateLineOfCirclesColorFill( buffer, shape, points );
			this.updateLineOfCirclesColorStroke( buffer, shape, points );
			this.updateLineOfCirclesUv( buffer, shape );

			const size = shape.size;
			const sizeX = size.x;
			const sizeY = size.y;
			const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );
			if( isSizeChanged ) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			this.updateText( buffer, shape );
		}
	}

	protected updateLineOfCirclesVertexAndStep( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
		const pointId = points.id;
		const isPointChanged = ( pointId !== this.pointId );

		const pointSize = points.size;
		const pointSizeId = pointSize.id;
		const isPointSizeChanged = ( pointSizeId !== this.pointSizeId );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );

		if( isPointChanged || isPointSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.pointId = pointId;
			this.pointSizeId = pointSizeId;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;

			if( isTransformChanged ) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Buffer
			buffer.vertexBuffer.update();
			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();
			const pointCount = this.pointCount;
			const pointsValues = points.values;
			const voffset = this.vertexOffset;
			const div = EShapeCircleUploaded.VERTEX_COUNT;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			const clippings = buffer.clippings;
			const internalTransform = shape.transform.internalTransform;
			const work = buffer.work;
			const workStep = buffer.workStep;
			if( pointSize.isStaticX() && pointSize.isStaticY() ) {
				const pointSizeX = pointSize.getX( 0 );
				const pointSizeY = pointSize.getY( 0 );

				this.doUpdateCircleVertexAndStep(
					vertices, voffset, div,
					steps, antialiases, clippings,
					0, 0,
					pointSizeX, pointSizeY,
					strokeAlign, strokeWidth, true,
					internalTransform,
					work, workStep
				);

				const a = internalTransform.a;
				const b = internalTransform.b;
				const c = internalTransform.c;
				const d = internalTransform.d;
				for( let i = pointCount - 1, iv = voffset + i * div; 0 <= i; i -= 1, iv -= div ) {
					const ip = i << 1;
					const px = pointsValues[ ip     ];
					const py = pointsValues[ ip + 1 ];
					const dx = a * px + c * py;
					const dy = b * px + d * py;
					for( let j = 0; j < div; ++j ) {
						const ivd = ( iv + j ) << 1;
						const ivs = ( voffset + j ) << 1;
						const iad = ( iv + j ) << 2;
						const ias = ( voffset + j ) << 2;
						vertices[ ivd     ] = vertices[ ivs     ] + dx;
						vertices[ ivd + 1 ] = vertices[ ivs + 1 ] + dy;
						steps[ ivd     ] = steps[ ivs     ];
						steps[ ivd + 1 ] = steps[ ivs + 1 ];
						antialiases[ iad     ] = antialiases[ ias     ];
						antialiases[ iad + 1 ] = antialiases[ ias + 1 ];
						antialiases[ iad + 2 ] = antialiases[ ias + 2 ];
						antialiases[ iad + 3 ] = antialiases[ ias + 3 ];
					}
				}
			} else {
				for( let i = 0; i < pointCount; ++i ) {
					const ip = i << 1;
					const px = pointsValues[ ip     ];
					const py = pointsValues[ ip + 1 ];
					const pointSizeX = pointSize.getX( i );
					const pointSizeY = pointSize.getY( i );
					this.doUpdateCircleVertexAndStep(
						vertices, voffset + i * div, div,
						steps, antialiases, clippings,
						px, py,
						pointSizeX, pointSizeY,
						strokeAlign, strokeWidth, true,
						internalTransform,
						work, workStep
					);
				}
			}
		}
	}

	protected updateLineOfCirclesColorFill( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
		const pointFill = points.fill;
		const pointFillId = pointFill.id;
		const isPointFillChanged = ( pointFillId !== this.pointFillId );

		const fill = shape.fill;
		const isFillEnabled = shape.visible && fill.enable;
		const colorFill = fill.color;
		const alphaFill = (isFillEnabled ? fill.alpha : 0);
		const isFillChanged = ( colorFill !== this.colorFill || alphaFill !== this.alphaFill );

		if( isPointFillChanged || isFillChanged ) {
			this.colorFill = colorFill;
			this.alphaFill = alphaFill;
			this.pointFillId = pointFillId;
			buffer.colorFillBuffer.update();
			this.doUpdateLineOfCirclesColor(
				buffer.colorFills,
				isFillEnabled,
				pointFill,
				colorFill,
				alphaFill
			);
		}
	}

	protected updateLineOfCirclesColorStroke( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
		const pointStroke = points.stroke;
		const pointStrokeId = pointStroke.id;
		const isPointStrokeChanged = ( pointStrokeId !== this.pointStrokeId );

		const stroke = shape.stroke;
		const isStrokeEnabled = shape.visible && stroke.enable;
		const colorStroke = stroke.color;
		const alphaStroke = (isStrokeEnabled ? stroke.alpha : 0);
		const isStrokeChanged = ( colorStroke !== this.colorStroke || alphaStroke !== this.alphaStroke );

		if( isPointStrokeChanged || isStrokeChanged ) {
			this.colorStroke = colorStroke;
			this.alphaStroke = alphaStroke;
			this.pointStrokeId = pointStrokeId;
			buffer.colorStrokeBuffer.update();
			this.doUpdateLineOfCirclesColor(
				buffer.colorStrokes,
				isStrokeEnabled,
				pointStroke,
				colorStroke,
				alphaStroke
			);
		}
	}

	protected doUpdateLineOfCirclesColor(
		colors: Float32Array,
		isEnabled: boolean,
		point: EShapeLineOfAnyPointsStroke | EShapeLineOfAnyPointsFill,
		colorDef: number,
		alphaDef: number
	): void {
		const pointCount = this.pointCount;
		const voffset = this.vertexOffset;
		const div = EShapeCircleUploaded.VERTEX_COUNT;
		if( isEnabled ) {
			if( point.isStaticColor() ) {
				const color = point.getColor( 0, colorDef );
				if( point.isStaticAlpha() ) {
					const alpha = point.getAlpha( 0, alphaDef );
					this.fillColor( color, alpha, voffset, div * pointCount, colors );
				} else {
					for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += div ) {
						const alpha = point.getAlpha( i, alphaDef );
						this.fillColor( color, alpha, iv, div, colors );
					}
				}
			} else {
				if( point.isStaticAlpha() ) {
					const alpha = point.getAlpha( 0, alphaDef );
					for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += div ) {
						const color = point.getColor( i, colorDef );
						this.fillColor( color, alpha, iv, div, colors );
					}
				} else {
					for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += div ) {
						const color = point.getColor( i, colorDef );
						const alpha = point.getAlpha( i, alphaDef );
						this.fillColor( color, alpha, iv, div, colors );
					}
				}
			}
		} else {
			if( point.isStaticColor() ) {
				const color = point.getColor( 0, colorDef );
				this.fillColor( color, 0, voffset, div * pointCount, colors );
			} else {
				for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += div ) {
					const color = point.getColor( i, colorDef );
					this.fillColor( color, 0, iv, div, colors );
				}
			}
		}
	}

	protected updateLineOfCirclesUv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.uvBuffer.update();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			const textureUvs = this.toTextureUvs( texture );
			this.doUpdateCircleUv( voffset, textureUvs, uvs );

			const pointCount = this.pointCount;
			const div = EShapeCircleUploaded.VERTEX_COUNT;
			for( let i = 1, iv = voffset + div; i < pointCount; i += 1, iv += div ) {
				for( let j = 0, iuvd = iv * 2, iuvs = voffset * 2; j < div; j += 1, iuvd += 2, iuvs += 2 ) {
					uvs[ iuvd + 0 ] = uvs[ iuvs + 0 ];
					uvs[ iuvd + 1 ] = uvs[ iuvs + 1 ];
				}
			}
		}
	}
}
