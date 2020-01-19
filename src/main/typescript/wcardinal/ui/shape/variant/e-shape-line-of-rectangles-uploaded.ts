/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildRectangleClipping, buildRectangleIndex, buildRectangleUv, buildRectangleVertexAndStep,
	RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT
} from "./build-rectangle";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";

export class EShapeLineOfRectanglesUploaded extends EShapeLineOfAnyUploaded {
	init( shape: EShape ): this {
		super.init( shape );

		// Clippings
		const buffer = this.buffer;
		buffer.clippingBuffer.update();
		buffer.indexBuffer.update();
		const clippings = buffer.clippings;
		const indices = buffer.indices;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCount = this.pointCount;
		buildRectangleClipping(
			clippings,
			voffset
		);
		buildRectangleIndex(
			indices,
			voffset,
			ioffset
		);
		copyClipping(
			clippings,
			voffset,
			RECTANGLE_VERTEX_COUNT,
			pointCount
		);
		copyIndex(
			indices,
			RECTANGLE_VERTEX_COUNT,
			ioffset,
			RECTANGLE_INDEX_COUNT,
			pointCount
		);

		// Text
		this.initText();

		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		const points = shape.points;
		if( points instanceof EShapeLineOfAnyPoints ) {
			this.updateVertexAndStep( buffer, shape, points );
			this.updateLineOfAnyColorFill( buffer, shape, points, RECTANGLE_VERTEX_COUNT );
			this.updateLineOfAnyColorStroke( buffer, shape, points, RECTANGLE_VERTEX_COUNT );
			this.updateUv( buffer, shape );
			this.updateText( buffer, shape );
		}
	}

	protected updateVertexAndStep( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
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
		const strokeSide = stroke.side;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth || this.strokeSide !== strokeSide );

		if( isPointChanged || isPointSizeChanged || isSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.pointId = pointId;
			this.pointSizeId = pointSizeId;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;

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
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			const internalTransform = shape.transform.internalTransform;
			const antialiasWeight = this.antialiasWeight;
			const work = buffer.work;
			const workStep = buffer.workStep;
			if( pointSize.isStaticX() && pointSize.isStaticY() ) {
				const pointSizeX = pointSize.getX( 0 );
				const pointSizeY = pointSize.getY( 0 );

				buildRectangleVertexAndStep(
					vertices, voffset,
					steps, antialiases,
					0, 0,
					pointSizeX, pointSizeY,
					strokeAlign, strokeWidth, strokeSide, true,
					internalTransform,
					antialiasWeight,
					work, workStep
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset, RECTANGLE_VERTEX_COUNT,
					pointCount, pointsValues
				);
				copyStep(
					steps, antialiases,
					voffset, RECTANGLE_VERTEX_COUNT,
					pointCount
				);
			} else {
				for( let i = 0; i < pointCount; ++i ) {
					const ip = i << 1;
					const px = pointsValues[ ip     ];
					const py = pointsValues[ ip + 1 ];
					const pointSizeX = pointSize.getX( i );
					const pointSizeY = pointSize.getY( i );
					buildRectangleVertexAndStep(
						vertices, voffset + i * RECTANGLE_VERTEX_COUNT,
						steps, antialiases,
						px, py,
						pointSizeX, pointSizeY,
						strokeAlign, strokeWidth, strokeSide, true,
						internalTransform,
						antialiasWeight,
						work, workStep
					);
				}
			}
		}
	}

	protected updateUv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.uvBuffer.update();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			const textureUvs = this.toTextureUvs( texture );
			buildRectangleUv( uvs, voffset, textureUvs );
			copyUvs( uvs, voffset, RECTANGLE_VERTEX_COUNT, this.pointCount );
		}
	}
}
