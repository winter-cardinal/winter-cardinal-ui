/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCircleUploaded } from "./e-shape-circle-uploaded";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLinesOfAny } from "./e-shape-lines-of-any";

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
		const vcountPerPoint = EShapeCircleUploaded.VERTEX_COUNT;
		const icountPerPoint = EShapeCircleUploaded.INDEX_COUNT;
		const pointCount = this.pointCount;
		EShapeLinesOfAny.copyClipping(
			clippings,
			voffset,
			vcountPerPoint,
			pointCount
		);
		EShapeLinesOfAny.copyIndex(
			indices,
			vcountPerPoint,
			ioffset,
			icountPerPoint,
			pointCount
		);
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
			this.updateText( buffer, shape );
		}
	}

	protected updateLineOfCirclesVertexAndStep( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
		const pointId = points.id;
		const isPointChanged = ( pointId !== this.pointId );

		const pointSize = points.size;
		const pointSizeId = pointSize.id;
		const isPointSizeChanged = ( pointSizeId !== this.pointSizeId );

		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );

		if( isPointChanged || isPointSizeChanged || isSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.pointId = pointId;
			this.pointSizeId = pointSizeId;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;

			if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
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
				EShapeLinesOfAny.copyVertex(
					vertices,
					internalTransform,
					voffset, div,
					pointCount, pointsValues
				);
				EShapeLinesOfAny.copyStep(
					steps, antialiases,
					voffset, div,
					pointCount
				);
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
			EShapeLinesOfAny.updateColor(
				this.vertexOffset,
				EShapeLineOfCirclesUploaded.VERTEX_COUNT,
				pointFill,
				this.pointCount,
				buffer.colorFills,
				isFillEnabled,
				colorFill,
				alphaFill,
				buffer.workColor
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
			EShapeLinesOfAny.updateColor(
				this.vertexOffset,
				EShapeLineOfCirclesUploaded.VERTEX_COUNT,
				pointStroke,
				this.pointCount,
				buffer.colorStrokes,
				isStrokeEnabled,
				colorStroke,
				alphaStroke,
				buffer.workColor
			);
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
			EShapeLinesOfAny.copyUvs(
				uvs,
				voffset,
				EShapeCircleUploaded.VERTEX_COUNT,
				this.pointCount
			);
		}
	}
}
