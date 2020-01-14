/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLinesOfAny } from "./e-shape-lines-of-any";
import { EShapeRectangleUploaded } from "./e-shape-rectangle-uploaded";

export class EShapeLineOfRectanglesUploaded extends EShapeRectangleUploaded {
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

	protected doInitRectangle(
		clippings: Float32Array,
		indices: Uint16Array | Uint32Array,
		voffset: number,
		ioffset: number
	): void {
		super.doInitRectangle( clippings, indices, voffset, ioffset );
		EShapeLinesOfAny.copyClippingAndIndex(
			clippings, indices,
			voffset, EShapeRectangleUploaded.VERTEX_COUNT,
			ioffset, EShapeRectangleUploaded.INDEX_COUNT,
			this.pointCount
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
			this.updateLineOfRectanglesVertexAndStep( buffer, shape, points );
			this.updateLineOfRectanglesColorFill( buffer, shape, points );
			this.updateLineOfRectanglesColorStroke( buffer, shape, points );
			this.updateLineOfRectanglesUv( buffer, shape );

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

	protected updateLineOfRectanglesVertexAndStep( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
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
		const strokeSide = stroke.side;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth || this.strokeSide !== strokeSide );

		if( isPointChanged || isPointSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.pointId = pointId;
			this.pointSizeId = pointSizeId;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;

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
			const div = EShapeRectangleUploaded.VERTEX_COUNT;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			const internalTransform = shape.transform.internalTransform;
			const work = buffer.work;
			const workStep = buffer.workStep;
			if( pointSize.isStaticX() && pointSize.isStaticY() ) {
				const pointSizeX = pointSize.getX( 0 );
				const pointSizeY = pointSize.getY( 0 );

				this.doUpdateRectangleVertexAndStep(
					vertices, voffset,
					steps, antialiases,
					0, 0,
					pointSizeX, pointSizeY,
					strokeAlign, strokeWidth, strokeSide, true,
					internalTransform,
					work, workStep
				);
				EShapeLinesOfAny.copyVertexAndStep(
					vertices, steps, antialiases,
					internalTransform,
					voffset, div,
					pointCount, pointsValues
				);
			} else {
				for( let i = 0; i < pointCount; ++i ) {
					const ip = i << 1;
					const px = pointsValues[ ip     ];
					const py = pointsValues[ ip + 1 ];
					const pointSizeX = pointSize.getX( i );
					const pointSizeY = pointSize.getY( i );
					this.doUpdateRectangleVertexAndStep(
						vertices, voffset + i * div,
						steps, antialiases,
						px, py,
						pointSizeX, pointSizeY,
						strokeAlign, strokeWidth, strokeSide, true,
						internalTransform,
						work, workStep
					);
				}
			}
		}
	}

	protected updateLineOfRectanglesColorFill( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
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
				EShapeLineOfRectanglesUploaded.VERTEX_COUNT,
				pointFill,
				this.pointCount,
				buffer.colorFills,
				isFillEnabled,
				colorFill,
				alphaFill,
				this.buffer.workColor
			);
		}
	}

	protected updateLineOfRectanglesColorStroke( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
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
				EShapeLineOfRectanglesUploaded.VERTEX_COUNT,
				pointStroke,
				this.pointCount,
				buffer.colorStrokes,
				isStrokeEnabled,
				colorStroke,
				alphaStroke,
				this.buffer.workColor
			);
		}
	}

	protected updateLineOfRectanglesUv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.uvBuffer.update();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			const textureUvs = this.toTextureUvs( texture );
			this.doUpdateRectangleUv( voffset, textureUvs, uvs );
			EShapeLinesOfAny.copyUvs( voffset, EShapeRectangleUploaded.VERTEX_COUNT, this.pointCount, uvs );
		}
	}
}
