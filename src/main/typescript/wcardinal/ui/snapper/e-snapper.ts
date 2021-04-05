/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, IPoint, Matrix, Point, Rectangle, utils } from "pixi.js";
import { DDiagramSerializedSnap } from "../d-diagram-serialized";
import { isNaN } from "../util/is-nan";
import { ESnapperGrid } from "./e-snapper-grid";
import { ESnapperResult } from "./e-snapper-result";
import { ESnapperResultScale } from "./e-snapper-result-scale";
import { ESnapperTarget } from "./e-snapper-target";

const EPSILON = 0.00001;

export interface ESnapperModifier extends DisplayObject {
	width: number;
	height: number;
}

export enum ESnapperModifierAnchor {
	NONE,
	TOP_LEFT,
	TOP_CENTER,
	TOP_RIGHT,
	MIDDLE_LEFT,
	MIDDLE_RIGHT,
	BOTTOM_LEFT,
	BOTTOM_CENTER,
	BOTTOM_RIGHT,
	ROTATION
}

export interface ESnapperParentCanvas {
	scale: {
		x: number,
		y: number
	};
	width: number;
	height: number;
}

export interface ESnapperParent {
	canvas: ESnapperParentCanvas | null;
}

export class ESnapper extends utils.EventEmitter {
	protected _points: Point[];
	protected _normals: Point[];
	protected _lengths: number[];

	protected _workScale: Point;
	protected _workScaleResult: ESnapperResultScale;

	protected _workTranslate: Point;

	protected _workSnap: Point;
	protected _workSnapRectangle: Rectangle;
	protected _workSnapResultX: ESnapperResult;
	protected _workSnapResultY: ESnapperResult;

	protected _parent: ESnapperParent;

	protected _isEnabled: boolean;

	grid: ESnapperGrid;

	target: ESnapperTarget;

	constructor( parent: ESnapperParent ) {
		super();

		this._points = [
			new Point(), // Top left
			new Point(), // Top right
			new Point(), // Bottom left
			new Point(), // Bottom right
			new Point()  // Center
		];

		this._normals = [
			new Point(),
			new Point()
		];

		this._lengths = [
			1,
			1
		];

		this._workScale = new Point();
		this._workSnapResultX = new ESnapperResult();
		this._workSnapResultY = new ESnapperResult();
		this._workScaleResult = {
			distance: 0,
			scale: new Point()
		};

		this._workTranslate = new Point();

		this._workSnapRectangle = new Rectangle();
		this._workSnap = new Point();

		// Grid
		this.grid = new ESnapperGrid();

		// Target
		this.target = new ESnapperTarget();

		//
		this._parent = parent;
		this._isEnabled = true;
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable( enable: boolean ) {
		if( this._isEnabled !== enable ) {
			this._isEnabled = enable;
			this.emit( "change", this );
		}
	}

	protected prepare( modifier: ESnapperModifier ): void {
		modifier.updateTransform();
		const localTransform = modifier.transform.localTransform;
		const sx = modifier.width;
		const sy = modifier.height;

		const points = this._points;
		points[ 0 ].set( 0, 0 );
		points[ 1 ].set( sx, 0 );
		points[ 2 ].set( sx, sy );
		points[ 3 ].set( 0, sy );
		points[ 4 ].set( sx * 0.5, sy * 0.5 );

		localTransform.apply( points[ 0 ], points[ 0 ] );
		localTransform.apply( points[ 1 ], points[ 1 ] );
		localTransform.apply( points[ 2 ], points[ 2 ] );
		localTransform.apply( points[ 3 ], points[ 3 ] );
		localTransform.apply( points[ 4 ], points[ 4 ] );
	}

	prepareForTranslate( modifier: ESnapperModifier ): void {
		if( this._isEnabled ) {
			this.prepare( modifier );
		}
	}

	protected snap( point: IPoint, result: IPoint ): IPoint {
		const px = point.x;
		const py = point.y;
		const canvas = this._parent.canvas;
		const x = this._workSnapResultX;
		const y = this._workSnapResultY;

		// Canvas
		if( canvas != null ) {
			const scale = Math.max( canvas.scale.x, canvas.scale.y );
			x.reset( px, scale );
			y.reset( py, scale );
			x.set( px, 0 );
			x.set( px, canvas.width );
			y.set( py, 0 );
			y.set( py, canvas.height );
		} else {
			x.reset( px, 1 );
			y.reset( py, 1 );
		}

		// Target
		this.target.snap( px, py, x, y );

		// Grid
		this.grid.snap( px, x );
		this.grid.snap( py, y );

		//
		result.x = ( isNaN( x.distance ) ? NaN : x.result );
		result.y = ( isNaN( y.distance ) ? NaN : y.result );
		return result;
	}

	toSnapped( point: IPoint, result: IPoint ): IPoint {
		const px = point.x;
		const py = point.y;
		if( this._isEnabled ) {
			this.snap( point, result );
			const x = result.x;
			const y = result.y;
			result.set(
				isNaN( x ) ? px : x,
				isNaN( y ) ? py : y
			);
		} else {
			result.set( px, py );
		}
		return result;
	}

	toTranslationSnapped( delta: IPoint, result: IPoint ): IPoint {
		const dx = delta.x;
		const dy = delta.y;
		let x = NaN;
		let y = NaN;
		if( this._isEnabled ) {
			const workTranslate = this._workTranslate;
			const points = this._points;
			for( let i = 0, imax = points.length; i < imax; ++i ) {
				const point = points[ i ];
				workTranslate.set( point.x + dx, point.y + dy );
				this.snap( workTranslate, workTranslate );

				// X
				if( ! isNaN( workTranslate.x ) ) {
					const newDx = workTranslate.x - point.x;
					if( isNaN( x ) || Math.abs( newDx - dx ) < Math.abs( x - dx ) ) {
						x = newDx;
					}
				}

				// Y
				if( ! isNaN( workTranslate.y ) ) {
					const newDy = workTranslate.y - point.y;
					if( isNaN( y ) || Math.abs( newDy - dy ) < Math.abs( y - dy ) ) {
						y = newDy;
					}
				}
			}
		}
		result.x = ( isNaN( x ) ? dx : x );
		result.y = ( isNaN( y ) ? dy : y );
		return result;
	}

	prepareForRotate( modifier: ESnapperModifier ): void {
		//
	}

	protected getGridSizeRotation(): number {
		return 5;
	}

	protected toRadian( value: number ): number {
		return value / 180 * Math.PI;
	}

	protected toDegree( value: number ): number {
		return value / Math.PI * 180;
	}

	toRotationSnapped( baseRotation: number, deltaRotation: number ): number {
		if( this._isEnabled ) {
			const gridSize = this.getGridSizeRotation();
			const newRotation = baseRotation + deltaRotation;
			const newRotationDegree = Math.round( this.toDegree( newRotation ) );
			const newRotationDegreeResidual = newRotationDegree % 90;
			if( Math.abs( newRotationDegreeResidual ) <= gridSize ) {
				return this.toRadian( newRotationDegree - newRotationDegreeResidual ) - baseRotation;
			} else {
				if( 90 - gridSize <= newRotationDegreeResidual ) {
					return this.toRadian( newRotationDegree + (90 - newRotationDegreeResidual) ) - baseRotation;
				} else if( newRotationDegreeResidual <= -90 + gridSize ) {
					return this.toRadian( newRotationDegree - (90 + newRotationDegreeResidual) ) - baseRotation;
				} else {
					return deltaRotation;
				}
			}
		}
		return deltaRotation;
	}

	protected calcNormalizedVector( p0: IPoint, p1: IPoint, result: Point ): number {
		const dx = p1.x - p0.x;
		const dy = p1.y - p0.y;
		const l = Math.sqrt( dx * dx + dy * dy );
		if( EPSILON < l ) {
			const d = 1 / l;
			result.x = dx * d;
			result.y = dy * d;
		} else {
			result.x = 1;
			result.y = 0;
		}
		return l;
	}

	prepareForScale( modifier: ESnapperModifier, anchor: ESnapperModifierAnchor ): void {
		if( this._isEnabled ) {
			this.prepare( modifier );

			const points = this._points;
			const normals = this._normals;
			const lengths = this._lengths;
			switch( anchor ) {
			case ESnapperModifierAnchor.TOP_LEFT:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 1 ], points[ 0 ], normals[ 0 ] );
				lengths[ 1 ] = this.calcNormalizedVector( points[ 3 ], points[ 0 ], normals[ 1 ] );
				break;
			case ESnapperModifierAnchor.TOP_CENTER:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 3 ], points[ 0 ], normals[ 0 ] );
				break;
			case ESnapperModifierAnchor.TOP_RIGHT:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 0 ], points[ 1 ], normals[ 0 ] );
				lengths[ 1 ] = this.calcNormalizedVector( points[ 2 ], points[ 1 ], normals[ 1 ] );
				break;
			case ESnapperModifierAnchor.MIDDLE_LEFT:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 1 ], points[ 0 ], normals[ 0 ] );
				break;
			case ESnapperModifierAnchor.NONE:
				break;
			case ESnapperModifierAnchor.MIDDLE_RIGHT:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 0 ], points[ 1 ], normals[ 0 ] );
				break;
			case ESnapperModifierAnchor.BOTTOM_LEFT:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 2 ], points[ 3 ], normals[ 0 ] );
				lengths[ 1 ] = this.calcNormalizedVector( points[ 0 ], points[ 3 ], normals[ 1 ] );
				break;
			case ESnapperModifierAnchor.BOTTOM_CENTER:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 0 ], points[ 3 ], normals[ 0 ] );
				break;
			case ESnapperModifierAnchor.BOTTOM_RIGHT:
				lengths[ 0 ] = this.calcNormalizedVector( points[ 3 ], points[ 2 ], normals[ 0 ] );
				lengths[ 1 ] = this.calcNormalizedVector( points[ 1 ], points[ 2 ], normals[ 1 ] );
				break;
			}
		}
	}

	protected setScaleSnappedResult(
		distance: number,
		length: number,
		move: number,
		axis: boolean, // true => x axis, false y axis
		result: ESnapperResultScale
	): void {
		if( EPSILON < length ) {
			if( isNaN( result.distance ) || distance < result.distance ) {
				result.distance = distance;
				const newScale = 1 + move / length;
				if( axis ) {
					result.scale.x = newScale;
				} else {
					result.scale.y = newScale;
				}
			}
		}
	}

	protected calcScaleSnapped1D(
		transform: Matrix,
		point: Point,
		normal: IPoint,
		length: number,
		axis: boolean,
		result: ESnapperResultScale
	): void {
		const work = this._workScale;
		transform.apply( point, work );
		const tx = work.x;
		const ty = work.y;
		this.snap( work, work );
		const x = work.x;
		const y = work.y;

		// X coordinate
		if( ! isNaN( x ) ) {
			const nx = Math.abs( normal.x );
			if( EPSILON < nx ) {
				const dx = (x - tx) / normal.x;
				const distance = Math.abs( dx );
				const mx = (x - point.x) / normal.x;
				this.setScaleSnappedResult( distance, length, mx, axis, result );
			}
		}

		// Y coordinate
		if( ! isNaN( y ) ) {
			const ny = Math.abs( normal.y );
			if( EPSILON < ny ) {
				const dy = (y - ty) / normal.y;
				const distance = Math.abs( dy );
				const my = (y - point.y) / normal.y;
				this.setScaleSnappedResult( distance, length, my, axis, result );
			}
		}
	}

	protected calcScaleSnappedX(
		transform: Matrix,
		point: Point,
		normal: IPoint,
		length: number,
		result: ESnapperResultScale
	): void {
		this.calcScaleSnapped1D( transform, point, normal, length, true, result );
	}

	protected calcScaleSnappedY(
		transform: Matrix,
		point: Point,
		normal: IPoint,
		length: number,
		result: ESnapperResultScale
	): void {
		this.calcScaleSnapped1D( transform, point, normal, length, false, result );
	}

	calcScaleSnapped2D(
		transform: Matrix, point: Point, normals: IPoint[],
		lengths: number[], result: ESnapperResultScale
	): void {
		const work = this._workScale;
		transform.apply( point, work );
		const tx = work.x;
		const ty = work.y;

		this.snap( work, work );
		let x = work.x;
		let y = work.y;
		if( isNaN( x ) ) {
			if( isNaN( y ) ) {
				return;
			} else {
				x = tx;
			}
		} else {
			if( isNaN( y ) ) {
				y = ty;
			}
		}

		// (x, y) = (tx, ty) + normalA * a + normalB * b
		// dx = x - tx
		// dy = y - ty
		// V = ( a, b )^T
		// D = ( dx, dy )^T
		// A = | normalA.x normalB.x |
		//     | normalA.y normalB.y |
		// A V = D
		// det A = normalA.x * normalB.y - normalB.x * normalA.y
		// A^-1 = |  normalB.y -normalB.x | / det A
		//        | -normalA.y  normalA.x |
		const detA = normals[ 0 ].x * normals[ 1 ].y - normals[ 1 ].x * normals[ 0 ].y;
		if( EPSILON < Math.abs( detA ) ) {
			const dx = x - tx;
			const dy = y - ty;
			const distance = Math.abs( dx * dx + dy * dy );
			if( isNaN( result.distance ) || distance < result.distance ) {
				result.distance = distance;
				const mdx = x - point.x;
				const mdy = y - point.y;
				const mx = ( +normals[ 1 ].y * mdx - normals[ 1 ].x * mdy ) / detA;
				const my = ( -normals[ 0 ].y * mdx + normals[ 0 ].x * mdy ) / detA;
				result.scale.set(
					1 + mx / lengths[ 0 ],
					1 + my / lengths[ 1 ]
				);
			}
		}
	}

	protected calcScaleSnappedXY(
		transform: Matrix,
		pointO: Point,
		pointX: Point,
		pointY: Point,
		normals: IPoint[],
		lengths: number[],
		result: ESnapperResultScale
	): void {
		this.calcScaleSnapped2D( transform, pointO, normals, lengths, result );
		this.calcScaleSnappedX( transform, pointY, normals[ 0 ], lengths[ 0 ], result );
		this.calcScaleSnappedY( transform, pointX, normals[ 1 ], lengths[ 1 ], result );
	}

	toScaleSnapped(
		transform: Matrix, anchor: ESnapperModifierAnchor, keepRatio: boolean, scale: IPoint
	): boolean {
		if( this._isEnabled ) {
			const points = this._points;
			const normals = this._normals;
			const lengths = this._lengths;
			const work = this._workScaleResult;
			work.distance = NaN;
			work.scale.set( scale.x, scale.y );

			switch( anchor ) {
			case ESnapperModifierAnchor.TOP_LEFT:
				this.calcScaleSnappedXY( transform, points[ 0 ], points[ 1 ], points[ 3 ], normals, lengths, work );
				break;
			case ESnapperModifierAnchor.TOP_CENTER:
				this.calcScaleSnappedY( transform, points[ 0 ], normals[ 0 ], lengths[ 0 ], work );
				this.calcScaleSnappedY( transform, points[ 1 ], normals[ 0 ], lengths[ 0 ], work );
				break;
			case ESnapperModifierAnchor.TOP_RIGHT:
				this.calcScaleSnappedXY( transform, points[ 1 ], points[ 0 ], points[ 2 ], normals, lengths, work );
				break;
			case ESnapperModifierAnchor.MIDDLE_LEFT:
				this.calcScaleSnappedX( transform, points[ 0 ], normals[ 0 ], lengths[ 0 ], work );
				this.calcScaleSnappedX( transform, points[ 3 ], normals[ 0 ], lengths[ 0 ], work );
				break;
			case ESnapperModifierAnchor.NONE:
				break;
			case ESnapperModifierAnchor.MIDDLE_RIGHT:
				this.calcScaleSnappedX( transform, points[ 1 ], normals[ 0 ], lengths[ 0 ], work );
				this.calcScaleSnappedX( transform, points[ 2 ], normals[ 0 ], lengths[ 0 ], work );
				break;
			case ESnapperModifierAnchor.BOTTOM_LEFT:
				this.calcScaleSnappedXY( transform, points[ 3 ], points[ 2 ], points[ 0 ], normals, lengths, work );
				break;
			case ESnapperModifierAnchor.BOTTOM_CENTER:
				this.calcScaleSnappedY( transform, points[ 2 ], normals[ 0 ], lengths[ 0 ], work );
				this.calcScaleSnappedY( transform, points[ 3 ], normals[ 0 ], lengths[ 0 ], work );
				break;
			case ESnapperModifierAnchor.BOTTOM_RIGHT:
				this.calcScaleSnappedXY( transform, points[ 2 ], points[ 3 ], points[ 1 ], normals, lengths, work );
				break;
			}

			if( ! isNaN( work.distance ) ) {
				scale.copyFrom( work.scale );
				if( keepRatio ) {
					switch( anchor ) {
					case ESnapperModifierAnchor.TOP_LEFT:
					case ESnapperModifierAnchor.TOP_RIGHT:
					case ESnapperModifierAnchor.BOTTOM_LEFT:
					case ESnapperModifierAnchor.BOTTOM_RIGHT:
						scale.x = scale.y = Math.max( scale.x, scale.y );
						break;
					case ESnapperModifierAnchor.TOP_CENTER:
					case ESnapperModifierAnchor.BOTTOM_CENTER:
						scale.x = scale.y;
						break;
					case ESnapperModifierAnchor.MIDDLE_LEFT:
					case ESnapperModifierAnchor.MIDDLE_RIGHT:
						scale.y = scale.x;
						break;
					case ESnapperModifierAnchor.NONE:
						break;
					}
				}
				return true;
			}
		}
		return false;
	}

	reset(): void {
		this.enable = true;
		this.target.reset();
		this.grid.reset();
	}

	serialize(): DDiagramSerializedSnap {
		return [
			(this._isEnabled ? 1 : 0),
			this.target.serialize(),
			this.grid.serialize()
		];
	}

	deserialize( serialized: DDiagramSerializedSnap ): void {
		this.enable = ( serialized[ 0 ] !== 0 );
		this.target.deserialize( serialized[ 1 ] );
		this.grid.deserialize( serialized[ 2 ] );
	}
}
