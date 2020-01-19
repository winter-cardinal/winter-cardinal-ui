/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildTriangleClipping, buildTriangleIndex, buildTriangleStep, buildTriangleUv, buildTriangleVertex,
	TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT, TRIANGLE_WORLD_SIZE
} from "./build-triangle";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";

export class EShapeLineOfTrianglesUploaded extends EShapeLineOfAnyUploaded {
	init( shape: EShape ): this {
		super.init( shape );

		const buffer = this.buffer;
		buffer.clippingBuffer.update();
		buffer.indexBuffer.update();
		const clippings = buffer.clippings;
		const indices = buffer.indices;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCount = this.pointCount;
		buildTriangleClipping(
			clippings,
			voffset
		);
		buildTriangleIndex(
			indices,
			voffset,
			ioffset
		);
		copyClipping(
			clippings,
			voffset,
			TRIANGLE_VERTEX_COUNT,
			pointCount
		);
		copyIndex(
			indices,
			TRIANGLE_VERTEX_COUNT,
			ioffset,
			TRIANGLE_INDEX_COUNT,
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
			this.updateVertexStepAndUvs( buffer, shape, points );
			this.updateLineOfAnyColorFill( buffer, shape, points, TRIANGLE_VERTEX_COUNT );
			this.updateLineOfAnyColorStroke( buffer, shape, points, TRIANGLE_VERTEX_COUNT );
			this.updateText( buffer, shape );
		}
	}

	protected updateVertexStepAndUvs( buffer: EShapeBuffer, shape: EShape, points: EShapeLineOfAnyPoints ) {
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

		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		const isTextureChanged = ( texture !== this.texture || textureTransformId !== this.textureTransformId );

		const isVertexChanged = isPointChanged || isPointSizeChanged || isSizeChanged || isStrokeChanged;

		if( isVertexChanged || isTransformChanged || isTextureChanged ) {
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
			if( isVertexChanged || isTransformChanged ) {
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
			}
			if( isVertexChanged || isTextureChanged ) {
				buffer.uvBuffer.update();
			}

			const pointCount = this.pointCount;
			const pointsValues = points.values;
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			const clippings = buffer.clippings;
			const uvs = buffer.uvs;
			const textureUvs = this.toTextureUvs( texture );
			const internalTransform = shape.transform.internalTransform;
			const antialiasWeight = this.antialiasWeight;
			const work = buffer.work;
			const workStep = buffer.workStep;
			if( pointSize.isStaticX() && pointSize.isStaticY() ) {
				const pointSizeX = pointSize.getX( 0 );
				const pointSizeY = pointSize.getY( 0 );

				buildTriangleVertex(
					vertices,
					voffset,
					0, 0,
					pointSizeX, pointSizeY,
					strokeAlign,
					strokeWidth,
					internalTransform,
					TRIANGLE_WORLD_SIZE,
					work
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset, TRIANGLE_VERTEX_COUNT,
					pointCount, pointsValues
				);
				if( isVertexChanged || isTransformChanged ) {
					buildTriangleStep(
						steps,
						antialiases,
						clippings,
						voffset,
						TRIANGLE_VERTEX_COUNT,
						strokeWidth,
						antialiasWeight,
						TRIANGLE_WORLD_SIZE,
						workStep
					);
					copyStep(
						steps, antialiases,
						voffset, TRIANGLE_VERTEX_COUNT,
						pointCount
					);
				}
				if( isVertexChanged || isTextureChanged ) {
					buildTriangleUv(
						uvs,
						textureUvs,
						voffset,
						TRIANGLE_WORLD_SIZE
					);
					copyUvs(
						uvs,
						voffset,
						TRIANGLE_VERTEX_COUNT,
						pointCount
					);
				}
			} else {
				for( let i = 0; i < pointCount; ++i ) {
					const ip = i << 1;
					const px = pointsValues[ ip     ];
					const py = pointsValues[ ip + 1 ];
					const pointSizeX = pointSize.getX( i );
					const pointSizeY = pointSize.getY( i );
					const iv = voffset + i * TRIANGLE_VERTEX_COUNT;

					buildTriangleVertex(
						vertices,
						iv,
						px, py,
						pointSizeX, pointSizeY,
						strokeAlign,
						strokeWidth,
						internalTransform,
						TRIANGLE_WORLD_SIZE,
						work
					);
					if( isVertexChanged || isTransformChanged ) {
						buildTriangleStep(
							steps,
							antialiases,
							clippings,
							iv,
							TRIANGLE_VERTEX_COUNT,
							strokeWidth,
							antialiasWeight,
							TRIANGLE_WORLD_SIZE,
							workStep
						);
					}
					if( isVertexChanged || isTextureChanged ) {
						buildTriangleUv(
							uvs,
							textureUvs,
							iv,
							TRIANGLE_WORLD_SIZE
						);
					}
				}
			}
		}
	}
}
