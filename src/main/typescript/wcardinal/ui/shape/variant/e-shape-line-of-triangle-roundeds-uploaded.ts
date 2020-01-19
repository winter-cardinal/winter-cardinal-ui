/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLinesOfAny } from "./e-shape-lines-of-any";
import { EShapeTriangleRoundedUploaded } from "./e-shape-triangle-rounded-uploaded";

export class EShapeLineOfTriangleRoundedsUploaded extends EShapeTriangleRoundedUploaded {
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

	protected doInitTriangleRounded(
		indices: Uint16Array | Uint32Array,
		voffset: number,
		ioffset: number
	): void {
		super.doInitTriangleRounded( indices, voffset, ioffset );
		EShapeLinesOfAny.copyIndex(
			indices,
			EShapeTriangleRoundedUploaded.VERTEX_COUNT,
			ioffset,
			EShapeTriangleRoundedUploaded.INDEX_COUNT,
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
			this.updateLineOfTriangleRoundedsVertexClippingStepAndUv( buffer, shape, points );
			this.updateLineOfTriangleRoundedsColorFill( buffer, shape, points );
			this.updateLineOfTriangleRoundedsColorStroke( buffer, shape, points );
			this.updateText( buffer, shape );
		}
	}

	protected updateLineOfTriangleRoundedsVertexClippingStepAndUv(
		buffer: EShapeBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints
	): void {
		const pointId = points.id;
		const isPointChanged = ( pointId !== this.pointId );

		const pointSize = points.size;
		const pointSizeId = pointSize.id;
		const isPointSizeChanged = ( pointSizeId !== this.pointSizeId );

		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );

		const radius = shape.radius;
		const isRadiusChanged = ( radius !== this.radius );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );

		const corner = shape.corner;
		const isCornerChanged = ( this.corner !== corner );

		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		const isTextureChanged = ( texture !== this.texture || textureTransformId !== this.textureTransformId );

		const isVertexChanged = isPointChanged || isPointSizeChanged || isSizeChanged || isRadiusChanged || isStrokeChanged;

		if( isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged ) {
			this.pointId = pointId;
			this.pointSizeId = pointSizeId;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Buffer
			buffer.vertexBuffer.update();
			if( isVertexChanged || isCornerChanged ) {
				buffer.clippingBuffer.update();
			}
			if( isVertexChanged || isTransformChanged || isCornerChanged ) {
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
			}
			if( isVertexChanged || isTextureChanged ) {
				buffer.uvBuffer.update();
			}
			const pointCount = this.pointCount;
			const pointsValues = points.values;
			const voffset = this.vertexOffset;
			const div = EShapeTriangleRoundedUploaded.VERTEX_COUNT;
			const vertices = buffer.vertices;
			const clippings = buffer.clippings;
			const steps = buffer.steps;
			const antialiases = buffer.antialiases;
			const uvs = buffer.uvs;
			const internalTransform = shape.transform.internalTransform;
			const textureUvs = this.toTextureUvs( texture );
			const work = buffer.work;
			const workStep = buffer.workStep;
			const worldSize = EShapeTriangleRoundedUploaded.WORLD_SIZE;
			if( pointSize.isStaticX() && pointSize.isStaticY() ) {
				const pointSizeX = pointSize.getX( 0 );
				const pointSizeY = pointSize.getY( 0 );

				// Vertices
				this.doUpdateTriangleRoundedVertex(
					vertices, voffset,
					0, 0,
					pointSizeX, pointSizeY,
					strokeAlign, strokeWidth, radius,
					internalTransform,
					worldSize,
					work
				);
				EShapeLinesOfAny.copyVertex(
					vertices,
					internalTransform,
					voffset, div,
					pointCount, pointsValues
				);

				// Clippings
				if( isVertexChanged || isCornerChanged ) {
					this.doUpdateTriangleRoundedClipping(
						clippings,
						voffset,
						corner,
						radius
					);
					EShapeLinesOfAny.copyClipping(
						clippings,
						voffset,
						div,
						pointCount
					);
				}

				// Steps & antialiases
				if( isVertexChanged || isTransformChanged || isCornerChanged ) {
					this.doUpdateTriangleRoundedStep(
						steps,
						antialiases,
						clippings,
						voffset,
						strokeWidth,
						radius,
						worldSize,
						workStep
					);
					EShapeLinesOfAny.copyStep(
						steps, antialiases,
						voffset, div,
						pointCount
					);
				}

				// UVs
				if( isVertexChanged || isTextureChanged ) {
					this.doUpdateTriangleRoundedUv(
						uvs,
						voffset,
						textureUvs,
						radius,
						worldSize
					);
					EShapeLinesOfAny.copyUvs(
						uvs,
						voffset,
						div,
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

					const iv = voffset + i * div;

					// Vertices
					this.doUpdateTriangleRoundedVertex(
						vertices, iv,
						px, py,
						pointSizeX, pointSizeY,
						strokeAlign, strokeWidth, radius,
						internalTransform,
						worldSize,
						work
					);

					// Clippings
					if( isVertexChanged || isCornerChanged ) {
						this.doUpdateTriangleRoundedClipping(
							clippings,
							iv,
							corner,
							radius
						);
					}

					// Steps & antialiases
					if( isVertexChanged || isTransformChanged || isCornerChanged ) {
						this.doUpdateTriangleRoundedStep(
							steps,
							antialiases,
							clippings,
							iv,
							strokeWidth,
							radius,
							worldSize,
							workStep
						);
					}

					// UVs
					if( isVertexChanged || isTextureChanged ) {
						this.doUpdateTriangleRoundedUv(
							uvs,
							iv,
							textureUvs,
							radius,
							worldSize
						);
					}
				}
			}
		}
	}

	protected updateLineOfTriangleRoundedsColorFill(
		buffer: EShapeBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints
	): void {
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
				EShapeTriangleRoundedUploaded.VERTEX_COUNT,
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

	protected updateLineOfTriangleRoundedsColorStroke(
		buffer: EShapeBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints
	): void {
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
				EShapeTriangleRoundedUploaded.VERTEX_COUNT,
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
}
